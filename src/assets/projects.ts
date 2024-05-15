import { projectsArray } from "./shared";

export const projects = projectsArray.filter(
  ({ id }) => id !== "threejsPortfolio"
);
