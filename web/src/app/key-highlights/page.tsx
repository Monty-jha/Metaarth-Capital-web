"use client";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { useState } from "react";

const highlights = [
  {
    id: 1,
    title: "SEBI Registered AIF Cat III",
    description: "Fully compliant with SEBI regulations, ensuring investor protection and regulatory oversight.",
    icon: "🏛️",
    stats: "3+",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "20+ Years Leadership Experience",
    description: "Decades of expertise in financial markets and investment management.",
    icon: "👨‍💼",
    stats: "20+",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    title: "Robust Risk & Governance Framework",
    description: "Comprehensive risk management systems ensuring capital preservation.",
    icon: "🛡️",
    stats: "12+",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    title: "Research-Driven GARP Philosophy",
    description: "Growth At Reasonable Prices approach for sustainable returns.",
    icon: "📊",
    stats: "50+",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 5,
    title: "Disciplined Compounding Focus",
    description: "Long-term wealth creation through systematic investment strategies.",
    icon: "📈",
    stats: "15+",
    color: "from-teal-500 to-teal-600"
  },
  {
    id: 6,
    title: "Exclusive Access for UHNI & Family Offices",
    description: "Tailored solutions for sophisticated investors and family wealth management.",
    icon: "🏆",
    stats: "100+",
    color: "from-red-500 to-red-600"
  }
];

const testimonials = [
  {
    quote: "Metaarth Capital's disciplined approach and deep market insights have been instrumental in our wealth creation journey.",
    author: "Rajesh Kumar",
    position: "Family Office Director",
    company: "Kumar Holdings"
  },
  {
    quote: "The team's expertise in GARP strategy and risk management gives us confidence in our investment decisions.",
    author: "Priya Sharma",
    position: "Investment Committee Member",
    company: "Sharma Group"
  },
  {
    quote: "Professional, transparent, and results-driven. Metaarth Capital has exceeded our expectations consistently.",
    author: "Amit Patel",
    position: "Ultra-HNI Investor",
    company: "Patel Enterprises"
  }
];

export default function KeyHighlights() {
  const [activeHighlight, setActiveHighlight] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-[var(--foreground)] via-[var(--foreground)] to-[var(--foreground)]/90">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        <div className="section relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-6">
              Key Highlights
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Discover the pillars of excellence that make Metaarth Capital the trusted choice for sophisticated investors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Grid */}
      <Section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--accent)] font-serif mb-4">
            Our Competitive Advantages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built on decades of experience and regulatory excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => setActiveHighlight(index)}
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Gradient Header */}
                <div className={`h-24 bg-gradient-to-r ${highlight.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10"></div>
                  <div className="absolute top-4 right-4 text-4xl opacity-80">
                    {highlight.icon}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-3xl font-bold text-white">
                      {highlight.stats}
                    </div>
                  </div>
                  
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      background: [
                        "radial-gradient(circle at 20% 20%, white 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 80%, white 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 20%, white 0%, transparent 50%)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                {/* Hover effect line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[var(--accent)] to-transparent"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Interactive Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--accent)]/10 via-[var(--accent)]/5 to-[var(--accent)]/10">
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--accent)] font-serif mb-4">
              By The Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quantifying our impact and expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "3+", label: "SEBI Registered", color: "text-blue-600" },
              { number: "20+", label: "Years Experience", color: "text-green-600" },
              { number: "12+", label: "Risk Controls", color: "text-purple-600" },
              { number: "50+", label: "Exclusive Access", color: "text-orange-600" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <motion.div
                    className={`text-4xl md:text-5xl font-bold ${stat.color} mb-4`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </section>

      {/* Testimonials Section */}
      <Section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--accent)] font-serif mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What our clients say about our services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-4xl text-[var(--accent)] mb-4">"</div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-800">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.position}
                </div>
                <div className="text-sm text-[var(--accent)] font-medium">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--foreground)] to-[var(--foreground)]/90">
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">
              Ready to Experience Excellence?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Join the sophisticated investors who trust Metaarth Capital for their wealth management needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="btn-accent text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.a>
              <motion.a
                href="/api/brochure"
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.a>
            </div>
          </motion.div>
        </Section>
      </section>
    </div>
  );
}
