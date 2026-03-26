"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+44 (0) 123 456 7890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@nexusenergyadvisors.co.uk",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "London, United Kingdom",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri: 9:00 AM – 5:30 PM",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#0A6847]/10 px-4 py-1.5 text-sm font-semibold text-[#0A6847]">
            Contact Us
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl">
            Get in <span className="text-[#0A6847]">Touch</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Ready to reduce your energy costs? Reach out today for a free,
            no-obligation consultation.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.25fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="h-full rounded-3xl bg-gradient-to-br from-[#0A6847] to-[#064E33] p-8 text-white shadow-[0_14px_40px_rgba(10,104,71,0.2)] sm:p-10"
          >
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-gray-200">
              We&apos;re here to help with energy planning, consultations, and
              long-term savings strategies for your business.
            </p>

            <div className="mt-10 space-y-6">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">{item.label}</p>
                    <p className="mt-1 text-[15px] font-semibold leading-6 text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3">
              <div className="h-1.5 w-12 rounded-full bg-[#F5D800]" />
              <div className="h-1.5 w-7 rounded-full bg-white/30" />
              <div className="h-1.5 w-4 rounded-full bg-white/15" />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-gray-200 bg-[#f7f8f9] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition focus:border-[#0A6847] focus:ring-4 focus:ring-[#0A6847]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Smith"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition focus:border-[#0A6847] focus:ring-4 focus:ring-[#0A6847]/10"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@company.co.uk"
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition focus:border-[#0A6847] focus:ring-4 focus:ring-[#0A6847]/10"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+44 123 456 7890"
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition focus:border-[#0A6847] focus:ring-4 focus:ring-[#0A6847]/10"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell us about your energy needs..."
                className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition focus:border-[#0A6847] focus:ring-4 focus:ring-[#0A6847]/10"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0A6847] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#0A6847]/20 transition hover:bg-[#064E33]"
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}