
// export const  BlogsHeader=() =>{
//     return (
//       <>
//           <h2 className="mt-8 text-base font-semibold leading-6 text-center text-black">
//             Blog
//           </h2>
//           <h1 className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
//             Short heading goes here
//           </h1>
//           <p className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </p>
//           </>
//     )
//   }
  

  import React from 'react';

interface BlogsHeaderProps {
  tagline: string;
  title: string;
  description: string;
}

const BlogsHeader: React.FC<BlogsHeaderProps> = ({ tagline, title, description }) => {
    
  return (
    <>
      <h2 className="mt-8 text-base font-semibold leading-6 text-center text-black">
        {tagline}
      </h2>
      <h1 className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
        {title}
      </h1>
      <p className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
        {description}
      </p>
    </>
  );
};

export default BlogsHeader;
