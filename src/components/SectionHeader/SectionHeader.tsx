import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { styles } from "../../styles";

type Props = {
  subText: string;
  headText: string;
};

const SectionHeader = (props: Props) => {
  const { subText, headText } = props;
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>{subText}</p>
      <h2 className={styles.sectionHeadText}>{headText}</h2>
    </motion.div>
  );
};

export default SectionHeader;
