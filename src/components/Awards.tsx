"use client";

import { motion } from "framer-motion";
import { Trophy, Newspaper, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";

const AWARDS = [
  {
    title: "Titans of Tech Africa Award",
    organization: "Titans of Tech Africa Awards",
    year: "2023",
    badge: "National Award",
    description:
      "Technical Innovation Excellence Award — recognized for excellence in technical architecture and digital innovation, validating secure, high-stakes system design.",
    image: "/images/awards/independent-ng.png",
    linkUrl: "https://independent.ng/adebowale-samuel-lipede-honoured-with-technical-innovation-excellence-award-at-2024-titans-of-tech-awards/",
    linkText: "Read Independent Article",
  },
  {
    title: "Most Outstanding Software Solutions Architect",
    organization: "Nigeria Technology Awards (NiTA)",
    year: "2024",
    badge: "National Award",
    description:
      "Honored for pioneering contributions to tech development, platform scaling, and impactful software execution — awarded at the 10th edition of NiTA.",
    image: "/images/awards/nita-award.png",
    linkUrl: "https://blueprint.ng/adebowale-lipede-emerges-most-outstanding-software-solutions-architect-at-nigeria-technology-awards/",
    linkText: "Read Blueprint Coverage",
  },
  {
    title: "Building Digital Solutions for Africa's Roadside Assistance Industry",
    organization: "Disrupt Africa",
    year: "2025",
    badge: "Press Feature",
    description:
      "Profiled by Disrupt Africa for the work behind ART Services — a digital platform connecting stranded motorists with recovery operators through real-time location and dispatch, built for markets where roadside help is hard to find.",
    image: "/images/awards/disrupt-africa.png",
    linkUrl: "https://disruptafrica.com/2025/11/21/how-nigerian-technologist-adebowale-lipede-is-building-digital-solutions-for-africas-roadside-assistance-industry/",
    linkText: "Read the Disrupt Africa Feature",
  },
];

export function Awards() {
  return (
    <section id="awards" className="relative border-b border-hairline dark:border-midnight-hairline bg-emerald-950/20 dark:bg-emerald-950/40 py-20 md:py-28 overflow-hidden">
      {/* Background ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-transparent to-emerald-600/10 pointer-events-none" />

      <div className="relative max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          
          <h2 className="font-display font-bold text-3xl md:text-4xl text-emerald-800 dark:text-emerald-400 leading-tight uppercase tracking-tight">
            AWARDS &amp; RECOGNITION
          </h2>
          <p className="mt-3 text-muted dark:text-slate-300 text-sm md:text-base leading-relaxed">
            National awards and independent press coverage that reflect a commitment to engineering resilience, rigorous security, and impactful software.
          </p>
        </motion.div>

        {/* Single Column Layout Grid */}
        <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
          {AWARDS.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-8 md:p-10 rounded-3xl bg-paper/90 dark:bg-midnight-surface/90 backdrop-blur-md border border-emerald-600/40 dark:border-emerald-500/40 shadow-xl shadow-emerald-950/20 flex flex-col justify-between group hover:border-emerald-500 transition-all duration-300"
            >
              <div>
                {/* Full natural screenshot container using a responsive aspect ratio */}
                <div className="relative w-full aspect-[16/8] rounded-2xl overflow-hidden mb-8 border border-emerald-600/30 dark:border-emerald-500/30 bg-black/5 dark:bg-black/60 shadow-md">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="h-10 w-10 rounded-xl bg-emerald-600/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-700 dark:text-emerald-400 border border-emerald-600/30">
                      {award.badge === "Press Feature" ? (
                        <Newspaper className="h-5 w-5" />
                      ) : (
                        <Trophy className="h-5 w-5" />
                      )}
                    </div>
                    <span className="text-xs md:text-sm font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                      {award.organization} · {award.year}
                    </span>
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                    {award.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-ink dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {award.title}
                </h3>

                <p className="mt-4 text-sm md:text-base text-muted dark:text-slate-300 leading-relaxed text-justify">
                  {award.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-emerald-600/20 dark:border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>
                    {award.badge === "Press Feature"
                      ? "Independent press coverage"
                      : "Verified industry milestone"}
                  </span>
                </div>

                <a
                  href={award.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 px-5 py-2.5 rounded-xl transition-all shadow-md shadow-emerald-900/20"
                >
                  <span>{award.linkText}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}