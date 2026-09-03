"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  return (
    <div className="max-w-content mx-auto px-6 pt-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </div>
  );
}
