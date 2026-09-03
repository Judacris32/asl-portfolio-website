"use client";

import type { Metadata } from "next";
import { Mail, Linkedin, Github, Phone, Send, MessageSquare } from "lucide-react";
import { BackButton } from "@/components/BackButton";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "debolipede@artservicesltd.co.uk",
    href: "mailto:debolipede@artservicesltd.co.uk",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+234 704 041 0543",
    href: "tel:+2347040410543",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "adebowaleslipede",
    href: "https://www.linkedin.com/in/adebowaleslipede/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "Debzy1985",
    href: "https://github.com/Debzy1985/DV-CODE-ARTServices",
    icon: Github,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-24">
      <div className="max-w-content mx-auto px-6 pt-6">
        <BackButton />
      </div>

      <section className="max-w-content mx-auto px-6 py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">
            Get in Touch
          </p>
          <h1 className="font-display font-bold text-3xl md:text-5xl mt-3 text-emerald-700 dark:text-emerald-400">
            Let&rsquo;s Build Something Exceptional
          </h1>
          <p className="mt-4 text-muted dark:text-slate-400 leading-relaxed">
            Inquiries regarding full-stack development contracts, technical architecture consulting, venture partnerships, or professional opportunities are welcome. 
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Interactive Professional Form */}
          <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl border border-emerald-600/30 bg-emerald-50/60 dark:bg-emerald-950/20 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-emerald-600/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-700 dark:text-emerald-400 border border-emerald-600/30">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-lg text-ink dark:text-white">
                  Send a Direct Inquiry
                </h2>
                <p className="text-xs text-muted dark:text-slate-400">
                  Fill out the form below and it will route straight to my inbox.
                </p>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-ink dark:text-slate-300 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-midnight-surface border border-hairline dark:border-midnight-hairline text-ink dark:text-white text-sm focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-ink dark:text-slate-300 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-midnight-surface border border-hairline dark:border-midnight-hairline text-ink dark:text-white text-sm focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-ink dark:text-slate-300 uppercase tracking-wider">
                  Subject / Inquiry Type
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-midnight-surface border border-hairline dark:border-midnight-hairline text-ink dark:text-white text-sm focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-500 transition-colors"
                >
                  <option value="project">Full-Stack Development Project</option>
                  <option value="consulting">Technical Consulting / Architecture</option>
                  <option value="opportunity">Full-Time / Contract Role</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-ink dark:text-slate-300 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your project scope, goals, or timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-midnight-surface border border-hairline dark:border-midnight-hairline text-ink dark:text-white text-sm focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 dark:bg-emerald-600 text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-emerald-800 dark:hover:bg-emerald-500 transition-colors shadow-sm"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl border border-hairline dark:border-midnight-hairline bg-paper dark:bg-midnight-surface shadow-sm">
              <h3 className="font-display font-bold text-lg text-ink dark:text-white mb-2">
                Direct Channels
              </h3>
              <p className="text-sm text-muted dark:text-slate-400 mb-6 leading-relaxed">
                Prefer using your own mail client or connecting via professional networks? Reach out directly below.
              </p>

              <div className="space-y-3">
                {CONTACT_LINKS.map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-hairline dark:border-midnight-hairline hover:border-emerald-600/40 dark:hover:border-emerald-500/40 bg-white/40 dark:bg-midnight-surface/40 transition-colors group"
                    >
                      <div className="h-10 w-10 rounded-xl bg-emerald-600/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-700 dark:text-emerald-400 border border-emerald-600/30 shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-xs text-muted dark:text-slate-500">{c.label}</p>
                        <p className="text-sm font-medium text-ink dark:text-white truncate">{c.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 rounded-3xl border border-emerald-600/20 bg-emerald-600/5 dark:bg-emerald-950/10 text-center">
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
                Response Time
              </p>
              <p className="text-sm text-muted dark:text-slate-300">
                Typically responds within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}