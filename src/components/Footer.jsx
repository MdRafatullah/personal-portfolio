import { ArrowUp } from "lucide-react";
import { profile } from "../data.js";

function Footer() {
  return (
    <footer className="border-t border-slate-900/10 px-5 py-8 dark:border-white/10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>(c) 2026 {profile.name}.  Designed and built with React by Abrar Arnob.</p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-medium text-slate-600 transition hover:text-electric dark:text-slate-300"
        >
          Back to top
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
