import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import VisionMission from "@/components/VisionMission";

export const metadata: Metadata = {};

const App = () => {
  return (
    <div className="w-[100vw] relative">
      <Navbar />
      <Header />
      <VisionMission />
    </div>
  );
};

export default App;
