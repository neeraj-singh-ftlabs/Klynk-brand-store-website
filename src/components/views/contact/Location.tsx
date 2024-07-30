import React from "react";
interface Location {
  city: string;
  address: string;
  imageUrl: string;
}
const locations: Location[] = [
  {
    city: "Sydney",
    address: "123 Sample St, Sydney NSW 2000 AU",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/af58fe8afeebb6a283cc422f14fb0e50373c44a85cc4ca1a6a1f1425765cc34a?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
  },
  {
    city: "New York",
    address: "123 Sample St, New York NY 10000 USA",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/af58fe8afeebb6a283cc422f14fb0e50373c44a85cc4ca1a6a1f1425765cc34a?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
  },
];
const LocationsPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center  bg-white max-md:px-5 px-[5%]   py-12 md:py-16 lg:py-20">
        <div className='container mx-auto'>

      <header>
        <p className="mt-8 text-base font-semibold leading-6 text-center text-black">
        Connecting
        </p>
        <h1 className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
        Locations
        </h1>
        <p className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
        Find our office locations for easy navigation.
        </p>
      </header>
      <section className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>
      </section>
        </div>
    </main>
  );
};
export default LocationsPage;


interface LocationCardProps {
  city: string;
  address: string;
  imageUrl: string;
}
export const LocationCard: React.FC<LocationCardProps> = ({
  city,
  address,
  imageUrl,
}) => {
  return (
    <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src={imageUrl}
          alt={`${city} location`}
          className="w-full aspect-[1.61] max-md:max-w-full"
        />
        <div className="flex justify-center items-center px-16 mt-8 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[265px]">
            <h2 className="text-3xl font-bold leading-10 text-center">
              {city}
            </h2>
            <p className="mt-4 text-center">{address}</p>
            <div className="flex gap-2 justify-center self-center mt-6">
              <button className="flex items-center gap-2">
                Get Directions
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4aed70e652b9a334e2a683ba9bfef5c04d880fcb9b8ad7514c3dabef58a54d7?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1"
                  alt=""
                  className="shrink-0 w-6 aspect-square"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};