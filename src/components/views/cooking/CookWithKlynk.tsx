import React from "react";

const CookWithKlynk: React.FC = () => {
  return (
    <main className="flex flex-col justify-center px-16 py-20 bg-white max-md:px-5">
      <div className="mt-8 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <ShortHeading tagline="Simplify" heading="Cook with Klynk" />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ContentSection content="Discover the joy of effortless cooking with Klynk. Our innovative ecosystem of hardware, software, and services takes the stress and effort out of cooking, allowing you to eat what you want, when you want. Experience the future of home cooking today." />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CookWithKlynk;


interface ContentSectionProps {
  content: string;
}
 
export const ContentSection: React.FC<ContentSectionProps> = ({ content }) => (
  <section className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
    <p className="text-lg leading-7 text-black max-md:max-w-full">{content}</p>
    <div className="flex gap-4 items-start self-start pt-4 mt-6 whitespace-nowrap">
      <Button text="Learn More" variant="primary" />
      <Button text="Sign Up" variant="secondary" />
    </div>
  </section>
);


interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ text, variant }) => {
  const baseClasses =
    "px-6 py-3 text-base leading-6 border border-black border-solid max-md:px-5";
  const variantClasses =
    variant === "primary" ? "text-white bg-black" : "text-black";

  return <button className={`${baseClasses} ${variantClasses}`}>{text}</button>;
};


interface ShortHeadingProps {
  tagline: string;
  heading: string;
}

export const ShortHeading: React.FC<ShortHeadingProps> = ({ tagline, heading }) => (
  <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
    <h2 className="text-base font-semibold lg:ml-2 leading-6  max-md:max-w-full">
      {tagline}
    </h2>
    <h1 className="mt-4 text-6xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl">
      {heading}
    </h1>
  </div>
);
