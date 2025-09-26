"use client";
import { Section } from "@/components/Section";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const journeySteps = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "Comprehensive discussion about your investment goals, risk tolerance, and financial objectives.",
    icon: "🤝",
    color: "from-blue-500 to-blue-600",
    details: ["Risk Assessment", "Goal Setting", "Strategy Discussion", "Timeline Planning"],
    duration: "1-2 weeks"
  },
  {
    id: 2,
    title: "Onboarding Process",
    description: "Complete KYC documentation, fund agreement execution, and account setup with regulatory compliance.",
    icon: "📋",
    color: "from-green-500 to-green-600",
    details: ["KYC Documentation", "Fund Agreement", "Account Setup", "Compliance Check"],
    duration: "2-3 weeks"
  },
  {
    id: 3,
    title: "Capital Allocation",
    description: "Strategic deployment of capital according to your investment strategy and risk parameters.",
    icon: "💰",
    color: "from-purple-500 to-purple-600",
    details: ["Strategy Implementation", "Portfolio Construction", "Risk Management", "Initial Deployment"],
    duration: "1 week"
  },
  {
    id: 4,
    title: "Active Management",
    description: "Continuous monitoring, rebalancing, and optimization of your investment portfolio.",
    icon: "📊",
    color: "from-orange-500 to-orange-600",
    details: ["Portfolio Monitoring", "Performance Tracking", "Risk Assessment", "Rebalancing"],
    duration: "Ongoing"
  },
  {
    id: 5,
    title: "Regular Reporting",
    description: "Comprehensive performance reports, risk analysis, and strategic insights delivered regularly.",
    icon: "📈",
    color: "from-teal-500 to-teal-600",
    details: ["Performance Reports", "Risk Analysis", "Market Insights", "Strategic Updates"],
    duration: "Monthly/Quarterly"
  },
  {
    id: 6,
    title: "Exit Strategy",
    description: "Structured redemption process with optimal timing and tax-efficient liquidity management.",
    icon: "🚪",
    color: "from-red-500 to-red-600",
    details: ["Redemption Planning", "Tax Optimization", "Liquidity Management", "Final Settlement"],
    duration: "2-4 weeks"
  }
];

export default function Journey() {
  const [activeStep, setActiveStep] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://i.pinimg.com/736x/96/3d/7d/963d7d27ef56c563c700e0521db4dc68.jpg')`
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />
        </div>

        {/* 3D Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-40 h-40 bg-[var(--accent)]/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              rotateY: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-[#dc3545]/20 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              rotateX: [0, 180, 360]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
              rotateZ: [0, 360]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <div className="section relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white font-serif mb-6 drop-shadow-lg"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255, 193, 7, 0.5)",
                  "0 0 40px rgba(255, 193, 7, 0.8)",
                  "0 0 20px rgba(255, 193, 7, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Your Investment Journey
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              A comprehensive, step-by-step guide to partnering with Metaarth Capital for your wealth creation journey
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[var(--accent)] to-[#dc3545] mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Journey Steps */}
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
              Your Journey with Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six comprehensive steps designed to maximize your investment success
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ 
                    y: -20, 
                    rotateY: 5,
                    scale: 1.05,
                    z: 50
                  }}
                  style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* 3D Card Content */}
                    <div className="relative z-10 p-8">
                      <motion.div
                        className="text-4xl mb-4"
                        whileHover={{ 
                          scale: 1.3, 
                          rotate: 15,
                          y: -5
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.icon}
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 font-serif">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Step Details */}
                      <div className="space-y-2 mb-4">
                        {step.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                            <span>{detail}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Duration Badge */}
                      <div className="inline-flex items-center px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-semibold">
                        {step.duration}
                      </div>
                    </div>

                    {/* 3D Hover Effect Border */}
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-3xl"
                      whileHover={{
                        borderColor: "rgba(255, 193, 7, 0.3)",
                        boxShadow: "0 20px 40px rgba(255, 193, 7, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* 3D Shadow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, transparent 50%)",
                        transform: "translateZ(-10px)"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3D Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--accent)] via-[#ffd54f] to-[#ca8a04] relative overflow-hidden">
        {/* 3D Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="w-full h-full"
            animate={{
              background: [
                "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 2px, transparent 2px)",
                "radial-gradient(circle at 75% 75%, rgba(255,255,255,0.3) 2px, transparent 2px)",
                "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 2px, transparent 2px)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              backgroundSize: '60px 60px'
            }}
          />
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
              Why Choose Our Journey?
            </h2>
            <p className="text-xl text-[#2c3e50] max-w-3xl mx-auto font-medium">
              Four key advantages that make your investment journey exceptional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Personalized Approach",
                description: "Tailored investment strategies based on your unique financial situation and goals.",
                icon: "🎯"
              },
              {
                title: "Transparent Communication",
                description: "Regular updates and clear reporting on all aspects of your investment journey.",
                icon: "💬"
              },
              {
                title: "Risk Management",
                description: "Comprehensive risk controls and monitoring to protect your capital.",
                icon: "🛡️"
              },
              {
                title: "Performance Focus",
                description: "Dedicated focus on achieving your investment objectives with disciplined execution.",
                icon: "🏆"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative h-full"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  y: -15, 
                  rotateX: 5,
                  scale: 1.05,
                  z: 30
                }}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <motion.div
                    className="text-3xl mb-4 flex-shrink-0"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      y: -5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-[#1a1a2e] mb-3 font-serif flex-shrink-0">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-[#2c3e50] leading-relaxed flex-grow font-medium">
                    {benefit.description}
                  </p>

                  {/* 3D Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                      transform: "translateZ(10px)"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D CTA Section */}
      <section className="py-20 bg-white">
        <div className="section">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-[var(--accent)] to-[#ca8a04] rounded-3xl p-12 shadow-2xl"
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                boxShadow: "0 30px 60px rgba(255, 193, 7, 0.3)"
              }}
              transition={{ duration: 0.3 }}
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6 drop-shadow-lg">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Partner with Metaarth Capital and experience institutional-grade investment management 
                tailored to your unique financial goals.
              </p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <Link 
                    href="/contact"
                    className="relative inline-flex items-center justify-center gap-4 bg-gradient-to-r from-white via-gray-50 to-white text-[#dc3545] px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer border-0 overflow-hidden group-hover:from-gray-50 group-hover:via-white group-hover:to-gray-50"
                  >
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#dc3545]/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    
                    {/* Button Content */}
                    <span className="relative z-10">Start Your Journey</span>
                    
                    {/* Animated Arrow */}
                    <motion.div
                      className="relative z-10 text-2xl"
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.div>
                    
                    {/* Hover Effect Border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-[#dc3545]/30"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                  
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#dc3545] to-[#c12f3e] blur-lg opacity-0 group-hover:opacity-20 -z-10"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/why-aif"
                    className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#dc3545] transition-all duration-300"
                  >
                    <span>Learn More</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}



