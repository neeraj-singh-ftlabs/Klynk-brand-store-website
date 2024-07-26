import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  icon: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout22Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Discover = (props: Layout22Props) => {
  const { icon, heading, description, buttons, image } = {
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className=" border border-black">
        <div className=" grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="container ml-10">
            {/* <div className="mb-5 md:mb-6">
              <img src={icon.src} className="size-20" alt={icon.alt} />
            </div> */}
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Discover the Power of Riku
            </h2>
            <p className="md:text-md">
              Experience the convenience and versatility of Rikus automatic
              cooking technology.
            </p>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div>
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

Discover.displayName = "Discover";
