"use client";

import { motion } from "framer-motion";
import {
  Layers,
  ShieldCheck,
  Database,
  GitBranch,
  Workflow,
  Rocket,
} from "lucide-react";

const REASONS = [
  {
    icon: Layers,
    title: "Next.js, for the whole system",
    body: "Frontend and API routes living in one codebase means fewer moving parts and fewer places for something to quietly break between the two. For a platform with four distinct user roles, customer, driver, vendor, admin, that reduction in surface area matters more than it sounds like it should.",
  },
  {
    icon: ShieldCheck,
    title: "TypeScript, as a discipline",
    body: "A decade in digital forensics teaches you that most serious incidents started as small, avoidable ones. Catching a type mismatch at compile time instead of in production is the same instinct applied to code cheaper to fix, and it never reaches a user.",
  },
  {
    icon: Database,
    title: "PostgreSQL over anything schemaless",
    body: "When payment status, job assignment, and live location are all tied together, I want the database itself enforcing those relationships, not trusting the application layer to get every join and constraint right, every single time, under load.",
  },
  {
    icon: Workflow,
    title: "Security built in, not bolted on",
    body: "GDPR-compliant design and vulnerability assessment aren't a final checklist item. They shape decisions from the first schema draft who can query what, what gets logged, what gets encrypted at rest. Slower up front, considerably less painful later.",
  },
  {
    icon: GitBranch,
    title: "Disciplined version control",
    body: "Every feature branch, every commit message, every pull request exists so that when something breaks at 2am, there's a clear trail back to exactly what changed and why the same evidentiary mindset forensics work demands, just applied before the incident instead of after it.",
  },
  {
    icon: Rocket,
    title: "Vercel for deploys without drama",
    body: "Preview deployments on every branch mean a client or stakeholder can see a real, working version of a feature before it touches production, no guessing from a description, no surprises on launch day.",
  },
];

export function WhyTheseTools() {
  return (
    <section className="border-b border-hairline dark:border-midnight-hairline bg-emerald-950/[0.02] dark:bg-emerald-950/10">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-sm text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">
            Technical Rationale
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 text-ink dark:text-white leading-tight">
            The Thinking Behind the Stack
          </h2>
          <p className="mt-4 text-muted dark:text-slate-400 leading-relaxed">
            Every tool below was chosen to solve a specific problem, shaped
            by a background in digital forensics as much as in software
            engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 p-6 flex flex-col"
              >
                <div className="h-11 w-11 rounded-xl bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center text-white shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-lg text-ink dark:text-white mt-4">
                  {r.title}
                </h3>
                <p className="mt-2.5 text-sm text-muted dark:text-slate-400 leading-relaxed">
                  {r.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
