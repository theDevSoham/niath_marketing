import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import VisionMission from "@/components/VisionMission";
import OurServices from "@/components/OurServices";
import LookingToSellProperty from "@/components/LookingToSellProperty";

export const metadata: Metadata = {};

const App = () => {
  return (
    <div className="w-[100vw] relative">
      <Navbar />
      <Header />
      <VisionMission />
      <OurServices />
      <LookingToSellProperty />
    </div>
  );
};

export default App;
