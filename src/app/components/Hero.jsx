"use client";

import "./Hero.css";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1OtmA7hZKgRWjIm9DayIWl3EZHggATALI/view?usp=sharing";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "resume.pdf";
    link.click();
  };

  const icons = [
    {
      url: "https://github.com/SurajPandit12",
      icon: (
        <div className="flex items-center gap-2">
          <i className="fab fa-github fa-2x text-blue-600 hover:text-gray-400"></i>
          <span className="text-blue-600 text-lg">GitHub</span>
        </div>
      ),
    },
    {
      url: "https://www.linkedin.com/in/suraj-pandit-0aa093333/",
      icon: (
        <div className="flex items-center gap-2">
          <i className="fab fa-linkedin fa-2x text-blue-600 hover:text-blue-400"></i>
          <span className="text-blue-600 text-lg">LinkedIn</span>
        </div>
      ),
    },
  ];

  const skills = [
    {
      icon: <i className="fab fa-html5 fa-3x text-orange-600"></i>,
      name: "HTML",
    },
    {
      icon: <i className="fab fa-css3-alt fa-3x text-blue-600"></i>,
      name: "CSS(tailwind)",
    },
    {
      icon: <i className="fab fa-js fa-3x text-yellow-500"></i>,
      name: "JavaScript",
    },
    {
      icon: <i className="fab fa-react fa-3x text-blue-500"></i>,
      name: "React",
    },
    {
      icon: <i className="fab fa-git-alt fa-3x text-red-600"></i>,
      name: "Git",
    },
    {
      icon: <i className="fab fa-git-alt fa-3x text-red-600"></i>,
      name: "Nextjs",
    },
    {
      icon: <i className="fab fa-git-alt fa-3x text-red-600"></i>,
      name: "GSAP",
    },
  ];

  return (
    <div className="border-b border-neutral-700 py-12 container " id="home">
      <div className="grid grid-cols-2 items-center justify-center w-full flex-wrap justify-center items-center h-full w-full">
        <div className="p-2 w-full  mt-0 lg:mt-20 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Hello! I'm{" "}
            <span className="bg-gradient-to-r from-violet-500 to-indigo-800 text-transparent bg-clip-text ">
              Suraj Pandit
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl my-4 tracking-wide">
            I'm a{" "}
            <span className="bg-gradient-to-r from-violet-500 to-indigo-800 text-transparent bg-clip-text typewriter-text">
              Web Developer
            </span>
          </h2>
          <p className="text-lg font-light mb-6">
            I'm passionate about crafting engaging and efficient web
            experiences.
          </p>
          <div className="flex justify-center lg:justify-start gap-6 mb-8">
            {icons.map((item, index) => (
              <a
                className="transition-transform transform hover:scale-110 flex items-center gap-2"
                href={item.url}
                target="_blank"
                key={index}
                rel="noreferrer"
              >
                {item.icon}
              </a>
            ))}
            <a
              className="hover:scale-110 transition-all text-blue-500 border-2 px-4 py-2 rounded-md border-blue-500 animate-bounce cursor-pointer"
              onClick={handleDownload}
              download
            >
              Download Resume
            </a>
          </div>
          <h4 className="uppercase tracking-wider text-violet-500 font-medium mb-4">
            Skills
          </h4>
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            {skills.map((item, index) => (
              <div className="flex flex-col items-center" key={index}>
                {item.icon}
                <span className="text-center text-sm text-neutral-500 mt-2">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center h-full w-full h-full rounded-2xl">
          <Image
            className="rounded-2xl"
            src="/suraj.jpeg"
            alt="Suraj Pandit"
            width={550}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
