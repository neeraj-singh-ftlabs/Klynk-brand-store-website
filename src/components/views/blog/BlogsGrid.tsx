import BlogCard from "@/components/common/Blog/BlogCard";
import { Button } from "@relume_io/relume-ui";
import { BlogCard as BlogCardProps, BlogCategory } from "@/Models/Blog";
import clsx from "clsx";
import Pagination from "@/components/common/Pagination/Paginate";
import Link from "next/link";

type Props = {
  blogPosts: BlogCardProps[];
  subCategories: BlogCategory[];
  category: BlogCategory;
  paginate: boolean;
};

export type BlogsGridProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const BlogGrid = (props: BlogsGridProps) => {
  const { blogPosts, subCategories, category, paginate } = props as Props;

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 md:pt-0 lg:pt-0 sm:pt-0">
      <div className="container">
        {subCategories && subCategories.length ? (
          <Link
            href={`/blogs/category/${category.slug}`}
            className={`mb-10 text-3xl font-bold md:mb-10 md:text-5xl lg:text-6xl font-primary inline-block`}
          >
            {category.name}
          </Link>
        ) : (
          <h1
            className={`mb-10 text-3xl font-bold md:mb-10 md:text-5xl lg:text-6xl font-primary inline-block`}
          >
            {category.name}
          </h1>
        )}

        {category.description && (
          <p className="mb-5 text-base md:mb-6 md:text-md">
            {category.description}
          </p>
        )}

        <div className="flex flex-col items-stretch justify-start">
          {subCategories && subCategories.length && (
            <div className="no-scrollbar mb-8 ml-[-5vw] flex gap-6  w-screen items-center justify-start overflow-scroll py-1 pl-[5vw] md:ml-0 md:w-full md:overflow-hidden md:pl-0">
              {subCategories.map((cat, index) => (
                <Button
                  key={index}
                  variant="link"
                  asChild
                  className={clsx(
                    "border px-4 py-2 border-transparent bg-gray-50 rounded-xl text-[#171A22] hover:text-primary"
                  )}
                >
                  <Link href={`/blogs/category/${category.slug}/${cat.slug}`}>
                    {cat.name}
                  </Link>
                </Button>
              ))}
            </div>
          )}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
          {paginate && (
            <div className="flex justify-center align-middle pt-20">
              <Pagination />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
