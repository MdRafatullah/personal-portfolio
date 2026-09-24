import { ExternalLink, CheckCircle2, FileText } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const projectGradients = {
  "robi-axiata-valuation": {
    className: "from-red-600 via-rose-600 to-amber-600",
    style: { background: "linear-gradient(135deg, #dc2626 0%, #e11d48 50%, #d97706 100%)" }
  },
  "fabrilife-market-analysis": {
    className: "from-emerald-600 via-teal-600 to-cyan-600",
    style: { background: "linear-gradient(135deg, #059669 0%, #0d9488 50%, #0891b2 100%)" }
  },
  "powerbi-executive-dashboard": {
    className: "from-blue-600 via-indigo-600 to-sky-500",
    style: { background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #0284c7 100%)" }
  },
  "financial-modeling-toolkit": {
    className: "from-indigo-600 via-purple-600 to-blue-600",
    style: { background: "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #2563eb 100%)" }
  }
};

function ProjectCard({ project, index, onOpenDetails }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), {
    stiffness: 280,
    damping: 28
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), {
    stiffness: 280,
    damping: 28
  });

  const handleMouseMove = (event) => {
    // Only apply tilt on mouse devices, not touch
    if (window.matchMedia("(pointer: fine)").matches) {
      const rect = event.currentTarget.getBoundingClientRect();
      x.set((event.clientX - rect.left) / rect.width - 0.5);
      y.set((event.clientY - rect.top) / rect.height - 0.5);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const gradientConfig = projectGradients[project.id] || {
    className: project.accent || "from-blue-600 via-indigo-600 to-sky-500",
    style: { background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #0284c7 100%)" }
  };

  return (
    <motion.article
      className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-xl transition duration-300 hover:border-blue-500/50 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/85 sm:p-6"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        {/* Top Banner with Vibrant Gradient & Bulletproof Fallback */}
        <div
          className={`relative min-h-[8.5rem] overflow-hidden rounded-2xl bg-gradient-to-br ${gradientConfig.className} p-4 text-white shadow-md sm:min-h-36 sm:p-5`}
          style={{ ...gradientConfig.style, transform: "translateZ(20px)" }}
        >
          {/* Subtle Decorative Elements */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_40%)]" />
          <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full border border-white/20" />

          <div className="relative flex h-full flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-1.5">
              <span className="rounded-full bg-white/25 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm sm:px-3 sm:py-1">
                {project.badge}
              </span>
              <span className="text-[11px] font-semibold text-white/90 sm:text-xs">
                {project.sector}
              </span>
            </div>

            <div className="mt-3 sm:mt-4">
              <p className="text-2xl font-black tracking-tight drop-shadow-sm sm:text-4xl">
                {project.metric}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-white/90 line-clamp-1 sm:text-xs">
                {project.metricLabel}
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="mt-4 sm:mt-5" style={{ transform: "translateZ(12px)" }}>
          <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] sm:text-xs text-blue-600 dark:text-blue-400 font-bold mb-1">
            <span>{project.company}</span>
            <span className="text-slate-500 dark:text-slate-400 font-normal sm:font-medium">
              {project.category}
            </span>
          </div>

          <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">
            {project.title}
          </h3>

          <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed sm:text-sm">
            {project.summary}
          </p>

          {/* Bullet Points from CV */}
          <div className="mt-3.5 space-y-1.5 border-t border-slate-100 pt-3 dark:border-slate-800">
            {project.bulletPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-5">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Technologies / Methodologies */}
          <div className="mt-3.5 flex flex-wrap gap-1 sm:gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-200 bg-slate-100/90 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-800/90 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer with Mobile Touch Optimization */}
      <div
        className="mt-5 flex items-center gap-2 pt-3.5 border-t border-slate-100 dark:border-slate-800"
        style={{ transform: "translateZ(15px)" }}
      >
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-3 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-blue-600 active:scale-[0.98] dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400 dark:hover:text-white"
        >
          <FileText className="h-3.5 w-3.5" />
          Methodology Breakdown
        </button>

        <a
          href={project.liveUrl}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-800/90 dark:text-slate-300 dark:hover:text-blue-400"
          title={project.liveLabel}
          aria-label={project.liveLabel}
        >
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
