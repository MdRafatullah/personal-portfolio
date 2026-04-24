import { ExternalLink, Github } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function ProjectCard({ project, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 280,
    damping: 28
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 280,
    damping: 28
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  const opensNewTab = project.liveUrl?.startsWith("http");

  return (
    <motion.article
      className="group relative h-full rounded-3xl border border-slate-900/10 bg-white/65 p-3 shadow-sm backdrop-blur-xl transition hover:border-electric/40 dark:border-white/10 dark:bg-white/8 sm:p-4"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div
        className={`relative min-h-40 overflow-hidden rounded-[1.25rem] bg-gradient-to-br ${project.accent} p-4 text-white sm:min-h-48 sm:p-5`}
        style={{ transform: "translateZ(28px)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.38),transparent_28%),linear-gradient(130deg,rgba(255,255,255,0.18),transparent_45%)]" />
        <div className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full border border-white/30" />
        <div className="absolute bottom-7 right-7 h-20 w-20 rounded-full bg-white/15 blur-sm" />
        <div className="relative flex h-full min-h-32 flex-col justify-between sm:min-h-40">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white/18 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] backdrop-blur sm:text-xs sm:tracking-[0.18em]">
              {project.badge}
            </span>
            <span className="text-sm font-semibold">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div>
            <p className="text-4xl font-semibold leading-none sm:text-5xl">{project.metric}</p>
            <p className="mt-2 text-sm font-medium text-white/82">{project.metricLabel}</p>
          </div>
        </div>
      </div>

      <div className="relative p-2 pt-5 sm:pt-6" style={{ transform: "translateZ(18px)" }}>
        <h3 className="text-lg font-semibold text-graphite dark:text-white sm:text-xl">{project.title}</h3>
        <p className="mt-3 min-h-0 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:min-h-24 sm:text-base">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-900/10 bg-slate-900/[0.04] px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/8 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center">
          <a
            href={project.liveUrl}
            target={opensNewTab ? "_blank" : undefined}
            rel={opensNewTab ? "noreferrer" : undefined}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-graphite px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-electric dark:bg-white dark:text-ink dark:hover:bg-mint min-[420px]:w-auto"
          >
            {project.liveLabel}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-900/10 bg-white/60 text-slate-700 transition hover:-translate-y-0.5 hover:text-electric dark:border-white/10 dark:bg-white/8 dark:text-slate-200"
              aria-label={`${project.title} GitHub repository`}
              title="GitHub"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
