import React from "react";

interface MyComponentProps {}

const EffortlessComp: React.FC<MyComponentProps> = () => {
  const cardData = [
    {
      tagline: "Transform",
      heading: "Smart Induction Cooktop",
      description: "Experience the Future of Cooking with Semi",
      buttonText: "learn More",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/545db38c3c2a66766d16abf0ea412d43a800dd49a263c551546d7859269e013d?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
    {
      tagline: "Discover",
      heading: "Collaborative Meal Planning",
      description: "Unleash Your Culinary Creativity with the Klynk App",
      buttonText: "learn More",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/545db38c3c2a66766d16abf0ea412d43a800dd49a263c551546d7859269e013d?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
  ];

  return (
    <main className="flex flex-col items-center px-16 py-20 bg-white max-md:px-5">
      <Header />
      <CardSection>
        <div className="flex flex-col w-[51%] max-md:ml-0 max-md:w-full">
          <div className="grow w-full bg-white border border-black border-solid max-md:mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-6 text-base leading-6 text-black max-md:px-5">
                  <div className="mt-3.5 font-semibold">Simplify</div>
                  <h2 className="mt-2 text-2xl font-bold leading-9">
                    Experience the Power of Automation in Your Kitchen
                  </h2>
                  <p className="mt-2 leading-6">
                    Save Time and Effort with Riku, Semi, and the Klynk App
                  </p>
                  <div className="flex  justify-start pr-6 mt-6 whitespace-nowrap max-md:pr-5">
                    <button>Learn More</button>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c648c99086dabcc02665d7136f3813fa8d9ab4a20d15904140067b9f5dc1586?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
                      alt=""
                      className="shrink-0 w-6 aspect-square "
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5acfca96662aaf942f9783eab88a21b41efff25b658098c39fe03642acd2c19?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
                  alt=""
                  className="grow w-full aspect-[0.82] mt-3 mb-5"
                />
              </div>
            </div>
          </div>
        </div>
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </CardSection>
    </main>
  );
};

export default EffortlessComp;



interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <p className="mt-8 text-base font-semibold leading-6 text-center text-black">
        Revolutionize
      </p>
      <h1 className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
        Effortless Cooking Made Easy
      </h1>
      <p className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
        Discover the Future of Home Cooking with Klynk
      </p>
    </header>
  );
};


interface CardSectionProps {
  children: React.ReactNode;
}

export const CardSection: React.FC<CardSectionProps> = ({ children }) => {
  return (
    <section className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">{children}</div>
    </section>
  );
};


interface CardProps {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  imageSrc: string;
}

export const Card: React.FC<CardProps> = ({
  tagline,
  heading,
  description,
  buttonText,
  imageSrc,
}) => {
  return (
    <article className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
      <div className="relative flex flex-col grow w-full text-base leading-6 text-black bg-white border border-black border-solid max-md:mt-8">
        <div className="flex flex-col pt-6 pr-6 pl-6 pb-18 max-md:px-5">
          <p className="font-semibold">{tagline}</p>
          <h2 className="mt-2 text-2xl font-bold leading-8">{heading}</h2>
          <p className="mt-2 leading-6">{description}</p>
          <div className="flex  justify-start pr-6 mt-6 whitespace-nowrap max-md:pr-5">
            <button>{buttonText}</button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
              alt=""
              className="shrink-0 w-6 aspect-square"
            />
          </div>
        </div>
        <img
          loading="lazy"
          src={imageSrc}
          alt=""
          className="w-full aspect-[1.79] absolute bottom-0"
        />
      </div>
    </article>
  );
};
