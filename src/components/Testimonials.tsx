"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "James Richardson",
    role: "Operations Director, Sterling Manufacturing",
    text: "Nexus Energy Advisors helped us reduce our energy spend by 28% in just three months. Their audit was thorough and the recommendations were practical and easy to implement.",
  },
  {
    name: "Sarah Mitchell",
    role: "CEO, BrightPath Properties",
    text: "The team at Nexus understood our sustainability goals from day one. They guided us through EPC upgrades and renewable integration seamlessly. Highly recommended.",
  },
  {
    name: "David Okonkwo",
    role: "Finance Manager, Atlas Logistics",
    text: "Professional, responsive, and genuinely invested in our success. Nexus delivered a clear energy strategy that saved us over £45,000 annually.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f7f8f9] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#0A6847]/10 px-4 py-1.5 text-sm font-semibold text-[#0A6847]">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
            What Our <span className="text-[#0A6847]">Clients Say</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Real feedback from businesses we&apos;ve helped improve through
            smarter energy planning.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-[#0A6847]/10" />

              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#F5D800] text-[#F5D800]"
                  />
                ))}
              </div>

              <p className="flex-grow text-[15px] leading-7 text-gray-600">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="mt-8 border-t border-gray-100 pt-5">
                <p className="text-base font-bold text-[#171717]">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}