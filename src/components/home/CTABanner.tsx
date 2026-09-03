"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section>
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-emerald-700 dark:bg-emerald-600 px-8 py-14 md:px-16 md:py-16 text-center"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
            Got something worth building?
          </h2>
          <p className="mt-3 text-emerald-50 max-w-lg mx-auto leading-relaxed">
            Whether it&rsquo;s a platform, a security review, or UK market
            entry strategy, happy to talk it through.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-white text-emerald-800 px-6 py-3 rounded-full text-sm font-semibold hover:bg-emerald-50 transition-colors"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
