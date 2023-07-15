import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { experiences } from "../../../constants";

type Props = {
  experience: typeof experiences extends (infer U)[] ? U : never;
};

const ExperienceCard = (props: Props) => {
  const { experience } = props;
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: "#E6DEDD" }}
      icon={
        <div className="h-full flex justify-center items-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%]"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold">
          {experience.company_name}
        </p>
      </div>
      <p className="tracking-wider text-white-100">{experience.description}</p>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
