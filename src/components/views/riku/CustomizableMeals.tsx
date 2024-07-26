import React from "react";

interface HeroSectionProps {
  tagline: string;
  heading: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  imageSrc: string;
}

const CustomizebleMeals: React.FC<HeroSectionProps> = ({
  tagline,
  heading,
  description,
  primaryButtonText,
  secondaryButtonText,
  imageSrc,
}) => {
  return (
    <section className="flex flex-col px-16 py-20 bg-white max-md:px-5">
      <div className="mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <TaglineHeading tagline={tagline} heading={heading} />
          </div> 
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <Description
              text={description}
              primaryButtonText={primaryButtonText}
              secondaryButtonText={secondaryButtonText}
            />
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src={imageSrc}
        alt="Hero section image"
        className="mt-20 w-full aspect-[1.79] max-md:mt-10 max-md:max-w-full"
      />
    </section>
  );
};

export default CustomizebleMeals;


interface TaglineHeadingProps {
  tagline: string;
  heading: string;
}

export const TaglineHeading: React.FC<TaglineHeadingProps> = ({
  tagline,
  heading,
}) => {
  return (
    <header className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
      <h2 className="text-base font-semibold leading-6 max-md:max-w-full">
        {tagline}
      </h2>
      <h1 className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        {heading}
      </h1>
    </header>
  );
};


interface DescriptionProps {
  text: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export const Description: React.FC<DescriptionProps> = ({
  text,
  primaryButtonText,
  secondaryButtonText,
}) => {
  return (
    <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
      <p className="text-lg leading-7 max-md:max-w-full">{text}</p>
      <div className="flex gap-5 justify-between items-start self-start pt-4 mt-6 text-base leading-6 whitespace-nowrap">
        <Button variant="primary">{primaryButtonText}</Button>
        <Button variant="secondary">{secondaryButtonText}</Button>
      </div>
    </div>
  );
};


interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  if (variant === "primary") {
    return (
      <button className="px-6 py-3 border border-black border-solid max-md:px-5">
        {children}
      </button>
    );
  }

  return (
    <button className="flex gap-2 justify-center mt-3">
      {children}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
        alt=""
        className="shrink-0 w-6 aspect-square"
      />
    </button>
  );
};
