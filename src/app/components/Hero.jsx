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
          <span className="text-blue-600 text-lg hidden sm:inline">GitHub</span>
        </div>
      ),
    },
    {
      url: "https://www.linkedin.com/in/suraj-pandit-0aa093333/",
      icon: (
        <div className="flex items-center gap-2">
          <i className="fab fa-linkedin fa-2x text-blue-600 hover:text-blue-400"></i>
          <span className="text-blue-600 text-lg hidden sm:inline">
            LinkedIn
          </span>
        </div>
      ),
    },
  ];

  const skills = [
    {
      icon: <i className="fab fa-html5 fa-2x sm:fa-3x text-orange-600"></i>,
      name: "HTML",
    },
    {
      icon: <i className="fab fa-css3-alt fa-2x sm:fa-3x text-blue-600"></i>,
      name: "CSS(tailwind)",
    },
    {
      icon: <i className="fab fa-js fa-2x sm:fa-3x text-yellow-500"></i>,
      name: "JavaScript",
    },
    {
      icon: <i className="fab fa-react fa-2x sm:fa-3x text-blue-500"></i>,
      name: "React",
    },
    {
      icon: <i className="fab fa-git-alt fa-2x sm:fa-3x text-red-600"></i>,
      name: "Git",
    },
    {
      icon: <i className="fab fa-git-alt fa-2x sm:fa-3x text-red-600"></i>,
      name: "Nextjs",
    },
    {
      icon: <i className="fab fa-git-alt fa-2x sm:fa-3x text-red-600"></i>,
      name: "GSAP",
    },
  ];

  return (
    <div
      className="border-b border-neutral-700 py-8 sm:py-12 container mx-auto px-4"
      id="home"
    >
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center justify-center gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="w-full text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Hello! I'm{" "}
            <span className="bg-gradient-to-r from-violet-500 to-indigo-800 text-transparent bg-clip-text">
              Suraj Pandit
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl my-3 sm:my-4 tracking-wide">
            I'm a{" "}
            <span className="bg-gradient-to-r from-violet-500 to-indigo-800 text-transparent bg-clip-text typewriter-text">
              Web Developer
            </span>
          </h2>

          <p className="text-base sm:text-lg font-light mb-4 sm:mb-6 max-w-lg mx-auto lg:mx-0">
            I'm passionate about crafting engaging and efficient web
            experiences.
          </p>

          {/* Icons and Resume Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex gap-4 sm:gap-6">
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
            </div>

            <a
              className="hover:scale-110 transition-all text-blue-500 border-2 px-3 sm:px-4 py-2 rounded-md border-blue-500 animate-bounce cursor-pointer text-sm sm:text-base inline-block"
              onClick={handleDownload}
              download
            >
              Download Resume
            </a>
          </div>

          {/* Skills Section */}
          <div>
            <h4 className="uppercase tracking-wider text-violet-500 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
              Skills
            </h4>

            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
              {skills.map((item, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <div className="text-2xl sm:text-3xl">{item.icon}</div>
                  <span className="text-center text-xs sm:text-sm text-neutral-500 mt-1 sm:mt-2">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-md lg:max-w-none mx-auto flex items-center justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] rounded-2xl overflow-hidden">
            <Image
              className="rounded-2xl object-cover"
              src="/suraj.jpeg"
              alt="Suraj Pandit"
              fill
              sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 550px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
