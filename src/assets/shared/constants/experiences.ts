import { european_union, fortytwo, selftaught } from "../images";

type Experiences = {
  [K: string]: {
    title: string;
    companyName: string;
    period: string;
    description: string;
    icon?: string;
  };
};

const experiences: Experiences = {
  SJeuropeanCommission: {
    title: "Full stack developper",
    period: "Sep 2023 - Today",
    companyName: "European Comission",
    icon: european_union,
    description: `Employed as an IT consultant within the Legal Service Department at the European Commission. 

In charge of the maintenance and migration of various Angular and Symfony applications. 

Creation and configuration of end-to-end tests for multiple applications, including the development of a shared, sustainable library and the composition of comprehensive test suites for multiple clients.
Implementation a reusable "quality code" package to enforce linting, formatting, and other standards for both Angular and Symfony applications, along with various new features across projects.`,
  },
  selfLearningJourney: {
    title: "Self learning journey",
    period: "Sep 2022 - August 2023",
    companyName: "Self taught",
    icon: selftaught,
    description: `I took this time to learn different topics, especially web development.

I built a full-stack website from scratch using NestJS and React. I also created my own UI library used in this project with core utilities such as theming and form handling.`,
  },
  school19: {
    title: "Software developer",
    companyName: "School 19",
    period: "July 2021 - Sep 2022",
    icon: fortytwo,
    description: `Deep dive into software development. The school 19 (42 network) offers an original way of teaching in the form of projects implementation and peer to peer evaluation.`,
  },
};

export const experiencesArray = Object.entries(experiences).map(
  ([id, experience]) => ({ id, ...experience })
);
