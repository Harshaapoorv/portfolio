import { InView } from "react-intersection-observer";

const Education = ({ setActiveSection }) => {
  return (
    <InView
      as={"section"}
      onChange={(inView) => {
        if (inView) setActiveSection("education");
      }}
      threshold={0.4}
    >
      <section id="education" className="min-h-screen bg-[#e7ece8]"></section>
    </InView>
  );
};

export default Education;
