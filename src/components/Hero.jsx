import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex sm:flex-row items-start gap-5`}
      >
        <img
          src={profile}
          className="hidden sm:block sm:w-40 md:w-60 lg:w-80 rounded-lg mt-6"
          alt="description"
        />
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Mohamad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Creative, Ambitious and Detrmined <br className="sm:block hidden" />
            <span className="border-b border-[#915EFF]">Frontend</span>{" "}
            Developer ッ
          </p>
          <img
            src={profile}
            className="sm:hidden w-60 rounded-lg mt-12 ml-2"
            alt="description"
          />
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      <div className="absolute hidden sm:flex xs:bottom-10 bottom-32 w-full  justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
export default Hero;
