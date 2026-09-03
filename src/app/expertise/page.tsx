import type { Metadata } from "next";
import { BackButton } from "@/components/BackButton";
import { Expertise } from "@/components/Expertise";

export const metadata: Metadata = {
  title: "Expertise | Adebowale Samuel Lipede",
  description:
    "Technical stack and expertise across frontend, full-stack architecture, and enterprise security.",
};

export default function ExpertisePage() {
  return (
    <main className="min-h-screen">
      <BackButton />
      <Expertise />
    </main>
  );
}
