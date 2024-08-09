type Props = {
  heading: string;
  description: string;
  image:any
};
  
  export type Layout42Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Layout42 = (props: Layout42Props) => {
    const { heading, description, image } = {
      // ...Layout42Defaults,
      ...props,
    } as Props;
    return (
      <section
        className="px-[5%] h-full w-full py-16 md:py-24 lg:py-36 "
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:pb-48 container grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            {heading}
          </h3>
          <p className="md:text-md">{description}</p>
        </div>
      </section>
    );
  };
  
  // export const Layout42Defaults: Layout42Props = {
  //   heading: "Connecting the dots in your cooking journey with innovative kitchen solutions.",
  //   description:
  //     "Klynk is revolutionizing home cooking with its innovative hardware, software, and services. Our goal is to make cooking easy for everyone with advanced products like Riku, the first automatic rice and curry maker, and Semi, a smart induction cooktop. We also offer Klynk Recipes, a personalized platform for chefs, and the Klynk App, a collaborative meal planning and grocery list app. Our vision is fully automated kitchens that save time and effort. Join us on this journey into the future of home cooking!",
  // };
  
  Layout42.displayName = "Layout42";
  