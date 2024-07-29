'use client'
import React, { useState } from "react";

interface Product {
  name: string;
  variant: string;
  price: number;
  imageUrl: string;
}

const ProductsSection: React.FC<any> = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const productsPerPage = 3; // Adjust this value based on your layout
  const totalSlides = Math.ceil(products.length / productsPerPage);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const displayedProducts = products.slice(
    currentSlide * productsPerPage,
    (currentSlide + 1) * productsPerPage
  );

  return (
    <section className="flex flex-col px-16 py-20 bg-white max-md:px-5">
      <header className="flex gap-5 justify-between mt-8 text-black leading-[150%] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <h2 className="text-base font-semibold max-md:max-w-full">Tagline</h2>
          <h1 className="mt-4 text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Products
          </h1>
          <p className="mt-4 text-lg max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <button className="self-end px-6 py-3 mt-24 text-base border border-black border-solid max-md:px-5 max-md:mt-10">
          View all
        </button>
      </header>
      <div className="mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {displayedProducts.map((product: Product, index: number) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
      <footer className="flex gap-5 justify-between mt-12 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <PaginationDots totalDots={totalSlides} activeDot={currentSlide} />
        <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
      </footer>
    </section>
  );
};

export default ProductsSection;

interface ProductCardProps {
  name: string;
  variant: string;
  price: number;
  imageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  variant,
  price,
  imageUrl,
}) => {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-black leading-[150%] max-md:mt-10">
        <img
          loading="lazy"
          src={imageUrl}
          alt={`${name} - ${variant}`}
          className="w-full aspect-[0.82]"
        />
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col flex-1">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm">{variant}</p>
          </div>
          <p className="self-start text-xl font-semibold">${price}</p>
        </div>
        <button className="px-5 py-2 mt-4 text-base border border-black border-solid">
          Add to cart
        </button>
      </div>
    </article>
  );
};

interface PaginationDotsProps {
  totalDots: number;
  activeDot: number;
}

export const PaginationDots: React.FC<PaginationDotsProps> = ({
  totalDots,
  activeDot,
}) => {
  return (
    <div className="flex gap-2 my-auto">
      {[...Array(totalDots)].map((_, index) => (
        <div
          key={index}
          className={`shrink-0 w-2 h-2 rounded-full ${
            index === activeDot ? "bg-black" : "bg-stone-300"
          }`}
        />
      ))}
    </div>
  );
};

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrev,
  onNext,
}) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={onPrev}
        className="flex justify-center items-center p-3 border border-black border-solid rounded-[50px]"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7e7403886d5b160f24bf61123e0458a68bc9c6d2d7918aead0c9fcd145d4559?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
          alt="Previous"
          className="w-6 aspect-square"
        />
      </button>
      <button
        onClick={onNext}
        className="flex justify-center items-center p-3 border border-black border-solid rounded-[50px]"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/47776fc991ba90a18425c0087ac6395e6af3e57d13426b60c2a5863145d28922?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
          alt="Next"
          className="w-6 aspect-square"
        />
      </button>
    </div>
  );
};
