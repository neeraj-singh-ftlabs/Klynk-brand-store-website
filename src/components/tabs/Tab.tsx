"use client"
import Link from 'next/link';
import React from 'react';
import { useEffect,useState } from 'react';
import { usePathname } from 'next/navigation';

interface Tab {
  title: string;
  url: string;
}

interface NavigationTabsProps {
  tabs: Tab[];
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ tabs }) => {


  const pathname = usePathname();
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(pathname);
  }, [pathname]);
  return (
    <section className="px-[5%]">
      {/* <div className="container"> */}
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      {tabs.map((tab, index) => (
        <li key={index} className="me-2">
          <Link
            href={tab.url}
            className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${tab.url==url?"text-blue-300":"text-black"}`}
          >
            {tab.title}
          </Link>
        </li>
      ))}
    </ul>
    {/* </div> */}
    </section>
  );
};

export default NavigationTabs;
