"use client";
const Projects = () => {
     const projects = [
       {
         title: "Real Estate Website",
         category: "Web Development",
         description:
           "A comprehensive real estate platform that connects buyers and sellers directly, offering features like property listings, search filters, and user-friendly interfaces.",
         technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
         codeLink: "https://github.com/username/real-estate-website",
         demoLink: "https://realestatewebsite.example.com",
       },
       {
         title: "Weather App API",
         category: "API Integration",
         description:
           "A weather application that fetches real-time data from an external API, displaying current weather conditions, forecasts, and detailed weather metrics.",
         technologies: ["React", "API", "CSS", "JavaScript"],
         codeLink: "https://github.com/username/weather-app",
         demoLink: "https://weatherapp.example.com",
       },
     ];
  return (
    <div
      className="mt-20 border-b border-neutral-700 pb-20 min-h-[800px]"
      id="projects"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          My <span className="text-violet-600">Projects</span>
        </h2>
        <p className="mx-auto max-w-2xl mt-4 text-neutral-400 leading-7">
          Through the process of strengthening my skills, I have worked on a
          variety of projects including front and backend development & UI/UX.
          Focusing on the user experience has enabled me to create thoughtfully
          designed, responsive interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-neutral-800 rounded-2xl p-8 transition-all hover:bg-neutral-700/50 hover:shadow-xl hover:shadow-violet-900/20"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Image placeholder - replace with actual image */}
              <div className="lg:w-1/2 h-64 bg-neutral-600 rounded-xl overflow-hidden transition-transform group-hover:scale-[1.02]">
                <div className="w-full h-full bg-gradient-to-r from-violet-900/30 to-neutral-800/50" />
              </div>

              <div className="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span className="inline-block mb-4 px-3 py-1 text-sm text-green-400 bg-green-900/30 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 leading-6 mb-5">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm text-cyan-300 bg-cyan-900/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      className="flex items-center gap-2 px-5 py-2.5 text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                      View Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      className="flex items-center gap-2 px-5 py-2.5 text-white border border-violet-600 rounded-lg hover:bg-violet-600/20 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-neutral-400">
          Want to see more? Check out my{" "}
          <a
            href="https://github.com/username"
            className="text-violet-500 hover:text-violet-400 transition-colors"
            target="_blank"
          >
            GitHub profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
