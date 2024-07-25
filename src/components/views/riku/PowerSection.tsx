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

type Props = {
  tagline: string;
  heading: string;
  description: string;
  featureSections: FeatureSection[];
  image: ImageProps;
};
type StatsProps = {
  percentage: string;
  heading: string;
};

export type Layout396Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Power = (props: Layout396Props) => {
  const { tagline, heading, description, featureSections, image } = {
    ...props,
  } as Props;

  return (
    <section className="relative px-[5%] text-white py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          {/* <p className="mb-3 font-semibold md:mb-4">{tagline}</p> */}
          <h1 className="mb-5 text-5xl  font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          {/* <p className="md:text-md">{description}</p> */}
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {featureSections.map((feature, index) => (
            <FeatureSection key={index} {...feature} />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <img
          src={image.src}
          className="size-full object-cover"
          alt={image.alt}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

function FeatureSection(featureSection: FeatureSection) {
  return (
    <div className="flex flex-col justify-center text-white  border-border-primary p-6 md:p-8">
      <div>
        <div className="mb-5 md:mb-6 ml-16">
          <img
            src={featureSection.icon.src}
            className="size-12 justify-cent"
            alt={featureSection.icon.alt}
          />
        </div>
        <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
          {featureSection.heading}
        </h2>
        <p>{featureSection.description}</p>
      </div>
      <div className="mt-5 md:mt-6">
        <Button {...featureSection.button} className="text-white">
          {featureSection.button.title}
        </Button>
      </div>
    </div>
  );
}

Power.displayName = "Power";
