"use client";

import { motion } from "framer-motion";
import {
  Zap,
  BarChart3,
  Leaf,
  FileCheck,
  Building2,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Energy Audits",
    description:
      "Comprehensive audits to identify inefficiencies and uncover savings across your energy consumption.",
  },
  {
    icon: Zap,
    title: "Cost Reduction",
    description:
      "Strategic procurement and tariff optimization to significantly lower your energy bills.",
  },
  {
    icon: Leaf,
    title: "Sustainability Consulting",
    description:
      "Transition to greener energy sources and achieve your net-zero targets with expert guidance.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description:
      "Stay ahead of UK energy regulations, ESOS, SECR reporting, and compliance requirements.",
  },
  {
    icon: Building2,
    title: "Commercial Solutions",
    description:
      "Tailored energy strategies for commercial properties, offices, and industrial facilities.",
  },
  {
    icon: Lightbulb,
    title: "Renewable Integration",
    description:
      "Solar, wind, and battery storage solutions designed and managed for maximum ROI.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#0A6847]/10 text-[#0A6847] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Zap size={14} />
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Energy Solutions That{" "}
            <span className="text-[#0A6847]">Deliver Results</span>
          </h2>
          <p className="text-gray-600 text-lg">
            From audits to renewables, we provide end-to-end energy advisory
            services for businesses across the United Kingdom.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0A6847]/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0A6847]/10 flex items-center justify-center mb-6 group-hover:bg-[#0A6847] transition-colors duration-300">
                <service.icon
                  size={26}
                  className="text-[#0A6847] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}