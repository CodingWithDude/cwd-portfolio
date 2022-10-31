import {
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiCodepen,
  FiGithub,
} from "react-icons/fi";

export const socialLinkList = [
  { icon: <FiGithub />, href: "https://github.com/CodingWithDude" },
  { icon: <FiInstagram />, href: "https://github.com/CodingWithDude" },
  { icon: <FiTwitter />, href: "https://github.com/CodingWithDude" },
  { icon: <FiLinkedin />, href: "https://github.com/CodingWithDude" },
  { icon: <FiCodepen />, href: "https://github.com/CodingWithDude" },
];

export const navLinks = [
  { name: "about", number: "01.", title: "About" },
  { name: "experience", number: "02.", title: "Experience" },
  { name: "work", number: "03.", title: "Work" },
  { name: "contact", number: "04.", title: "Contact" },
];

const blogProject = {
  image:
    "https://res.cloudinary.com/djjxydn3p/image/upload/v1667167511/portfolio/blog-picture_fe19uv.webp",
  title: "CodingWithDude Blog",
  description: `My digital playground where I share what I'm learning about exciting new technologies and building a career as a self taught developer.`,
  technologies: [
    "TypeScript",
    "Content Layer",
    "MDX",
    "Next.js",
    "TailwindCSS",
  ],
  github: "https://github.com/CodingWithDude/blog",
  url: "https://blog.codingwithdude.com/",
};

export const projects = [blogProject, blogProject];
