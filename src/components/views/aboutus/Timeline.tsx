import React from 'react';

interface TimelineProps {
  heroProps: HeroSectionProps;
  timelineItems: TimelineItemProps[]; // This should be an array of TimelineItemProps
}

const Timeline: React.FC<TimelineProps> = ({heroProps,timelineItems}) => {
 

  return (
    <main className="flex flex-col items-center px-16 py-20 bg-white max-md:px-5">
      <HeroSection {...heroProps} />
      <TimelineSection items={timelineItems} />
      <HeroSection {...heroProps} />
    </main>
  );
};

export default Timeline;


export interface HeroSectionProps {
  tagline: string;
  heading: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  tagline,
  heading,
  description,
  primaryButtonText,
  secondaryButtonText
}) => {
  return (
    <header className="flex flex-col items-center px-16 py-20 bg-white max-md:px-5">
      <p className="mt-8 text-base font-semibold leading-6 text-center text-black">
        {tagline}
      </p>
      <h1 className="mt-4 text-5xl font-bold text-center text-black leading-[58px] w-[768px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        {heading}
      </h1>
      <p className="mt-6 text-lg leading-7 text-center text-black w-[768px] max-md:max-w-full">
        {description}
      </p>
      <div className="flex gap-5 justify-between items-start pt-4 mt-6 text-base leading-6 text-black whitespace-nowrap">
        <Button>{primaryButtonText}</Button>
        <Button variant="text" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9cc59fc65142f42773e3131d8a5a5a8d452f8191d61b72aca044880ddbb310ec?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f">
          {secondaryButtonText}
        </Button>
      </div>
    </header>
  );
};


interface ButtonProps {
  children: React.ReactNode;
  variant?: 'outlined' | 'text';
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'outlined', icon }) => {
  if (variant === 'text' && icon) {
    return (
      <button className="flex gap-2 justify-center mt-3">
        <span>{children}</span>
        <img loading="lazy" src={icon} alt="" className="shrink-0 w-6 aspect-square" />
      </button>
    );
  }

  return (
    <button className="px-6 py-3 border border-black border-solid max-md:px-5">
      {children}
    </button>
  );
};


export interface TimelineItemProps {
  date: string;
  content: string;
  buttonText: string;
  imageSrc: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, content, buttonText, imageSrc }) => {
  return (
    <article className="flex gap-5 self-stretch mt-28 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <h2 className="flex-1 py-16 text-4xl font-bold leading-10 text-right text-black whitespace-nowrap max-md:max-w-full mt-4">
        {date}
      </h2>
      <div className="flex flex-col w-44 max-md:hidden relative">
  <div className="shrink-0 w-1 h-[579px] bg-black border border-black border-solid absolute top-5" />
  <div className="shrink-0 mt-4 bg-black rounded-full h-[15px] w-[15px] absolute top-[620px] -left-1" />
  <div className="shrink-0 w-1 mt-4 bg-black border border-black border-solid h-[320px] absolute top-[670px] max-md:hidden" />
</div>
      <div className="flex flex-col w-1/3 py-16 text-black max-md:max-w-[full]">
        <p className="text-lg leading-7 max-md:max-w-full">{content}</p>
        <div className="flex gap-5 justify-between items-start self-start pt-4 mt-4 text-base leading-6 whitespace-nowrap">
          <Button>{buttonText}</Button>
          <Button variant="text" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f">
            {buttonText}
          </Button>
        </div>
        <img loading="lazy" src={imageSrc} alt="" className="mt-16 w-full aspect-square max-md:mt-10 max-md:max-w-full" />
      </div>
    </article>
  );
};


// export interface TimelineSectionProps {
//   items: Array<{
//     date: string;
//     content: string;
//     buttonText: string;
//     imageSrc: string;
//   }>;
// }

interface TimelineSectionProps {
  items: TimelineItemProps[]; // Ensure this is an array of TimelineItemProps
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ items }) => {
  return (
    <section className="flex flex-col items-center px-16 py-20 bg-white max-md:px-5">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
      
    </section>
  );
};


