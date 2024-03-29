"use client";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Preloader from "@/components/preloader";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import About from "@/components/about";
import { Designs } from "@/components/designs";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <main data-scroll-section className="flex flex-col items-center px-4">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Designs />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
