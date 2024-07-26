import React from "react";

interface SectionHeadingProps {
  title: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => (
  <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
    <h2 className="text-4xl font-bold leading-10 text-black max-md:mt-10 max-md:max-w-full">
      {title}
    </h2>
  </div>
);



interface SectionContentProps {
  paragraphs: string[];
}

export const SectionContent: React.FC<SectionContentProps> = ({ paragraphs }) => (
  <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow justify-center text-black max-md:mt-10 max-md:max-w-full">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`text-base leading-6 max-md:max-w-full ${
            index > 0 ? "mt-4" : ""
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  </div>
);


interface InfoItemProps {
  label: string;
  value: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
  <div className="flex gap-5 justify-between py-5 border-t border-black max-md:flex-wrap max-md:max-w-full">
    <div className="text-xl font-bold leading-7">{label}</div>
    <div className="my-auto text-base leading-6 text-right">{value}</div>
  </div>
);



interface InfoSectionProps {
  items: Array<{ label: string; value: string }>;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ items }) => (
  <section className="flex flex-col justify-center mt-20 border-b border-black max-md:mt-10 max-md:max-w-full">
    {items.map((item, index) => (
      <InfoItem key={index} label={item.label} value={item.value} />
    ))}
  </section>
);


const TimeSaving: React.FC<any> = ({ paragraphs, infoItems }:any) => {
  return (
    <main className="flex flex-col px-16 py-20 bg-white max-md:px-5">
      <section className="justify-center mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <SectionHeading title="Cooking with Riku: Easy, Time-Saving, and Delicious" />
          <SectionContent paragraphs={paragraphs} />
        </div>
      </section> 
      <InfoSection items={infoItems} />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cd6a1b6490f84f1dd56afcc6f23c9a21e49c37f5b2535173cf89a22d6367c39?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
        alt=""
        className="mt-20 w-full aspect-[1.79] max-md:mt-10 max-md:max-w-full"
      />
    </main>
  );
};

export default TimeSaving;