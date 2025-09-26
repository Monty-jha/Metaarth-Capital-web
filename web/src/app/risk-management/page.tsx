import { Section } from "@/components/Section";

const items = [
  { title: "Diversification", body: "Balanced exposure across sectors and factors." },
  { title: "Position Limits", body: "Disciplined sizing to avoid concentration risk." },
  { title: "Stop-Loss", body: "Structured drawdown controls and review triggers." },
  { title: "Liquidity Buffer", body: "Adequate cash to manage volatility and flows." },
];

export default function Risk() {
  return (
    <Section className="py-16">
      <h1 className="section-title font-serif">Risk Management</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {items.map((it, i) => (
          <div key={i} className="rounded-xl p-6 border bg-white/60">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="muted mt-2">{it.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}


