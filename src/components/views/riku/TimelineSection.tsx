import React from "react";

interface TimelineData {
  date: string;
  description: string;
  imageUrl: string;
}

const timelineData: TimelineData[] = [
  {
    date: "Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ddaebb816da109a7d9a51eb2ffc5b32a3ad1163ad276b2d4d289ede0166be2f6?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
  },
  {
    date: "Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ddaebb816da109a7d9a51eb2ffc5b32a3ad1163ad276b2d4d289ede0166be2f6?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
  },
  {
    date: "Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ddaebb816da109a7d9a51eb2ffc5b32a3ad1163ad276b2d4d289ede0166be2f6?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
  },
  {
    date: "Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ddaebb816da109a7d9a51eb2ffc5b32a3ad1163ad276b2d4d289ede0166be2f6?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
  },
  {
    date: "Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ddaebb816da109a7d9a51eb2ffc5b32a3ad1163ad276b2d4d289ede0166be2f6?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
  },
];

const TimelineSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start px-16 py-20 bg-white max-md:px-5">
      <h2 className="mt-8 text-base font-semibold leading-6 text-black max-md:max-w-full">
        Tagline
      </h2>
      <h1 className="mt-4 text-5xl font-bold text-black leading-[58px] w-[768px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Medium length section heading goes here
      </h1>
      <p className="mt-6 text-lg leading-7 text-black w-[768px] max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
      <div className="flex gap-5 justify-between items-start pt-4 mt-4 text-base leading-6 text-black whitespace-nowrap">
        <button className="px-6 py-3 border border-black border-solid max-md:px-5">
          Button
        </button>
        <div className="flex gap-2 justify-center mt-3">
          <span>Button</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cc59fc65142f42773e3131d8a5a5a8d452f8191d61b72aca044880ddbb310ec?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
            alt=""
            className="shrink-0 w-6 aspect-square"
          />
        </div>
      </div>
      <div className="flex gap-2 self-stretch mt-20 max-md:flex-wrap max-md:mt-10">
        {/* <div className="flex-1 shrink-0 my-auto bg-black h-[3px]" /> */}
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            description={item.description}
            imageUrl={item.imageUrl}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;

interface TimelineItemProps {
  date: string;
  description: string;
  imageUrl: string;
  isReversed: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  description,
  imageUrl,
  isReversed,
}) => {
  const content = (
    <>
      <img
        src={imageUrl}
        alt=""
        className="max-w-full aspect-square w-[180px]"
      />
      <div className="flex gap-2 justify-center mt-4">
        <div className="shrink-0 bg-black rounded-full h-[15px] w-[15px]" />
        <div className="flex-1 shrink-0 my-auto bg-black h-[3px] " />
      </div>
      <h3 className="mt-4 text-2xl font-bold leading-8 text-black">{date}</h3>
      <p className="mt-2 text-base leading-6 text-black">{description}</p>
    </>
  );

  return (
    <div
      className={`flex flex-col flex-1 justify-center ${
        isReversed ? "pt-11" : ""
      }`}
    >
      {isReversed ? (
        <>
          <h3 className="text-2xl font-bold leading-8 text-black">{date}</h3>
          <p className="mt-2 text-base leading-6 text-black">{description}</p>
          <div className="flex gap-2 justify-center mt-4">
            <div className="shrink-0 bg-black rounded-full h-[15px] w-[15px] mt-8" />
            <div className="flex-1 shrink-0 my-auto bg-black h-[3px] mt-10" />
          </div>
          <img
            src={imageUrl}
            alt=""
            className="mt-4 max-w-full aspect-square w-[180px]"
          />
        </>
      ) : (
        content
      )}
    </div>
  );
};
