import React from 'react';

interface UpgradeExpSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}





interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'secondary', children }) => {
  const baseClasses = "px-6 py-3 border border-black border-solid max-md:px-5";
  const primaryClasses = "text-white bg-black";
  const secondaryClasses = "text-black";

  const buttonClasses = variant === 'primary' ? primaryClasses : secondaryClasses;

  return (
    <button className={`${baseClasses} ${buttonClasses}`}>
      {children}
    </button>
  );
};




  const UpgradeExpSection: React.FC<UpgradeExpSectionProps> = ({ title, description, imageSrc, primaryButtonText, secondaryButtonText }) => {
    return (
      <section className="flex flex-col justify-center  bg-white max-md:px-5 px-[5%] py-12 md:py-16 lg:py-20">
        <div className="mt-8 border border-black border-solid max-md:mr-1 max-md:max-w-full container">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch p-12 my-auto max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <h2 className="text-5xl font-bold text-black leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  {title}
                </h2>
                <p className="mt-6 text-lg leading-7 text-black max-md:max-w-full">
                  {description}
                </p>
                <div className="flex gap-4 items-start self-start pt-4 mt-6 text-base leading-6 whitespace-nowrap">
                  <Button variant="primary">{primaryButtonText}</Button>
                  <Button variant="secondary">{secondaryButtonText}</Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img loading="lazy" src={imageSrc} alt="" className="grow w-full aspect-[1.49] max-md:max-w-full" />
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default UpgradeExpSection

