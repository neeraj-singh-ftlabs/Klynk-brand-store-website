import React from "react";

interface HeroSectionProps {
  tagline: string;
  heading: string;
  description: string;
}

const CookingRiku: React.FC<HeroSectionProps> = ({
  tagline = "Revolutionary",
  heading = "Experience the Future of Cooking with Riku",
  description = "Introducing Riku, the world's first automatic rice and curry maker. Say goodbye to the hassle of cooking and enjoy delicious meals with just the touch of a button. With its innovative technology and user-friendly interface, Riku makes cooking easier and more convenient than ever before.",
}) => {
  return (
    <section className="flex flex-col items-start px-16 py-20 text-base leading-6 text-black bg-white max-md:px-5">
      <h2 className="mt-8 ml-16 font-semibold max-md:max-w-full">{tagline}</h2>
      <h1 className="mt-4 ml-16 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        {heading}
      </h1>
      <p className="mt-6 ml-16 text-lg leading-7 max-md:max-w-full">
        {description}
      </p>
      <div className="flex gap-5 justify-between items-start pt-4 mt-4 ml-16 whitespace-nowrap max-md:ml-2.5">
        <Button variant="primary">Button</Button>
        <Button variant="secondary">
          Button
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cc59fc65142f42773e3131d8a5a5a8d452f8191d61b72aca044880ddbb310ec?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
            className="shrink-0 w-6 aspect-square"
            alt=""
          />
        </Button>
      </div>
      <ImageComponent
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/799ea600800972f16b23c390d2ddb89475d10d2e32f5d1ff44b223bee3c74524?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
        className="self-end mt-20 max-w-full aspect-[1.49] w-[960px] max-md:mt-10"
        alt="Hero image"
      />
      <ImageComponent
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca1afc79667404c9b0ff12c16b6d109e1eced52804cccc46d035b84d8e0add73?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
        className="mt-16 max-w-full aspect-[1.49] w-[560px] max-md:mt-10"
        alt="Secondary image"
      />
    </section>
  );
};

export default CookingRiku;


interface ButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  const baseClasses = "px-6 py-3 border border-solid";
  const variantClasses =
    variant === "primary" ? "border-black" : "flex gap-2 justify-center mt-3";

  return (
    <button className={`${baseClasses} ${variantClasses}`}>{children}</button>
  );
};


interface ImageComponentProps {
  src: string;
  className: string;
  alt: string;
}

export const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  className,
  alt,
}) => {
  return <img loading="lazy" src={src} className={className} alt={alt} />;
};
