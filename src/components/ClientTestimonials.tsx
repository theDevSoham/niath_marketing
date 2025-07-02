import { lexendDeca } from "@/assets/fonts";
import { ITestimonial } from "@/types/TestimonialType";
import React from "react";

const ClientTestimonials = () => {
  const populateData: ITestimonial[] = [
    {
      testimony:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      author: "Larissa Charter",
    },
    {
      testimony:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable. \n\nBoost your product and service's credibility by adding testimonials from your clients.",
      author: "Franklin Reynolds",
    },
    {
      testimony:
        "Boost your product and service's credibility by adding testimonials from your clients.",
      author: "Dale and Carroll Jeffordson",
    },
  ];

  return (
    <section className="w-[99vw] h-[130vh] lg:h-[100vh] bg-[#587c88] relative">
      <div className="absolute w-full h-full z-1">
        <img
          src="images/client_testimonials.webp"
          alt="client testimonials"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full h-full z-2 bg-black/50 flex flex-col">
        <div className="flex-1 flex justify-center items-end lg:p-10 px-10 py-0">
          <h2
            className={`${lexendDeca.className} lg:text-6xl text-4xl font-semibold animate-[floatUp_2s_ease-out_forwards]`}
          >
            Client Testimonials
          </h2>
        </div>
        <div className="flex-4 flex flex-col justify-center items-start gap-10 p-10 animate-[floatUp_3s_ease-in-out_forwards]">
          {populateData.map((item, index) => (
            <article
              key={index}
              className={`max-w-3xl self-start text-left ${
                index % 2 !== 0 ? "lg:self-end lg:text-right" : ""
              }`}
            >
              <p
                className={`${lexendDeca.className} lg:text-2xl text-xl font-light`}
              >
                {item.testimony}
              </p>
              <p
                className={`${lexendDeca.className} lg:text-3xl text-2xl font-medium`}
              >
                - {item.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
