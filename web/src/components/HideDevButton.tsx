"use client";
import { useEffect } from "react";

function removeFromRoot(root: Document | ShadowRoot | HTMLElement) {
  const selectors = [
    'button[aria-label*="Next.js" i]',
    '#nextjs__devtools',
    '#__nextDevtools',
    '[data-nextjs-toolbox]',
    '[data-next-devtools-root]',
    'nextjs-devtools',
    'next-devtools',
    'iframe[title*="Next" i]'
  ];
  for (const sel of selectors) {
    const nodes = (root as Document).querySelectorAll?.(sel) ?? [];
    // @ts-ignore - nodes could be any iterable
    nodes.forEach((n: Element) => {
      try { (n as HTMLElement).style.display = 'none'; n.remove(); } catch {}
    });
  }
}

export function HideDevButton() {
  useEffect(() => {
    const sweep = () => {
      removeFromRoot(document);
      // traverse shadow roots
      document.querySelectorAll<HTMLElement>('body *').forEach((el) => {
        const anyEl = el as any;
        if (anyEl.shadowRoot) {
          try { removeFromRoot(anyEl.shadowRoot as ShadowRoot); } catch {}
        }
      });

      // Remove any thin handles pinned near bottom-left (e.g., devtool docks)
      const all = Array.from(document.querySelectorAll<HTMLElement>('body *'));
      for (const el of all) {
        try {
          const cs = getComputedStyle(el);
          if (cs.position === 'fixed' || cs.position === 'absolute') {
            const rect = el.getBoundingClientRect();
            const nearLeft = rect.left < 300;
            const nearBottom = (window.innerHeight - rect.bottom) < 300;
            const thin = rect.width <= 6 && rect.height >= 10;
            const borderThin = (parseFloat(cs.borderLeftWidth || '0') >= 1 && rect.width <= 8);
            const label = (el.textContent || '').trim().toLowerCase();
            const looksIssueBadge = /issue/.test(label) || /axe|a11y|accessib/i.test(el.id + ' ' + el.className);
            const radius = Math.max(parseFloat(cs.borderRadius || '0'), parseFloat(cs.borderTopLeftRadius || '0'));
            const isPillOrCircle = (rect.height <= 80 && rect.width <= 120 && radius >= 16) || (Math.abs(rect.height - rect.width) < 6 && rect.width <= 80 && radius >= 24);
            if ((nearLeft && nearBottom) && (thin || borderThin || looksIssueBadge || isPillOrCircle)) {
              el.style.display = 'none';
              el.remove();
            }
          }
        } catch {}
      }
    };
    sweep();
    const interval = setInterval(sweep, 500);
    const mo = new MutationObserver(() => sweep());
    mo.observe(document.documentElement, { subtree: true, childList: true });
    return () => { mo.disconnect(); clearInterval(interval); };
  }, []);
  return null;
}


