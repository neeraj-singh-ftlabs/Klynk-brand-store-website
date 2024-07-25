import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

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
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  bigCard: BigCard;
  featureSections: FeatureSection[];
  smallCard: SmallCard;
};

export type Layout381Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const SaveTime = (props: Layout381Props) => {
  const { tagline, heading, description, smallCard, bigCard, featureSections } =
    {
      ...props,
    } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <BigCard {...bigCard} />
            <SmallCard {...smallCard} />
          </div>
          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] gap-6 md:gap-8">
            {featureSections.map((feature, index) => (
              <FeatureSection key={index} {...feature} />
            ))}
            <BigCard {...bigCard} />
          </div>
        </div>
      </div>
    </section>
  );
};

const BigCard = (bigCard: BigCard) => {
  return (
    <div className="flex flex-col border border-border-primary sm:col-span-2 sm:row-span-2">
      <div className="flex w-full flex-col items-center justify-center self-start">
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
          <h2 className="mb-2 text-xl font-bold md:text-2xl">
            {smallCard.heading}
          </h2>
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
          <img
            src={featureSection.icon.src}
            className="size-12"
            alt={featureSection.icon.alt}
          />
        </div>
        <h2 className="mb-2 text-xl font-bold md:text-2xl">
          {featureSection.heading}
        </h2>
        <p>{featureSection.description}</p>
      </div>
      <div className="mt-5 md:mt-6">
        <Button {...featureSection.button}>
          {featureSection.button.title}
        </Button>
      </div>
    </div>
  );
};

SaveTime.displayName = "SaveTime";
