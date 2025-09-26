"use client";
import { Hero } from "@/components/Hero";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Carousel } from "@/components/Carousel";
import { Testimonials } from "@/components/Testimonials";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Our Competitive Advantages Section - Right after Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="section">
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
            {[
              {
                id: 1,
                title: "SEBI Registered AIF Cat III",
                description: "Fully compliant with SEBI regulations, ensuring investor protection and regulatory oversight.",
                icon: "🏛️",
                stats: "3+",
                color: "from-blue-500 to-blue-600",
                gifUrl: "https://rvks.in/blogs/blog/wp-content/uploads/2021/09/sebi-1.jpg" // Add your GIF URL here
              },
              {
                id: 2,
                title: "20+ Years Leadership Experience",
                description: "Decades of expertise in financial markets and investment management.",
                icon: "👨‍💼",
                stats: "20+",
                color: "from-green-500 to-green-600",
                gifUrl: "https://media.licdn.com/dms/image/v2/C4E12AQF41YTNz04TgA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1579148949219?e=2147483647&v=beta&t=YOvihNBkl7wtiSJVYXCAEw9ABR_PTm6TglH_q5pj47U" // Add your GIF URL here
              },
              {
                id: 3,
                title: "Robust Risk & Governance Framework",
                description: "Comprehensive risk management systems ensuring capital preservation.",
                icon: "🛡️",
                stats: "12+",
                color: "from-purple-500 to-purple-600",
                gifUrl: "https://flexagon.com/wp-content/uploads/2025/01/Achieving-Robust-Governance-and-Compliance-in-a-Complex-Technology-Landscape-v2.png" // Add your GIF URL here
              },
              {
                id: 4,
                title: "Research-Driven GARP Philosophy",
                description: "Growth At Reasonable Prices approach for sustainable returns.",
                icon: "📊",
                stats: "50+",
                color: "from-orange-500 to-orange-600",
                gifUrl: "https://i.pinimg.com/736x/82/3a/b4/823ab4362f47fca963d1826abe914b12.jpg" // Add your GIF URL here
              },
              {
                id: 5,
                title: "Disciplined Compounding Focus",
                description: "Long-term wealth creation through systematic investment strategies.",
                icon: "📈",
                stats: "15+",
                color: "from-teal-500 to-teal-600",
                gifUrl: "https://i.pinimg.com/1200x/46/c7/d1/46c7d167cd061add4e7aef157e568a38.jpg" // Add your GIF URL here
              },
              {
                id: 6,
                title: "Exclusive Access for UHNI & Family Offices",
                description: "Tailored solutions for sophisticated investors and family wealth management.",
                icon: "🏆",
                stats: "100+",
                color: "from-red-500 to-red-600",
                gifUrl: "https://i.pinimg.com/736x/7f/68/7f/7f687f2a2afb3bfd841af60e7ab62db7.jpg" // Add your GIF URL here
              }
            ].map((highlight, index) => (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer h-full"
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                  {/* GIF Image Header */}
                  <div className={`h-48 bg-gradient-to-r ${highlight.color} relative overflow-hidden`}>
                    {highlight.gifUrl ? (
                      <motion.img
                        src={highlight.gifUrl}
                        alt={highlight.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    )}
                    
                    {/* Overlay with stats and icon */}
                    <div className="absolute inset-0 bg-black/20 flex items-end justify-between p-4">
                      <div className="text-3xl font-bold text-[var(--accent)] drop-shadow-lg">
                        {highlight.stats}
                      </div>
                      <div className="text-4xl opacity-90 drop-shadow-lg">
                        {highlight.icon}
                      </div>
                    </div>
                    
                    {/* Animated border effect */}
                    <motion.div
                      className="absolute inset-0 border-2 border-white/30 rounded-t-2xl"
                      animate={{
                        borderColor: [
                          "rgba(255, 255, 255, 0.3)",
                          "rgba(255, 255, 255, 0.6)",
                          "rgba(255, 255, 255, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
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
        </div>
      </section>
      {/* Professional Quotes Section with Beautiful Template */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-[var(--accent)]/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-[#dc3545]/10 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="section relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">
              Wisdom from the Masters
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Timeless investment principles from legendary investors who shaped the world of finance
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[#dc3545] mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Enhanced Carousel Container */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
        <Carousel
          items={[
                  { 
                    quote: "Price is what you pay. Value is what you get", 
                    author: "Warren Buffett"
                  },
                  { 
                    quote: "Rule No.1: Never lose money. Rule No.2: Never forget rule No.1", 
                    author: "Warren Buffett"
                  },
                  { 
                    quote: "Risk comes from not knowing what you're doing", 
                    author: "Warren Buffett"
                  },
                  { 
                    quote: "An investment operation should be based on the safety of principal and an adequate return", 
                    author: "Benjamin Graham"
                  },
                ]}
              />
            </div>
          </motion.div>

          {/* Bottom Decorative Elements */}
          <motion.div
            className="flex justify-center items-center mt-12 space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-[#dc3545] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </section>
      {/* Professional AIF Section with Yellow Template */}
      <section className="py-20 bg-gradient-to-br from-[var(--accent)] via-[#ffd54f] to-[#ca8a04] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-32 h-32 bg-white/15 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg"
            animate={{
              y: [-15, 15, -15],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        {/* Subtle Pattern Overlay */}
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
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 font-serif mb-6 drop-shadow-lg">
              What We Offer
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              SEBI-registered Alternative Investment Fund designed for sophisticated investors
            </p>
            <div className="w-32 h-1 bg-white/60 mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* AIF Card with Professional Animation */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              {/* Card Header with Icon */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent)] to-[#ca8a04] rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🏛️</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-serif">
                  Alternative Investment Fund
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
                  A Category III long-only open-ended AIF following a disciplined bottom-up approach. 
                  Designed exclusively for Ultra-HNIs and Family Offices seeking institutional-grade 
                  investment management with SEBI regulatory oversight.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    { icon: "📊", title: "SEBI Registered", desc: "Category III AIF" },
                    { icon: "🎯", title: "Long-Only Strategy", desc: "Disciplined approach" },
                    { icon: "🏆", title: "UHNI Focused", desc: "Exclusive access" }
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div className="text-2xl mb-2">{feature.icon}</div>
                      <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Professional CTA Button */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -3,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <Link 
                      href="/why-aif"
                      className="relative inline-flex items-center justify-center gap-4 bg-gradient-to-r from-[#dc3545] via-[#e74c3c] to-[#c12f3e] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer border-0 overflow-hidden group-hover:from-[#e74c3c] group-hover:via-[#dc3545] group-hover:to-[#b02a37]"
                    >
                      {/* Animated Background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                      
                      {/* Button Content */}
                      <span className="relative z-10">Explore AIF Details</span>
                      
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
                        className="absolute inset-0 rounded-2xl border-2 border-white/30"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                    
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#dc3545] to-[#c12f3e] blur-lg opacity-0 group-hover:opacity-30 -z-10"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Static Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-[var(--accent)]/30" />
          </div>
          </div>

        </div>
      </section>

      {/* Our History Section */}
      <section className="py-16 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-40 h-40 bg-[var(--accent)]/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              rotateY: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-[#dc3545]/10 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
              rotateX: [0, 180, 360]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="section relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6 drop-shadow-lg">
              Our History
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Founded in 2023, Metaarth Capital is a SEBI-registered AIF Category III manager. Since inception, 
              Metaarth Capital has provided superior investment services to ultra-high-net-worth individuals, 
              family offices, and institutional clients with a focus on disciplined wealth creation.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 bg-[#dc3545] hover:bg-[#c12f3e] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Read More</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Competitive Advantages Section */}
      

      {/* Professional Client Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="section">
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

          {/* Horizontal Scrolling Testimonials */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -100 * 15] // 15 cards * 100% width each
              }}
              transition={{
                duration: 60, // 60 seconds for full cycle
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ width: "calc(100% * 15)" }} // 15 cards width
            >
              {[
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
                },
                {
                  quote: "Exceptional service and consistent performance. Metaarth Capital has been our trusted partner for wealth management.",
                  author: "Dr. Vikram Singh",
                  position: "Medical Professional",
                  company: "Singh Healthcare"
                },
                {
                  quote: "Their research-driven approach and institutional-grade processes have delivered outstanding results for our family office.",
                  author: "Meera Agarwal",
                  position: "Family Office Head",
                  company: "Agarwal Group"
                },
                {
                  quote: "Metaarth Capital's team combines deep market knowledge with disciplined execution. Highly recommended for UHNIs.",
                  author: "Rohit Gupta",
                  position: "Business Owner",
                  company: "Gupta Industries"
                },
                {
                  quote: "The transparency and regular communication from Metaarth Capital gives us complete confidence in our investments.",
                  author: "Anita Desai",
                  position: "Investment Advisor",
                  company: "Desai Wealth Management"
                },
                {
                  quote: "Outstanding performance with lower volatility. Metaarth Capital's GARP approach has been a game-changer for us.",
                  author: "Suresh Reddy",
                  position: "Tech Entrepreneur",
                  company: "Reddy Technologies"
                },
                {
                  quote: "Professional, ethical, and results-oriented. Metaarth Capital has consistently delivered on their promises.",
                  author: "Kavita Joshi",
                  position: "Private Investor",
                  company: "Joshi Holdings"
                },
                {
                  quote: "Their risk management framework and disciplined approach have protected our capital while generating superior returns.",
                  author: "Arun Malhotra",
                  position: "Family Office Director",
                  company: "Malhotra Enterprises"
                },
                {
                  quote: "Metaarth Capital's team understands the unique needs of family offices. Their personalized approach is exceptional.",
                  author: "Dr. Sunita Verma",
                  position: "Healthcare Executive",
                  company: "Verma Healthcare"
                },
                {
                  quote: "Consistent outperformance with institutional-grade risk management. Metaarth Capital has exceeded all our expectations.",
                  author: "Rajesh Agarwal",
                  position: "Manufacturing Tycoon",
                  company: "Agarwal Manufacturing"
                },
                {
                  quote: "Their deep research and disciplined investment process have been instrumental in our wealth creation journey.",
                  author: "Priya Reddy",
                  position: "Real Estate Developer",
                  company: "Reddy Properties"
                },
                {
                  quote: "Metaarth Capital's transparency and regular reporting give us complete visibility into our investment performance.",
                  author: "Vikram Joshi",
                  position: "Financial Services",
                  company: "Joshi Financial"
                },
                {
                  quote: "Exceptional service with a personal touch. Metaarth Capital has become an integral part of our financial planning.",
                  author: "Anita Malhotra",
                  position: "Business Leader",
                  company: "Malhotra Group"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group flex-shrink-0 w-96"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Quote Icon */}
                  <motion.div
                    className="text-4xl text-[var(--accent)] mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    "
                  </motion.div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic text-base">
                    {testimonial.quote}
                  </p>
                  
                  {/* Separator Line */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-800 text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-[var(--accent)] font-medium mt-1">
                      {testimonial.company}
                    </div>
                  </div>

                  {/* Hover effect line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[var(--accent)] to-transparent"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-[var(--accent)] border-t-transparent rounded-full"
                />
                <span className="text-sm text-gray-600 font-medium">
                  Trusted by 100+ Ultra-HNIs
                </span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2 h-2 bg-[var(--accent)] rounded-full"
                />
                <span className="text-sm text-gray-600 font-medium">
                  SEBI Registered & Regulated
                </span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-[var(--accent)] border-t-transparent rounded-full"
                />
                <span className="text-sm text-gray-600 font-medium">
                  Family Office Approved
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
