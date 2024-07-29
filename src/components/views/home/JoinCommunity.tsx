interface ButtonProps {
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
  }

  interface HeadingProps {
    children: React.ReactNode;
  }
  
  const Heading: React.FC<HeadingProps> = ({ children }) => {
    return (
      <h1 className="text-wrap text-5xl font-bold text-black leading-[58px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        {children}
      </h1>
    );
  };

  interface ParagraphProps {
    children: React.ReactNode;
  }
  
export interface JoinCommunityProps {
  heading: string;
  paragraph: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

  const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
    return (
      <p className="text-lg leading-7 text-black max-md:max-w-full">
        {children}
      </p>
    );
  };
  
  
  const Button: React.FC<ButtonProps> = ({ variant, children }) => {
    const baseClasses = "px-6 py-3 text-base leading-6 border border-black border-solid";
    const variantClasses = variant === 'primary' 
      ? "text-white bg-black" 
      : "text-black";
  
    return (
      <button className={`${baseClasses} ${variantClasses}`}>
        {children}
      </button>
    );
  };



  const JoinCommunity: React.FC<JoinCommunityProps> = ({ 
    heading, 
    paragraph, 
    primaryButtonText, 
    secondaryButtonText 
  }) => {
    return (
      <main className="flex flex-col justify-center px-16 py-20 bg-white max-md:px-5">
        <section className="mt-8 max-md:mr-1 max-md:max-w-full px-[5%] py-12 md:py-16 lg:py-20">
            
          <div className="flex gap-5 max-md:flex-col container">
            <div className="flex flex-col w-5/12 max-md:ml-0 max-md:w-full">
              <Heading>
              {heading}
              </Heading>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <Paragraph>
                {paragraph}
                </Paragraph>
                <div className="flex gap-4 items-start self-start pt-4 mt-6 whitespace-nowrap">
                <Button variant="primary">{primaryButtonText}</Button>
                <Button variant="secondary">{secondaryButtonText}</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default JoinCommunity;

