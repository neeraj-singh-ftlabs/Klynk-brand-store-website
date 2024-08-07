import PrimaryButton from "@/components/common/Button/PrimaryButton";
import React from "react";

const DeliveryForm: React.FC<any> = ({ addressFields, cityFields }) => {
  return (
    <form className="flex h-full flex-col bg-white max-w-[583px]">
      <h2 className="mt-5 w-full text-2xl font-semibold text-black max-md:max-w-full">
        Delivery
      </h2>
      <SelectField
        status={false}
        label="Country/Region"
        value="India"
        name="country"
        className="mt-4"
      />
      <div className="flex flex-col  max-w-full md:w-[30%]">
        {addressFields.map((field: any) => (
          <InputField
            isTrue={false}
            key={field.name}
            label={field.label}
            name={field.name}
            className="grow"
          />
        ))}
      </div>
      <div className="flex gap-3.5  mt-3.5 w-full text-sm text-neutral-500 max-md:flex-wrap max-md:max-w-full">
        {cityFields.map((field: any) =>
          field.isSelect ? (
            <SelectField
              status={true}
              key={field.name}
              value="India"
              label={field.label}
              name={field.name}
              className="flex-row"
            />
          ) : (
            <InputField
              isTrue={true}
              key={field.name}
              label={field.label}
              name={field.name}
              className="flex-row"
            />
          )
        )}
      </div>
      <h3 className="mt-7 w-full text-base font-semibold text-black max-md:max-w-full">
        Shipping method
      </h3>
      <InfoBox
        message="Enter your shipping address to view available shipping methods."
        className="mt-4"
      />
      <div className="mt-5 lg:mt-0 text-center items-center hidden lg:flex justify-center w-full h-full mb-5">
        <PrimaryButton
          customClass="w-full"
          text="Pay Now"
        />
      </div>
    </form>
  );
};

export default DeliveryForm;

interface InputFieldProps {
  label: string;
  name: string;
  className?: string;
  isTrue?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  className,
  isTrue,
}) => {
  return (
    <div
      className={`${className}flex flex-col gap-5 mt-2 text-base leading-10 text-black  ${
        isTrue ? "w-full md:w-[170px]" : "w-full"
      }`}
    >
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={label}
        className={`md:mt-2 h-14 bg-white border ${
          isTrue ? "w-full md:w-[170px]" : "w-full md:w-[550px]"
        }  border-gray-200 rounded-md border-solid`}
      />
    </div>
  );
};

interface SelectFieldProps {
  label: string;
  value?: string;
  name: string;
  className?: string;
  status?: boolean;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  status,
  label,
  value,
  name,
  className,
}) => {
  return (
    <div
      className={`${className} md:h-16 md:mt-3 flex gap-5 justify-between px-1 py-1 ${
        status ? "w-full md:w-[180px]" : "w-full md:w-[550px]"
      } whitespace-nowrap bg-white rounded-md border border-solid border-neutral-200 max-md:flex-wrap max-md:max-w-full`}
    >
      <div className="flex flex-col ">
        <label htmlFor={name} className="mt-1 text-xs text-neutral-500">
          {label}
        </label>
        <select
          id={name}
          name={name}
          className={`h-8 text-sm ${
            status ? "w-full md:w-[180px]" : "w-full md:w-[550px]"
          } text-black bg-transparent border-none`}
          defaultValue={value}
        >
          <option value={value}>{value}</option>
        </select>
      </div>
    </div>
  );
};

interface InfoBoxProps {
  message: string;
  className?: string;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ message, className }) => {
  return (
    <div
      className={`${className} px-4 py-5 w-full md:w-[550px] mb-5 text-sm bg-orange-200 rounded-md text-black text-opacity-60 max-md:pr-5 max-md:max-w-full`}
    >
      {message}
    </div>
  );
};
