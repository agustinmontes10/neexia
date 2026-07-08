import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Neexia — IA aplicada a tu negocio",
  description:
    "Ayudamos a pymes y startups a automatizar procesos, atender mejor a sus clientes y tomar decisiones más inteligentes con soluciones de IA a medida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#111111]">
        {children}
      </body>
    </html>
  );
}
