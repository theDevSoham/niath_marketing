import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import VisionMission from "@/components/VisionMission";
import OurServices from "@/components/OurServices";
import LookingToSellProperty from "@/components/LookingToSellProperty";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import ClientTestimonials from "@/components/ClientTestimonials";

export const metadata: Metadata = {};

const App = () => {
  return (
    <div className="w-[100vw] relative">
      <Navbar />
      <Header />
      <VisionMission />
      <OurServices />
      <LookingToSellProperty />
      <WhyWorkWithUs />
      <ClientTestimonials />
    </div>
  );
};

export default App;
