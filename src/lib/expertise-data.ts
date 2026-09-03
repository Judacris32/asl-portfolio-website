export interface Skill {
  name: string;
  /** Path to a real logo PNG in /public/icons/stack — preferred when available */
  logo?: string;
}

export interface ExpertiseCategory {
  title: string;
  description: string;
  image: string;
  skills: Skill[];
}

export const EXPERTISE_CATEGORIES: ExpertiseCategory[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, highly interactive, and accessible user interfaces with modern frameworks.",
    image: "/images/expertise/Frontend-Development.png",
    skills: [
      { name: "Next.js", logo: "/icons/stack/nextjs.png" },
      { name: "React.js", logo: "/icons/stack/react.png" },
      { name: "TypeScript", logo: "/icons/stack/typescript.png" },
      { name: "JavaScript", logo: "/icons/stack/javascript.png" },
      { name: "Tailwind CSS", logo: "/icons/stack/tailwind.png" },
      { name: "Gatsby", logo: "/icons/stack/gatsby.png" },
      { name: "HTML", logo: "/icons/stack/html.png" },
      { name: "CSS", logo: "/icons/stack/css.png" },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Designing scalable backend integrations, robust system architectures, and secure client solutions.",
    image: "/images/expertise/Full-Stack.png",
    skills: [
      { name: "PostgreSQL", logo: "/icons/stack/postgresql.png" },
      { name: "Python", logo: "/icons/stack/python.png" },
      { name: "React Native", logo: "/icons/stack/react-native.png" },
      { name: "SendGrid", logo: "/icons/stack/sendgrid.png" },
      { name: "Supabase", logo: "/icons/stack/supabase.png" },
    ],
  },
  {
    title: "Development Workflow",
    description:
      "Leveraging cutting-edge command-line utilities and version control for seamless deployments.",
    image: "/images/expertise/Development-Workflow.png",
    skills: [
      { name: "Git", logo: "/icons/stack/git.png" },
      { name: "GitHub", logo: "/icons/stack/github.png" },
      { name: "Vercel", logo: "/icons/stack/vercel.png" },
      { name: "Netlify", logo: "/icons/stack/netlify.png" },
      { name: "Heroku", logo: "/icons/stack/heroku.png" },
      { name: "VS Code", logo: "/icons/stack/visual_studio_code.png" },
    ],
  },
  {
    title: "Digital Consulting & Design",
    description:
      "Delivering professional brand identity, UI/UX consulting, and custom promotional asset creation.",
    image: "/images/expertise/Digital-Consulting.png",
    skills: [
      { name: "Figma", logo: "/icons/stack/figma.png" },
      { name: "WordPress", logo: "/icons/stack/wordpress.png" },
      { name: "UI/UX Design", logo: "/icons/stack/ui_ux.png" },
      { name: "Brand Identity", logo: "/icons/stack/identity.png" },
    ],
  },
];