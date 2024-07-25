import React from 'react';

export interface CenterImageFeatureSectionProps {
  tagline: string;
  heading: string;
  description: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  mainImage: string;
}
interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
  }
  interface ButtonProps {
    children: React.ReactNode;
    variant: 'outline' | 'text';
    icon?: string;
    onClick?: () => void;
  }
  
  const Button: React.FC<ButtonProps> = ({ children, variant, icon, onClick }) => {
    if (variant === 'outline') {
      return (
        <button
          className="px-6 py-3 border border-black border-solid max-md:px-5"
          onClick={onClick}
        >
          {children}
        </button>
      );
    }
  
    return (
      <button className="flex gap-2 justify-center mt-3" onClick={onClick}>
        <span>{children}</span>
        {icon && <img loading="lazy" src={icon} alt="" className="shrink-0 w-6 aspect-square" />}
      </button>
    );
  };
  
  const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
      <div className="flex flex-col px-8 mt-2.5 text-2xl font-bold leading-9 text-center text-black max-md:px-5 max-md:mt-10">
        <img loading="lazy" src={icon} alt="" className="self-center w-12 aspect-square" />
        <h3 className="mt-6">{title}</h3>
        <p className="mt-4 text-base leading-6">{description}</p>
      </div>
    );
  };


const CenterImageWithDesc: React.FC<CenterImageFeatureSectionProps> = ({
  tagline,
  heading,
  description,
  features,
  mainImage,
}) => {
  return (
    <section className="flex flex-col items-center px-16 py-20 bg-white max-md:px-5">
      <p className="mt-8 text-base font-semibold leading-6 text-center text-black">
        {tagline}
      </p>
      <h2 className="mt-4 text-5xl font-bold text-center text-black leading-[58px] w-[768px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        {heading}
      </h2>
      <p className="mt-6 text-lg leading-7 text-center text-black w-[768px] max-md:max-w-full">
        {description}
      </p>
      <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            {features.slice(0, 2).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={mainImage}
              alt="Main feature illustration"
              className="grow w-full aspect-[1.12] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            {features.slice(2, 4).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between items-start pt-4 mt-12 text-base leading-6 text-black whitespace-nowrap max-md:mt-10">
        <Button variant="outline">Learn More</Button>
        <Button variant="text" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f">
          Sign Up
        </Button>
      </div>
    </section>
  );
};

export default CenterImageWithDesc;