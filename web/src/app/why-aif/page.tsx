"use client";
import { Section } from "@/components/Section";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const items = [
  { title: "Institutional Discipline", body: "SEBI Cat III process, research depth, and risk controls." },
  { title: "GARP DNA", body: "Quality growth at sensible valuations for asymmetric outcomes." },
  { title: "Aligned Partnership", body: "UHNI and Family Office centric reporting and governance." },
  { title: "Liquidity & Access", body: "Curated access to listed opportunities with robust execution." },
];

const faqData = [
  {
    question: "What is an Alternate Investment Fund (\"AIF\")?",
    answer: "Alternative Investment Fund or AIF means any fund established or incorporated in India which is a privately pooled investment vehicle which collects funds from sophisticated investors, whether Indian or foreign, for investing it in accordance with a defined investment policy for the benefit of its investors. AIF does not include funds covered under the SEBI (Mutual Funds) Regulations, 1996, SEBI (Collective Investment Schemes) Regulations, 1999 or any other regulations of the Board to regulate fund management activities."
  },
  {
    question: "In what categories can an applicant seek registration as an AIF?",
    answer: "Applicants can seek registration as an AIF in one of the following categories: Category I AIF (Venture capital funds, SME Funds, Social Venture Funds, Infrastructure funds), Category II AIF, and Category III AIF."
  },
  {
    question: "What are Category I AIFs?",
    answer: "AIFs which invest in start-up or early stage ventures or social ventures or SMEs or infrastructure or other sectors or areas which the government or regulators consider as socially or economically desirable and shall include venture capital funds, SME Funds, social venture funds, infrastructure funds and such other Alternative Investment Funds as may be specified."
  },
  {
    question: "What are Category II AIFs?",
    answer: "AIFs which do not fall in Category I and III and which do not undertake leverage or borrowing other than to meet day-to-day operational requirements. Various types of funds such as real estate funds, private equity funds (PE funds), funds for distressed assets, etc. are registered as Category II AIFs."
  },
  {
    question: "What are Category III AIFs?",
    answer: "AIFs which employ diverse or complex trading strategies and may employ leverage including through investment in listed or unlisted derivatives. Various types of funds such as hedge funds, PIPE Funds, etc. are registered as Category III AIFs."
  },
  {
    question: "What is 'Angel Fund'?",
    answer: "Angel fund is a sub-category of Venture Capital Fund under Category I Alternative Investment Fund that raises funds from angel investors and invests in accordance with the provisions of Chapter III-A of AIF Regulations. Angel funds shall accept, up to a maximum period of 3 years, an investment of not less than ₹25 lakh from an angel investor."
  },
  {
    question: "What is 'debt fund'?",
    answer: "Debt fund is an Alternative Investment Fund (AIF) which invests primarily in debt or debt securities of listed or unlisted investee companies according to the stated objectives of the Fund. These funds are registered under Category II."
  },
  {
    question: "What is Fund of Funds?",
    answer: "Fund of Funds is an investment strategy of holding a portfolio of other investment funds rather than investing directly in stocks, bonds or other securities. In the context of AIFs, a Fund of Fund is an AIF which invest in another AIF."
  },
  {
    question: "In which legal forms can an AIF be set up?",
    answer: "An AIF under the SEBI (Alternative Investment Funds) Regulations, 2012 can be established or incorporated in the form of a trust or a company or a limited liability partnership or a body corporate. Most of the AIFs registered with SEBI are in trust form."
  }
];

export default function WhyAIF() {
  const heroImg = "https://i.pinimg.com/1200x/38/2e/f0/382ef04f4d6427a9475e52e3500d3d10.jpg";
  return (
    <div>
      {/* Hero with big image and animated text */}
      <section className="relative overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000]/10 via-[#000]/0 to-transparent" />
        </div>
        <div className="section py-28 md:py-40 max-w-none pl-4 md:pl-8">
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-white font-semibold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] whitespace-normal md:whitespace-nowrap leading-tight text-left text-[clamp(18px,2.4vw,44px)]"
          >
            "Unlocking exclusive investment opportunities for smarter wealth creation"
          </motion.h1>
        </div>
      </section>

      {/* Funds section (moved above Why AIF) */}
      <Section className="py-12">
        <h2 className="section-title font-serif text-center">Metaarth Capital AIF Overview</h2>
        <p className="muted mt-4 text-center">The Metaarth Capital AIF Fund is a Category III Alternative Investment Fund (AIF) employing a disciplined, long-only strategy. We meticulously identify companies of all sizes with robust business models and sustainable growth potential, investing at reasonable valuations to achieve superior risk-adjusted returns.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            { title: "Fund Structure", body: "Open-ended, long-only Cat III AIF focused on listed equities with institutional risk framework." },
            { title: "Investment Universe", body: "Sector and market-cap agnostic, diversified across high-quality, compounding businesses." },
            { title: "Investor", body: "Resident individuals, NRIs, and Family Offices seeking disciplined, long-term capital growth." },
            { title: "Benchmark", body: "Performance evaluated versus relevant broad market indices alongside risk metrics." },
            { title: "Minimum Investment", body: "As per regulations; detailed onboarding assistance available on request." },
            { title: "Reporting Standard", body: "Comprehensive reporting pack with portfolio analytics and risk commentary." },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="rounded-2xl border bg-white p-6 shadow-[0_4px_20px_rgba(59,130,246,0.3)] transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
            >
              <h3 className="font-semibold">{card.title}</h3>
              <p className="muted mt-2">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why AIF radial animation with mobile fallback */}
      <div className="bg-[#f5f5f5]">
        <Section className="py-16">

          {/* Mobile fallback: simple grid */}
          <div className="mt-8 grid gap-6 md:hidden">
            {items.map((it, i) => (
              <div key={i} className="rounded-2xl p-6 border bg-white/70 shadow-sm">
                <h3 className="font-semibold">{it.title}</h3>
                <p className="muted mt-2">{it.body}</p>
              </div>
            ))}
          </div>

          {/* Desktop radial */}
          <RadialWhyAIF items={items} />
        </Section>
      </div>

      {/* FAQ Section */}
      <Section className="py-16">
        <h2 className="section-title font-serif text-center text-[#dc3545]">Frequently Asked Questions</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </Section>

      {/* Let's Discuss Section */}
      <div className="bg-gray-100 py-16">
        <Section>
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-[#ca8a04] rounded-3xl p-12 text-center shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Discuss</h2>
            <p className="text-lg text-black mb-8 font-medium">
              Get in touch with us on <span className="font-semibold">metaarthfinserve@gmail.com</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              {/* Phone Contact */}
              <motion.a
                href="tel:+919839906754"
                className="flex items-center gap-3 text-black hover:text-[#dc3545] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold">+91 9839906754</span>
              </motion.a>

              {/* Brochure Download */}
              <motion.a
                href="https://drive.google.com/file/d/1byzNJQNYwoxjy8wl9sFGKBdLe5T3lDsX/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black hover:text-[#dc3545] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-[#dc3545] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold">Brochure</span>
              </motion.a>
            </div>
            </motion.div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
        >
          <span className="text-[#dc3545] text-xl font-bold">+</span>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">
              <p className="text-gray-700 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function RadialWhyAIF({ items }: { items: { title: string; body: string }[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 15%"] });
  const t = useSpring(scrollYProgress, { stiffness: 90, damping: 18, mass: 0.6 });
  const [radiusX, setRadiusX] = useState(600);
  const [radiusY, setRadiusY] = useState(450);

  useEffect(() => {
    const compute = () => {
      const width = ref.current?.clientWidth || window.innerWidth;
      const newRX = Math.min(Math.max(width * 0.42, 400), 600);
      const newRY = Math.min(Math.max(width * 0.32, 300), 450);
      setRadiusX(Math.round(newRX));
      setRadiusY(Math.round(newRY));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return (
    <div ref={ref} className="relative hidden md:block mt-10 h-[640px] rounded-3xl overflow-hidden">
      {/* center circle (always visible) */}
        <div className="absolute z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[var(--accent)] text-[#dc3545] shadow-[0_8px_32px_rgba(107,114,128,0.4)] flex items-center justify-center text-2xl font-bold border-4 border-white">
          Why AIF?
        </div>

      {items.map((it, i) => {
        const total = items.length;
        const angle = (i * (2 * Math.PI)) / total;
        const xTarget = Math.cos(angle) * radiusX;
        const yTarget = Math.sin(angle) * radiusY;
        const x = useTransform(t, [0, 1], [0, xTarget]);
        const y = useTransform(t, [0, 1], [0, yTarget]);
        const opacity = useTransform(t, [0, 0.2, 1], [0, 0.5, 1]);

        return (
          <motion.div
            key={it.title}
            className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 max-w-[20rem] rounded-2xl border bg-white/95 p-5 shadow-[0_4px_20px_rgba(59,130,246,0.3)] transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)]"
            style={{ x, y, opacity }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="font-semibold">{it.title}</h3>
            <p className="muted mt-2">{it.body}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
