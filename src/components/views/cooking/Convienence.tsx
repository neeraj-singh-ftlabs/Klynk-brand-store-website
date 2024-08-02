import React from "react";

interface FeatureSectionProps {
  heading: string;
  description: string;
  statistics: StatisticItemProps[];
  imageSrc: string;
  imageAlt: string;
}

const ConvienenceSection: React.FC<any> = ({
 ConvienceProps
}) => {
    const { heading, description, statistics, imageSrc, imageAlt } =
      ConvienceProps;
  return (
    <section className="flex flex-col justify-center px-16 py-20 bg-white max-md:px-5">
      <div className="mt-8 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <h2 className="text-4xl font-bold leading-10 text-black max-md:max-w-full">
                {heading}
              </h2>
              <p className="mt-6 text-lg leading-7 text-black max-md:max-w-full">
                {description}
              </p>
              <div className="py-2 mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  {statistics.map((stat:any, index:number) => (
                    <StatisticItem key={index} {...stat} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={imageSrc}
              alt={imageAlt}
              className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConvienenceSection;


export interface StatisticItemProps {
  percentage: string;
  description: string;
}

export const StatisticItem: React.FC<StatisticItemProps> = ({
  percentage,
  description,
}) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-black max-md:mt-8">
        <div className="text-5xl font-bold leading-[57.6px] max-md:text-4xl">
          {percentage}
        </div>
        <div className="mt-2 text-base leading-6">{description}</div>
      </div>
    </div>
  );
};
