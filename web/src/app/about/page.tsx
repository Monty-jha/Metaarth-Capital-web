"use client";
import { Section } from "@/components/Section";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const heroImage = "https://i.pinimg.com/1200x/f4/4a/dc/f44adcb5747dfa936400dde8738b7d38.jpg";

export default function About() {
  const { scrollYProgress } = useScroll();
  // Map page scroll progress to a gentle 0→720° rotation, smoothed with a spring
  const rotateBase = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const rotateY = useSpring(rotateBase, { stiffness: 20, damping: 18, mass: 0.6 });
  return (
    <Section className="py-12">
      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Left: Heading and intro (justified) */}
        <div className="md:col-span-6">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#dc3545] leading-tight"> Metaarth Capital</h1>
          <h2 className="mt-3 text-xl md:text-2xl text-black font-semibold">Building Legacies, Not Just Portfolios</h2>

          <p className="muted mt-6 text-justify">
            Metaarth Capital is the first AIF company in Lucknow. Founded in 2023 and headquartered in the historic city of Lucknow, Metaarth Capital is a SEBI-registered Alternative Investment Fund (AIF) Category III manager. We are dedicated exclusively to serving the sophisticated needs of ultra-high-net-worth individuals and family offices. Our core mission is to architect sustainable wealth and deliver superior long-term capital appreciation by acting as diligent custodians of our clients' financial legacies.
          </p>

          {/* Move lower paragraphs here (replace highlights) */}
          <h3 className="mt-10 text-2xl md:text-3xl font-bold font-serif text-[#dc3545] leading-tight">Our Investment Philosophy: The GARP Advantage</h3>
          <p className="muted mt-3 text-justify">
            We achieve our mission through a disciplined and time-tested investment philosophy: Growth At
            Reasonable Prices (GARP). This strategic approach strikes a deliberate balance, allowing us to identify
            high-quality, resilient companies poised for sustained expansion, while simultaneously ensuring they
            trade at sensible valuations. This dual focus empowers us to capture significant upside potential while
            meticulously managing downside risk, aiming for consistent, risk-adjusted returns.
          </p>

          {/* Process moved to full-width below */}

          {/* Team and Core Values moved to full-width below */}
        </div>

        {/* Right: Animated image (wider) */}
        <div className="md:col-span-6">
          <div className="relative w-full" style={{ perspective: "1200px" }}>
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 1.02 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              whileHover={{ rotateY: 12, rotateX: -2 }}
              whileTap={{ rotateY: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-[440px] md:h-[560px] w-full overflow-hidden rounded-3xl border shadow-sm"
              style={{ borderColor: "color-mix(in oklab, var(--foreground) 12%, transparent)", transformStyle: "preserve-3d", rotateY }}
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fffdf5]/40 via-transparent to-transparent" />

              {/* Overlay mission card */}
              <div className="absolute bottom-6 right-6 max-w-sm rounded-2xl bg-[var(--accent)] text-[#1a1300] shadow-lg">
                <div className="p-4">
                  <div className="text-lg font-semibold">Our Mission :</div>
                  <p className="mt-2 text-sm leading-6">
                    To empower clients through innovative financial strategies and exceptional service.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full-width: Process, Team and Core Values */}
      <div className="mt-12">
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#dc3545] leading-tight">Our Process: The Power of a Dual Lens</h3>
        <p className="muted mt-3 text-justify">
          Our robust investment framework is a powerful synthesis of two complementary disciplines. We marry
          quantitative analysis with deep fundamental research. Our quantitative systems scour vast datasets to
          generate unbiased, data-driven insights. Our analysts then delve deeper, investigating qualitative factors
          such as management quality, competitive moats, and industry dynamics. This dual-lens methodology ensures
          we invest in fundamentally sound, high-conviction businesses built for the future.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#dc3545] leading-tight">Our Team: Expertise You Can Trust</h3>
        <p className="muted mt-3 text-justify">
          The cornerstone of our success is our distinguished team of investment professionals. Our team holds
          prestigious global credentials—including the CFA, CMT, and CQF designations—creating a unique confluence
          of expertise in financial analysis, market psychology, and quantitative finance. This multidisciplinary
          knowledge provides a 360-degree view of the markets, allowing us to decode complexities and identify
          non-obvious opportunities with high conviction.
        </p>

        <h3 className="mt-10 text-2xl md:text-3xl font-bold font-serif text-[#dc3545] leading-tight">Our Core Values: The Foundation of Everything We Do</h3>
        <ul className="mt-3 grid gap-2">
          <li className="muted text-justify"><span className="font-semibold text-black">Integrity:</span> We operate with complete transparency and honesty, always putting our clients' interests first.</li>
          <li className="muted text-justify"><span className="font-semibold text-black">Excellence:</span> We are relentless in our pursuit of superior outcomes through continuous learning and meticulous attention to detail.</li>
          <li className="muted text-justify"><span className="font-semibold text-black">Partnership:</span> We view ourselves as an extension of your family office, fostering deep, trusting, and long-lasting relationships.</li>
          <li className="muted text-justify"><span className="font-semibold text-black">Discipline:</span> We remain steadfastly dedicated to our process, ensuring investment decisions are based on rigorous research, not market emotion.</li>
        </ul>

        <p className="muted mt-6 text-justify">
          At Metaarth Capital, we don't just manage wealth; we build enduring partnerships focused on your enduring prosperity.
        </p>
      </div>

      {/* Our Team Section */}
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#dc3545] text-center mb-4">(Our Team)</h2>
        <p className="text-center text-lg text-gray-600 mb-12">Meet the experts behind Metaarth Capital's success</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Team Member 1 - Amrishnath Tiwari (Founder - First) */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/AT.jpeg"
                alt="Amrishnath Tiwari - Founder"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amrishnath Tiwari</h3>
              <p className="text-[#dc3545] font-semibold mb-3">Founder</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-semibold">Experience:</span> 20+ years in finance & investments</p>
                <p><span className="font-semibold">Role:</span> Visionary leader behind Metaarth Capital</p>
                <p><span className="font-semibold">Network:</span> Extensive connections with institutions & UHNIs</p>
              </div>
            </div>
          </motion.div>

          {/* Team Member 2 - Nipun Madan (Fund Manager - Second) */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/NM.jpeg"
                alt="Nipun Madan - Fund Manager"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nipun Madan</h3>
              <p className="text-[#dc3545] font-semibold mb-3">Fund Manager</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-semibold">SEBI Registered:</span> IN/AIF3/24-25/1761</p>
                <p><span className="font-semibold">Experience:</span> 15+ years in markets</p>
                <p><span className="font-semibold">Expertise:</span> Equity research & fund management</p>
              </div>
            </div>
          </motion.div>

          {/* Team Member 3 - Shivam Mani Tripathi (Wealth Manager - Third) */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/SMT.jpeg"
                alt="Shivam Mani Tripathi - Wealth Manager"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Shivam Mani Tripathi</h3>
              <p className="text-[#dc3545] font-semibold mb-3">Wealth Manager</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-semibold">Company:</span> MetaGrow</p>
                <p><span className="font-semibold">Services:</span> Expert wealth management services</p>
                <p><span className="font-semibold">Approach:</span> Personalized strategies for financial freedom</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Stats */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#ffc107] to-[#ca8a04] rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Our Collective Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Combined Years of Experience</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm opacity-90">Successful Investments</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">SEBI</div>
              <div className="text-sm opacity-90">Registered & Regulated</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

