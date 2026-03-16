"use client"
import { useState } from 'react';

const Tabs = () => {
  // tracks the active tab
  const [activeTab, setActiveTab] = useState('tab1');

  // handles change to active/nonactive tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex mb-4">
        <button
          onClick={() => handleTabChange("tab1")}
          className={`px-2 mr-4 lg:text-xl text-l font-semibold uppercase tracking-wider ${
            activeTab === "tab1"
              ? "border-b-2 border-violet-600"
              : "border-none"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => handleTabChange("tab2")}
          className={`px-2 lg:text-xl text-l font-semibold uppercase tracking-wider ${
            activeTab === "tab2"
              ? "border-b-2 border-violet-600"
              : "border-none"
          }`}
        >
          Education
        </button>
      </div>

      {/* Tab content */}
      <div className="px-2">
        {activeTab === "tab1" && (
          <div>
            <h3 className="text-blue-600 font-medium text-lg">
              Intern at Nest Nepal
            </h3>
            <ul className="text-xs ml-4 mb-2">
              <li>
                Contributing as a front-end developer, focusing on building
                user-friendly interfaces and enhancing the user experience.
              </li>
            </ul>
            <h3 className="text-blue-600 font-medium text-lg">
              Volunteer at Nepal Scout
            </h3>
            <ul className="text-xs ml-4 mb-2">
              <li>
                Actively participated in community service and leadership
                activities, helping to organize events and assist in training
                programs.
              </li>
            </ul>
          </div>
        )}
        {activeTab === "tab2" && (
          <>
            <div>
              <h3 className="text-blue-600 font-medium text-lg">
                Nepal Commerce Campus
              </h3>
              <ul className="ml-4 mb-2">
                <li className="text-md">
                  Bachelor of Information Management (BIM)<br />
                  GPA : 3.70
                </li>
                <li className="text-sm">
                  Currently in the final semester, focusing on information
                  systems, management, and software development.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-blue-600 font-medium text-lg">
                Nobel Academy
              </h3>
              <ul className="ml-4 mb-2">
                <li className="text-md">
                  GPA : 3.60
                </li>
                <li className="text-sm">
                  Currently in the final semester, focusing on information
                  systems, management, and software development.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-blue-600 font-medium text-lg">
                SirjanShil Secondary English School
              </h3>
              <ul className="ml-4 mb-2">
                <li className="text-md">
                  GPA : 3.50
                </li>
                <li className="text-sm">
                  Currently in the final semester, focusing on information
                  systems, management, and software development.
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
