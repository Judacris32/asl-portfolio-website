"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EXPERTISE_CATEGORIES } from "@/lib/expertise-data";

export function ExpertisePreview() {
  return (
    <section className="border-b border-hairline dark:border-midnight-hairline bg-emerald-950/[0.02] dark:bg-emerald-950/10 py-20 md:py-28 overflow-hidden">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Competencies</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink dark:text-white uppercase tracking-tight">
              What I actually work with, day to day
            </h2>
          </div>
          <Link
            href="/expertise"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:gap-3 transition-all shrink-0"
          >
            <span>See the full stack</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE_CATEGORIES.map((category, i) => {
            const IconComponent = category.icon;
            // Preview shows the skills capped so the card stays compact
            const previewSkills = category.skills.slice(0, 4);

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl bg-paper/90 dark:bg-midnight-surface/90 backdrop-blur-md border border-emerald-600/30 dark:border-emerald-500/30 shadow-xl shadow-emerald-950/10 flex flex-col justify-between overflow-hidden group hover:border-emerald-500 transition-all duration-300"
              >
                {/* Visual Header Banner with Category Icon */}
                <div className="relative w-full h-32 overflow-hidden border-b border-emerald-600/20 dark:border-emerald-500/20">
                  {category.image && (
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/40 to-transparent dark:from-black/90 dark:via-black/50" />
                  
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2.5">
                    {IconComponent && (
                      <div className="h-8 w-8 rounded-lg bg-emerald-600/30 dark:bg-emerald-500/30 backdrop-blur-md flex items-center justify-center text-emerald-200 border border-emerald-400/40 shrink-0">
                        <IconComponent className="h-4 w-4" />
                      </div>
                    )}
                    <p className="text-sm font-bold text-white drop-shadow-sm leading-snug truncate">
                      {category.title}
                    </p>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <p className="text-xs text-muted dark:text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {category.description}
                  </p>

                  {previewSkills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-emerald-600/20 dark:border-emerald-500/20">
                      {previewSkills.map((skill) => {
                        const SkillIcon = skill.icon;
                        return (
                          <span
                            key={skill.name}
                            className="inline-flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-xl text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 shadow-2xs"
                          >
                            {skill.logo ? (
                              <span className="h-4 w-4 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 ring-1 ring-black/5">
                                <Image
                                  src={skill.logo}
                                  alt=""
                                  width={12}
                                  height={12}
                                  className="object-contain"
                                />
                              </span>
                            ) : SkillIcon ? (
                              <SkillIcon className="h-3 w-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            ) : null}
                            <span className="truncate max-w-[90px]">{skill.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}