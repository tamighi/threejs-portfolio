import {
  correctionWebsite,
  threejsPortfolio,
  cub3d,
  todocal,
} from "../images/projects";

type Media = {
  src: string;
};

type Tag = {
  name: string;
  color: string;
};

type Projects = {
  [K: string]: {
    name: string;
    description: string;
    demoLink: string | null;
    githubLink: string;
    medias: Readonly<Media[]>;
    tags: Readonly<Tag[]>;
  };
};

export const projects = {
  todocal: {
    name: "Todocal",
    description: `Todocal is a mobile application developed using Expo and React Native. 

It uses SQLite for data storage, while React Query enables optimistic and undoable updates.
The app implements drag-and-drop functionality for task organization and ordering, and includes a tag system for categorization.
It also features filtering, searching and task reusability.`,
    githubLink: "https://github.com/tamighi/todocal",
    demoLink: null,
    medias: [
      {
        src: todocal,
      },
    ],
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "design",
        color: "pink-text-gradient",
      },
    ],
  },
  correctionServices: {
    name: "Correction Services",
    description: `This full stack website is built using React and NestJS. It is compiled with Webpack, containerized with Docker and optimized with nginx.

The backend implements authentication, a PostgreSQL database, aswell as a file service and the frontend includes a custom UI library and utilizes React Query for efficient data handling with optimistic and undoable updates.`,
    githubLink: "https://github.com/tamighi/correction-service-website",
    demoLink: "https://tamighi.github.io/correction-demo",
    medias: [
      {
        src: correctionWebsite,
      },
    ],
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
  },
  threejsPortfolio: {
    name: "Threejs Portfolio",
    description: `This frontend website portfolio is built using React, Three.js, Framer Motion, and Tailwind CSS.

This project is based on a YouTube tutorial and has been further improved. It uses ThreeJS to integrate 3D designs and animations, tailwind for styles and Framer motion for animations.`,
    githubLink: "https://github.com/tamighi/threejs-portfolio",
    demoLink: "https://tamighi.github.io/threejs-portfolio",
    medias: [{ src: threejsPortfolio }],
    tags: [],
  },
  cub3d: {
    name: "cub3d",
    description: `This project is based on the FPS game Wolfenstein3D and utilizes a rendering technique called RayCasting.

It is written entirely in C and uses a simple rendering engine called MiniLibX. The project includes features such as rendering, simple enemy AI, a game loop, and game state handling.`,
    githubLink: "https://github.com/Lysique/cub3d",
    demoLink: null,
    medias: [{ src: cub3d }],
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
  },
} satisfies Projects;

export const projectsArray = Object.entries(projects).map(([id, project]) => ({
  id: id as keyof typeof projects,
  ...project,
}));
