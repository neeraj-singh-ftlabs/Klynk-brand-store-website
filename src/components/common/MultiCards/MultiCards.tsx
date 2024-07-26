import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSection = {
  icon: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

type BaseCard = {
  tagline: string;
  image: ImageProps;
  heading: string;
  description: string;
 
};

type SmallCard = BaseCard & {
  button: ButtonProps;
};

type BigCard = BaseCard & {
  buttons: ButtonProps[];
  reverse:boolean;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  bigCard: BigCard;
  featureSections: FeatureSection[];
  smallCard: SmallCard;
  reverse:boolean;
};

export type Layout380Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>; // pass in reverse true/false to change layout 

export const Layout380 = (props: Layout380Props) => {
  const { tagline, heading, description, smallCard, bigCard, featureSections,reverse=true } = {
    // ...Layout380Defaults,
    ...props,
  } as Props;
  return (
    <>
    {console.log(reverse,"<<<<reverse")}
   {!reverse? <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <BigCard {...bigCard} />
           {reverse? <>{featureSections.map((feature, index) => (
              <FeatureSection key={index} {...feature} />
            ))}</>:<SmallCard {...smallCard} />}
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
        {!reverse? <>{featureSections.map((feature, index) => (
              <FeatureSection key={index} {...feature} />
            ))}</>:<SmallCard {...smallCard} />}
            {/* <SmallCard {...smallCard} /> */}
            <BigCard {...bigCard} />
          </div>
        </div>
      </div>
    </section>
    :
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <BigCard {...bigCard} />
            {featureSections.map((feature, index) => (
              <FeatureSection key={index} {...feature} />
            ))}
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <SmallCard {...smallCard} />
            <BigCard {...bigCard} />
          </div>
        </div>
      </div>
    </section>}
    </>
  );
};

const BigCard = (bigCard: BigCard) => {
  const {reverse=false}=bigCard
  {console.log(reverse,"<<<<biigcard")}

  return (
    <div className="flex flex-col border border-border-primary sm:col-span-2">
        <div className={`flex w-full flex-col items-center justify-center self-start ${!reverse?"hidden":"block"}`}>
        <img src={bigCard.image.src} alt={bigCard.image.alt} />
      </div>
      <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8 lg:p-12">
        <div>
          <p className="mb-2 font-semibold">{bigCard.tagline}</p>
          <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
            {bigCard.heading}
          </h2>
          <p>{bigCard.description}</p>
        </div>
        <div className="mt-6 flex items-center gap-4 md:mt-8">
          {bigCard.buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      
      <div className={`flex w-full flex-col items-center justify-center self-start ${reverse?"hidden":"block"}`}>
        <img src={bigCard.image.src} alt={bigCard.image.alt} />
      </div>
    </div>
  );
};

const SmallCard = (smallCard: SmallCard) => {
  return (
    <div className="flex flex-col border border-border-primary sm:col-span-2 sm:grid sm:auto-cols-fr sm:grid-cols-2">
      <div className="flex size-full flex-col items-center justify-center self-start">
        <img src={smallCard.image.src} alt={smallCard.image.alt} />
      </div>
      <div className="block flex-col justify-center p-6 sm:flex">
        <div>
          <p className="mb-2 font-semibold">{smallCard.tagline}</p>
          <h2 className="mb-2 text-xl font-bold md:text-2xl">{smallCard.heading}</h2>
          <p>{smallCard.description}</p>
        </div>
        <div className="mt-5 md:mt-6">
          <Button {...smallCard.button}>{smallCard.button.title}</Button>
        </div>
      </div>
    </div>
  );
};

const FeatureSection = (featureSection: FeatureSection) => {
  return (
    <div className="flex flex-col justify-between border border-border-primary p-6 md:p-8 lg:p-6">
      <div>
        <div className="mb-3 md:mb-4">
          <img src={featureSection.icon.src} className="size-12" alt={featureSection.icon.alt} />
        </div>
        <h2 className="mb-2 text-xl font-bold md:text-2xl">{featureSection.heading}</h2>
        <p>{featureSection.description}</p>
      </div>
      <div className="mt-5 md:mt-6">
        <Button {...featureSection.button}>{featureSection.button.title}</Button>
      </div>
    </div>
  );
};

// export const Layout380Defaults: Layout380Props = {
//   tagline: "Revolutionary",
//   heading: "Effortless Cooking Made Easy",
//   description: "Schedule, monitor, and automate your cooking experience",
//   smallCard: {
//     tagline: "Revolutionary",
//     image: {
//       src: "https://relume-assets.s3.amazonaws.com/placeholder-image-portrait.svg",
//       alt: "Placeholder image 1",
//     },
//     heading: "Effortless Meal Planning and Grocery Shopping",
//     description: "Simplify your meal planning and grocery list with Klynk App",
//     button: {
//       title: "Learn More",
//       variant: "link",
//       size: "link",
//       iconRight: <RxChevronRight />,
//     },
//   },
//   bigCard: {
//     tagline: "Innovative",
//     image: {
//       src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
//       alt: "Placeholder image 2",
//     },
//     heading: "Consistent Results Every Time You Cook",
//     description:
//       "With Riku, enjoy perfectly cooked rice and curry without any hassle or guesswork",
//     buttons: [
//       { title: "Learn More", variant: "secondary" },
//       {
//         title: "Sign Up",
//         variant: "link",
//         size: "link",
//         iconRight: <RxChevronRight />,
//       },
//     ],
//     reverse:true
//   },
//   featureSections: [
//     {
//       icon: {
//         src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
//         alt: "Relume logo 1",
//       },
//       heading: "Remote Cooking Made Simple ",
//       description: "Monitor and control your cooking from anywhere with ease",
//       button: {
//         title: "Learn More",
//         variant: "link",
//         size: "link",
//         iconRight: <RxChevronRight />,
//       },
//     },
//     {
//       icon: {
//         src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
//         alt: "Relume logo 2",
//       },
//       heading: "Create and Share Your Own Recipes",
//       description: "Join the community of chefs and food influencers",
//       button: {
//         title: "Learn More",
//         variant: "link",
//         size: "link",
//         iconRight: <RxChevronRight />,
//       },
//     },
//   ],
// };

Layout380.displayName = "Layout380";
