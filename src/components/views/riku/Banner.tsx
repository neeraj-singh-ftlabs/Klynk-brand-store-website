import Image from "next/image";
import React from "react";

interface StatisticItemProps {
  percentage: string;
  description: string;
}

export interface FeatureSectionProps {
  heading: string;
  description: string;
  statistics: Array<{
    title: string;
    description: string;
  }>;
  backgroundImageSrc: string;
}

const Banner: React.FC<FeatureSectionProps> = ({
  heading,
  description,
  statistics,
  backgroundImageSrc,
}) => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center px-16 py-20 min-h-[467px] max-md:px-5">
      <Image
        src={backgroundImageSrc}
        alt=""
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="relative mt-8 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <h2 className="relative self-stretch text-4xl font-bold leading-10 text-white max-md:mt-10 max-md:max-w-full">
              {heading}
            </h2>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow max-md:mt-10 max-md:max-w-full">
              <p className="text-lg leading-7 text-white max-md:max-w-full">
                {description}
              </p>
              <div className="py-2 mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {statistics.map((stat, index) => (
                    <StatisticItem
                      key={index}
                      percentage={stat.title}
                      description={stat.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

const StatisticItem: React.FC<StatisticItemProps> = ({
  percentage,
  description,
}) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-white max-md:mt-8">
        <div className="text-5xl font-bold leading-[57.6px] max-md:text-4xl">
          {percentage}
        </div>
        <p className="mt-2 text-base leading-6">{description}</p>
      </div>
    </div>
  );
};
