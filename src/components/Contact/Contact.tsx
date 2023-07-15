import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { styles } from "../../styles";
import { EarthCanvas, SectionWrapper } from "..";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <ContactForm />
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto mb:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
