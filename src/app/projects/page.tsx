import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Users, Truck, ShieldCheck, LayoutDashboard, Layers } from "lucide-react";
import { BackButton } from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Projects & Ventures | Adebowale Samuel Lipede",
  description:
    "ART Services LTD, a multi-sided digital platform for the UK's roadside assistance market.",
};

const PORTALS = [
  {
    title: "Customer App",
    description: "Request a tow or recovery job from a phone in a few taps, then track it in real time.",
    image: "/images/projects/Customer App.png",
  },
  {
    title: "Driver Portal",
    description: "Accept jobs, navigate to the vehicle, and update job status as the work happens.",
    image: "/images/projects/Driver Portal.png",
  },
  {
    title: "Admin Dashboard",
    description: "Full operational oversight, dispatch, disputes, and platform-wide reporting.",
    image: "/images/projects/Admin Dashboard.png",
  },
  {
    title: "Vendor / Fleet Management",
    description: "Fleet operators manage their drivers, coverage areas, and job history in one place.",
    image: "/images/projects/Vendor.png",
  },
];

const ARCHITECTURE_ITEMS = [
  { label: "Customer App", desc: "React / TypeScript mobile-first interface" },
  { label: "Driver Portal", desc: "React / TypeScript live navigation & job terminal" },
  { label: "Admin Dashboard", desc: "React / TypeScript management panel" },
  { label: "API Server", desc: "Node.js / Supabase backend routing" },
  { label: "Real-time Database", desc: "PostgreSQL with real-time replication" },
];

const TECHNOLOGY_STACK = [
  { category: "Frontend", items: [
    { name: "React 18", logo: "/icons/stack/react.png" },
    { name: "TypeScript", logo: "/icons/stack/typescript.png" },
    { name: "Vite", logo: "/icons/stack/vitejs.png" },
    { name: "Tailwind CSS", logo: "/icons/stack/tailwind.png" }
  ]},
  { category: "UI Components", items: [
    { name: "shadcn/ui", logo: "/icons/stack/shadcn.png" },
    { name: "Radix UI Primitives", logo: "/icons/stack/radix.png" }
  ]},
  { category: "State Management", items: [
    { name: "TanStack Query", logo: "/icons/stack/tanstack.png" },
    { name: "React Hook Form", logo: "/icons/stack/react.png" }
  ]},
  { category: "Database & Backend", items: [
    { name: "Supabase (PostgreSQL)", logo: "/icons/stack/supabase.png" },
    { name: "Node.js", logo: "/icons/stack/nodejs.png" }
  ]},
  { category: "Maps & Payments", items: [
    { name: "Google Maps API", logo: "/icons/stack/google-maps-gps.png" },
    { name: "Stripe Integration", logo: "/icons/stack/stripe.png" }
  ]},
  { category: "Deployment", items: [
    { name: "Vercel", logo: "/icons/stack/vercel.png" }
  ]}
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Back Button Left-Aligned Wrapper */}
      <div className="max-w-content mx-auto px-6 pt-6">
        <BackButton />
      </div>

      {/* Hero Section */}
      <section className="max-w-content mx-auto px-6 py-12 md:py-16 flex flex-col items-center text-center">
        <p className="text-sm text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">
          Featured venture
        </p>
        <h1 className="font-display font-bold text-3xl md:text-5xl mt-3 text-emerald-700 dark:text-emerald-400 max-w-3xl">
          ART Services, roadside assistance, rebuilt
        </h1>
        <p className="mt-5 text-lg text-muted dark:text-slate-400 max-w-2xl leading-relaxed">
          Founded and single-handedly architected end to end: a multi-sided
          digital platform aimed at the UK&rsquo;s £1.8bn roadside assistance
          market, taken from concept through two live, functional prototypes.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://preview-tgj5a0x5--towing-mobile-request.deploypad.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-700 dark:bg-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-emerald-800 dark:hover:bg-emerald-500 transition-colors"
          >
            View live demo
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Debzy1985/DV-CODE-ARTServices"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-hairline dark:border-midnight-hairline text-ink dark:text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-emerald-700 hover:text-white dark:hover:bg-white dark:hover:text-ink transition-colors"
          >
            View source
          </a>
        </div>
      </section>

      {/* Image Preview */}
      <section className="max-w-content mx-auto px-6 pb-16 md:pb-20">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-hairline dark:border-midnight-hairline shadow-xl shadow-emerald-950/10 mx-auto">
          <Image
            src="/images/projects/art-services-hero.png"
            alt="ART Services platform landing page — Professional Recovery & Roadside Assistance"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </section>

      {/* The Problem Section */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-20 border-t border-hairline dark:border-midnight-hairline flex flex-col items-center text-center">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-emerald-700 dark:text-emerald-400 mb-6">
          The problem
        </h2>
        <div className="p-8 md:p-10 rounded-3xl border border-emerald-600/30 bg-emerald-50/60 dark:bg-emerald-950/20 max-w-2xl w-full shadow-sm">
          <p className="text-muted dark:text-slate-300 leading-relaxed text-center">
            UK roadside assistance is fragmented, customers, independent
            drivers, and fleet operators are rarely on the same system. ART
            Services connects all three sides through one platform, with
            dispatch handled by real-time GPS rather than phone calls and
            guesswork.
          </p>
        </div>
      </section>

      {/* Four Portals Section */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-20 border-t border-hairline dark:border-midnight-hairline flex flex-col items-center">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-emerald-700 dark:text-emerald-400 mb-12 text-center">
          Four portals, one operational workflow
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
          {PORTALS.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-3xl border border-emerald-600/30 bg-emerald-50/60 dark:bg-emerald-950/20 flex flex-col sm:flex-row items-center gap-6 shadow-sm"
            >
              <div className="relative w-full sm:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shrink-0 border border-emerald-600/20">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-center sm:text-left w-full sm:w-1/2">
                <h3 className="font-display font-bold text-xl text-ink dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted dark:text-slate-400 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* System Architecture Section */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-20 border-t border-hairline dark:border-midnight-hairline flex flex-col items-center text-center">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-emerald-700 dark:text-emerald-400 mb-6">
          System Architecture
        </h2>
        <div className="p-8 md:p-10 rounded-3xl border border-emerald-600/30 bg-emerald-50/60 dark:bg-emerald-950/20 max-w-3xl w-full shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Layers className="h-4 w-4" />
            <span>ART Services Platform Topology</span>
          </div>
          <div className="space-y-3 text-left max-w-xl mx-auto">
            {ARCHITECTURE_ITEMS.map((item) => (
              <div 
                key={item.label}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-white/60 dark:bg-midnight-surface/60 border border-emerald-600/10 text-sm gap-1 sm:gap-4"
              >
                <span className="font-semibold text-ink dark:text-white">{item.label}:</span>
                <span className="text-muted dark:text-slate-400 text-xs sm:text-sm">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-20 border-t border-hairline dark:border-midnight-hairline flex flex-col items-center text-center">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-emerald-700 dark:text-emerald-400 mb-8">
          Technology Stack
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {TECHNOLOGY_STACK.map((group) => (
            <div 
              key={group.category}
              className="p-6 rounded-2xl border border-hairline dark:border-midnight-hairline bg-paper dark:bg-midnight-surface flex flex-col items-center text-center justify-between"
            >
              <div className="w-full">
                <h3 className="text-sm font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {group.items.map((item) => (
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
            </div>
          ))}
        </div>
      </section>

      {/* Where It Stands Section */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-20 border-t border-hairline dark:border-midnight-hairline flex flex-col items-center text-center">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-emerald-700 dark:text-emerald-400 mb-6">
          Where it stands
        </h2>
        <div className="p-8 md:p-10 rounded-3xl border border-emerald-600/30 bg-emerald-50/60 dark:bg-emerald-950/20 max-w-2xl w-full shadow-sm">
          <p className="text-muted dark:text-slate-300 leading-relaxed text-center">
            Pilot launched in Greater London, with an active operator network
            build underway and outreach to UK-based fleet partners. The
            platform has also gone through leading UK insurtech/mobility
            accelerator applications, including Lloyd&rsquo;s Lab, to support
            integration and investment readiness.
          </p>
        </div>
      </section>
    </main>
  );
}