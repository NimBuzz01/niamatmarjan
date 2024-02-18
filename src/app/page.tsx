"use client";
import NavHeader from "@/components/header/header";
import Landing from "@/components/landing/landing";
import Preloader from "@/components/preloader/preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main data-scroll-section className="w-full bg-gray-900 h-[200dvh]">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <NavHeader />
      <Landing />
    </main>
  );
}
