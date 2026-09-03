"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Newspaper } from "lucide-react";

const ITEMS = [
  {
    title: "Technical Innovation Excellence Award",
    org: "Titans of Tech Africa · 2023",
    image: "/images/awards/independent-ng.png",
    type: "award" as const,
  },
  {
    title: "Most Outstanding Software Solutions Architect",
    org: "Nigeria Technology Awards · 2024",
    image: "/images/awards/nita-award.png",
    type: "award" as const,
  },
  {
    title: "Building Digital Solutions for Africa's Roadside Assistance Industry",
    org: "Disrupt Africa · 2025",
    image: "/images/awards/disrupt-africa.png",
    type: "press" as const,
  },
];

export function AwardsPreview() {
  return (
    <section className="border-b border-hairline dark:border-midnight-hairline bg-emerald-950/[0.02] dark:bg-emerald-950/10">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">
              Recognition
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 text-ink dark:text-white">
              Two national wins, and the press noticed too
            </h2>
          </div>
          <Link
            href="/awards"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:gap-3 transition-all shrink-0"
          >
            See awards &amp; coverage
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-hairline dark:border-midnight-hairline bg-paper dark:bg-midnight-surface"
            >
              <div className="relative h-16 w-16 rounded-xl overflow-hidden border border-hairline dark:border-midnight-hairline shrink-0 bg-white">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                  {item.type === "press" ? (
                    <Newspaper className="h-3.5 w-3.5 shrink-0" />
                  ) : (
                    <Trophy className="h-3.5 w-3.5 shrink-0" />
                  )}
                  <span className="text-xs font-semibold uppercase tracking-wide truncate">
                    {item.org}
                  </span>
                </div>
                <p className="text-sm font-medium text-ink dark:text-white mt-1 leading-snug">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
