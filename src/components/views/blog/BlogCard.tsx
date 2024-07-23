interface BlogCardProps {
  imageUrl: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
}
const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  category,
  readTime,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-base leading-6 text-black max-md:mt-8">
        <img
          loading="lazy"
          src={imageUrl}
          alt="Blog post thumbnail"
          className="w-full aspect-[1.39]"
        />
        <div className="flex gap-4 self-start mt-6 text-sm font-semibold">
          <span className="px-2 py-1 whitespace-nowrap bg-zinc-100">
            {category}
          </span>
          <span className="my-auto">{readTime}</span>
        </div>
        <h3 className="mt-4 text-2xl font-bold leading-8">{title}</h3>
        <p className="mt-2 leading-6">{description}</p>
        <div className="flex gap-2 justify-center self-start mt-6">
          <span>Read more</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d?apiKey=971b6410d97242e7b97afd5891e4e40f&"
            alt=""
            className="shrink-0 w-6 aspect-square"
          />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
