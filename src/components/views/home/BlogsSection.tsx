import React from "react";
import BlogCard from "../blog/BlogCard";

interface BlogPost {
  imageUrl: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    category: "Category",
    readTime: "5 min read",
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    category: "Category",
    readTime: "5 min read",
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    category: "Category",
    readTime: "5 min read",
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center  bg-white max-md:px-5 px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <h2 className="mt-8 text-base font-semibold leading-6 text-center text-black">
          Blog
        </h2>
        <h1 className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          Short heading goes here
        </h1>
        <p className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
        <button className="px-6 py-3 mt-16 text-base leading-6 text-black border border-black border-solid max-md:px-5 max-md:mt-10">
          View all
        </button>
      </div>
    </section>
  );
};

export default BlogSection;

