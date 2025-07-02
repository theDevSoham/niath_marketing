import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import VisionMission from "@/components/VisionMission";
import OurServices from "@/components/OurServices";
import LookingToSellProperty from "@/components/LookingToSellProperty";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import ClientTestimonials from "@/components/ClientTestimonials";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { niathJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Niath Real Estate Advisory | Property Investment & Consultancy",
  description:
    "Niath Real Estate Advisory offers expert guidance in property investment, sales, leasing, and legal consulting for residential and commercial spaces.",
  keywords: [
    "Niath",
    "Real Estate",
    "Property Advisory",
    "Investment",
    "Commercial Property",
    "Residential Property",
    "India",
  ],
  authors: [{ name: "Niath Real Estate Advisory" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Niath Real Estate Advisory",
    description:
      "Expert guidance in property investment and real estate advisory.",
    url: "https://niathadvisory.com",
    siteName: "Niath Real Estate Advisory",
    images: [
      {
        url: "https://raw.githubusercontent.com/theDevSoham/niath_marketing/refs/heads/main/public/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Niath Real Estate Advisory",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niath Real Estate Advisory",
    description:
      "Your trusted partner in real estate investment and consultancy.",
    images: ["https://raw.githubusercontent.com/theDevSoham/niath_marketing/refs/heads/main/public/images/logo.webp"],
    site: "@niathrealestate",
  },
  metadataBase: new URL("https://niathadvisory.com"),
};

const App = () => {
  return (
    <>
      <main className="w-[100vw] relative">
        <Navbar />
        <Header />
        <VisionMission />
        <OurServices />
        <LookingToSellProperty />
        <WhyWorkWithUs />
        <ClientTestimonials />
        <ContactUs />
        <Footer />
      </main>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(niathJsonLd) }}
      />
    </>
  );
};

export default App;
