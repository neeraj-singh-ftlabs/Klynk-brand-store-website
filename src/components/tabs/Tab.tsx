"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Tab {
  title: string;
  url: string;
}

interface NavigationTabsProps {
  tabs: Tab[];
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ tabs }) => {
  const pathname = usePathname();
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(pathname);
  }, [pathname]);
  return (
    <section className="px-[5%] ">
      <ul className="hidden md:flex flex-row justify-end text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabs.map((tab, index) => (
          <li key={index} className="me-2">
            <Link
              href={tab.url}
              className={`inline-block px-4 py-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
                tab.url == url ? "text-blue-300" : "text-black"
              }`}
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NavigationTabs;

// "use client"
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import { usePathname } from 'next/navigation';

// interface Tab {
//   title: string;
//   url: string;
// }

// interface NavigationTabsProps {
//   tabs: Tab[];
// }

// const NavigationTabs: React.FC<NavigationTabsProps> = ({ tabs }) => {
//   const pathname = usePathname();
//   const [url, setUrl] = useState('');

//   useEffect(() => {
//     setUrl(pathname);
//   }, [pathname]);

//   return (
//     <nav className="bg-white dark:bg-gray-800 shadow-md">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <ul className="flex flex-wrap -mb-px">
//           {tabs.map((tab, index) => (
//             <li key={index} className="mr-2">
//               <Link
//                 href={tab.url}
//                 className={`inline-block py-4 px-4 text-sm font-medium rounded-t-lg transition duration-200 ease-in-out
//                   ${tab.url === url
//                     ? "text-blue-600 border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
//                     : "text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
//                   }`}
//               >
//                 {tab.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavigationTabs;
