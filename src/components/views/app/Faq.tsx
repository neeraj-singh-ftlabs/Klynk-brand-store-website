
import React, { useState } from "react";


const FAQSectionApp: React.FC<any> = ({ faqData }) => {
     const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

     const handleToggle = (index: number) => {
       setExpandedIndex(expandedIndex === index ? null : index);
     };
  return (
    <section className="flex flex-col px-16 py-20 bg-white max-md:px-5">
      <h1 className="self-center mt-8 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
        FAQs
      </h1>
      <p className="self-center mt-6 text-lg leading-7 text-center text-black w-[768px] max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <div className=" mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap  gap-x-18 lg:ml-28">
          {faqData?.map((faq: any, index: number) => (
            <FAQItem
              key={index}
              {...faq}
              isLast={index >= faqData.length - 2}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
      <h2 className="self-center mt-20 text-3xl font-bold leading-10 text-center text-black max-md:mt-10 max-md:max-w-full">
        Still have a question?
      </h2>
      <p className="self-center mt-4 text-lg leading-7 text-center text-black max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button className="self-center px-6 py-3 mt-6 text-base leading-6 text-black whitespace-nowrap border border-black border-solid max-md:px-5">
        Contact
      </button>
    </section>
  );
};

export default FAQSectionApp;


export const FAQItem: React.FC<any> = ({
  question,
  answer,
  iconSrc,
  isLast,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className="flex flex-col w-5/12  max-md:ml-0 max-md:w-full">
      <div
        className={`flex flex-col grow pb-6 text-black max-md:mt-10 max-md:max-w-full ${
          isLast ? "border-b border-black" : ""
        }`}
      >
        <div className="flex gap-5 py-5 text-lg font-bold leading-7 border-t border-black max-md:flex-wrap">
          <div className="flex-1 my-auto max-md:max-w-full">{question}</div>
          <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="shrink-0 w-8 aspect-square"
            // onClick={onToggle}
          />
        </div>
        {/* {isExpanded && ( */}
          <div className="text-base leading-6 max-md:max-w-full">{answer}</div>
        {/* )} */}
      </div>
    </div>
  ); 
};
