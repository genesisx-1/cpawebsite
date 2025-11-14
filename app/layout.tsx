import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Varunsaran - Trusted CPA | Accounting, Tax & Advisory",
  description: "Comprehensive CPA services including accounting, tax preparation, audit & assurance, and business advisory services for your business success.",
  keywords: "CPA, accounting services, tax preparation, audit services, business advisory, financial consulting, CPA firm",
  openGraph: {
    title: "Varunsaran - Trusted CPA | Accounting, Tax & Advisory",
    description: "Varunsaran - Comprehensive CPA services including accounting, tax preparation, audit & assurance, and business advisory services for your business success.",
    type: "website",
    siteName: "Varunsaran",
    images: [
      {
        url: "https://varoon.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Varunsaran CPA Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varunsaran - Trusted CPA | Accounting, Tax & Advisory",
    description: "Varunsaran - Comprehensive CPA services including accounting, tax preparation, audit & assurance, and business advisory services for your business success.",
    images: ["https://varoon.netlify.app/og-image.jpg"],
  },
  metadataBase: new URL("https://varoon.netlify.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
