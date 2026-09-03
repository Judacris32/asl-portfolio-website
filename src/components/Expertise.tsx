"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EXPERTISE_CATEGORIES } from "@/lib/expertise-data";

export function Expertise() {
  return (
    <section id="expertise" className="relative border-b border-hairline dark:border-midnight-hairline bg-paper/50 dark:bg-midnight/50 py-20 md:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/5 via-transparent to-emerald-600/5 pointer-events-none" />

      <div className="relative max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-emerald-800 dark:text-emerald-400 leading-tight uppercase tracking-tight">
            TECHNICAL EXPERTISE &amp; STACK
          </h2>
          <p className="mt-3 text-muted dark:text-slate-300 text-sm md:text-base leading-relaxed">
            A comprehensive overview of the technologies, tools, and strategic proficiencies I use to engineer world-class digital solutions.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {EXPERTISE_CATEGORIES.map((category, index) => {
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl bg-paper/90 dark:bg-midnight-surface/90 backdrop-blur-md border border-emerald-600/30 dark:border-emerald-500/30 shadow-xl shadow-emerald-950/10 flex flex-col justify-between overflow-hidden group hover:border-emerald-500 transition-all duration-300"
              >
                {/* Image Banner Header inside Card */}
                <div className="relative w-full h-44 overflow-hidden border-b border-emerald-600/20 dark:border-emerald-500/20">
                  {category.image && (
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/40 to-transparent dark:from-black/90 dark:via-black/50" />
                  
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="font-display font-bold text-xl text-white drop-shadow-sm">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-xs md:text-sm text-muted dark:text-slate-300 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-emerald-600/20 dark:border-emerald-500/20">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 shadow-2xs"
                      >
                        {skill.logo && (
                          <span className="h-5 w-5 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 ring-1 ring-black/5">
                            <Image
                              src={skill.logo}
                              alt=""
                              width={14}
                              height={14}
                              className="object-contain"
                            />
                          </span>
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}