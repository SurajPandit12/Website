import Tabs from "./Tabs";

const About = () => {
  return (
    <div id="about" className="container">
      <div className="mt-20 border-b border-neutral-700 py-12">
        <div className="justify-center gap-4">
          <div className="mb-20">
            <Tabs />
          </div>
          <div className="w-full lg:max-w-1/2 mx-auto">
            <div className="mb-2 border-b border-neutral-700 pb-2">
              <h2 className="text-xl lg:text-2xl font-bold text-center">
                About Me
              </h2>
              <p className="text-md lg:text-l leading-8 pb-2 text-justify">
                Hello! I'm Suraj Pandit, a dedicated and passionate individual
                currently pursuing my Bachelor of Information Management (BIM)
                at Nepal Commerce Campus. I'm in my final semester, delving deep
                into subjects like information systems, management, and software
                development, which align perfectly with my career aspirations in
                the tech industry. My journey in technology has been enriched by
                practical experiences and active involvement in various roles.
                Currently, I'm interning at Nest Nepal as a front-end developer,
                where I contribute to building intuitive and user-friendly
                interfaces. This role allows me to combine my technical skills
                with creativity, enhancing user experiences and fostering
                engagement. Beyond academics and professional engagements, I
                have a strong inclination towards community service. My time as
                a volunteer with Nepal Scout has been profoundly rewarding. I
                have actively participated in organizing events, assisting in
                training programs, and contributing to community development
                initiatives. This experience has honed my leadership skills and
                deepened my commitment to making a positive impact on society.{" "}
              </p>

              <p className="text-md lg:text-l leading-8">
                Recently, I have embarked on a new learning journey with
                Next.js, which has opened up new possibilities for building
                robust and scalable web applications. This continuous learning
                mindset drives my passion for technology and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
