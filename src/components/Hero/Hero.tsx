import { ComputerCanvas } from "..";
import { styles } from "../../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row gap-5`}
      >
        <div className="flex flex-col items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I am <span className="text-[#915eff]">Thomas</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am a full stack / software developer</p>
        </div>
      </div>
        <ComputerCanvas />
    </section>
  );
};

export default Hero;
