import { InView } from "react-intersection-observer";

const Experience = ({ setActiveSection }) => {
  return (
    <InView
      as={"section"}
      onChange={(inView) => {
        if (inView) setActiveSection("experience");
      }}
      threshold={0.4}
    >
      <section id="experience" className="min-h-screen bg-[#f5f5f4]"></section>
    </InView>
  );
};

export default Experience;
