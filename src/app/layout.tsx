import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import NoiseOverlay from "@/components/NoiseOverlay";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ovisoft.tech'),
  title: {
    default: "OviSoft | Premium Digital Agency & Software Solutions",
    template: "%s | OviSoft"
  },
  description: "OviSoft is a leading Digital Agency specializing in High-Performance Web Development, Mobile Apps, and Artificial Intelligence Solutions. Transform your business with us.",
  keywords: ["OviSoft", "Digital Agency", "Software Company", "Web Development", "App Development", "AI Solutions", "OviSoft Tech", "IT Firm"],
  authors: [{ name: "OviSoft Team" }],
  creator: "OviSoft",
  openGraph: {
    title: "OviSoft | Premium Digital Agency",
    description: "Building the future with Web, Mobile, and AI technologies.",
    url: "https://ovisoft.tech",
    siteName: "OviSoft Digital Agency",
    images: [
      {
        url: "/ovi.jpg",
        alt: "OviSoft Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "nNSYbjDsHSzpULb654G3C2ZDsZjSZ1U5TEMUjKfYIuo",
  },
};

import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased cursor-none`}
      >
        <AuthProvider>
          <NoiseOverlay />
          <CustomCursor />
          <LenisScroll />
          <Navbar />
          <ChatWidget />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
