import SecondaryButton from "@/components/common/Button/SecondaryButton";
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
export const CreateAndShare = (props: Layout396Props) => {
  const { tagline, heading, description, featureSections, image } = {
    ...props,
  } as Props;
  return (
    <section className="relative px-[5%] text-white py-16 md:py-24 lg:py-28 h-full">
      <div className="container">
        <div className=" mb-12 w-full max-w-lg text-start md:mb-18 lg:mb-20 ">
          {/* <p className="mb-3 font-semibold md:mb-4">{tagline}</p> */}
          <h1 className="mb-5 text-5xl  font-bold md:mb-6 md:text-7xl lg:text-8xl ">
            <span className="text-[#EF4823]">Create and Share </span> {heading}
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid  auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-6 mb-10 lg:mb-10">
          {featureSections.map((feature, index) => (
            // <FeatureSection key={index} {...feature} />
            <CardComponent
              key={index}
              imageUrl="https://t4.ftcdn.net/jpg/05/23/82/37/360_F_523823772_rENIlsWUhzgdojXgODNZZd9WtiQokv72.jpg"
              title="Card Title"
            />
          ))}
        </div>
        <SecondaryButton text="Learn More" />
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
        <Button {...featureSection.button} className="text-white ">
          {featureSection.button.title}
        </Button>
      </div>
    </div>
  );
}
CreateAndShare.displayName = "CreateAndShare";
const CardComponent = ({ imageUrl, title }: any) => {
  return (
    <div className="relative w-full h-52  overflow-hidden rounded-lg shadow-lg">
      <div
        className="w-full   h-full rounded-lg bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="w-full  bg-opacity-50 p-4">
          <h2 className="text-white m-0">{title}</h2>
              </div>
      </div>
    </div>
  );
};
