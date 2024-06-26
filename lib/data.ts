import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { ProjectTypes } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const aboutMe = {
  longDesc:
    "Innovative Front-End Developer and UI/UX Designer with a passion for creating engaging digital experiences. Equipped with a keen eye for detail and a deep understanding of user-centered design principles, I bring creativity and technical expertise to every project.",
  shortDesc:
    "When I'm not coding, I enjoy playing video games. I also enjoy learning new things.",
  favFont: "Archivo",
  primaryColor: "#030712",
  secondaryColor: "#f3f4f6",
  accentColor: "#4f46e5",
} as const;

export const experiences = [
  {
    title: "Frontend Developer at EMUQ Tech Inc.",
    location: "Florida, USA",
    // description:'',
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Present",
  },
  {
    title: "Web Developer at ZRI Adventures (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    // description:'',
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2023 - Present",
  },
  {
    title: "Software Engineer Intern at WSO2",
    location: "Colombo, Sri Lanka",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Bsc (Hons) in Computer Science",
    location: "Colombo, Sri Lanka",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Ordinary Level and Advanced Level",
    location: "Colombo, Sri Lanka",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2020",
  },
] as const;

export const projects = [
  {
    title: "ZRI Adventures",
    type: "E-commerce Website",
    number: 1,
    description: "ZRI Adventures is a Sri Lankan adventure agency.",
    tags: ["Design", "Development", "2023"],
    imageUrl: "/images/projects/zriadventures.webp",
    link: "https://zriadventures.com",
  },
  {
    title: "Dunes Cart - Website",
    type: "E-commerce Website",
    number: 2,
    description: "Dunes Cart Ecommerce Website",
    tags: ["Design", "Development", "2024"],
    imageUrl: "/images/projects/dunescart.webp",
    link: "https://dunescart-store.vercel.app/",
  },
  {
    title: "Dunes Cart - Admin Dashboard",
    type: "E-commerce Website",
    number: 3,
    description: "Dunes Cart Admin Dashboard",
    tags: ["Design", "Development", "2024"],
    imageUrl: "/images/projects/dunescart-admin.webp",
    link: "https://dunescart-admin.vercel.app/",
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "AWS",
  "Docker",
  "Appscript",
  "Prisma",
  "Strapi",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Java",
  "Framer Motion",
  "GSAP",
  "Angular",
] as const;
