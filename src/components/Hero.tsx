"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background: real workspace photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/workspace.png"
          alt="Laptop open to a code editor on a desk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Theme-aware scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-paper/90 via-paper/85 to-paper/95 dark:from-ink/95 dark:via-ink/90 dark:to-ink/98" />
      </div>

      <div className="relative max-w-content mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-emerald-600/60 dark:border-emerald-500/60 shadow-md">
              <Image
                src="/images/portraits/portrait-3.jpeg"
                alt="Adebowale Samuel Lipede"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 font-semibold text-left">
              Founder &amp; Technical Architect
              <br />
              <span className="text-muted dark:text-slate-400 font-normal">ART Services LTD</span>
            </p>
          </div>

          {/* Refined, confident headline */}
          <h1 className="font-display font-bold tracking-tight text-4xl md:text-6xl leading-[1.05] text-emerald-800 dark:text-emerald-400 max-w-3xl drop-shadow-sm">
            Engineering high-stakes platforms for the real world
          </h1>

          {/* Polished, professional subtext */}
          <p className="mt-6 text-lg text-muted dark:text-slate-300 max-w-xl leading-relaxed text-justify md:text-center">
            Ten years deep into digital forensics and full-stack engineering. 
            Right now, that means architecting ART Services from the ground up redefining 
            how roadside assistance operates across the UK. Alongside building resilient systems, 
            the work has earned national industry recognitions I am deeply proud of.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 bg-emerald-700 dark:bg-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-emerald-800 dark:hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20"
            >
              See the work
              <ArrowRight className="h-4 w-4" />
            </a>
            
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 border border-emerald-600/40 dark:border-emerald-500/40 text-ink dark:text-slate-200 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-emerald-700 dark:hover:bg-emerald-600 hover:text-white hover:border-transparent shadow-sm"
            >
              <MessageSquare className="h-4 w-4 text-emerald-700 dark:text-emerald-400 group-hover:text-white transition-colors" />
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}