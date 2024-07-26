interface ButtonProps {
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
  }
  
  const Button: React.FC<ButtonProps> = ({ variant, children }) => {
    const baseClasses = "px-6 py-3 border border-black border-solid max-md:px-5";
    const variantClasses = variant === 'primary' ? "text-white bg-black" : "text-black";
  
    return (
      <button className={`${baseClasses} ${variantClasses}`}>
        {children}
      </button>
    );
  };

  interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    className?: string;
  }
  
  const Heading: React.FC<HeadingProps> = ({ level, children, className = '' }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  };
  

  interface ExploreAndLearnMoreProps {
    Tagline: string;
    title: string;
    paragraph: string;
    buttons?: { text: string; variant: 'primary' | 'secondary' }[];
  }

  const ExploreAndLearnMore: React.FC<ExploreAndLearnMoreProps> = ({ Tagline, title, paragraph, buttons }) => {
    return (
      <main className="flex flex-col items-start px-16 py-20 text-base leading-6 bg-white max-md:px-5">
        <Heading level={3} className="mt-8 font-semibold text-center text-black max-md:max-w-full">
          {Tagline}
        </Heading>
        <Heading level={1} className="mt-4 text-6xl font-bold text-black leading-[67.2px] max-md:max-w-full max-md:text-4xl">
        {title}
        </Heading>
        <p className="mt-6 text-lg leading-7 text-black w-[768px] max-md:max-w-full">
        {paragraph}
        </p>
        <div className="flex gap-4 items-start pt-4 mt-6 whitespace-nowrap">
            {buttons?.map((button,index)=>{
              return  <Button key={index} variant={button.variant}>{button.text}</Button>
            })}
          
        </div>
      </main>
    );
  };
  
  export default ExploreAndLearnMore;