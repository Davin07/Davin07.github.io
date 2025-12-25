import { LucideIcon } from "lucide-react";

export enum Category {
  LANGUAGES = "Languages",
  TECHNOLOGIES = "Technologies",
  TOOLS = "Developer Tools"
}

export interface Skill {
  name: string;
  category: Category;
  icon?: LucideIcon;
  level: number; // 0-100
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}
