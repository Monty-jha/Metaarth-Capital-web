"use client";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { useRef } from "react";

const philosophyPrinciples = [
  { 
    title: "Growth at Reasonable Price (GARP)", 
    description: "We identify high-quality companies with sustainable growth potential trading at sensible valuations, ensuring we capture upside while managing downside risk.",
    icon: "📈",
    color: "from-blue-500 to-blue-600",
    image: "https://i.pinimg.com/1200x/82/3a/b4/823ab4362f47fca963d1826abe914b12.jpg",
    features: ["Quality Growth", "Reasonable Valuation", "Risk Management"]
  },
  { 
    title: "Long-term Compounding", 
    description: "We focus on businesses with durable competitive advantages and strong balance sheets that can compound wealth over extended periods.",
    icon: "🔄",
    color: "from-green-500 to-green-600",
    image: "https://i.pinimg.com/1200x/46/c7/d1/46c7d167cd061add4e7aef157e568a38.jpg",
    features: ["Durable Moats", "Strong Balance Sheets", "Sustainable Growth"]
  },
  { 
    title: "Quality First", 
    description: "We prioritize companies with exceptional management, robust governance structures, and clear competitive advantages in their respective markets.",
    icon: "🏆",
    color: "from-purple-500 to-purple-600",
    image: "https://i.pinimg.com/736x/7f/68/7f/7f687f2a2afb3bfd841af60e7ab62db7.jpg",
    features: ["Exceptional Management", "Robust Governance", "Competitive Advantages"]
  }
];

const investmentProcess = [
  { step: "01", title: "Research & Analysis", description: "Deep fundamental research combined with quantitative analysis to identify investment opportunities." },
  { step: "02", title: "Valuation Assessment", description: "Comprehensive valuation analysis using multiple methodologies to determine fair value." },
  { step: "03", title: "Risk Evaluation", description: "Thorough risk assessment including business, financial, and market risk factors." },
  { step: "04", title: "Portfolio Construction", description: "Strategic portfolio allocation based on risk-adjusted returns and correlation analysis." },
  { step: "05", title: "Monitoring & Review", description: "Continuous monitoring and regular review of portfolio positions and market conditions." }
];

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://i.pinimg.com/1200x/0a/8e/73/0a8e73aa3dbc5000da95da23433070de.jpg')`
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/70" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-40 h-40 bg-[var(--accent)]/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-[#dc3545]/20 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="section relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white font-serif mb-6 drop-shadow-lg">
              Investment Philosophy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Our disciplined approach to wealth creation through rigorous research, 
              prudent valuation, and long-term thinking
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[var(--accent)] to-[#dc3545] mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="section">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--accent)] font-serif mb-6">
              Our Core Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three fundamental pillars that guide every investment decision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {philosophyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${principle.image})` }}
                  />
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${principle.color} opacity-80`} />

                {/* Content */}
                <div className="relative z-10 p-8 text-white">
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {principle.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 font-serif">
                    {principle.title}
                  </h3>
                  
                  <p className="text-white/90 leading-relaxed mb-6">
                    {principle.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {principle.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-3xl"
                  whileHover={{
                    borderColor: "rgba(255, 255, 255, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--accent)] via-[#ffd54f] to-[#ca8a04] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="section relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] font-serif mb-6 drop-shadow-lg">
              Our Investment Process
            </h2>
            <p className="text-xl text-[#2c3e50] max-w-3xl mx-auto font-medium">
              A systematic approach to identifying and managing investment opportunities
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {investmentProcess.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-8 mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#dc3545] to-[#c12f3e] rounded-full flex items-center justify-center text-2xl font-bold text-white border-2 border-[#b02a37] shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl">
                  <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{step.title}</h3>
                  <p className="text-[#2c3e50] leading-relaxed font-medium">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < investmentProcess.length - 1 && (
                  <motion.div
                    className="absolute left-8 top-16 w-1 h-12 bg-gradient-to-b from-[#dc3545] to-[#c12f3e] rounded-full shadow-lg"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-20 bg-white">
        <div className="section">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--accent)] font-serif mb-8">
              Our Investment Philosophy
            </h2>
            <blockquote className="text-2xl md:text-3xl text-gray-700 leading-relaxed italic mb-8">
              "We believe in the power of disciplined, research-driven investing. 
              Our philosophy centers on identifying high-quality businesses with 
              sustainable competitive advantages, trading at reasonable valuations, 
              and holding them for the long term to capture the full benefit of 
              compounding returns."
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[#dc3545] mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}



