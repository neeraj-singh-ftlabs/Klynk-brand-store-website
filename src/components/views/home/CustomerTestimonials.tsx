'use client'
import { useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { BiPlayCircle } from "react-icons/bi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { ImPause } from "react-icons/im";
type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  testimonial: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  numberOfStars: number;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial17Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonial17 = (props: Testimonial17Props) => {
  const { heading, description, testimonials } = {
    // ...Testimonial17Defaults,
    ...props,
  } as Props;
   const [playIndex,setPlayIndex] = useState<any>({index:null,status:false})
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#f9f9f9]">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-10">
          <h1 className="mb-5 text-5xl font-black md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          <p className="md:text-md lg:text-nowrap ">{description}</p>
        </div>
        <div className="grid  h-full  items-stretch gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial: any, index: number) => (
            <div
              key={index}
              className="relative flex w-full  shadow-xxlarge shadow-gray-300 rounded-lg flex-col items-center justify-between border-none pb-6  pt-0"
            >
              <div className="relative mb-5 md:mb-6 h-[400px]">
                {playIndex.index == index && playIndex.status ? (
                  <iframe
                    src="https://www.youtube.com/embed/8DKLYsikxTs?autoplay=1&controls=1"
                    className="z-50 w-full h-full object-cover rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/8DKLYsikxTs"
                    className="z-50 w-full h-full  object-cover rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                )}
                {playIndex.index !== index && (
                  <div className="flex flex-col absolute inset-0 top-10  items-center justify-center bg-opacity-50 rounded-lg">
                    <div className="flex-col mt-44">
                      <p className="">
                        <RiDoubleQuotesL className="text-[#EF4823] text-4xl " />
                      </p>
                    </div>
                    <div className="flex-col w-[50%] text-wrap text-center mb-10">
                      <p className="text-white text-xl">
                        I never thought cooking be this easy!
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex z-50   mt-[-55px]  items-center justify-center rounded-full bg-orange-500 w-18 h-18">
                {playIndex.index == index && playIndex.status ? (
                  <ImPause
                    className="text-white text-4xl cursor-pointer"
                    onClick={() =>
                      setPlayIndex({
                        index: playIndex.index === null ? index : null,
                        status:
                          playIndex.index === index ? !playIndex.status : true,
                      })
                    }
                  />
                ) : (
                  <BiPlayCircle
                    className="text-white text-4xl cursor-pointer"
                    onClick={() =>
                      setPlayIndex({
                        index: playIndex.index === null ? index : null,
                        status:
                          playIndex.index === index ? !playIndex.status : true,
                      })
                    }
                  />
                )}
              </div>
              <div className="flex w-full mt-6 mb-5 flex-col  text-left md:w-fit md:flex-row md:items-center">
                <div className="items-center  justify-center text-center">
                  <p className="font-semibold text-center">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


Testimonial17.displayName = "Testimonial17";