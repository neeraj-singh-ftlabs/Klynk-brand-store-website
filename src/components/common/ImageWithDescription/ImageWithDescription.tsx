import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import PrimaryButton from "../Button/PrimaryButton";
import Image from "next/image";

type ImageProps = {
  src: any;
  alt?: string;
};

type FeaturesProps = {
  icon: ImageProps;
  paragraph: string;
  title?: string;
};

type Props = {
  dark: boolean;
  heading: string;
  description: string;
  tagline: string;
  features: FeaturesProps[];
  buttons: ButtonProps[];
  image: ImageProps;
  reverse?: Boolean;
  gridView?: boolean;
  buttonsView: boolean;
  gridIconView?: boolean;
};

export type Layout16Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout17 = (props: Layout16Props) => {
  const {
    tagline,
    heading,
    dark = false,
    description,
    features,
    buttons,
    image,
    reverse = false,
    gridView = false,
    buttonsView = true,
    gridIconView = true,
  } = {
    ...props,
  } as Props;

  return (
    <section
      className={`py-16 md:py-24 lg:py-28   ${
        dark && "bg-gradient-to-r from-[#000000] to-[#292929] text-white"
      }`}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className={`${reverse ? "hidden" : "block"} rounded h-full`}>
            <div className="relative w-full h-full">
              <Image
                src={image.src.src}
                className="absolute inset-0 w-full h-full object-contain object-center"
                alt={image.alt || "placeholder"}
                layout="fill"
              />
            </div>
          </div>
          <div className="py-20 sm:px-5">
            {tagline && !dark && (
              <h1 className="mb-3 text-5xl font-bold md:mb-3 md:text-7xl lg:text-8xl text-orange-500">
                {tagline}
              </h1>
            )}
            {heading && (
              <h1
                className={`mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-6xl ${
                  dark && "lg:w-[350px] text-wrap "
                }`}
              >
                {heading}
              </h1>
            )}
            {!dark && (
              <p className="mb-5 text-base md:mb-6 md:text-md">{description}</p>
            )}
            {features && features.length && (
              <ul className="grid  grid-cols-1 md:grid-cols-2 gap-4 py-2">
                {features?.map((feature, index) => (
                  <li
                    key={index}
                    className="flex self-start"
                    style={{ alignItems: "center" }}
                  >
                    <div className="mr-4 flex-none self-start">
                      <Image
                        src={feature.icon.src}
                        width={100}
                        height={100}
                        alt={feature.icon.alt || "image"}
                        className="size-10"
                      />
                    </div>
                    <span>{feature.paragraph}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="py-2 mt-8 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {gridView &&
                  features &&
                  features.length &&
                  features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-5/12 max-md:ml-0 max-md:w-full"
                    >
                      <div className="flex flex-col grow text-black max-md:mt-8">
                        {gridIconView && (
                          <img
                            loading="lazy"
                            src={
                              "https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                            }
                            alt=""
                            className="w-12 aspect-square"
                          />
                        )}
                        <h3 className="mt-4 text-xl font-bold leading-7">
                          {feature.title}
                        </h3>
                        <p className="mt-4 text-base leading-6">
                          {feature.paragraph}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {buttonsView && buttons && buttons.length && (
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                {buttons.map((button, index) => (
                  <span key={index}>
                    <PrimaryButton text={button.title}></PrimaryButton>
                  </span>
                ))}
              </div>
            )}
          </div>
          <div
            className={`${
              reverse ? "block" : "hidden"
            } overflow-hidden rounded h-full`}
          >
            <div className="relative w-full h-full">
              <Image
                src={image.src.src}
                className="absolute inset-0 w-full h-full object-cover object-center"
                alt={image.alt || "placeholder"}
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Layout17.displayName = "Layout16";
