import { X, ExternalLink, Mail, CheckCircle2, TrendingUp, ShieldCheck, FileSpreadsheet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto">
        <motion.div
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        <motion.div
          className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-slate-700/60 bg-slate-900 text-white shadow-2xl z-10 p-4 sm:p-8"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-4 sm:pb-5">
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-400 border border-blue-500/30">
                  {project.category}
                </span>
                <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-slate-300">
                  {project.sector}
                </span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
                {project.title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-400 font-medium">
                Focus Organization: <span className="text-emerald-400 font-semibold">{project.company}</span>
              </p>
            </div>

            <button
              onClick={onClose}
              className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Metric Spotlight Banner */}
          <div className="my-4 sm:my-6 rounded-xl sm:rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-850 to-slate-900/90 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400">Primary Quantitative Benchmark</p>
              <p className="text-2xl sm:text-3xl font-black text-white mt-0.5 sm:mt-1 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                {project.metric}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{project.metricLabel}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-700/80 bg-slate-800/60 px-2 py-0.5 text-[10px] sm:text-xs font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-5 sm:space-y-6 text-slate-300 text-xs sm:text-base leading-relaxed">
            <div>
              <h3 className="text-xs sm:text-base font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <FileSpreadsheet className="h-4 w-4 text-blue-400" />
                Executive Summary
              </h3>
              <p className="text-slate-300 leading-relaxed sm:leading-7 text-xs sm:text-sm">
                {project.details.overview}
              </p>
            </div>

            {/* Methodology */}
            <div>
              <h3 className="text-xs sm:text-base font-semibold text-white uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                Analytical & Financial Methodology
              </h3>
              <ul className="space-y-2">
                {project.details.methodology.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 rounded-xl bg-slate-800/40 p-2.5 sm:p-3 border border-slate-800/80">
                    <span className="grid h-5 w-5 sm:h-6 sm:w-6 shrink-0 place-items-center rounded-full bg-blue-500/20 text-[10px] sm:text-xs font-bold text-blue-400">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200 leading-normal sm:leading-6">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Findings */}
            <div>
              <h3 className="text-xs sm:text-base font-semibold text-white uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                Strategic Insights & Key Findings
              </h3>
              <div className="space-y-2">
                {project.details.keyFindings.map((finding, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 rounded-xl bg-emerald-950/20 border border-emerald-900/40 p-2.5 sm:p-3">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-emerald-200 leading-normal sm:leading-6">{finding}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] sm:text-xs text-slate-400 text-center sm:text-left">
              Need model documentation or presentation slides?
            </p>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={project.liveUrl}
                className="inline-flex flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-lg transition"
              >
                <Mail className="h-3.5 w-3.5" />
                {project.liveLabel}
              </a>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 px-3.5 py-2 text-xs font-medium text-slate-300 transition"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProjectModal;
