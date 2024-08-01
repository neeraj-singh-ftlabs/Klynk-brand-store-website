import React from "react";
import DeliveryForm from "./DeliveryForm";

const Contact: React.FC<any> = ({ cityFields, addressFields }) => {
  return (
    <main className="flex px-5 h-full ">
      <form className="flex md:ml-[5%] lg:ml-[25%] md:mt-20  md:px-16 flex-col mt-2 ">
        <header>
          <h1 className="mt-4 text-3xl font-bold text-start text-black leading-[5px] max-md:max-w-full max-md:text-4xl">
            Contact
          </h1>
        </header>
        <section className="flex flex-col gap-5 mt-8 text-base leading-10 text-black max-md:mt-10">
          <InputField label="Name" />
          {/* <InputField label="Last name" /> */}
          <InputField label="Email" type="email" />
          <InputField label="Phone" type="tel" />
        </section>
        <DeliveryForm addressFields={addressFields} cityFields={cityFields} />
      </form>
    </main>
  );
};

export default Contact;

interface InputFieldProps {
  label: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = "text" }) => {
  return (
    <div className="flex flex-col w-full">
      <input
        type={type}
        placeholder={ label }
        id={label.toLowerCase().replace(" ", "-")}
        className="mt-2 h-14 bg-white border md:w-[550px] border-gray-200 rounded-md border-solid"
        aria-label={label}
      />
    </div>
  );
};
