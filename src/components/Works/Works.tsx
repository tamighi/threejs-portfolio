import { projects } from "../../constants";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader, SectionWrapper } from "..";

const Works = () => {
  return (
    <SectionWrapper idName="work">
      <SectionHeader subText="My works" headText="Projects" />
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Works;
