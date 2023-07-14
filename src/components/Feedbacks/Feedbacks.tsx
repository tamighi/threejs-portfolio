import { styles } from "../../styles";
import { testimonials } from "../../constants";
import { FeedbackCard } from "./FeedbackCard";
import { SectionHeader, SectionWrapper } from "..";

const Feedbacks = () => {
  return (
    <SectionWrapper idName="feedback">
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
        >
          <SectionHeader subText="What people say" headText="Testimonials" />
        </div>
        <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={index} feedback={testimonial} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Feedbacks;
