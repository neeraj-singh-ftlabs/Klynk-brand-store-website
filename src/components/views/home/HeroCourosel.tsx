import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BlogPost } from "@/components/views/blog/BlogsSection";

// Import Swiper styles
import "swiper/css";
import "./styles.modules.css";
import "swiper/css/pagination";
// Import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import PrimaryButton from "@/components/common/Button/PrimaryButton";
import Image from "next/image";
import { FullCarouselProps } from "@/Models/Common";
import SecondaryButton from "@/components/common/Button/SecondaryButton";

export default function Carousel({ headerProps }: any) {
  const slides: FullCarouselProps[] = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
      title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      description: "Simply tap on the desired recipe on the Klynk App.",
      pimaryButton: { text: "Get Demo" },
      secondaryButton: { text: "Learn More" },
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
      title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      description: "Simply tap on the desired recipe on the Klynk App.",
      pimaryButton: { text: "Get Demo" },
      secondaryButton: { text: "Learn More" },
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
      title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      description: "Simply tap on the desired recipe on the Klynk App.",
      pimaryButton: { text: "Get Demo" },
      secondaryButton: { text: "Learn More" },
    },
  ];
  return (
    <section className="flex flex-col items-center w-full">
      <div className="self-stretch">
        <Swiper
          autoplay={{
            delay: 250000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          color="black"
          className="home-page-carousel"
          pagination={{
            clickable: true,
          }}
          navigation={true}
          slidesPerView={1} // Adjust the number of slides per view as needed
          spaceBetween={10} // Space between slides
          breakpoints={{
            // Responsive breakpoints
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
          }}
        >
          {slides?.map((slide: FullCarouselProps, index: number) => (
            <SwiperSlide key={index}>
              <section
                className={`flex flex-col justify-center h-lvh bg-black text-white`}
              >
                <div className="container grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col justify-center  align-middle h-full py-3 px-9">
                    <h1 className="mb-5  xs:text-2xl  sm:text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                      {slide.title}
                    </h1>
                    <p className="md:text-md">{slide.description}</p>
                    <div className="mt-6 xs:mb-30 lg:mb-0 flex flex-col sm:flex-row gap-y-2 gap-x-4 md:mt-8 ">
                      <SecondaryButton text={slide?.secondaryButton?.text} />
                      <PrimaryButton text={slide?.pimaryButton?.text} />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center  align-middle h-full py-3 px-9">
                    <Image
                      src={slide.imageSrc}
                      alt=""
                      height={1000}
                      width={1000}
                    />
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
