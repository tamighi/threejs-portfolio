import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../../../utils/motion";
import { github } from "@/assets/shared";
import { external, projects } from "@/assets";

type Props = {
  project: typeof projects extends (infer U)[] ? U : never;
  index: number;
};

const ProjectCard = (props: Props) => {
  const { project, index } = props;
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-full mb-10">
          <img
            src={project.medias[0].src}
            alt={project.name}
            className="max-h-80 rounded-2xl"
          />
          <div className="absolute flex justify-end inset-0 m-3 card-img_hover gap-2">
            <a
              className="black-gradient justify-center items-center flex w-10 h-10 rounded-full card-img_hover"
              href={project.githubLink}
              target="_blank"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2" />
            </a>
            {project.demoLink && (
              <a
                className="black-gradient justify-center items-center flex w-10 h-10 rounded-full card-img_hover"
                href={project.demoLink}
                target="_blank"
              >
                <img src={external} alt="demo" className="w-1/2 h-1/2" />
              </a>
            )}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px] whitespace-break-spaces">
            {project.description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-[14px]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
