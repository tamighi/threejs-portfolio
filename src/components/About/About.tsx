import { motion } from "framer-motion";

import { about } from "@/assets/shared";
import { services } from "@/constants";

import { fadeIn } from "../../utils/motion";
import { ServiceCard } from "./ServiceCard";
import { SectionHeader, SectionWrapper } from "..";

const About = () => {
  return (
    <SectionWrapper idName="about">
      <SectionHeader subText="Introduction" headText="Overview" />
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px] whitespace-break-spaces"
      >
        {about}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              icon={service.icon}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default About;
