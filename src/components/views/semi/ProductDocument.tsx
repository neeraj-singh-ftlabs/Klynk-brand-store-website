import React from "react";

interface FeatureCardProps {
  imageSrc: string;
  heading: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  heading,
  description,
}) => {
  return (
    <article className="flex flex-col grow justify-center w-full text-base text-black bg-white border border-black border-solid max-md:mt-8">
      <div className="flex flex-col p-8 max-md:px-5">
        <img
          loading="lazy"
          src={imageSrc}
          alt=""
          className="w-12 aspect-square"
        />
        <h3 className="mt-6 text-3xl font-bold leading-10">{heading}</h3>
        <p className="mt-4 leading-6">{description}</p>
        <button className="flex gap-2 justify-center self-start mt-6 whitespace-nowrap leading-[150%]">
          <span>Button</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cc59fc65142f42773e3131d8a5a5a8d452f8191d61b72aca044880ddbb310ec?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
            alt=""
            className="shrink-0 w-6 aspect-square"
          />
        </button>
      </div>
    </article>
  );
};


interface Feature {
  imageSrc: string;
  heading: string;
  description: string;
}


const ProductDocument: React.FC<any> = ({ features }:any) => {
  return (
    <section className="flex flex-col items-center px-16 py-20 bg-white max-md:px-5">
      <h2 className="mt-8 text-base font-semibold leading-6 text-center text-black">
        Tagline
      </h2>
      <h1 className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
        Product Document
      </h1>
      <p className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.map((feature:Feature, index:number) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDocument;