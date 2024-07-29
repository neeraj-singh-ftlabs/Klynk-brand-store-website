



import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeaturesProps = {
  icon: ImageProps;
  paragraph: string;
  title?:string
};

type Props = {
  heading: string;
  description: string;
  tagline: string;
  features: FeaturesProps[];
  buttons: ButtonProps[];
  image: ImageProps;
  reverse?:Boolean
  gridView?:boolean;
  buttonsView:boolean;
  gridIconView?:boolean
};

export type Layout16Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout17 = (props: Layout16Props) => {
  const { tagline, heading, description, features, buttons, image , reverse=false, gridView=false,buttonsView=true, gridIconView=true } = {
    // ...Layout16Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className={`${reverse ? "hidden" : "block"}`}>
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
          <div>
            {tagline && (
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            )}
            {heading && (
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h1>
            )}
            <p className="mb-5 text-base md:mb-6 md:text-md">
              {description}
            </p>
            {/* { features && features.length && <ul className="grid grid-cols-1 gap-4 py-2">
              {features.map((feature, index) => (
                <li key={index} className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <img src={feature.icon.src} alt={feature.icon.alt} className="size-6" />
                  </div>
                  <span>{feature.paragraph}</span>
                </li>
              ))}
            </ul>} */}

            <div className="py-2 mt-8 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {gridView && features && features.length &&  features.map((feature, index) => (
                 <div  key ={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                 <div className="flex flex-col grow text-black max-md:mt-8">
                   {gridIconView&&<img loading="lazy" src={"https://relume-assets.s3.amazonaws.com/relume-icon.svg"} alt="" className="w-12 aspect-square" />}
                   <h3 className="mt-4 text-xl font-bold leading-7">{feature.title}</h3>
                   <p className="mt-4 text-base leading-6">{feature.paragraph}</p>
                 </div>
               </div>
                ))}
              </div>
            </div>
            
           
            {buttonsView&&buttons && buttons.length && (
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
            )}
          </div>

          <div className={`${reverse ? "block" : "hidden"}`}>
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Layout17.displayName = "Layout16";

