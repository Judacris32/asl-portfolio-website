import type { Metadata } from "next";
import { BackButton } from "@/components/BackButton";
import { Awards } from "@/components/Awards";

export const metadata: Metadata = {
  title: "Awards & Recognition | Adebowale Samuel Lipede",
  description:
    "Titans of Tech Africa Award 2023 and Nigeria Technology Awards 2024 — national recognition for technical innovation.",
};

export default function AwardsPage() {
  return (
    <main className="min-h-screen">
      <BackButton />
      <Awards />
    </main>
  );
}
