"use client";

import Tabs from "./Tabs";
import { useState, useEffect } from "react";
import Image from "next/image";

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "/suraj1.jpeg", // Add your actual image paths
      alt: "Suraj Pandit ",
    },
    {
      src: "/suraj.jpeg", // Add your actual image paths
      alt: "Suraj Pandit",
    },
    {
      src: "/sp1.jpeg", // Add your actual image paths
      alt: "Suraj Pandit",
    },
    {
      src: "/sp2.jpeg", // Add your actual image paths
      alt: "Suraj Pandit",
    },
  ];

  // Auto-sliding effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div id="about" className="container">
      <div className="mt-12 border-b border-neutral-700 py-20">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-24">
          {/* Left Column - About Me Text */}
          <div className="w-full flex justify-center lg:justify-center">
            <div className="relative w-full max-w-md lg:max-w-[520px]">
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-violet-900/30 group">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 transform ${
                      index === currentImage
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 via-transparent to-transparent"></div>

                    {/* Image Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-sm font-light">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-violet-600/80 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleNextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-violet-600/80 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImage
                        ? "w-8 bg-violet-600"
                        : "w-2 bg-neutral-600 hover:bg-neutral-400"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-violet-600/20 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="border-b border-neutral-700 pb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-center lg:text-left mb-6 bg-gradient-to-r from-violet-500 to-indigo-800 text-transparent bg-clip-text">
                About Me
              </h2>
              <div className="space-y-4 text-neutral-900">
                <p className="text-sm sm:text-base leading-relaxed text-justify">
                  Hello! I'm Suraj Pandit, a dedicated and passionate individual
                  who have compleated Bachelor of Information Management (BIM)
                  at Nepal Commerce Campus. I'm in my final semester, delving
                  deep into subjects like information systems, management, and
                  software development, which align perfectly with my career
                  aspirations in the tech industry.
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-justify">
                  My journey in technology has been enriched by practical
                  experiences and active involvement in various roles.
                  Currently, I'm interning at Nest Nepal as a front-end
                  developer, where I contribute to building intuitive and
                  user-friendly interfaces. This role allows me to combine my
                  technical skills with creativity, enhancing user experiences
                  and fostering engagement.
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-justify">
                  Beyond academics and professional engagements, I have a strong
                  inclination towards community service. My time as a volunteer
                  with Nepal Scout has been profoundly rewarding. I have
                  actively participated in organizing events, assisting in
                  training programs, and contributing to community development
                  initiatives. This experience has honed my leadership skills
                  and deepened my commitment to making a positive impact on
                  society.
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-justify">
                  Recently, I have embarked on a new learning journey with
                  Next.js, which has opened up new possibilities for building
                  robust and scalable web applications. This continuous learning
                  mindset drives my passion for technology and innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Sliding Images */}
        </div>
        <div className="mb-12">
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default About;
