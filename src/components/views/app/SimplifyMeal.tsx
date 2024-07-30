type Props = {
  heading: string;
  description: string;
  center:boolean
};

export type Header64Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const SimplifyMeal = (props: Header64Props) => {
  const { heading, description, center } = {
    ...props,
  } as Props;
  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className={`${center ? "container text-center":"text-start"} max-w-lg `}>
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          {heading}
        </h1>
        <p className="md:text-md">{description}</p>
      </div> 
    </header>
  );
};


SimplifyMeal.displayName = "SimplifyMeal";
