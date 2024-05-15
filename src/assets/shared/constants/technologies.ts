import {
  typescript,
  css,
  reactjs,
  nodejs,
  git,
  docker,
  cpp,
  c,
  webpack,
} from "../images";

export const technologies = [
  {
    branch: "Web development",
    skills: [
      {
        logo: reactjs,
        name: "React",
      },
      {
        logo: nodejs,
        name: "NodeJS",
      },
      {
        logo: typescript,
        name: "Typescript",
      },
      {
        logo: css,
        name: "CSS3",
      },
    ],
  },
  {
    branch: "Software development",
    skills: [
      {
        logo: cpp,
        name: "C++",
      },
      {
        logo: c,
        name: "C",
      },
    ],
  },
  {
    branch: "Others",
    skills: [
      {
        logo: webpack,
        name: "Webpack",
      },
      {
        logo: git,
        name: "Git",
      },
      {
        logo: docker,
        name: "Docker",
      },
    ],
  },
] as const;
