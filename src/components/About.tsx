"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Certified UK energy professionals",
  "Tailored strategies for every business size",
  "Transparent pricing — no hidden fees",
  "Ongoing support and energy monitoring",
  "Proven track record of measurable savings",
  "Committed to sustainability and net-zero",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative bg-gradient-to-br from-[#0A6847] to-[#064E33] rounded-3xl p-10 lg:p-14 overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F5D800]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 text-white space-y-10">
                <div>
                  <p className="text-5xl lg:text-6xl font-bold text-[#F5D800]">
                    10+
                  </p>
                  <p className="text-base text-gray-300 mt-1">
                    Years of Experience
                  </p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div>
                  <p className="text-5xl lg:text-6xl font-bold text-[#F5D800]">
                    500+
                  </p>
                  <p className="text-base text-gray-300 mt-1">
                    Businesses Served
                  </p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div>
                  <p className="text-5xl lg:text-6xl font-bold text-[#F5D800]">
                    £2M+
                  </p>
                  <p className="text-base text-gray-300 mt-1">
                    Saved for Clients
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 bg-[#0A6847]/10 text-[#0A6847] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              About Nexus
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-6">
              Your Trusted Partner in{" "}
              <span className="text-[#0A6847]">UK Energy</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Nexus Energy Advisors was founded with a clear mission — to help
              UK businesses take control of their energy costs and
              sustainability goals. We combine deep industry expertise with a
              client-first approach to deliver strategies that create real,
              lasting impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#0A6847] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-700 text-sm font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}