import { ArrowUp, Mail, Phone, MapPin, Linkedin, Globe, FileText } from "lucide-react";
import { profile } from "../data.js";

function Footer({ onOpenCV }) {
  return (
    <footer className="border-t border-slate-200/80 bg-white/40 px-5 py-12 dark:border-slate-800/80 dark:bg-slate-950/40 sm:px-8 lg:px-12 print:hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-slate-800/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                {profile.initials}
              </span>
              <span className="font-bold text-slate-900 dark:text-white">{profile.name}</span>
            </div>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 max-w-md">
              Finance Intern & BBA Final Year Candidate at Jagannath University. Specialized in DCF Valuation, Financial Modeling, Power BI Dashboards, and SQL.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <FileText className="h-3.5 w-3.5 text-blue-500" />
              Interactive CV
            </button>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              title="GitHub"
            >
              <Globe className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              title="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              title="Phone"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
