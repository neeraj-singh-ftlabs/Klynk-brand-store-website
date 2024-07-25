import Image from "next/image";
import { RxChevronRight } from "react-icons/rx";
interface ButtonProps {
    children: React.ReactNode;
    variant: "primary" | "secondary";
  }

  export interface ContentSectionProps {
    reverse?: boolean; // Define reverse as an optional boolean
    tagline?: string;
  heading?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  }

const MultiImageInfo: React.FC<ContentSectionProps> = (props) => {
    return (
      <main className="flex flex-col justify-center px-16 py-20 bg-white max-md:px-5">
         <section className="px-[5%] py-12 md:py-16 lg:py-20">
         <div className="container">
        <ContentSection {...props} />
        </div>
        </section>
      </main>
    );
  };
  
  export default MultiImageInfo;



const ContentSection: React.FC<ContentSectionProps> = (props) => {
  const { reverse = true } = props;
  return (
    <>
      {!reverse ? (
        <section className="flex gap-5 max-md:flex-col">
          <TextContent {...props} />
          <ImageContent {...props}/>
        </section>
      ) : (
        <section className="flex gap-5 max-md:flex-col">
          <ImageContent {...props}/>
          <TextContent {...props} />
        </section>
      )}
    </>
  );
};

  const TextContent: React.FC<ContentSectionProps> = ({
    tagline,
    heading,
    description,
    primaryButtonText,
    secondaryButtonText,
  }) => {
    return (
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch my-auto text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
          <p className="font-semibold max-md:max-w-full">{tagline}</p>
          <h2 className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          {heading}
          </h2>
          <p className="mt-6 text-lg leading-7 max-md:max-w-full">
          {description}
          </p>
          <div className="flex gap-5 justify-between items-start self-start pt-4 mt-4 whitespace-nowrap">
            <Button variant="primary">{primaryButtonText}</Button>
            <Button variant="secondary">
            {secondaryButtonText}
              <RxChevronRight className="size-6" />

            </Button>
          </div>
        </div>
      </div>
    );
  };

  const ImageContent:  React.FC<ContentSectionProps> = (props) =>{

    const {reverse=true} : ContentSectionProps=props
    return (
        <>

   {!reverse? <div className="relative flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
  <Image
    loading="lazy"
     src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f23a3427c8904e04004d18a7bac5335c7d9718101b21c60eccca03b5419b2fb?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
    alt="Content illustration"
    className="grow w-full aspect-[0.98] max-md:mt-10 max-md:max-w-full"
    layout="responsive"
    width={1000} // Adjust width and height based on your image's aspect ratio
    height={1020}
  />
  <div className="absolute top-40 -left-10" style={{ width: '300px', height: '220px' }}>
    <Image
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f23a3427c8904e04004d18a7bac5335c7d9718101b21c60eccca03b5419b2fb?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
      alt="Overlay illustration"
      layout="fill"
      objectFit="cover"
    />
  </div>
</div>:<div className="relative flex flex-col mr-10 w-6/12 max-md:ml-0 max-md:w-full">
  <Image
    loading="lazy"
     src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f23a3427c8904e04004d18a7bac5335c7d9718101b21c60eccca03b5419b2fb?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
    alt="Content illustration"
    className="grow w-full aspect-[0.98] max-md:mt-10 max-md:max-w-full"
    layout="responsive"
    width={1000} // Adjust width and height based on your image's aspect ratio
    height={1020}
  />
  <div className="absolute top-40 -right-10" style={{ width: '300px', height: '220px' }}>
    <Image
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f23a3427c8904e04004d18a7bac5335c7d9718101b21c60eccca03b5419b2fb?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
      alt="Overlay illustration"
      layout="fill"
      objectFit="cover"
    />
  </div>
</div>}
</>
    );
  };

  
  const Button: React.FC<ButtonProps> = ({ children, variant }) => {
    const baseClasses = "flex gap-2 justify-center items-center";
    const variantClasses = {
      primary: "px-6 py-3 border border-black border-solid max-md:px-5",
      secondary: "mt-3",
    };
  
    return (
      <button className={`${baseClasses} ${variantClasses[variant]}`}>
        {children}
      </button>
    );
  };