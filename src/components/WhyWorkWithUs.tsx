import { IData } from "@/types/CardType";
import { lexendDeca } from "@/assets/fonts";
import Card from "./helpers/Card";
// import { secondary } from "@/constants/colors";

const WhyWorkWithUs = () => {
  const populateArray: IData[] = [
    {
      title: "10+ years",
      subtitle: "Experience in the industry",
      background: "primary_card",
    },
    {
      title: "Top 10",
      subtitle: "Real Estate Agents in Bockford from 2022-2025",
      background: "secondary_card",
    },
    {
      title: "$500 million",
      subtitle: "Closed sales",
      background: "primary_card",
    },
    {
      title: "$200 million",
      subtitle: "Active listings",
      background: "secondary_card",
    },
  ];

  return (
    <section
      id="why_work_with_us"
      className={`w-[99vw] h-auto bg-[#ede9e2] p-6 flex flex-col lg:gap-20 gap-10`}
    >
      <h1
        className={`${lexendDeca.className} lg:text-6xl text-4xl font-semibold text-black text-center lg:mt-20 lg:my-15 mt-10 my-5`}
      >
        Why work with us
      </h1>
      <div className="w-full flex flex-wrap justify-center items-center gap-10">
        {populateArray.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
