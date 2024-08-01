import React from "react";

interface HeaderProps {
  logoSrc: string;
  iconSrc: string;
}

const HeaderCheckout: React.FC<HeaderProps> = ({ logoSrc, iconSrc }) => {
  return (
    <header className="flex justify-center  items-center lg:px-10 py-6 bg-white border-b  border-stone-400">
      <div className="flex gap-5 justify-around lg:ml-52 max-w-full w-[702px] max-md:flex-wrap">
        <Logo src={logoSrc} />
        <Icon src={iconSrc} />
      </div>
    </header>
  );
};

export default HeaderCheckout;


interface LogoProps {
  src: string;
}

export const Logo: React.FC<LogoProps> = ({ src }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt="Company logo"
      className="aspect-[4.17] w-[300px]"
    />
  );
};

interface IconProps {
  src: string;
}

export const Icon: React.FC<IconProps> = ({ src }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt=""
      className="shrink-0 my-auto w-6 aspect-square"
    />
  );
};
