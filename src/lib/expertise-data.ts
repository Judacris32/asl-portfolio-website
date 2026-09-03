import { Code2, Globe, Cpu, Palette } from "lucide-react";

export const EXPERTISE_CATEGORIES = [
  {
    title: "Frontend Development",
    description: "Building responsive, highly interactive web applications with modern UI frameworks.",
    icon: Code2,
    image: "/images/projects/Frontend-Development.png",
    skills: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Full-Stack Architecture",
    description: "Designing end-to-end digital solutions, multi-sided platforms, and robust database backends.",
    icon: Globe,
    image: "/images/projects/Customer App.png",
    skills: [
      { name: "Node.js" },
      { name: "Supabase" },
      { name: "PostgreSQL" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Digital Consulting & Strategy",
    description: "Providing expert advisory for enterprise web products, technical planning, and educational platforms.",
    icon: Cpu,
    image: "/images/projects/Admin Dashboard.png",
    skills: [
      { name: "Technical Architecture" },
      { name: "Client Invoicing" },
      { name: "Project Management" },
      { name: "Digital Strategy" },
    ],
  },
  {
    title: "Brand Design & Assets",
    description: "Crafting visual identities, custom vector logos, layouts, and promotional marketing materials.",
    icon: Palette,
    image: "/images/projects/Vendor.png",
    skills: [
      { name: "Brand Identity" },
      { name: "UI Design" },
      { name: "Framer" },
      { name: "Visual Assets" },
    ],
  },
];