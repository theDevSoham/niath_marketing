import { lexendDeca, roboto } from "@/assets/fonts";
import { accent, primary } from "@/constants/colors";

const Header = () => {
  return (
    <header className="w-full h-[100vh] relative">
      <div className="w-full absolute h-full z-1">
        <img
          src="images/hero_image.webp"
          alt="niath_hero_image"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="w-full absolute h-full z-2 animate-[fadeIn_1s_ease-in-out_forwards] uppercase px-8 py-10 lg:px-12 lg:py-20 flex flex-col justify-center items-start gap-5 lg:gap-10"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="animate-[fadeIn_2s_ease-in-out_forwards]">
          <h1
            className={`lg:text-6xl md:text-5xl text-4xl font-bold antialiased`}
          >
            NIATH ADVISORY{" "}
          </h1>
          <h1 className={`lg:text-3xl text-xl font-semibold antialiased`}>
            REAL ESTATE & INVESTMENT{" "}
          </h1>
        </div>

        <div className="animate-[fadeIn_2s_ease-in-out_forwards]">
          <h2
            className={`${lexendDeca.className} lg:text-4xl md:text-2xl text-xl font-medium antialiased`}
          >
            Elevating Portfolios Through Property and Precision
          </h2>
        </div>

        <div className="animate-[fadeIn_2s_ease-in-out_forwards]">
          <a
            href="#contact_us"
            className={`${lexendDeca.className} uppercase text-white bg-[${primary}] hover:bg-[${accent}] focus:ring-4 focus:ring-[${accent}] font-medium rounded-lg text-md px-10 lg:px-16 py-4 lg:py-6`}
          >
            Talk to Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
