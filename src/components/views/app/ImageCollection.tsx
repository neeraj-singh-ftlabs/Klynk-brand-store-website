type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  images: ImageProps[];
};

export type Gallery10Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ImageCollection = (props: Gallery10Props) => {
  const { heading, description, images } = {
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="gap-8 space-y-8 md:columns-3">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.url}
              className="block w-full ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="size-full object-cover"
              />
            </a>
          ))}
        </div>
      </div> 
    </section>
  );
};

ImageCollection.displayName = "ImageCollection";
