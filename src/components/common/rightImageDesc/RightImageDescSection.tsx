import React from 'react';
import PrimaryButton from '../Button/PrimaryButton';
import SecondaryButton from '../Button/SecondaryButton';

interface UpgradeExpSectionProps {
  title: string;
  description: string;
  imageSrc: any;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  status?: boolean;
  bgColor?: boolean;
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




  const UpgradeExpSection: React.FC<UpgradeExpSectionProps> = ({
    title,
    description,
    imageSrc,
    primaryButtonText,
    secondaryButtonText,
    status = false,
    bgColor = false
  }) => {
    return (
      <section
        className={`flex flex-col justify-center  ${
          bgColor
            ? "bg-gradient-to-r from-[#000000] to-[#292929] text-white"
            : "bg-white text-black"
        } max-md:px-5 px-[5%] py-12 md:py-16 lg:py-20 `}
      >
        <div
          className={`lg:mt-8   max-md:mr-1 max-md:max-w-full container ${
            status && "shadow-xxlarge rounded-lg shadow-gray-300"
          } `}
        >
          <div className="flex gap-5 max-md:flex-col">
            {status && (
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={imageSrc.src}
                  alt=""
                  className="grow w-full aspect-[1.49] max-md:max-w-full  md:ml-[-20px] rounded-l-lg"
                />
              </div>
            )}
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch p-12 my-auto max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <h2 className="text-6xl font-extrabold   leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  {title}
                  <br />
                  <h2 className="text-[#EF4823] text-6xl font-extrabold">
                    Community
                  </h2>
                </h2>
                <p className="mt-6 text-lg leading-7 max-md:max-w-full">
                  {description}
                </p>
                {status && (
                  <div className="flex flex-col lg:flex-row  gap-5 mt-8">
                    <input
                      type="text"
                      className="border-none shadow-medium lg:px-8 rounded-lg shadow-gray-300 p-2 pl-5"
                      placeholder="example@xyz.com"
                    />
                    <input
                      type="text"
                      className="border-none shadow-medium rounded-lg lg:px-8 shadow-gray-300 p-2 pl-5"
                      placeholder="mobile number"
                    />
                  </div>
                )}
                <div className="flex gap-4 items-start self-start pt-4 mt-6 text-base leading-6 whitespace-nowrap">
                  {!bgColor && <PrimaryButton text={primaryButtonText} />}
                  {!status  && <SecondaryButton text={secondaryButtonText} />}
                </div>
              </div>
            </div>
            {!status && (
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={imageSrc}
                  alt=""
                  className="grow w-full aspect-[1.49] max-md:max-w-full"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };

  export default UpgradeExpSection

