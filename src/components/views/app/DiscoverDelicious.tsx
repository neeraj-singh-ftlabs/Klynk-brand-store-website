import React from "react";

interface FeatureSectionProps {
  iconSrc: string;
  heading: string;
  description: string;
  imageSrc: string;
}

const DiscoverDelicious: React.FC<any> = ({ DiscoverData }) => {
  return (
    <section className=" flex flex-col justify-center px-16 py-20 bg-white max-md:px-5">
      <div className="container mt-8 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <FeatureContent
            iconSrc={DiscoverData.iconSrc}
            heading={DiscoverData.heading}
            description={DiscoverData.description}
          />
          <FeatureImage imageSrc={DiscoverData.imageSrc} />
        </div>
      </div>
    </section>
  );
};

export default DiscoverDelicious; 


interface FeatureContentProps { 
  iconSrc: string;
  heading: string;
  description: string;
}

export const FeatureContent: React.FC<FeatureContentProps> = ({
  iconSrc,
  heading,
  description,
}) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src={iconSrc}
          alt=""
          className="w-12 aspect-square"
        />
        <h2 className="mt-6 text-4xl font-bold leading-10 max-md:max-w-full">
          {heading}
        </h2>
        <p className="mt-6 text-lg leading-7 max-md:max-w-full">
          {description}
        </p>
      </div>
    </div>
  );
};


interface FeatureImageProps {
  imageSrc: string;
}

export const FeatureImage: React.FC<FeatureImageProps> = ({ imageSrc }) => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt="Feature illustration"
        className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
      />
    </div>
  );
};
