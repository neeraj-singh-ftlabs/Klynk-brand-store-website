import PrimaryButton from "@/components/common/Button/PrimaryButton";
import React from "react";

interface ProductCardProps {
  imageSrc: string;
  name: string;
  description: string;
  price: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  name,
  description,
  price,
}) => (
  <div className="flex gap-5 justify-between px-5 w-full">
    <div className="flex gap-2.5">
      <strong className="relative inline-flex items-center rounded border border-gray-200 px-2.5 py-1.5 text-xs font-medium">
        <span className="absolute -top-2 -right-2 h-5 w-5  text-white rounded-full bg-gray-600 flex justify-center items-center items">
          <span className="p-2">1</span>
        </span>
        <img
          loading="lazy"
          src="https://cdn.shopify.com/s/files/1/0570/4744/9785/files/UBVariationPicker_128x128.png?v=1714271263"
          alt={name}
          className="shrink-0 rounded-md aspect-[0.92] w-[69px]"
        />
      </strong>
      <div className="flex flex-col my-auto">
        <div className="text-sm text-black">{name}</div>
        <div className="mt-2 text-xs text-black text-opacity-60">
          {description}
        </div>
      </div>
    </div>
    <div className="my-auto text-sm text-black">{price}</div>
  </div>
);

export const DiscountCode: React.FC = () => (
  <div className="flex gap-3.5 mt-5 text-sm">
    <div className="flex flex-col grow shrink-0 self-start px-5 basis-0 w-fit">
      <input
        className="px-3 py-4 bg-white rounded-md border border-solid border-neutral-200 text-neutral-500"
        placeholder="Discount code"
      />
      <div className="mt-4 text-black">Subtotal</div>
    </div>
    <div className="flex flex-col  whitespace-nowrap mr-5">
      <PrimaryButton
        customClass="py-4"
        text="Apply"
      />

      <div className="mt-4 text-right text-black">₹5,100.00</div>
    </div>
  </div>
);

export const OrderSummary: React.FC = () => (
  <div className="flex gap-5 justify-between items-start mt-2 w-full">
    <div className="flex flex-col px-5 text-black whitespace-nowrap">
      <div className="flex gap-2 text-sm">
        <div className="grow">Shipping</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6b02c59098db0f9e48d596eca4d2c69a1b9089cdac4a1c80f3b85f04e4b028b?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
          alt=""
          className="shrink-0 self-start w-3.5 aspect-square"
        />
      </div>
      <div className="mt-3 text-xl font-semibold">Total</div>
    </div>
    <div className="flex flex-col mr-5">
      <div className="text-sm text-right text-black text-opacity-60">
        Enter shipping address
      </div>
      <div className="flex gap-2 self-start mt-3 whitespace-nowrap ml-10">
        <div className="my-auto text-xs text-black text-opacity-60">INR</div>
        <div className="text-xl font-semibold text-black">₹5,100.00</div>
      </div>
    </div>
  </div>
);

const OrderDetails: React.FC = () => (
  <main className="flex flex-col max-w-[444px] mt-80 md:mt-0  md:ml-16 lg:ml-0">
    <ProductCard
      imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d130c0a6f3731869bf6a5dc9ead99cb93bc01664877ebc28a0b78fe3c16d730e?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
      name="Tochi Popcorn"
      description="Ube / 12 Bags"
      price="₹5,100.00"
    />
    <DiscountCode />
    <OrderSummary />
    <div className="p-2 mt-5 lg:mt-0 text-center items-center flex lg:hidden justify-center w-full h-full">
      <button className="bg-[#9B1C1C]   text-white p-3 text-center w-full md:w-[550px] lg:mb-20  rounded-md">
        Pay Now
      </button>
    </div>
  </main>
);

export default OrderDetails;
