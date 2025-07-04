"use client";

import { useState, useEffect } from "react";
import { AlignCenter, ArrowRight, X } from "lucide-react";
// import { accent, primary } from "@/constants/colors";

const navLinks = [
  { title: "Vision & Mission", link: "#vision_mission" },
  { title: "Our Services", link: "#our_services" },
  { title: "Why work with us?", link: "#why_work_with_us" },
  { title: "Client Testimonials", link: "#client_testimonials" },
];

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavContent = () => {
    // const color = mode === "transparent" ? "fff" : "#114455".split("#")[1];
    // console.log(mode, color);

    const color = "114455";
    return (
      <>
        <div className="lg:w-44 md:w-30 w-20 lg:h-44 md:h-30 h-20">
          <img src="images/logo.webp" alt="niath_logo" />
        </div>

        <div className="flex-grow hidden xl:flex justify-end items-center lg:px-10 gap-6">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`relative inline-block group font-medium lg:text-xl text-lg text-[#114455]`}
            >
              <span className="relative z-6">{item.title}</span>
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-full bg-[#114455] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}
              ></span>
            </a>
          ))}

          <a
            href="#contact_us"
            onClick={() => setDrawerOpen(false)}
            className={`relative px-10 py-4 ring-4 ring-[#114455] overflow-hidden group rounded-lg`}
          >
            <span
              className={`absolute inset-0 bg-[#114455] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0`}
            ></span>
            <span
              className={`flex justify-center items-center relative z-10 font-medium lg:text-md text-lg text-[#114455] transition-colors duration-500 group-hover:text-white`}
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight />
            </span>
          </a>
        </div>

        <div className="flex-grow flex xl:hidden justify-end items-center px-4">
          <button
            onClick={() => setDrawerOpen(true)}
            className={`w-[40px] h-[40px] rounded-md ring-1 flex justify-center items-center ring-[#${color}] focus:ring-3 focus:ring-[#587c88]`}
          >
            <span
              className={`flex justify-center items-center relative z-10 font-medium lg:text-md text-lg text-[#${color}]`}
            >
              <AlignCenter />
            </span>
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      {/* Absolute Nav (initial full-size version) */}
      <nav className="bg-transparent w-full h-[200px] absolute z-40 flex justify-between items-center transition-all duration-300">
        {renderNavContent()}
      </nav>

      {/* Sticky Nav (appears after scrolling past 200px) */}
      <nav
        className={`fixed top-0 left-0 w-full h-[150px] bg-[#ede9e2] z-50 shadow-xl flex justify-between items-center px-4 xl:px-10 transition-all duration-300 ${
          showStickyNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {renderNavContent()}
      </nav>

      {/* Drawer Backdrop */}
      {isDrawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          className="fixed inset-0 bg-black/50 z-60"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white z-65 shadow-lg transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-6 border-b">
          <img
            src="images/logo.webp"
            alt="niath_logo"
            className="w-24 h-auto"
          />
          <button
            onClick={() => setDrawerOpen(false)}
            className={`text-[${"#114455"}] hover:text-red-500`}
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 py-8">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setDrawerOpen(false)}
              className={`text-lg font-medium text-[${"#114455"}] hover:underline`}
            >
              {item.title}
            </a>
          ))}

          <a
            href="#contact_us"
            onClick={() => setDrawerOpen(false)}
            className={`mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 ring-4 ring-[${"#114455"}] rounded-lg relative group overflow-hidden`}
          >
            <span
              className={`absolute inset-0 bg-[${"#114455"}] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0`}
            ></span>
            <span
              className={`relative z-10 text-[${"#114455"}] group-hover:text-white transition-colors duration-500 flex items-center`}
            >
              Let&apos;s Talk <ArrowRight className="ml-2" />
            </span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
