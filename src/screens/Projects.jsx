import { InView } from "react-intersection-observer";

const Projects = ({ setActiveSection }) => {
  return (
    <InView
      as={"section"}
      onChange={(inView) => {
        if (inView) setActiveSection("projects");
      }}
      threshold={0.4}
    >
      <section id="projects" className="min-h-screen bg-[#F5F5F4]"></section>
    </InView>
  );
};

export default Projects;
