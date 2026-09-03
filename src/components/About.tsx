"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CREDENTIALS = [
  {
    degree: "M.Sc., Digital Forensics",
    school: "Coventry University",
    location: "Coventry, West Midlands, UK",
    year: "2018",
  },
  {
    degree: "B.Sc., Information Technology & Business Information Systems",
    school: "Middlesex University",
    location: "Hendon, London, UK",
    year: "2015",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-hairline dark:border-midnight-hairline">
      <div className="max-w-content mx-auto px-6 py-24 md:py-32 grid md:grid-cols-[0.85fr_1.15fr] gap-14 md:gap-20 items-center">
        {/* Image Container with Green Shadow and Border Glow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border-2 border-emerald-600/40 dark:border-emerald-500/40 shadow-2xl shadow-emerald-900/20 dark:shadow-emerald-950/50">
            <Image
              src="/images/portraits/portrait-1.jpeg"
              alt="Adebowale Samuel Lipede, seated portrait"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text Container with Green Shadow Accent */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 md:p-10 rounded-3xl bg-paper/60 dark:bg-midnight-surface/60 backdrop-blur-sm border border-emerald-600/20 dark:border-emerald-500/20 shadow-xl shadow-emerald-900/10 dark:shadow-emerald-950/40"
        >
          <p className="text-sm text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">
            About Me
          </p>

          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 text-emerald-800 dark:text-emerald-400 leading-tight">
            A Technical Founder blending rigorous forensics with full-scale execution
          </h2>

          <div className="mt-6 space-y-4 text-muted dark:text-slate-300 leading-relaxed text-justify">
            <p>
              I am the Founder and Technical Architect behind ART Services LTD. Right now, my core focus 
              is single-handedly architecting and developing a multi-sided digital ecosystem designed to transform 
              the UK&rsquo;s £1.8bn roadside assistance landscape, taking the project from initial concept all the way 
              through to live, functional prototypes.
            </p>
            <p>
              My professional roots lie uniquely at the crossroads of digital forensics and full-stack engineering. 
              After spending a decade mastering enterprise security architectures, vulnerability diagnostics, and 
              GDPR-compliant frameworks, I channel that discipline into building secure, high-performance real-time 
              platforms equipped with seamless dispatch and payment workflows.
            </p>
            <p>
              That commitment to bulletproof system security paired with intuitive product design is what industry leaders 
              like NiTA and Titans of Tech Africa recognized in back-to-back years and it&rsquo;s the exact standard I bring 
              to every venture I build.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6 pt-6 border-t border-emerald-600/20 dark:border-emerald-500/20">
            {CREDENTIALS.map((c) => (
              <div
                key={c.degree}
                className="border-l-2 border-emerald-600 dark:border-emerald-500 pl-4"
              >
                <p className="font-display font-bold text-base text-ink dark:text-white leading-snug">
                  {c.degree}
                </p>
                <p className="text-sm text-emerald-700 dark:text-emerald-400 font-medium mt-1">
                  {c.school}
                </p>
                <p className="text-xs text-muted dark:text-slate-400 mt-0.5">
                  {c.location} · {c.year}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}