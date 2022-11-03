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
  { icon: <FiTwitter />, href: "https://twitter.com/codingwithdude" },
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
    "https://res.cloudinary.com/djjxydn3p/image/upload/v1667437768/portfolio/blog_updated_gelvd9.png",
  // image:
  //   "https://res.cloudinary.com/djjxydn3p/image/upload/v1666750237/cld-sample-3.jpg",
  title: "CodingWithDude Blog",
  description: `My blog built in Next.js with MDX Syntax Highlighting from rehype-pretty-code for code blocks, this is where I share what I am learning. Built with content-layer, TypeScript and styled with tailwind.`,
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
