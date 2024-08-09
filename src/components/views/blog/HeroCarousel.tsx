import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BlogPost } from "@/components/views/blog/BlogsSection";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Pagination, Autoplay } from "swiper/modules";
// import BlogsHeader from "./blogSection/BlogsHeader";
// import PrimaryButton from "./Button/PrimaryButton";
import { Button } from "@relume_io/relume-ui";

export default function Carousel({ headerProps }: any) {
  const blogPosts: BlogPost[] = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
      category: "Blog Category",
      readTime: "Aug 22, 2024",
      title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      description: "Simply tap on the desired recipe on the Klynk App.",
      readMore: true,
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
      category: "Blog Category",
      readTime: "Aug 22, 2024",
      title: "Step 2: Load",
      description: "Load the necessary ingredients into Riku's compartments.",
      readMore: true,
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
      category: "Blog Category",
      readTime: "Aug 22, 2024",
      title: "Step 3: Relax",
      description: "Sit back and relax as Riku cooks your meal.",
      readMore: true,
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
      category: "Blog Category",
      readTime: "Aug 22, 2024",
      title: "Step 4: Relax",
      description: "Sit back and relax as Riku cooks your meal.",
      readMore: true,
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
      category: "Blog Category",
      readTime: "Aug 22, 2024",
      title: "Step 5: Relax",
      description: "Sit back and relax as Riku cooks your meal.",
      readMore: true,
    },
  ];
  return (
    <section className="flex flex-col items-center w-full">
      {/* <BlogsHeader {...headerProps} /> */}
      <div className="self-stretch">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Autoplay]}
          color="black"
          className="mySwiper "
          pagination={{
            clickable: true,
          }}
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
              <section className={`flex flex-col justify-center`}>
                <div className="flex gap-5 max-md:flex-col  bg-gradient-to-r from-[#000000] to-[#535353] w-full">
                  <div className="flex flex-col md:ml-5  w-6/12 max-md:ml-0 max-md:w-full  text-white ">
                    <div className="flex flex-col justify-between self-stretch lg:p-12 max-md:px-5 max-md:mt-8 max-md:max-w-full h-full">
                      <div className="md:pt-10 sm:pt-0 lg:pt-16">
                        <div className="flex flex-row gap-5 mb-3">
                          <span className="py-1 whitespace-nowrap text-[#707070] font-bold">
                            {blog.category}
                          </span>
                          <span className="my-auto text-[#707070]">
                            {blog.readTime}
                          </span>
                        </div>
                        <h2 className=" text-sm lg:text-4xl lg:font-bold lg:leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px] font-secondary">
                          {blog.title}
                        </h2>
                        <p className="mt-6 max-md:max-w-full text-white text-md font-thin">
                          {blog.description}
                        </p>
                      </div>

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
                      className="grow w-full aspect-[1.49] max-md:max-w-full "
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
