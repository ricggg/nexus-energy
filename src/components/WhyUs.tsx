"use client";

import { motion } from "framer-motion";
import { Award, Clock, Users, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Certified Experts",
    description:
      "Our team holds industry-recognized certifications and stays current with UK energy policy.",
  },
  {
    icon: Clock,
    title: "Fast Results",
    description:
      "We deliver actionable insights and savings within weeks, not months.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Every strategy is built around your specific business needs and goals.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "We don't disappear after delivery. Continuous monitoring and advisory support included.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#F5D800]/10 text-[#F5D800] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Businesses{" "}
            <span className="text-[#F5D800]">Trust Nexus</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We&apos;re not just consultants — we&apos;re your long-term energy
            partners.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#2A2A2A] rounded-2xl p-8 border border-gray-800 hover:border-[#F5D800]/30 transition-all duration-300 text-center group flex flex-col items-center h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F5D800]/10 flex items-center justify-center mb-6 group-hover:bg-[#F5D800]/20 transition-colors duration-300">
                <reason.icon size={28} className="text-[#F5D800]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}