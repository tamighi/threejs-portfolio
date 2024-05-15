import { technologies as sharedTechnologies } from "./shared/constants/technologies";

export const technologies = sharedTechnologies
  .map((skill) => skill.skills)
  .flat();
