import { Button, ButtonProps } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";


export interface LifeWithRikuSectionProps {
  heading: string;
  tagline?:string;
  paragraph?:string;
  mainButtonView?:boolean
  features: {
    icon: string;
    title: string;
    description: string;
    buttonText?:string;
    
  }[];
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText?:string
}

const buttons:ButtonProps[] = [
  { title: "Learn More", variant: "secondary" },
  {
    title: "Sign Up",
    variant: "link",
    size: "link",
    iconRight: <RxChevronRight className="size-6" />,
  },
]

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  
}) => {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-base text-black max-md:mt-10">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="self-center w-12 aspect-square"
        />
      
        <h3 className="mt-6 text-2xl font-bold leading-9 text-center">
          {title}
        </h3>
        <p className="mt-6 leading-6 text-center">{description}</p>
        {buttonText&&<button className="flex gap-2 justify-center self-center mt-8 whitespace-nowrap leading-[150%]">
          <span>{buttonText}</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8df947dd4fa573104870ee730a0c6322c128a1537f6bad18ff47727bfdbff2fa?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
            alt=""
            className="shrink-0 w-6 aspect-square"
          />
        </button>}
      </div>
    </article>
  );
};

const LifeWithRikuSection: React.FC<LifeWithRikuSectionProps> = ({
  heading,
  features,
  tagline,
  paragraph,
  mainButtonView
}) => {
  return (
    <section className="flex flex-col bg-white max-md:px-5 px-[5%] py-12 md:py-16 lg:py-20">
      {/* <div className="container"> */}
     {tagline&& <h2 className="self-center mt-8 ml-16 font-semibold w-[768px] max-md:max-w-full items-center justify-center text-center">{tagline}</h2>}
      <h2 className="self-center mt-8 text-4xl font-bold leading-10 text-center text-black w-[768px] max-md:max-w-full items-center justify-center ">
        {heading}
      </h2>
     {paragraph&& <p className="mt-6 text-md leading-7 text-black text-center self-center w-[768px] max-md:max-w-full items-center justify-center">
        {paragraph}
        </p>}
      <div className="justify-center mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              buttonText={feature.buttonText}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center ">

{/* <button className="px-6 py-3 mt-16 text-base leading-6 text-black border border-black border-solid max-md:px-5 max-md:mt-10 ">
  View all
</button> */}
{mainButtonView&&buttons && buttons.map((button, postIndex) => (
(
<div key={postIndex} className="mt-10 flex items-center  gap-x-6  md:mt-12">

<Button  {...button} className="ml-2">
  {button.title}
</Button>

</div>
)
))}
</div>
      {/* </div> */}
    </section>
  );
};

export default LifeWithRikuSection;
