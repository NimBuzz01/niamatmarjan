import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "../section-heading";
import ColorCard from "../color-card";
import Handwritten from "../ui/handwritten";
import { aboutMe } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSection";
import { opacity, slideLeft, slideUp } from "@/lib/anim";

export default function About() {
  const phrase = aboutMe.longDesc;
  const description = useRef(null);
  const isInViewDesc = useInView(description);

  const aboutUI = useRef(null);
  const isInViewUI = useInView(aboutUI);

  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div ref={description}>
        <div className="relative flex flex-col items-center gap-12 mt-12 lg:items-start lg:flex-row">
          <p className="gap-2 m-0 leading-10 text-lg sm:text-2xl md:text-3xl">
            {phrase.split(" ").map((word, index) => {
              return (
                <span
                  className="relative inline-flex overflow-hidden"
                  key={index}
                >
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInViewDesc ? "open" : "closed"}
                    key={index}
                    className="mr-1 sm:mb-2"
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
          <motion.p
            variants={opacity}
            className="w-4/5 m-0 font-light sm:text-lg"
            animate={isInViewDesc ? "open" : "closed"}
          >
            {aboutMe.shortDesc}
          </motion.p>
        </div>
      </div>
      <div
        className="relative flex flex-col lg:flex-row gap-16 lg:gap-20 justify-center items-center mt-40"
        ref={aboutUI}
      >
        <motion.div
          variants={slideLeft}
          custom={0}
          animate={isInViewUI ? "open" : "closed"}
          className="absolute -top-[20%] sm:top-0 left-[10%]"
        >
          <Handwritten className="-rotate-12 text-xl md:text-2xl">
            My Favourites!
          </Handwritten>
        </motion.div>
        <motion.div
          className="text-start"
          variants={slideLeft}
          custom={0}
          animate={isInViewUI ? "open" : "closed"}
        >
          <p className="text-lg">Font</p>
          <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl">
            {aboutMe.favFont}
          </h1>
        </motion.div>
        <motion.div
          className="flex sm:flex-row gap-4"
          variants={slideLeft}
          custom={1}
          animate={isInViewUI ? "open" : "closed"}
        >
          <ColorCard color={aboutMe.primaryColor} />
          <ColorCard color={aboutMe.secondaryColor} />
          <ColorCard color={aboutMe.accentColor} />
        </motion.div>
      </div>
    </motion.section>
  );
}
