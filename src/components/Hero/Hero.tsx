import { motion } from "framer-motion";
import { HeroTitle } from "./HeroTitle";
import { ComputersCanvas } from "./ComputerCanvas";

const Hero = () => {
  return (
    <section className="pt-[120px] flex flex-col relative w-full h-screen bg-hero-pattern bg-no-repeat bg-cover bg-center">
      <HeroTitle />
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
