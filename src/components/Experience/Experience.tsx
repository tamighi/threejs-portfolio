import { VerticalTimeline } from "react-vertical-timeline-component";
import { ExperienceCard } from "./ExperienceCard";
import { SectionHeader, SectionWrapper } from "..";
import { experiencesArray } from "@/assets";

import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <SectionWrapper idName="experience">
      <SectionHeader subText="What I have done so far" headText="Education" />
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiencesArray.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
