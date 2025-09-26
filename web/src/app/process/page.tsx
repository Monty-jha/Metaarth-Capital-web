import { Section } from "@/components/Section";
import { VerticalTimeline } from "@/components/Timeline";

export default function Process() {
  return (
    <Section className="py-16">
      <h1 className="section-title font-serif">Our Process</h1>
      <div className="mt-8">
        <VerticalTimeline
          items={[
            { title: "Idea Generation", body: "Screening for quality and growth at reasonable valuations." },
            { title: "Deep Research", body: "Business, management, and industry structure due diligence." },
            { title: "Portfolio Construction", body: "Position sizing with diversification and limits." },
            { title: "Review & Risk", body: "Ongoing monitoring, stop-loss, and liquidity controls." },
          ]}
        />
      </div>
    </Section>
  );
}



