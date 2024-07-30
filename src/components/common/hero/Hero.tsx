import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  tagline: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
  center?:boolean;
  small?:boolean;
};

export type Header5Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header5 = (props: Header5Props) => {
  const { tagline, heading, description, buttons, image, center=false, small=false } = {
    ...props,
  } as Props;
  return (
    <header className="relative px-[5%] ">
      <div className="container">
        <div className={`flex max-h-[60rem] ${small?"":"min-h-svh "} py-16 md:py-24 lg:py-28 ${center?"text-center justify-center":""} items-center`}>
          <div className="max-w-md">
            {tagline && (
              <p className="mb-3 font-semibold md:mb-4 text-white">{tagline}</p>
            )}
            <h1 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-8xl">
              {heading}
            </h1>
            <p className="text-base text-text-alternative md:text-md">
              {description}
            </p>
            <div className={`mt-6 flex gap-x-4 md:mt-8 ${center?"text-center justify-center items-center":""}`}>
              {buttons?.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src={image?.src}
          className="size-full object-cover"
          alt={image?.alt}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </header>
  );
};

Header5.displayName = "Header5";
