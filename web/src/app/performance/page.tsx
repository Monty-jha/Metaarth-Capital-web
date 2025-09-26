"use client";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { useState } from "react";

const performanceData = {
  AIF: [
    { period: "1 Year", fund: "+18.4%", benchmark: "+15.1%", alpha: "+3.3%" },
    { period: "3 Years (CAGR)", fund: "+16.2%", benchmark: "+13.3%", alpha: "+2.9%" },
    { period: "5 Years (CAGR)", fund: "+15.8%", benchmark: "+12.7%", alpha: "+3.1%" },
    { period: "Since Inception", fund: "+14.8%", benchmark: "+12.0%", alpha: "+2.8%" },
  ],
  PMS: [
    { period: "1 Year", fund: "+21.0%", benchmark: "+15.1%", alpha: "+5.9%" },
    { period: "3 Years (CAGR)", fund: "+17.5%", benchmark: "+13.3%", alpha: "+4.2%" },
    { period: "5 Years (CAGR)", fund: "+16.8%", benchmark: "+12.7%", alpha: "+4.1%" },
    { period: "Since Inception", fund: "+16.3%", benchmark: "+12.0%", alpha: "+4.3%" },
  ]
};

const keyMetrics = [
  { title: "Sharpe Ratio", value: "1.42", benchmark: "1.18", description: "Risk-adjusted returns" },
  { title: "Maximum Drawdown", value: "-8.2%", benchmark: "-12.4%", description: "Largest peak-to-trough decline" },
  { title: "Volatility", value: "14.3%", benchmark: "16.8%", description: "Annualized standard deviation" },
  { title: "Beta", value: "0.78", benchmark: "1.00", description: "Market sensitivity" },
];

const performanceHighlights = [
  { icon: "📈", title: "Consistent Outperformance", description: "Beat benchmark in 8 out of 10 quarters" },
  { icon: "🛡️", title: "Risk Management", description: "Lower volatility than market average" },
  { icon: "🎯", title: "Alpha Generation", description: "Positive alpha across all time periods" },
  { icon: "📊", title: "Risk-Adjusted Returns", description: "Superior Sharpe ratio vs benchmark" },
];

export default function Performance() {
  const [tab, setTab] = useState<'AIF' | 'PMS'>('AIF');

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://i.pinimg.com/736x/fe/6b/60/fe6b600094ed7032b31699bd04cabec9.jpg')`
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-40 h-40 bg-[var(--accent)]/30 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-white/20 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-[var(--accent)]/25 rounded-full blur-lg"
            animate={{
              y: [-15, 15, -15],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
              Performance Track Record
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Consistent outperformance through disciplined investment approach and rigorous risk management
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[var(--accent)] to-white mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Performance Highlights */}
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
              Performance Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key metrics that demonstrate our investment excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="p-6 text-center">
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {highlight.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-2xl"
                  whileHover={{
                    borderColor: "rgba(255, 193, 7, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Table Section */}
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
              Performance Comparison
            </h2>
            <p className="text-xl text-[#2c3e50] max-w-3xl mx-auto font-medium">
              Track record across different investment strategies
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-2 border border-white/50 shadow-xl">
              {(['AIF', 'PMS'] as const).map((t) => (
                <motion.button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    tab === t 
                      ? 'bg-gradient-to-r from-[#dc3545] to-[#c12f3e] text-white shadow-lg' 
                      : 'text-[#2c3e50] hover:text-[#dc3545] hover:bg-[#dc3545]/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Performance Table */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-[#1a1a2e]">
                  <thead>
                    <tr className="border-b border-[#dc3545]/20">
                      <th className="py-4 pr-6 text-left font-bold text-[#1a1a2e]">Period</th>
                      <th className="py-4 pr-6 text-left font-bold text-[#1a1a2e]">{tab} (Net)</th>
                      <th className="py-4 pr-6 text-left font-bold text-[#1a1a2e]">Benchmark</th>
                      <th className="py-4 text-left font-bold text-[#1a1a2e]">Alpha</th>
                    </tr>
                  </thead>
                  <tbody>
                    {performanceData[tab].map((row, index) => (
                      <motion.tr
                        key={index}
                        className="border-b border-[#dc3545]/10 last:border-0"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        whileHover={{ backgroundColor: "rgba(220, 53, 69, 0.05)" }}
                      >
                        <td className="py-4 pr-6 font-semibold text-[#2c3e50]">{row.period}</td>
                        <td className="py-4 pr-6 text-[#dc3545] font-bold">{row.fund}</td>
                        <td className="py-4 pr-6 text-[#2c3e50] font-medium">{row.benchmark}</td>
                        <td className="py-4 text-[#28a745] font-bold">{row.alpha}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 bg-white">
        <div className="section">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--accent)] font-serif mb-6">
              Risk Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive risk analysis and performance metrics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{metric.title}</h3>
                  <div className="text-3xl font-bold text-[#dc3545] mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600 mb-3">vs {metric.benchmark} (Benchmark)</div>
                  <p className="text-sm text-gray-500">{metric.description}</p>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-2xl"
                  whileHover={{
                    borderColor: "rgba(220, 53, 69, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="section">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Important Disclaimer</h3>
              <p className="text-gray-600 leading-relaxed">
                Past performance is not indicative of future results. The performance data shown is for illustrative purposes only. 
                Actual results may vary. All investments carry risk, including the potential loss of principal. 
                Please consult with a qualified financial advisor before making investment decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


