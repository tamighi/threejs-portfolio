import {
  software,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
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
    title: "Neuropsychology master",
    company_name: "ULB",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2015 - June 2021",
    points: [
      "Master’s degree in neuropsychology. Please see my full resume for more details !",
    ],
  },
  {
    title: "Software developer",
    company_name: "School 19",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2021 - Sep 2022",
    points: [
      "Deep dive into software development. The school 19 (42 network) offers an original way of teaching in the form of projects implementation and peer to peer evaluation.",
    ],
  },
  {
    title: "Self learning journey",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2022 - Now",
    points: [
      "I took this time to learn different topics, especially web development",
      "I built a full-stack website from scratch using NestJS and React. I also created my own UI library and developed core utilities such as complex hooks and a REST API.",
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];


const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, introduction };
