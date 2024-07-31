import Contact from '@/components/views/checkout/Contact';
import DeliveryForm from '@/components/views/checkout/DeliveryForm';
import HeaderCheckout from '@/components/views/checkout/Header'
import OrderDetails from '@/components/views/checkout/SideProductList';
import React from 'react'


function Checkout() {
   const addressFields = [
     { label: "First name (optional)", name: "firstName" },
     { label: "Address", name: "address" },
     { label: "Apartment, suite, etc. (optional)", name: "apartment" },
   ];

   const cityFields = [
     { label: "City", name: "city" },
     { label: "State", name: "state", isSelect: true },
     { label: "PIN code", name: "pinCode" },
   ];
  return (
    <>
      <HeaderCheckout
        logoSrc="https://relume-assets.s3.amazonaws.com/logo-image.svg"
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d3280e94f4720213b7574b69da66d32434bc6addf0009582b95b560859979b69?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
      />
      <div className="bg-white flex flex-col lg:flex-row overflow-x-hidden">
        <div className="w-full lg:w-[65%] h-screen md:overflow-y-auto no-scrollbar lg:border-r  border-stone-400 ">
          <Contact addressFields={addressFields} cityFields={cityFields} />
        </div>
        <div className="w-full lg:w-[40%] md:ml-20 md:mt-20 mr-20 mb-20 sticky top-0">
          <OrderDetails />
        </div>
      </div>
    </>
  );
}

export default Checkout