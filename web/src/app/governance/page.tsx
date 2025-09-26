import { Section } from "@/components/Section";

export default function Governance() {
  return (
    <Section className="py-16">
      <h1 className="section-title font-serif">Governance</h1>
      <p className="muted mt-4 max-w-3xl">
        Robust governance underpins our investment process. We adhere to SEBI regulations,
        employ independent oversight, and maintain transparent reporting standards.
      </p>
      <ul className="muted list-disc ml-5 mt-3 space-y-1">
        <li>Compliance framework aligned to AIF Cat III norms</li>
        <li>Risk and valuation committees</li>
        <li>Independent auditing and reporting</li>
      </ul>
    </Section>
  );
}


