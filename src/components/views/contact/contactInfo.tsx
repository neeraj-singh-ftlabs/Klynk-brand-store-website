import React from 'react';

export interface ContactInfoProps {
  icon: string;
  title: string;
  description: string;
  contact: string;
  isLink?: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, description, contact, isLink }) => (
  <div className="flex flex-col text-base leading-6 text-black">
    <img loading="lazy" src={icon} alt="" className="w-8 aspect-square" />
    <h3 className="mt-4 text-xl font-bold leading-7">{title}</h3>
    <p className="mt-2">{description}</p>
    {isLink ? (
      <a href={`${title.toLowerCase()}:${contact}`} className="mt-2 text-black underline">
        {contact}
      </a>
    ) : (
      <p className="mt-2">{contact}</p>
    )}
  </div>
);





const contactData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/75ceeac81d644b0a1922fe0f924e418fdbd5bda7e1041220d39d18a7a3fe0bdd?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
    title: "Email",
    description: "Lorem ipsum dolor sit amet.",
    contact: "hello@relume.io",
    isLink: true
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9043a3a002bed8d5846c4e988f530a36f54e5c5fe095d3c635d61d2eb1d80649?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
    title: "Phone",
    description: "Lorem ipsum dolor sit amet.",
    contact: "+1 (555) 000-0000",
    isLink: true
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f47d1f7bd49907bbeeb2c6771670934b5511c7b52e39c3cad4a04541f85dd00?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
    title: "Office",
    description: "123 Sample St, Sydney NSW 2000 AU",
    contact: ""
  }
];



const ContactUs: React.FC = () => {
  return (

    <section className="flex flex-col items-start  bg-white max-md:px-5 px-[5%]   py-12 md:py-16 lg:py-20">
        <div className='container mx-auto'>
        <p className="mt-8 text-base font-semibold leading-6 text-center text-black max-md:max-w-full">
        Connecting
      </p>
      <h1 className="mt-4 text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
        Contact us
      </h1>
      <p className="mt-6 text-lg leading-7 text-black max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
            {contactData.map((info, index) => (
              <React.Fragment key={index}>
                <ContactInfo {...info} />
                {index < contactData.length - 1 && <div className="mt-10" />}
              </React.Fragment>
            ))}
            {contactData[2].title === "Office" && (
              <div className="flex gap-2 justify-center self-start mt-6">
                <span>Get Directions</span>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cc59fc65142f42773e3131d8a5a5a8d452f8191d61b72aca044880ddbb310ec?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f" alt="" className="shrink-0 w-6 aspect-square" />
              </div>
            )}
          </div>
          <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4bab94151361cb30fbb02ff230b95cf7265eee987d435b5911059f1ba067a4b?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
              alt="Contact map"
              className="grow w-full aspect-[1.61] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
        </div>
     
    </section>
  );
};

export default ContactUs;