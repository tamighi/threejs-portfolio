import { HeroTitle } from "./HeroTitle";
import { ComputersCanvas } from "./ComputerCanvas";
import { ScrollingButton } from "./ScrollingButton";

const Hero = () => {
  return (
    <section className="pt-[120px] flex flex-col relative w-full h-screen bg-hero-pattern bg-no-repeat bg-cover bg-center">
      <HeroTitle />
      <ComputersCanvas />
      <ScrollingButton />
    </section>
  );
};

export default Hero;
