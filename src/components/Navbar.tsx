"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Awards", href: "/awards" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-hairline dark:border-midnight-hairline bg-paper/80 dark:bg-midnight/80 backdrop-blur-md">
        <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/asl-logo.png"
              alt="ASL — Adebowale Samuel Lipede"
              width={32}
              height={32}
              className="rounded-full"
              priority
            />
            <span className="font-display text-sm text-ink dark:text-white hidden sm:block">
              Full-Stack & Forensics
            </span>
          </Link>

          {/* Desktop Nav Links formatted as sleek pill containers with green hover states */}
          <nav className="hidden md:flex items-center gap-1.5 bg-paper/40 dark:bg-midnight-surface/40 backdrop-blur-md p-1.5 rounded-full border border-hairline dark:border-midnight-hairline shadow-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-muted dark:text-slate-400 hover:text-white dark:hover:text-white hover:bg-emerald-300 dark:hover:bg-emerald-950/100 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="md:hidden h-9 w-9 flex items-center justify-center rounded-full border border-hairline dark:border-midnight-hairline"
            >
              <Menu className="h-4 w-4 text-ink dark:text-slate-200" />
            </button>
          </div>
        </div>
      </header>

      {/* Rendered as a sibling of <header>, not a child — header has
          backdrop-blur, and a fixed-position descendant of a blurred/
          transformed ancestor gets contained by that ancestor's box
          instead of the viewport. Keeping the drawer outside avoids that. */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-ink/50 dark:bg-black/70 z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white dark:bg-midnight-surface z-[70] md:hidden shadow-2xl flex flex-col"
            >
              <div className="h-16 flex items-center justify-between px-6 border-b border-hairline dark:border-midnight-hairline shrink-0">
                <span className="font-display text-sm text-ink dark:text-white">Menu</span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                  className="h-9 w-9 flex items-center justify-center rounded-full border border-hairline dark:border-midnight-hairline"
                >
                  <X className="h-4 w-4 text-ink dark:text-slate-200" />
                </button>
              </div>
              <nav className="flex flex-col px-3 py-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    className="font-display text-lg px-4 py-3.5 rounded-xl text-ink dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}