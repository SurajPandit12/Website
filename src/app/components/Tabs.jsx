"use client";
import { useState } from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Nest Nepal Business Solution Pvt. Ltd",
    location: "Kupondole, Lalitpur, Nepal",
    period: "2023 – Present",
    type: "Full-time",
    bullets: [
      {
        icon: "⚛️",
        text: "Developed and maintained responsive web applications using React.js, Next.js, HTML, CSS, and JavaScript.",
      },
      {
        icon: "🎨",
        text: "Collaborated with designers and backend developers to implement user-friendly UI/UX features.",
      },
      {
        icon: "⚡",
        text: "Optimized components for performance and reusability.",
      },
      {
        icon: "🔀",
        text: "Participated in code reviews, debugging, and version control using Git and GitHub. Also attending stand-ups and team meetings to ensure timely delivery of features.",
      },
      {
        icon: "🔧",
        text: "Implemented dynamic routing, API integration, ISR/SSR, and component-based architecture in Next.js.",
      },
    ],
    tags: ["React.js", "Next.js", "HTML", "CSS", "JavaScript", "Git", "GitHub"],
  },
  {
    role: "Volunteer",
    company: "Nepal Scout",
    location: "Nepal",
    period: "Ongoing",
    type: "Volunteer",
    bullets: [
      {
        icon: "🤝",
        text: "Actively participated in community service and leadership activities.",
      },
      {
        icon: "📋",
        text: "Helped organize events and assisted in training programs.",
      },
      {
        icon: "🌱",
        text: "Developed teamwork, communication, and problem-solving skills through real-world service.",
      },
    ],
    tags: ["Leadership", "Community Service", "Event Management"],
  },
];

const education = [
  {
    degree: "Bachelor of Information Management (BIM)",
    school: "Nepal Commerce Campus",
    location: "Minbhawan, Nepal",
    gpa: "3.71",
    period: "2020 – 2024",
    detail:
      "Focused on information systems, management, and software development. Final semester student with strong academic performance.",
    highlight: true,
  },
  {
    degree: "Higher Secondary Education",
    school: "Nobel Academy",
    location: "Baneshowor",
    gpa: "3.60",
    period: "2018 – 2020",
    detail:
      "Completed +2 level studies with a strong foundation in science and computing.",
    highlight: false,
  },
  {
    degree: "Secondary Education (SEE)",
    school: "Sirjanshil Secondary English School",
    location: "Babarmahal",
    gpa: "3.50",
    period: "Completed 2018",
    detail:
      "Completed secondary schooling with distinction in mathematics and science subjects.",
    highlight: false,
  },
];

const skills = [
  "React.js",
  "Next.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "ISR/SSR",
  "API Integration",
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab("tab1")}
          className={`px-2 mr-4 lg:text-xl text-l font-semibold uppercase tracking-wider ${
            activeTab === "tab1"
              ? "border-b-2 border-violet-600"
              : "border-none"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
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
        {/* ── EXPERIENCE ── */}
        {activeTab === "tab1" && (
          <div>
            {experiences.map((exp, i) => (
              <div key={i} className="mb-8">
                {/* Header */}
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <div>
                    <h3 className="text-blue-600 font-medium text-xl">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${
                        exp.type === "Full-time"
                          ? "text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
                          : "text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-700"
                      }`}
                    >
                      {exp.type}
                    </span>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      {exp.location} · {exp.period}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-700 my-2" />

                {/* Bullets */}
                <ul className="text-base ml-4 mb-2 space-y-1.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 items-start">
                      <span className="mt-0.5 flex-shrink-0">{b.icon}</span>
                      <span>{b.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3 ml-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium font-mono px-2 py-0.5 rounded
                        border border-violet-200 dark:border-violet-800
                        text-violet-600 dark:text-violet-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── EDUCATION ── */}
        {activeTab === "tab2" && (
          <div>
            {education.map((ed, i) => (
              <div
                key={i}
                className={`mb-5 p-4 rounded-lg border ${
                  ed.highlight
                    ? "border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/30"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-blue-600 font-medium text-lg">
                      {ed.school}
                    </h3>
                    <p className="text-base font-medium">{ed.degree}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className="text-sm font-semibold font-mono px-2 py-0.5 rounded
                      border border-gray-300 dark:border-gray-600
                      text-gray-700 dark:text-gray-300"
                    >
                      GPA : {ed.gpa}
                    </span>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      {ed.location} · {ed.period}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {ed.detail}
                </p>
              </div>
            ))}

            {/* Core Skills */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                Core Skills
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium font-mono px-2 py-0.5 rounded
                      border border-violet-200 dark:border-violet-800
                      text-violet-600 dark:text-violet-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
