import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import { styles } from "../../styles";

type Props = {
  idName: string;
  children: React.ReactNode;
};

const SectionWrapper = (props: Props) => {
  const { children, idName } = props;
  return (
    <motion.section
      initial="hidden"
      variants={staggerContainer()}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 w-full`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
