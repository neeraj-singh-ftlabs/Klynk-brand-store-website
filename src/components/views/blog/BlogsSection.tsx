import React from "react";
import BlogCard from "../../common/blogSection/BlogCard";
import BlogsHeader  from "../../common/blogSection/BlogsHeader";
import { RxChevronRight } from "react-icons/rx";
import { Button, ButtonProps } from "@relume_io/relume-ui";


export interface BlogPost {
  imageUrl: string;
  category?: string;
  readTime?: string;
  title: string;
  description: string;
  readMore?:boolean

}

const buttons:ButtonProps[] = [
  { title: "Button", variant: "secondary" },
  {
    title: "Button",
    variant: "link",
    size: "link",
    iconRight: <RxChevronRight className="size-6" />,
  },
]

// const blogPosts: BlogPost[] = [
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
//     category: "Category",
//     readTime: "5 min read",
//     title: "Blog title heading will go here",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
     
//   },
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
//     category: "Category",
//     readTime: "5 min read",
//     title: "Blog title heading will go here",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      
//   },
//   {
//     imageUrl:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
//     category: "Category",
//     readTime: "5 min read",
//     title: "Blog title heading will go here",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
     
//   },
 
// ];

interface BlogsHeaderProps {
  tagline: string;
  title: string;
  description: string;
}

interface BlogSectionProps {
  blogPosts: BlogPost[];
  headerProps: BlogsHeaderProps;
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogPosts,headerProps }) => {

  // const { imageUrl,
  //   category,
  //   readTime,
  //   title,
  //   description}:any=props
  return (
    <section className="flex flex-col items-center  bg-white max-md:px-5 px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <BlogsHeader {...headerProps}/>
        <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {blogPosts?.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center ">

        {/* <button className="px-6 py-3 mt-16 text-base leading-6 text-black border border-black border-solid max-md:px-5 max-md:mt-10 ">
          View all
        </button> */}
        {buttons && buttons.map((button, postIndex) => (
  (
    <div key={postIndex} className="mt-10 flex items-center  gap-x-6  md:mt-12">
     
        <Button  {...button} className="ml-2">
          {button.title}
        </Button>

    </div>
  )
))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;



