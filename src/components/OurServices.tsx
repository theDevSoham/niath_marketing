import { lexendDeca } from "@/assets/fonts";
import React from "react";

const OurServices = () => {
  return (
    <section className="w-[99vw] lg:h-[80vh] h-[70vh] relative flex flex-col justify-center items-center text-black">
      <div className="absolute w-full lg:w-full lg:h-[80vh] h-[70vh] z-1">
        <img
          src="/images/our_services.webp"
          alt="vision"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute w-full lg:w-full lg:h-[80vh] h-[70vh] bg-white/30 z-2 p-6 lg:p-16 flex flex-col gap-10 lg:gap-16">
        <h2
          className={`${lexendDeca.className} text-4xl lg:text-6xl font-medium`}
        >
          Our Services
        </h2>
        <ul
          className={`list-disc ${lexendDeca.className} text-xl lg:text-3xl font-light`}
        >
          {[
            "Corporates expanding or relocating operations",
            "Startups seeking flexible and scalable workspaces",
            "Real estate developers seeking strategic advisory",
            "Individual and institutional investors looking to diversify",
          ].map((item, index) => (
            <li key={index} className={`${lexendDeca.className} m-3 lg:m-6`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurServices;
