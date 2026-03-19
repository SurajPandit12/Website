"use client";

const Projects = () => {
  const projects = [
    {
      title: "Real Estate Website",
      category: "Property Portal",
      description:
        "A comprehensive real estate platform featuring property listings, advanced search filters, and instant WhatsApp contact integration. Includes direct contact options through phone, email, WhatsApp, Viber, and Instagram, plus an online quote request system for cleaning services.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "WhatsApp API",
        "JavaScript",
        "Responsive Design",
      ],
      demoLink: "#", // Add actual links when available
    },
    {
      title: "Nest Nepal",
      category: "Hosting Platform",
      description:
        "As part of the development team, I designed and developed clean, responsive user interfaces for the company's hosting and service platform. Optimized performance through code refactoring, lazy loading, and accessibility improvements.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Next.js",
        "Performance Optimization",
      ],
      demoLink: "https://nestnepal.com/",
    },

    {
      title: "Apartment Cleaning Service",
      category: "Cleaning Service Platform",
      description:
        "The website offers various direct contact options: phone, email, WhatsApp, Viber, and Instagram. Users can submit quote requests via an online form (name, contact, service type, message) and receive responses The site clearly presents its core cleaning services.",
      technologies: [
        "Nextjs",
        "Tailwind CSS",
        "JavaScript",
        "Performance Optimization",
        "Data Visualization",
        "Dashboard UI",
      ],
      demoLink: "https://besteverhospitality.com.au/",
    },
    {
      title: "Well-Spring",
      category: "pharmacy website",
      description:
        "This website showcase the pharmacy’s services, allows customers to browse health and wellness products, and contact the care team directly for consultations. ",
      technologies: [
        "Nextjs",
        "Tailwind CSS",
        "JavaScript",
        "Performance Optimization",
        "Data Visualization",
        "Dashboard UI",
      ],
      demoLink: "https://well-spring.com/",
    },
    {
      title: "Fit Dripp Clothing",
      category: "E-commerce Platform",
      description:
        "Admin control system for clothing inventory management with real-time database updates. Features include add, update, and delete functionality for clothing items. Designed a responsive, user-friendly UI to improve product browsing and customer shopping experience.",
      technologies: [
        "React",
        "Database Management",
        "Admin Dashboard",
        "Real-time Updates",
        "Responsive UI",
      ],
      demoLink: "#",
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
              {/* Image placeholder with project-specific colors */}
              <div className="lg:w-1/2 h-64 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 rounded-xl overflow-hidden transition-transform group-hover:scale-[1.02] border border-neutral-700 group-hover:border-violet-500/30">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl opacity-50 group-hover:opacity-70 transition-opacity">
                    {project.title === "Real Estate Website" && "🏠"}
                    {project.title === "Nest Nepal" && "🏢"}
                    {project.title === "Nest SMS" && "📱"}
                    {project.title === "Fit Dripp Clothing" && "👕"}
                  </span>
                </div>
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
                  <a
                    href={project.codeLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-5 py-2.5 text-white ${
                      project.codeLink
                        ? "bg-violet-600 hover:bg-violet-700"
                        : "bg-neutral-700 cursor-not-allowed opacity-50"
                    } rounded-lg transition-colors`}
                    onClick={(e) => !project.codeLink && e.preventDefault()}
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
                  {project.demoLink && project.demoLink !== "#" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
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
            href="https://github.com/SurajPandit12"
            className="text-violet-500 hover:text-violet-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
