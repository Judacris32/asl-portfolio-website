import type { Metadata } from "next";
import { BackButton } from "@/components/BackButton";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "About | Adebowale Samuel Lipede",
  description:
    "Founder & Technical Architect at ART Services LTD — background in digital forensics and full-stack engineering.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <BackButton />
      <About />
    </main>
  );
}
