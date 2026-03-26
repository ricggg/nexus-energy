import { Zap } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Energy Audits",
  "Cost Reduction",
  "Sustainability",
  "Compliance",
  "Renewables",
];

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A6847] shadow-md shadow-[#0A6847]/20">
                <Zap size={22} className="text-[#F5D800]" />
              </div>
              <div className="leading-none">
                <p className="text-2xl font-extrabold tracking-tight text-white">
                  Nexus
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
                  Energy Advisors
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
              Expert energy advisory services for UK businesses. Reduce costs,
              improve efficiency, and build a sustainable future with Nexus
              Energy Advisors.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#F5D800]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 transition-colors hover:text-[#F5D800]"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © 2026 Nexus Energy Advisors. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Zap size={14} className="text-[#F5D800]" />
            <span>Powering smarter energy decisions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}