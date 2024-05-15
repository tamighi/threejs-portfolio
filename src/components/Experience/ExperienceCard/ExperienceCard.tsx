import { experiencesArray } from "@/assets";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type Props = {
  experience: typeof experiencesArray extends (infer U)[] ? U : never;
};

const ExperienceCard = (props: Props) => {
  const { experience } = props;
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.period}
      iconStyle={{ background: "#E6DEDD" }}
      icon={
        <div className="h-full flex justify-center items-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="w-[60%] h-[60%]"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold">
          {experience.companyName}
        </p>
      </div>
      <p className="tracking-wider text-white-100 whitespace-break-spaces">
        {experience.description}
      </p>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
