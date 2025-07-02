"use client";

import { lexendDeca } from "@/assets/fonts";
import { IData } from "@/types/CardType";

const Card: React.FC<IData> = ({ title = "", subtitle = "" }) => {
  return (
    <article
      className={`cursor-pointer w-[16rem] lg:w-[20rem] h-[24rem] lg:h-[28rem] flex flex-col justify-center items-center bg-[#323232] hover:animate-[bgFadeIn_0.5s_ease-out_forwards] gap-6 rounded-lg`}
    >
      <h2
        className={`${lexendDeca.className} lg:text-6xl text-3xl font-semibold text-center`}
      >
        {title}
      </h2>
      <p
        className={`${lexendDeca.className} lg:text-2xl text-xl font-light text-center`}
      >
        {subtitle}
      </p>
    </article>
  );
};

export default Card;
