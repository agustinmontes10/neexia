import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_NAME, SITE_URL } from "@/app/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const title = "Neexia — IA aplicada a tu negocio";
const description =
  "Ayudamos a pymes y startups a automatizar procesos, atender mejor a sus clientes y tomar decisiones más inteligentes con soluciones de IA a medida.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s — ${SITE_NAME}`,
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
        <Analytics />
      </body>
    </html>
  );
}
