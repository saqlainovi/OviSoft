import type { Metadata } from "next";
import { Outfit, Space_Grotesk, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import NoiseOverlay from "@/components/NoiseOverlay";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";
import Interactive3DBackground from "@/components/Interactive3DBackground";
import { AuthProvider } from "@/context/AuthContext";
import { LanguageProvider } from "@/context/LanguageContext";

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

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  variable: "--font-bengali",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ovisoft.tech'),
  title: {
    default: "OviSoft | Premium Digital Agency & Software Solutions",
    template: "%s | OviSoft"
  },
  description: "OviSoft is a leading Digital Agency in Dhaka specializing in High-Performance Web Development, E-Commerce, Mobile Apps, and AI Automation.",
  keywords: ["OviSoft", "Digital Agency", "Software Company", "Web Development Dhaka", "E-Commerce Website", "Proxmox Hosting", "AI Solutions"],
  authors: [{ name: "OviSoft Team" }],
  creator: "OviSoft",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "OviSoft | Premium Digital Agency",
    description: "Building the future with Web, Mobile, and AI technologies.",
    url: "https://ovisoft.tech",
    siteName: "OviSoft Digital Agency",
    images: [{ url: "/ovi.jpg", alt: "OviSoft Digital Agency" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={`${outfit.variable} ${spaceGrotesk.variable} ${hindSiliguri.variable} antialiased cursor-none font-body`}
      >
        <AuthProvider>
          <LanguageProvider>
            <Interactive3DBackground />
            <NoiseOverlay />
            <CustomCursor />
            <LenisScroll />
            <Navbar />
            <ChatWidget />
            {children}
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
