"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const STACK = [
  { name: "Next.js", logo: "/icons/stack/nextjs.png" },
  { name: "React 18", logo: "/icons/stack/react.png" },
  { name: "TypeScript", logo: "/icons/stack/typescript.png" },
  { name: "Node.js", logo: "/icons/stack/nodejs.png" },
  { name: "Tailwind CSS", logo: "/icons/stack/tailwind.png" },
  { name: "Supabase", logo: "/icons/stack/postgresql.png" },
  { name: "Google Maps API", logo: "/icons/stack/google-maps-gps.png" },
  { name: "Stripe", logo: "/icons/stack/stripe.png" },
];

export function FeaturedProject() {
  return (
    <section className="border-b border-hairline dark:border-midnight-hairline">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="text-sm text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">
            Featured venture
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 text-ink dark:text-white">
            ART Services, roadside assistance, rebuilt
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-hairline dark:border-midnight-hairline overflow-hidden bg-paper dark:bg-midnight-surface shadow-xl shadow-emerald-950/5"
        >
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] border-b border-hairline dark:border-midnight-hairline">
            <Image
              src="/images/projects/art-services-hero.png"
              alt="ART Services platform landing page — Professional Recovery & Roadside Assistance"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="p-8 md:p-10 grid md:grid-cols-[1.4fr_1fr] gap-8">
            <div>
              <p className="text-muted dark:text-slate-400 leading-relaxed">
                A multi-sided platform built end-to-end to disrupt the UK&rsquo;s
                £1.8bn roadside assistance market, separate portals for
                customers requesting a tow, drivers running recovery jobs,
                vendors managing fleets, and admins overseeing the whole
                operation, all coordinated through real-time GPS dispatch.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {STACK.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 shadow-2xs"
                  >
                    {item.logo && (
                      <span className="h-5 w-5 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 ring-1 ring-black/5">
                        <Image
                          src={item.logo}
                          alt=""
                          width={14}
                          height={14}
                          className="object-contain"
                        />
                      </span>
                    )}
                    <span>{item.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3">
              <a
                href="https://preview-tgj5a0x5--towing-mobile-request.deploypad.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-700 dark:bg-emerald-600 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-emerald-800 dark:hover:bg-emerald-500 transition-colors"
              >
                View live demo
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 border border-hairline dark:border-midnight-hairline text-ink dark:text-white px-5 py-3 rounded-full text-sm font-semibold hover:border-emerald-600/40 dark:hover:border-emerald-500/40 transition-colors"
              >
                Read the full case
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}