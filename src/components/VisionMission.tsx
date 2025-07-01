import { lexendDeca } from "@/assets/fonts";

const VisionMission = () => {
  return (
    <section
      className={`w-[99vw] h-auto bg-[#114455] flex flex-col justify-center items-center`}
    >
      <div className="flex flex-col lg:flex-row gap-10 p-6 lg:p-10">
        <article className="flex-1 flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h2
              className={`${lexendDeca.className} lg:text-4xl md:text-3xl text-xl font-semibold`}
            >
              VISION
            </h2>
            <p
              className={`${lexendDeca.className} lg:text-2xl md:text-2xl text-lg font-light`}
            >
              To be a leading advisory firm recognized for our expertise, trust,
              and innovation in real estate and financial investment solutions —
              creating lasting impact for our clients and shaping smarter, more
              resilient portfolios and property strategies for the future.
            </p>
          </div>
          <div className="w-full lg:h-[50vh] h-30vh">
            <img
              src="/images/vision_1.webp"
              alt="vision"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </article>
        <article className="flex-1 flex flex-col gap-2">
          <div className="w-full lg:h-[50vh] h-30vh">
            <img
              src="/images/mission.webp"
              alt="mission"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2
              className={`${lexendDeca.className} lg:text-4xl md:text-3xl text-xl font-semibold`}
            >
              MISSION
            </h2>
            <p
              className={`${lexendDeca.className} lg:text-2xl md:text-2xl text-lg font-light`}
            >
              To empower corporates and investors with insightful, strategic,
              and reliable real estate and financial advisory solutions that
              drive long-term value, optimize growth, and foster sustainable
              success. We are committed to delivering excellence through
              personalized service, market intelligence, and integrity in every
              transaction.
            </p>
          </div>
        </article>
      </div>

      <div className="w-full lg:h-[80vh] h-[70vh] relative flex flex-col mt-4 lg:mt-6 justify-center items-center mb-6 lg:mb-0">
        <div className="absolute w-[90%] lg:w-full lg:h-[80vh] h-[70vh] z-1 rounded-lg lg:rounded-none overflow-hidden">
          <img
            src="/images/who_we_work_with.webp"
            alt="who we work with"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute w-[90%] lg:w-full lg:h-[80vh] h-[70vh] bg-[#000000b3] z-2 p-6 lg:p-16 flex flex-col gap-10 lg:gap-16 rounded-lg lg:rounded-none overflow-hidden">
          <h2
            className={`${lexendDeca.className} text-4xl lg:text-6xl font-medium`}
          >
            Who We Work With
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
      </div>
    </section>
  );
};

export default VisionMission;
