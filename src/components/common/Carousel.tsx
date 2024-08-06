import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Pagination } from "swiper/modules";
import BlogsHeader from "./blogSection/BlogsHeader";
import PrimaryButton from "./Button/PrimaryButton";
import { Button } from "@relume_io/relume-ui";

export default function Carousel({ blogPosts, headerProps }: any) {
  return (
    <section className="flex flex-col items-center w-full bg-white max-md:px-5 px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <BlogsHeader {...headerProps} />
        <div className="self-stretch max-md:mt-10 max-md:max-w-full">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            color="black"
            className="mySwiper "
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
            {blogPosts?.map((blog: any, index: number) => (
              <SwiperSlide key={index}>
                <section
                  className={`flex flex-col justify-center   bg-white max-md:px-5 px-[0%] py-12 md:py-16 lg:py-10 rounded-lg`}
                >
                  <div className={`  max-md:mr-1 max-md:max-w-full rounded-lg`}>
                    <div className="flex gap-5 max-md:flex-col  bg-gradient-to-r from-[#000000] to-[#535353] w-full rounded-lg">
                      <div className="flex flex-col md:ml-5  w-6/12 h-[450px] max-md:ml-0 max-md:w-full  text-white ">
                        <div className="flex flex-col justify-center self-stretch lg:p-12 my-auto max-md:px-5 max-md:mt-8 max-md:max-w-full">
                          <div className="flex flex-row">
                            <span className="px-2 py-1 whitespace-nowrap text-gray-300">
                              {blog.category}
                            </span>
                            <span className="my-auto text-gray-300">
                              {blog.readTime}
                            </span>
                          </div>
                          <h2 className=" text-sm lg:text-5xl lg:font-bold lg:leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px] font-secondary">
                            {blog.title}
                          </h2>
                          <p className="mt-6 text-lg leading-7 max-md:max-w-full">
                            {blog.description}
                          </p>

                          <div className="flex gap-4  lg:ml-[-20px] items-start self-start pt-4  lg:mt-6 text-base  whitespace-nowrap">
                            <Button
                              variant="secondary"
                              className="border-none text-xl  font-light  text-white bg-[#000000 ] hover:text-[#EF4823] "
                            >
                              READ MORE <FaArrowRightLong />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col ml-5  w-6/12 max-md:ml-0 max-md:w-full ">
                        <img
                          loading="lazy"
                          src={blog.imageUrl}
                          alt=""
                          className="grow w-full aspect-[1.49] max-md:max-w-full lg:rounded-r-lg"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
