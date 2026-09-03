import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Awards", href: "/awards" },
  { label: "Expertise", href: "/expertise" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline dark:border-midnight-hairline bg-gradient-to-b from-paper to-emerald-50/30 dark:from-midnight dark:to-emerald-950/10">
      <div className="max-w-content mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start justify-between">
          {/* Brand & Bio Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/asl-logo.png"
                alt="ASL — Adebowale Samuel Lipede"
                width={36}
                height={36}
                className="rounded-full ring-1 ring-emerald-600/30"
              />
              <div>
                <p className="font-display font-bold text-base text-ink dark:text-white">
                  Adebowale Samuel Lipede
                </p>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  Founder &amp; Technical Architect, ART Services LTD
                </p>
              </div>
            </div>
            <p className="text-sm text-muted dark:text-slate-400 max-w-sm leading-relaxed">
              Engineering high-performance web applications, multi-sided digital logistics platforms, and enterprise solutions.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold text-ink dark:text-slate-300 uppercase tracking-wider">
              Navigation
            </p>
            <nav className="flex flex-col space-y-2">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group w-fit"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect / Socials Column */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold text-ink dark:text-slate-300 uppercase tracking-wider">
              Connect
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:debolipede@artservicesltd.co.uk"
                aria-label="Email"
                className="h-10 w-10 flex items-center justify-center rounded-xl border border-hairline dark:border-midnight-hairline bg-white/60 dark:bg-midnight-surface/60 hover:border-emerald-600/40 dark:hover:border-emerald-500/40 transition-colors shadow-2xs overflow-hidden"
              >
                <Image
                  src="/icons/social/gmail.png"
                  alt="Email"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/adebowaleslipede/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 flex items-center justify-center rounded-xl border border-hairline dark:border-midnight-hairline bg-white/60 dark:bg-midnight-surface/60 hover:border-emerald-600/40 dark:hover:border-emerald-500/40 transition-colors shadow-2xs overflow-hidden"
              >
                <Image
                  src="/icons/social/linkedin.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
              <a
                href="https://github.com/Debzy1985/DV-CODE-ARTServices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="h-10 w-10 flex items-center justify-center rounded-xl border border-hairline dark:border-midnight-hairline bg-white/60 dark:bg-midnight-surface/60 hover:border-emerald-600/40 dark:hover:border-emerald-500/40 transition-colors shadow-2xs overflow-hidden"
              >
                {/* GitHub's mark is black-on-transparent — a white chip keeps
                    it visible in dark mode instead of vanishing into the bg. */}
                <span className="h-full w-full flex items-center justify-center bg-white rounded-xl">
                  <Image
                    src="/icons/social/github.png"
                    alt="GitHub"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </span>
              </a>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
                Available for Select Projects
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-hairline dark:border-midnight-hairline bg-white/40 dark:bg-midnight-surface/20">
        <div className="max-w-content mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted dark:text-slate-500">
          <p>© {new Date().getFullYear()} Adebowale Samuel Lipede. All rights reserved.</p>
          <p>Designed &amp; Developed with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}