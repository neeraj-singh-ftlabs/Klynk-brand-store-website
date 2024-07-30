import React from 'react';

export interface JobListingProps {
    title: string;
    department: string;
    description: string;
    location: string;
    contractType: string;
  }

  interface OpenPositionsProps {
    jobListings: JobListingProps[];
  }



const OpenPositions: React.FC<OpenPositionsProps> = ({ jobListings }) => {
  return (
    <main className="flex justify-center items-center px-16 py-20 text-black bg-white max-md:px-5">
      <div className="flex flex-col mt-8 max-w-full w-[768px]">
        <h2 className="text-base font-semibold leading-6 text-center max-md:max-w-full">
        Connecting
        </h2>
        <h1 className="mt-4 text-5xl font-bold text-center leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          Open Positions
        </h1>
        <p className="mt-6 text-lg leading-7 text-center max-md:max-w-full">
        Explore our current job opportunities and join our team.
        </p>
        <nav className="flex self-center mt-20 text-base leading-6 max-md:flex-wrap max-md:mt-10">
          <button className="px-4 py-2 border border-black border-solid">View all</button>
          <button className="px-4 py-2">Engineering</button>
          <button className="px-4 py-2">Marketing</button>
          <button className="px-4 py-2">Sales</button>
        </nav>
        {jobListings?.map((job, index) => (
          <JobListing key={index} {...job} />
        ))}
      </div>
    </main>
  );
};

export default OpenPositions;



const JobListing: React.FC<JobListingProps> = ({ title, department, description, location, contractType }) => {
  return (
    <article className="flex flex-col p-8 mt-8 border border-black border-solid max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-4">
          <h3 className="text-2xl font-bold leading-8">{title}</h3>
          <span className="px-2 py-1 my-auto text-sm font-semibold leading-5 whitespace-nowrap bg-zinc-100">
            {department}
          </span>
        </div>
        <button className="flex gap-2 justify-center my-auto text-base leading-6">
          <span>Apply Now</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f" className="shrink-0 w-6 aspect-square" alt="" />
        </button>
      </div>
      <p className="mt-8 text-base leading-6 max-md:max-w-full">
        {description}
      </p>
      <div className="flex gap-5 pr-20 mt-6 text-lg leading-7 max-md:flex-wrap max-md:pr-5">
        <div className="flex gap-3 whitespace-nowrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/379f05ed959dc8f8027f2dd296b572313d589f90b4fa8f630d47f1a210aa6b57?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f" className="shrink-0 my-auto w-6 aspect-square" alt="" />
          <span>{location}</span>
        </div>
        <div className="flex gap-3">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/782f101efced34f1e15d3b229c9fbdd8bbeb4d49ee9ca3399b3fe290cf2b7d96?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f" className="shrink-0 my-auto w-6 aspect-square" alt="" />
          <span>{contractType}</span>
        </div>
      </div>
    </article>
  );
};

