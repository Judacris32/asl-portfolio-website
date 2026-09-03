"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="border-b border-hairline dark:border-midnight-hairline">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28 grid md:grid-cols-[0.7fr_1.3fr] gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-xs aspect-[4/5] rounded-2xl overflow-hidden border-2 border-emerald-600/40 dark:border-emerald-500/40 shadow-xl shadow-emerald-900/10">
            <Image
              src="/images/portraits/portrait-2.jpeg"
              alt="Adebowale Samuel Lipede"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">
            About
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 text-ink dark:text-white leading-tight">
            Ten years across digital forensics and full-stack engineering
          </h2>
          <p className="mt-4 text-muted dark:text-slate-400 leading-relaxed max-w-xl">
            Founder &amp; Technical Architect at ART Services LTD, with a
            background that runs through enterprise security, vulnerability
            assessment, and GDPR-compliant system design, now applied to
            building platforms that people actually rely on.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:gap-3 transition-all"
          >
            Read the full story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
