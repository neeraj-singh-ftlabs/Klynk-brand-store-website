type Props = {
  heading: string;
  description: string;
};

export type Header64Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Revoloutionary = (props: Header64Props) => {
  const { heading, description } = {
    ...props,
  } as Props;
  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          {heading}
        </h1>
        <p className="md:text-md">{description}</p>
      </div>
    </header>
  );
};

Revoloutionary.displayName = "Revoloutionary";
