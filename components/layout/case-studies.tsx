"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "../section-heading";
import { caseStudies } from "@/lib/data/case-studies";
import ParallaxCard from "../ui/parallax-card";

export function CaseStudies() {
  const { ref } = useSectionInView("Case Studies", 0.2);

  return (
    <section
      id="case-studies"
      ref={ref}
      className="w-full mb-28 scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>My Case Studies</SectionHeading>
      <div>
        {caseStudies.map((item, i) => {
          return <ParallaxCard key={`p_${i}`} {...item} i={i} />;
        })}
      </div>
    </section>
  );
}
