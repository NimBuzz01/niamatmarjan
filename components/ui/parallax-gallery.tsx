"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const ParallaxGallery = ({
  items,
}: {
  items: {
    title: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = items.slice(0, 5);
  const secondRow = items.slice(5, 10);
  const thirdRow = items.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse mb-20 space-x-20 space-x-reverse">
          {firstRow.map((item) => (
            <ProductCard item={item} translate={translateX} key={item.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((item) => (
            <ProductCard
              item={item}
              translate={translateXReverse}
              key={item.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          {thirdRow.map((item) => (
            <ProductCard item={item} translate={translateX} key={item.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  item,
  translate,
}: {
  item: {
    title: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={item.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <div className="block group-hover/product:shadow-2xl ">
        <Image
          src={item.thumbnail}
          height="600"
          width="600"
          className="absolute inset-0 object-cover object-left-top w-full h-full"
          alt={item.title}
        />
      </div>
      <div className="absolute inset-0 w-full h-full bg-black opacity-0 pointer-events-none group-hover/product:opacity-80"></div>
      <h2 className="absolute text-white opacity-0 bottom-4 left-4 group-hover/product:opacity-100">
        {item.title}
      </h2>
    </motion.div>
  );
};
