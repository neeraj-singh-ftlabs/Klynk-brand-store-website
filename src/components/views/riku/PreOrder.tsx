import React from "react";

interface MediumLengthHeadingProps {
  title: string;
  description: string;
}

const PreOrder: React.FC<MediumLengthHeadingProps> = ({
  title,
  description,
}) => {
  return (
    <section className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full ">
      <h2 className="text-4xl font-bold leading-10 max-md:max-w-full">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-7 max-md:max-w-full">{description}</p>
    </section>
  );
};

export default PreOrder;

interface ButtonProps {
  label: string;
  isPrimary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, isPrimary = false }) => {
  const baseClasses = "px-6 py-3 border border-black border-solid max-md:px-5";
  const colorClasses = isPrimary ? "text-white bg-black" : "text-black";

  return <button className={`${baseClasses} ${colorClasses}`}>{label}</button>;
};

export const ButtonGroup: React.FC = () => {
  return (
    <div className="flex gap-4 self-stretch my-auto text-base leading-6 whitespace-nowrap max-md:mt-10">
      <Button label="Pre Order" isPrimary />
      <Button label="Learn More" />
    </div>
  );
};
type Props = {
    title: string,
    description:string
}

export const ContentSection: React.FC = (props: any) => {
    const { title, description } = {
        ...props
    } as Props
  return (
    <section className="flex flex-col justify-center px-16 py-20 bg-white max-md:px-5">
      <div className="p-12 mt-8 border border-black border-solid max-md:px-5 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[82%] max-md:ml-0 max-md:w-full">
            <PreOrder
              title={title}
              description={description}
            />
          </div>
          <div className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
            <ButtonGroup />
          </div>
        </div>
      </div>
    </section>
  );
};

