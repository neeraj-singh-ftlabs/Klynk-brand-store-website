import type { ButtonProps } from "@relume_io/relume-ui";

export type ImageProps = {
  src: string;
  alt?: string;
};

export type FullCarouselProps = {
  imageSrc: string;
  title: string;
  description: string;
  secondaryButton?: CarouselButtonProps;
  pimaryButton?: CarouselButtonProps;
};

type CarouselButtonProps ={
  text: string;
  url?: string;
}

export type RelumeButtonProps = ButtonProps;
