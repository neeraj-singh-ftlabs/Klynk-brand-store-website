import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  const baseClasses = "px-6 py-3 border border-black border-solid max-md:px-5";
  const variantClasses =
    variant === "primary" ? "text-white bg-black" : "text-black";

  return (
    <button className={`${baseClasses} ${variantClasses}`}>{children}</button>
  );
};

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className = "",
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{children}</Tag>;
};

const OtaUpdates: React.FC<any> = ({ color, OtaData }) => {
  return (
    <main
      className={`flex flex-col items-start px-16 py-20 text-base leading-6 ${
        color ? "bg-[#505050]" : "bg-white"
      } max-md:px-5`}
    >
      <Heading
        level={3}
        className={`mt-8 font-semibold text-center ${
          color ? "text-white" : "text-black"
        }  max-md:max-w-full`}
      >
        {OtaData.subHeading}
      </Heading>
      <Heading
        level={1}
        className={`mt-4 text-6xl font-bold ${
          color ? "text-white" : "text-black"
        }  leading-[67.2px] max-md:max-w-full max-md:text-4xl`}
      >
        {OtaData.Heading}
      </Heading>
      <p
        className={`mt-6 text-lg leading-7 ${
          color ? "text-white" : "text-black"
        } w-[768px] max-md:max-w-full`}
      >
        {OtaData.description}
      </p>
      <div className="flex gap-4 items-start pt-4 mt-6 whitespace-nowrap">
        <Button variant="primary">Explore</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </main>
  );
};

export default OtaUpdates;
