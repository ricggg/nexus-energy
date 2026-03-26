import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus Energy Advisors | UK Energy Consultants",
  description:
    "Expert energy advisory services across the UK. Reduce costs, improve efficiency, and transition to sustainable energy solutions with Nexus Energy Advisors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}