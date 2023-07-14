import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "../../constants";

import "react-vertical-timeline-component/style.min.css";
import { ExperienceCard } from "./ExperienceCard";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
