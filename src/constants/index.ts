import {
  software,
  backend,
  web,
  typescript,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  selftaught,
  fortytwo,
  ulb,
  carrent,
  tripguide,
} from "../assets";

const introduction =
  "I'm a Neuropsychology master's graduate turned passionate developer.\n\n" +
  "My journey led me to School 19 (42 network), renowned for its unique teaching program that emphasizes engaging projects and a self-directed learning model.\n\n" +
  "I've since developped my web programing skills through different projects and I am actively looking for opportunities as a web developer.";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: software,
  },
];

const experiences = [
  {
    title: "Self learning journey",
    company_name: "Self taught",
    icon: selftaught,
    date: "Sep 2022 - Now",
    description:
      "I took this time to learn different topics, especially web development." +
      "I built a full-stack website from scratch using NestJS and React. I also created my own UI library and developed core utilities such as complex hooks and a REST API.",
  },
  {
    title: "Software developer",
    company_name: "School 19",
    icon: fortytwo,
    date: "July 2021 - Sep 2022",
    description:
      "Deep dive into software development. The school 19 (42 network) offers an original way of teaching in the form of projects implementation and peer to peer evaluation.",
  },
  {
    title: "Neuropsychology master",
    company_name: "ULB",
    icon: ulb,
    date: "Sep 2015 - June 2021",
    description:
      "Master’s degree in neuropsychology. Courses in neuropsychology, neurology and research in the field along with internships and a thesis.",
  },
];

const technologies = [
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "Correction services website",
    description:
      "This full stack website is built using React and NestJS. It is compiled with Webpack, containerized with Docker and optimized with nginx.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Cub3D",
    description:
      "This project is based on the FPS game Wolfenstein3D and utilizes a rendering technique called RayCasting. It is coded entirely in C.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "rendering",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects, introduction };
