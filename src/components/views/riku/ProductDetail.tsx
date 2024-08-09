"use client";
import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const ProductPage: React.FC<any> = ({ productPageDetails }) => {
  return (
    <main className="flex w-full flex-col px-16 pb-20 bg-white max-md:px-5">
      {/* <BreadcrumbNav /> */}
      <section className="pb-12 mt-6 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <ProductImages />
          <ProductDetails productPageDetails={productPageDetails} />
        </div>
      </section>
    </main>
  );
};

export default ProductPage;

export const BreadcrumbNav: React.FC = () => {
  return (
    <nav
      className="flex gap-2 text-sm leading-5 text-center text-black max-md:flex-wrap"
      aria-label="Breadcrumb"
    >
      <a href="#" className="hover:underline">
        Shop now
      </a>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/feef0eca4e7761b971747e83b1313955da3780458d86146f2eb7d1b9d97bec35?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
        className="shrink-0 my-auto w-4 aspect-square"
        alt=""
      />
      <a href="#" className="hover:underline">
        Cookware
      </a>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/feef0eca4e7761b971747e83b1313955da3780458d86146f2eb7d1b9d97bec35?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
        className="shrink-0 my-auto w-4 aspect-square"
        alt=""
      />
      <span className="font-semibold max-md:max-w-full" aria-current="page">
        Riku Cooker
      </span>
    </nav>
  );
};
export const ProductImages: React.FC = () => {
  const thumbnails = Array(4).fill(
    "https://cdn.builder.io/api/v1/image/assets/TEMP/8f9ba1322feb63bf88828f0dfaf5ce651917673d2afe8b9c800056cb252556ee?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
  );

  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex gap-4 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <aside className="hidden md:flex flex-col items-center pb-20 ">
          {thumbnails.map((src, index) => (
            <img
              key={index}
              loading="lazy"
              src={src}
              className={`w-20 aspect-[0.8] ${index > 0 ? "mt-4" : ""}`}
              alt={`Product thumbnail ${index + 1}`}
            />
          ))}
        </aside>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a75de85e2ad6090b8b9fef4842c6018d2b1dbc4e062121f0310777157d20de7e?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
          className="w-full md:w-[75%] "
          alt="Main product image"
        />
      </div>
    </div>
  );
};

export const ProductDetails: React.FC<any> = ({ productPageDetails }) => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
        <h1 className="self-start text-4xl font-bold leading-10 text-black">
          {productPageDetails.heading}
        </h1>
        <div className="self-start mt-2 text-2xl font-bold leading-8 text-black">
          ${productPageDetails.price}
        </div>
        <div className="flex gap-2 self-start mt-6">
          <StarRating rating={3.5} />
          <div className="text-sm leading-5 text-center text-black">
            (3.5 stars) • 10 reviews
          </div>
        </div>
        <p className="mt-6 text-base leading-6 text-black max-md:max-w-full">
          {productPageDetails.description}
        </p>
        <Menu as="div" className="relative inline-block text-left mt-2 mb-5">
          <p>Variant</p>
          <div className=" flex mt-2">
            <MenuButton className="inline-flex w-full justify-start gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Select
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400 justify-end"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Account settings
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  Support
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  License
                </a>
              </MenuItem>
              <form action="#" method="POST">
                <MenuItem>
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Sign out
                  </button>
                </MenuItem>
              </form>
            </div>
          </MenuItems>
        </Menu>
        <VariantSelector
          label="Variant"
          options={["Option one", "Option Two", "Option Three"]}
        />
        <QuantitySelector />
        <button className="px-6 py-3 mt-8 text-base leading-6 text-white bg-primary-light border border-black border-solid max-md:px-5 max-md:max-w-full">
          Add To Cart
        </button>
        <button className="px-6 py-3 mt-4 text-base leading-6 text-black border border-black border-solid max-md:px-5 max-md:max-w-full">
          Buy Now
        </button>
        <p className="mt-4 text-xs leading-5 text-center text-black max-md:max-w-full">
          Free shipping over $50
        </p>
        <div className="flex flex-col mt-8 text-black border-b border-black max-md:max-w-full">
          <AccordionSection
            title="Details"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          />
          <AccordionSection
            title="Shipping"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          />
          <AccordionSection
            title="Returns"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          />
        </div>
      </div>
    </div>
  );
};

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-1 my-auto">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          loading="lazy"
          src={
            index < fullStars
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/482704d18e82865346c8282d1b0e39e45f9790276c760a693fb7de5207c7c5db?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
              : index === fullStars && hasHalfStar
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/a05f00b2adb052fc3c4ba0e69c39cdf36b173d3016d74fd2625975aa3c2d3a30?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/ce90e77cfbcb5528213bc1d16f5a48915d41f2e8c0aac924385a074cf409242d?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
          }
          className="shrink-0 w-4 aspect-[1.06] fill-black"
          alt={
            index < fullStars
              ? "Filled star"
              : index === fullStars && hasHalfStar
              ? "Half star"
              : "Empty star"
          }
        />
      ))}
    </div>
  );
};

interface VariantSelectorProps {
  label: string;
  options: string[];
}

export const VariantSelector: React.FC<VariantSelectorProps> = ({
  label,
  options,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div>
      <label className="mt-6 text-base leading-6 text-black max-md:max-w-full">
        {label}
      </label>
      <div className="flex gap-4 pr-20 mt-2 text-base leading-6 max-md:flex-wrap max-md:pr-5">
        {options.map((option, index) => (
          <button
            key={index}
            className={`px-4 py-2 border border-black border-solid ${
              selectedOption === option ? "text-white bg-black" : "text-black"
            }`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export const QuantitySelector: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col">
      <label
        htmlFor="quantity"
        className="mt-6 text-base leading-6 text-black max-md:max-w-full"
      >
        Quantity
      </label>
      <input
        id="quantity"
        type="number"
        name="quantity"
        value={quantity}
        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
        className="self-start p-3 mt-2 text-base leading-6 text-black whitespace-nowrap bg-white border border-black border-solid"
        min="1"
        style={{ width: "70px" }}
      />
    </div>
  );
};

interface AccordionSectionProps {
  title: string;
  content: string;
}

export const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col pb-6 border-t border-black max-md:max-w-full">
      <button
        className="flex gap-3 py-4 text-lg font-semibold leading-7 whitespace-nowrap max-md:flex-wrap"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="flex-1 max-md:max-w-full text-left">{title}</span>
        <img
          loading="lazy"
          src={
            isOpen
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/64195ff7fce14b2f04fc5d2023622b5148fef5896d91bb302675c7c45d66c8c7?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/f3dbaed7263ed0f1121328332cc195635e811b09538960c76b27e9e2a2b32bb1?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
          }
          className="shrink-0 my-auto w-6 aspect-square"
          alt={isOpen ? "Collapse" : "Expand"}
        />
      </button>
      {isOpen && (
        <div className="text-base leading-6 max-md:max-w-full">{content}</div>
      )}
    </div>
  );
};
