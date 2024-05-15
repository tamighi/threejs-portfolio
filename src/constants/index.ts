import { software, backend, web, cub3d, correctionWebsite } from "@/assets";

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
    image: correctionWebsite,
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
    image: cub3d,
    source_code_link: "https://github.com/",
  },
];

export { services, projects };
