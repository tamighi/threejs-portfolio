import { SectionWrapper } from "..";
import { technologies } from "../../constants";
import { BallCanvas } from "./BallCanvas";

const Tech = () => {
  return (
    <SectionWrapper idName="tech">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Tech;
