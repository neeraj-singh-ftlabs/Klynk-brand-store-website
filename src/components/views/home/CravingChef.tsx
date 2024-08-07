"use client";

import PrimaryButton from "@/components/common/Button/PrimaryButton";
import SecondaryButton from "@/components/common/Button/SecondaryButton";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import KlynkLogo from "../../../../public/assets/KlynkLogo&Colours/Klynk Logo Dark BG.png";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureProps = {
  tagline: string;
  url: string;
  image: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
  subDes: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  subDes: string;
  features: FeatureProps[];
};

export type Layout422Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const CravingChef = (props: Layout422Props) => {
  const { tagline, heading, description, features } = {
    ...props,
  } as Props;

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-r from-[#000000] to-[#292929] text-white">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="flex flex-col justify-between gap-6 lg:flex-row md:gap-8">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.url}
              className=" shadow-xxsmall shadow-gray-500 rounded-xl bg-gradient-to-r from-[#000000] to-[#292929] relative flex w-full flex-col overflow-hidden lg:w-1/2"
            >
              <div className="  w-full text-center  relative flex h-full min-h-[60vh] flex-col justify-end p-6 md:p-8 lg:p-12">
                <div className="lg:text-center" />
                <div className="flex flex-row  justify-center items-center gap-2">
                  <h3 className="text-[#F47422] text-2xl text-wrap font-semibold leading-[1.2]  md:text-2xl">
                    {feature.heading}
                  </h3>
                  <h3 className="text-white text-2xl text-wrap font-semibold leading-[1.2]  md:text-2xl">
                    {feature.tagline}
                  </h3>
                  <div>
                    {/* <Image width={150} height={100} src={KlynkLogo} alt="img" /> */}
                  </div>
                </div>

                <div className="z-10 w-full">
                  <div className="lg:w-[241px] lg:ml-[25%]">
                    <p className="mt-5 text-wrap md:mt-3 text-center">
                      {feature.description}
                    </p>
                    <p className="mt-2 lg:ml-[-35px] text-wrap md:text-nowrap md:mt-1 text-center">
                      {feature.subDes}
                    </p>
                    <img
                      src={feature.image.src}
                      alt={feature.image.alt}
                      className="size-full object-cover mt-18 mb-10"
                    />
                  </div>
                  <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-5 md:ml-[20%]">
                    <SecondaryButton text="View in 360°" />
                    <PrimaryButton text="Explore" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
