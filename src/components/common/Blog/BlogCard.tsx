import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import type { ButtonProps } from "@relume_io/relume-ui";

// interface BlogCardProps {
//   imageUrl?: string;
//   category?: string;
//   readTime?: string;
//   title?: string;
//   description?: string;
//   button?: object;
// }
type BlogCardProps = {
  url: string;
  image: ImageProps;
  category: string;
  readTime: string;
  title: string;
  description: string;
  button: ButtonProps;
};

type ImageProps = {
  src: string;
  alt?: string;
};
const BlogCard: React.FC<BlogCardProps> = ({
  category,
  image,
  readTime,
  title,
  url,
  description,
  button,
}) => {
  return (
    <div
      // key={key}
      className="flex size-full flex-col items-center justify-start shadow-medium rounded-xl overflow-hidden"
    >
      <a
        href={url}
        className="mb-6 w-full ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
      >
        <Image
          src={image.src}
          alt={image.src}
          className="aspect-[3/2] size-full object-cover"
          // layout="fill"
          width={1000}
          height={1000}
        />
      </a>
      <div className="px-5 pb-5">
        <div className="mb-4 flex w-full items-center justify-start">
          <p className="mr-2 px-2 py-1 text-sm font-semibold text-primary">
            {category}
          </p>
          <p className="inline text-sm font-semibold">{readTime}</p>
        </div>
        <div className="flex w-full flex-col items-start justify-start">
          <a
            className="mb-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
            href={url}
          >
            <h2 className="text-xl font-bold md:text-2xl font-secondary">{title}</h2>
          </a>
          <p>{description}</p>
          <Button
            variant={button.variant}
            size={button.size}
            iconRight={button.iconRight}
            iconLeft={button.iconLeft}
            className="mt-6 flex items-center justify-center gap-x-2"
          >
            {button?.title}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
