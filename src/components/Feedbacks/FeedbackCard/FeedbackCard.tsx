import { motion } from "framer-motion";
import { testimonials } from "../../../constants";
import { fadeIn } from "../../../utils/motion";

type Props = {
  index: number;
  feedback: typeof testimonials extends (infer U)[] ? U : never;
};

const FeedbackCard = (props: Props) => {
  const { index, feedback } = props;
  const { testimonial, name, image, company, designation } = feedback;

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img src={image} alt={name} className="w-10 h-10 rounded-full"/>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
