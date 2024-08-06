"use client";
import { useState, useEffect } from "react";
import type { ButtonProps, CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import PrimaryButton from "./common/Button/PrimaryButton";
import SecondaryButton from "./common/Button/SecondaryButton";


type ImageProps = {
  src: string;
  alt?: string;
  heading: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  images: ImageProps[];

};

const options = {
  loop: true,
};

const plugins = [
  Autoplay({
    delay: 5000,
  }),
];

export type Header102Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroCourosel = (props: Header102Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const {

    buttons,
    images,
  
  } = {
    ...props,
  } as Props;

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="grid grid-cols-1  items-center gap-y-16 overflow-hidden pt-0 sm:overflow-auto    lg:gap-y-0 lg:pt-0">
      <div className="relative  clear-both h-[300px] max-h-[60rem] text-white min-h-screen w-full   text-center">
        <Carousel
          opts={options}
          plugins={plugins}
          setApi={setApi}
          className="relative left-0 h-[90%]  right-0 z-10 block overflow-hidden whitespace-nowrap pl-4 bg-gradient-to-r from-[#000000] to-[#292929]"
        >
          <CarouselContent>
            {images?.map((image, index) => (
              <CarouselItem key={index} className="pl-0 ">
                <div className="relative inline-block  size-full whitespace-normal text-left align-top">
                  <div className=" ">
                    <div className="flex flex-col-reverse lg:flex-row  ">
                      <div className="flex-col lg:flex-row    mx-[5%] mt-10 lg:mt-48 max-w-md justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
                        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                          {image.heading}
                        </h1>
                        <p className="md:text-md">{image.description}</p>
                        <div className="mt-6 flex gap-x-4 md:mt-8">
                          {buttons?.map((button, index) =>
                            button.variant ? (
                              <span key={index}>
                                <PrimaryButton text={button.title} />
                              </span>
                            ) : (
                              <span key={index}>
                                <SecondaryButton text={button.title} />
                              </span>
                            )
                          )}
                        </div>
                      </div>
                      <div className="z-50 flex-col lg:flex-row  mt-[10%]">
                        <img
                          className="w-full h-full rounded-lg"
                          src={image.src}
                          alt={image.alt}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-between pl-4">
            <div className="absolute gap-1 bottom-[52px]  left-8 right-auto top-auto flex w-full items-start justify-start">
              {images?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx("mx-[1px] inline-block size-3 rounded-full", {
                    "bg-orange-500": current === index + 1,
                    "bg-neutral-light": current !== index + 1,
                  })}
                />
              ))}
            </div>
            <CarouselPrevious className="bottom-2 left-auto right-[5.5rem] top-auto size-12 md:right-24" />
            <CarouselNext className="bottom-2 left-auto right-8 top-auto size-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
