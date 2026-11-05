import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GeoImob - Agentie Imobiliara Valcea",
  description:
    "GeoImob - Agentie imobiliara din Valcea. Vindem, cumparam si inchiriem proprietati. Consultanta bancara si imobiliara profesionala.",
  keywords: "imobiliare valcea, agentie imobiliara valcea, case vanzare valcea, apartamente valcea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={inter.variable}>
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
