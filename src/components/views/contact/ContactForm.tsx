import React from "react";
interface ContactFormProps {
  tagline: string;
  title: string;
  description: string;
}
const ContactForm: React.FC= () => {
  return (
    <main className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <form className="flex flex-col mt-8 max-w-full w-[768px]">
        <header>
          <p className="self-center text-base font-semibold leading-6 text-center text-black">
            Effortless
          </p>
          <h1 className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
          Have a question or feedback? We&rsquo;d love to hear from you!
          </p>
        </header>
        <section className="flex gap-5 mt-12 text-base leading-6 text-black max-md:flex-wrap max-md:mt-10">
          <InputField label="First name" />
          <InputField label="Last name" />
        </section>
        <section className="flex gap-5 mt-6 text-base leading-6 text-black max-md:flex-wrap">
          <InputField label="Email" type="email" />
          <InputField label="Phone number" type="tel" />
        </section>
        <SelectField
          label="Choose a topic"
          options={["Select one...","option 1"]}
          className="mt-6"
        />
   

        <RadioGroup
          label="Which best describes you?"
          options={[
            "First choice",
            "Second choice",
            "Third choice",
            "Fourth choice",
            "Fifth choice",
            "Other",
          ]}
          className="mt-10 "
        />
   
        <TextArea
          label="Message"
          placeholder="Type your message..."
          className="mt-10"
        />
        <CheckboxField
          label={
            <>
              I accept the <span className="text-black underline">Terms</span>
            </>
          }
          className="self-center mt-6"
        />
        <SubmitButton className="self-center mt-6" />
      </form>
    </main>
  );
};
export default ContactForm;
interface InputFieldProps {
  label: string;
  type?: string;
}
export const InputField: React.FC<InputFieldProps> = ({ label, type = "text" }) => {
  return (
    <div className="flex flex-col flex-1">
      <label
        htmlFor={label.toLowerCase().replace(" ", "-")}
        className="text-base leading-6 text-black"
      >
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase().replace(" ", "-")}
        className="shrink-0 mt-2 h-12 bg-white border border-black border-solid"
        aria-label={label}
      />
    </div>
  );
};
interface SelectFieldProps {
  label: string;
  options: string[];
  className?: string;
}
export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  className,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={label.toLowerCase().replace(" ", "-")}
        className="text-base leading-6 text-black"
      >
        {label}
      </label>
      <div className="flex gap-4 p-3 mt-2 text-base leading-6 bg-white  text-stone-500 max-md:flex-wrap">
        <select
          id={label.toLowerCase().replace(" ", "-")}
          className="flex-1 max-md:max-w-full bg-transparent"
          aria-label={label}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      
      </div>
    </div>
  );
};
interface RadioGroupProps {
  label: string;
  options: string[];
  className?: string;
}
export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  className,
}) => {
  return (
    <fieldset className={className}>
    <legend className="text-base leading-6 text-black">{label}</legend>
    <div className="mt-4 max-md:max-w-full">
      <div className="grid grid-cols-2 gap-x-5">
        {options.slice(0, 3).map((option, index) => (
          <div key={index} className="mb-4">
            <div className="flex gap-3 mt-3.5">
              <input
                type="radio"
                id={option.toLowerCase().replace(" ", "-")}
                name={label.toLowerCase().replace(" ", "-")}
                className="shrink-0 my-auto bg-white border border-black border-solid h-[18px] rounded-[100px] w-[18px]"
              />
              <label htmlFor={option.toLowerCase().replace(" ", "-")}>
                {option}
              </label>
            </div>
          </div>
        ))}
        {options.slice(3).map((option, index) => (
          <div key={index} className="mb-4">
            <div className="flex gap-3 mt-3.5">
              <input
                type="radio"
                id={option.toLowerCase().replace(" ", "-")}
                name={label.toLowerCase().replace(" ", "-")}
                className="shrink-0 my-auto bg-white border border-black border-solid h-[18px] rounded-[100px] w-[18px]"
              />
              <label htmlFor={option.toLowerCase().replace(" ", "-")}>
                {option}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  </fieldset>
  
  );
};
interface TextAreaProps {
  label: string;
  placeholder: string;
  className?: string;
}
export const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  className,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={label.toLowerCase().replace(" ", "-")}
        className="text-base leading-6 text-black"
      >
        {label}
      </label>
      <textarea
        id={label.toLowerCase().replace(" ", "-")}
        placeholder={placeholder}
        className="px-3 pt-3 pb-12 mt-2 text-base leading-6 bg-white border border-black border-solid text-stone-500 max-md:max-w-full w-full"
        aria-label={label}
      />
    </div>
  );
};
interface CheckboxFieldProps {
  label: React.ReactNode;
  className?: string;
}
export const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, className }) => {
  return (
    <div
      className={`flex gap-2 items-start pb-4 text-sm leading-5 text-black ${className}`}
    >
      <input
        type="checkbox"
        id="terms-acceptance"
        className="shrink-0 bg-white border border-black border-solid h-[18px] w-[18px]"
      />
      <label htmlFor="terms-acceptance" className="underline">
        {label}
      </label>
    </div>
  );
};
interface SubmitButtonProps {
  className?: string;
}
export const SubmitButton: React.FC<SubmitButtonProps> = ({ className }) => {
  return (
    <button
      type="submit"
      className={`px-6 py-3 text-base leading-6 text-white whitespace-nowrap bg-black border border-black border-solid max-md:px-5 ${className}`}
    >
      Submit
    </button>
  );
};