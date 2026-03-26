"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, TrendingDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A6847] via-[#064E33] to-[#1A1A1A]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#F5D800]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#0D8A5F]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Zap size={16} className="text-[#F5D800]" />
            Trusted UK Energy Advisory
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Smarter Energy
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D800] to-[#FFE94A]">
              Solutions
            </span>{" "}
            for Your
            <br />
            Business
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
          >
            Nexus Energy Advisors helps UK businesses reduce energy costs,
            improve efficiency, and navigate the transition to sustainable
            energy. Expert guidance tailored to your needs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#F5D800] text-[#1A1A1A] px-8 py-4 rounded-xl text-base font-bold hover:bg-[#FFE94A] transition-all duration-200 shadow-lg shadow-[#F5D800]/20 group"
            >
              Get a Free Consultation
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Our Services
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {[
              {
                icon: TrendingDown,
                stat: "30%",
                label: "Average Cost Reduction",
              },
              { icon: Shield, stat: "500+", label: "UK Businesses Served" },
              { icon: Zap, stat: "10+", label: "Years Experience" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={22} className="text-[#F5D800]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{item.stat}</p>
                  <p className="text-sm text-gray-400">{item.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}