import { SectionWrapper } from "..";
import { technologies } from "../../constants";
import { BallCanvas } from "./BallCanvas";

const Tech = () => {
  return (
    <SectionWrapper idName="tech">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div className="flex flex-col gap-5 items-center" key={index}>
            <div className="w-28 h-28">
              <BallCanvas icon={technology.icon} />
            </div>
            <span className="text-secondary font-semibold">{technology.name}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Tech;
