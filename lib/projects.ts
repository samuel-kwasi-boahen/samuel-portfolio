export type Project = {
  slug: string;
  title: string;
  category: "Data Analytics" | "Web Development" | "UI/UX Design";
  summary: string;
  tags: string[];
  liveUrl: string | null;
  githubUrl: string | null;
};

export const projects: Project[] = [
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    category: "Web Development",
    summary: "A personal portfolio website built using Next.js, TypeScript, and Tailwind CSS. It showcases my projects, skills, and experience in web development.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: null,
    githubUrl: "https://github.com/samuel-kwasi-boahen/samuel-portfolio",
  },
];