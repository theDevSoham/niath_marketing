import { lexendDeca } from "@/assets/fonts";
import { accent, primary } from "@/constants/colors";

const LookingToSellProperty = () => {
  return (
    <section
      className={`w-[99vw] h-[70vh] lg:h-[80vh] flex flex-col lg:flex-row justify-center items-center p-6 lg:p-0 gap-6 bg-[${primary}]`}
    >
      <div className="flex-1 lg:flex-3 h-[70vh] lg:h-[80vh] rounded-lg lg:rounded-none overflow-hidden">
        <img
          src="/images/lets_connect.webp"
          alt="Looking to sell your property?"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 lg:flex-2 h-auto lg:h-[80vh] flex flex-col justify-center items-center gap-20 lg:gap-0">
        <div className="flex-3 flex flex-col lg:justify-center lg:items-end justify-start items-center gap-6 lg:gap-16">
          <h1
            className={`${lexendDeca.className} lg:text-6xl text-4xl font-semibold`}
          >
            Looking to sell your property?
          </h1>
          <h2
            className={`${lexendDeca.className} lg:text-xl text-lg font-normal`}
          >
            Highlight specific services or products here. It can be a property
            appraisal service, a consultation, or something uniquely yours. Give
            it room to shine here.
          </h2>
        </div>
        <div className="w-full lg:w-full h-[60vh] lg:h-auto lg:h-auto flex-2 flex justify-start items-center">
          <a
            href="#contact_us"
            className={`${lexendDeca.className} uppercase text-white bg-[${accent}] hover:bg-[${accent}] focus:ring-4 focus:ring-[${accent}] font-medium rounded-lg text-md px-10 lg:px-16 py-4 lg:py-6`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default LookingToSellProperty;
