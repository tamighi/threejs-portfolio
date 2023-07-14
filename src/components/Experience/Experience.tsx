import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "../../constants";
import { ExperienceCard } from "./ExperienceCard";
import { SectionHeader, SectionWrapper } from "..";

import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <SectionWrapper idName="experience">
      <SectionHeader subText="What I have done so far" headText="Education" />
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
