'use client'
import React, { useState } from 'react'

const Sidebar = ({ sections }:any) => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [expandedSections, setExpandedSections] = useState<any>([]);

  const toggleSection = (section: any) => {
      if (section.subSections) {
         setActiveSection(section.subSection);
      setExpandedSections((prev: any) =>
        prev.includes(section.id)
          ? prev.filter((id: any) => id !== section.id)
          : [...prev, section.id]
      );
    } else {
      setActiveSection(section);
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <nav className="md:w-1/4">
        <ul className="sticky top-4 bg-white shadow-md rounded-lg p-4">
          {sections.map((section: any) => (
            <li key={section.id} className="mb-2">
              <button
                onClick={() => {
                  return toggleSection(section), setActiveSection(section);
                }}
                className={`w-full text-left px-2 py-1 rounded ${
                  activeSection.id === section.id
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {section.title}
              </button>
              {section.subSections && expandedSections.includes(section.id) && (
                <ul className="ml-4 mt-2">
                  {section.subSections.map((subSection: any) => (
                    <li key={subSection.id} className="mb-1">
                      <button
                        onClick={() => setActiveSection(subSection)}
                        className={`w-full text-left px-2 py-1 rounded text-sm ${
                          activeSection.id === subSection.id
                            ? "bg-blue-300 text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {subSection.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="md:w-3/4">
        <div className="bg-white shadow-md leading-8 rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-4">
            {activeSection.title}
          </h1>
          {activeSection.content}
        </div>
      </div>
    </div>
  );
};

export default Sidebar
