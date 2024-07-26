interface HeadingSectionProps {
  headings: string[];
}
interface HeadingBlockProps {
  heading: string;
  isImage: boolean;
}
const HeadingBlock: React.FC<HeadingBlockProps> = ({ heading, isImage }) => {
  return (
    <div className="flex flex-col  w-[33%] max-md:ml-0 max-md:w-full">
      {isImage ? (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/16dfc91de9dff8c1be11ad772f43897364caf2ea36c2843ad1a49ef89cc46cd2?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
          alt=""
          className="w-full aspect-square max-md:mt-8"
        />
      ) : (
        <h2 className="ml-28 self-stretch my-auto text-8xl font-bold text-black  max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          {heading}
        </h2>
      )}
    </div>
  );
};
const SpecSection: React.FC<HeadingSectionProps> = ({ headings }) => {
  return (
    <section className="flex flex-col  h-[1500px] px-16  bg-white max-md:px-5">
      <div className="justify-center px-10  max-md:px-5 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {headings.map((heading, index) => (
            <HeadingBlock key={index} heading={heading} isImage={index === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default SpecSection;
