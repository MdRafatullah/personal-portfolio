import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  Brain,
  Briefcase,
  Building2,
  Calculator,
  CheckCircle2,
  Clock,
  Code,
  Compass,
  Database,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  Globe,
  GraduationCap,
  Languages,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  PieChart,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ProjectModal from "./components/ProjectModal.jsx";
import CVModal from "./components/CVModal.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import {
  competencyCategories,
  education,
  focusAreas,
  profile,
  projects,
  reference,
  socialLinks,
  certifications
} from "./data.js";

const iconMap = {
  Calculator,
  FileSpreadsheet,
  BarChart3,
  Database,
  Code,
  PieChart,
  Layers,
  Brain,
  Users,
  Sparkles,
  Clock,
  Compass,
  Languages,
  Globe
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function SectionHeader({ kicker, title, copy }) {
  return (
    <motion.div
      className="mx-auto mb-8 max-w-3xl text-center sm:mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={sectionVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2.5 sm:px-3.5 sm:py-1 sm:text-xs">
        <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        {kicker}
      </div>
      <h2 className="text-balance text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-2.5 text-pretty text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:mt-3.5 sm:text-base sm:leading-8">
        {copy}
      </p>
    </motion.div>
  );
}

function useActiveSection(ids) {
  const [activeSection, setActiveSection] = useState(ids[0]);

  useEffect(() => {
    const observers = ids.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
      );

      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, [ids]);

  return activeSection;
}

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setLetterIndex(words[wordIndex].length);
      return undefined;
    }

    const word = words[wordIndex];
    const atWordEnd = letterIndex === word.length;
    const atWordStart = letterIndex === 0;
    const delay = atWordEnd && !isDeleting ? 1600 : isDeleting ? 28 : 55;

    const timeout = window.setTimeout(() => {
      if (atWordEnd && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (atWordStart && isDeleting) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      setLetterIndex((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, letterIndex, shouldReduceMotion, wordIndex, words]);

  return words[wordIndex].slice(0, letterIndex);
}

function HeroPhotoCard({ className = "" }) {
  return (
    <div className={`relative mx-auto w-full max-w-xl ${className}`}>
      <div className="absolute inset-4 sm:inset-6 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200/90 bg-white/70 p-2.5 shadow-2xl backdrop-blur-2xl dark:border-slate-800/80 dark:bg-slate-900/70 sm:rounded-[2.25rem] sm:p-4">
        <div className="relative min-h-[22rem] min-[400px]:min-h-[26rem] sm:min-h-[32rem] lg:min-h-[36rem] overflow-hidden rounded-[1.2rem] sm:rounded-[1.75rem] border border-slate-200/60 dark:border-white/10 bg-slate-950 text-white">
          <img
            className="absolute inset-0 h-full w-full object-cover object-[center_12%]"
            src={profile.coverImage}
            alt={`Portrait of ${profile.name}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

          {/* Floating Top Tag */}
          <div className="absolute top-3 left-3 right-3 sm:top-3.5 sm:left-3.5 sm:right-3.5 flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/50 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Finance Intern Candidate
            </div>
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-white backdrop-blur-md">
              BBA Finance '26
            </span>
          </div>

          {/* Slim Compact Bottom Glass Card */}
          <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-4">
            <div className="rounded-xl sm:rounded-2xl border border-white/15 bg-slate-950/60 p-2.5 backdrop-blur-xl sm:p-3.5">
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
                    Finance Intern • BBA Final Year
                  </p>
                  <h2 className="text-sm sm:text-base lg:text-lg font-bold text-white tracking-tight">
                    {profile.name}
                  </h2>
                </div>
                <p className="text-[9px] sm:text-[11px] text-slate-300 font-medium text-right shrink-0">
                  Jagannath University
                </p>
              </div>

              {/* Mini Compact Metric Chips */}
              <div className="mt-2 sm:mt-2.5 grid grid-cols-3 gap-1 sm:gap-1.5 pt-1.5 sm:pt-2 border-t border-white/10 text-center">
                <div className="rounded-lg bg-white/8 px-1 py-1 backdrop-blur-sm border border-white/5">
                  <span className="block text-[7px] sm:text-[8px] uppercase tracking-wider text-slate-400 font-medium">Valuation</span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-white">7.70% WACC</span>
                </div>
                <div className="rounded-lg bg-white/8 px-1 py-1 backdrop-blur-sm border border-white/5">
                  <span className="block text-[7px] sm:text-[8px] uppercase tracking-wider text-slate-400 font-medium">Simulation</span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400">100K Trials</span>
                </div>
                <div className="rounded-lg bg-white/8 px-1 py-1 backdrop-blur-sm border border-white/5">
                  <span className="block text-[7px] sm:text-[8px] uppercase tracking-wider text-slate-400 font-medium">CGPA</span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-blue-400">3.35 / 4.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [activeCompetencyTab, setActiveCompetencyTab] = useState("All");
  const [formStatus, setFormStatus] = useState("");

  const sectionIds = useMemo(
    () => ["home", "about", "projects", "competencies", "education", "contact"],
    []
  );
  const activeSection = useActiveSection(sectionIds);
  const typedTitle = useTypewriter(profile.typingWords);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus("Thank you. Your message has been prepared.");
    event.currentTarget.reset();
  };

  const filteredCompetencies = useMemo(() => {
    if (activeCompetencyTab === "All") return competencyCategories;
    return competencyCategories.filter((cat) => cat.category === activeCompetencyTab);
  }, [activeCompetencyTab]);

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-[#070b14] dark:text-white print:bg-white print:text-black print:min-h-0 print:overflow-visible ${
        theme === "dark" ? "ambient-mode" : ""
      }`}
    >
      <CustomCursor />

      {/* Background Ambience */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden print:hidden">
        <div className="animated-aurora absolute left-1/2 top-[-16rem] h-[48rem] w-[48rem] -translate-x-1/2 rounded-full opacity-60 blur-3xl" />
        <div className="ambient-field absolute inset-0 opacity-0 transition-opacity duration-700" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-[32rem] w-[32rem] rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute right-[-8rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="noise-layer absolute inset-0 opacity-[0.03]" />
      </div>

      <Navbar
        activeSection={activeSection}
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      <main className="relative z-10 print:hidden">
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative flex min-h-screen items-center px-4 pb-12 pt-24 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12"
        >
          <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Availability Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 backdrop-blur-md sm:mb-5 sm:px-3.5 sm:py-1.5 sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                {profile.availability}
              </div>

              {/* Name & Subtitle */}
              <h1 className="text-balance text-[clamp(2.2rem,8vw,4.5rem)] font-extrabold leading-[1.06] tracking-tight text-slate-900 dark:text-white">
                {profile.name}
              </h1>

              {/* Typewriter Line */}
              <div className="mt-2.5 flex items-center min-h-[2.5rem] sm:min-h-[3rem]">
                <p className="text-lg sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent">
                  {typedTitle}
                </p>
                <span className="ml-1 inline-block h-5 w-[3px] animate-pulse rounded-full bg-blue-600 dark:bg-blue-400 sm:h-7" />
              </div>

              {/* Academic Affiliation */}
              <p className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {profile.subtitle}
              </p>

              {/* Mobile Hero Photo - Positioned directly above Career Objective on phones/tablets */}
              <div className="my-5 block lg:hidden">
                <HeroPhotoCard />
              </div>

              {/* Career Objective Box */}
              <div className="mt-5 rounded-2xl border border-slate-200/90 bg-white/80 p-4 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/80 sm:mt-6 sm:p-5">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5 sm:mb-2">
                  <Briefcase className="h-3.5 w-3.5" />
                  Career Objective
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  {profile.careerObjective}
                </p>
              </div>

              {/* Contact Pill Row */}
              <div className="mt-5 flex flex-wrap gap-x-3.5 gap-y-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-blue-500" />
                  {profile.location}
                </span>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-blue-500 transition break-all">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-blue-500" />
                  {profile.email}
                </a>
                <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-1.5 hover:text-blue-500 transition">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-blue-500" />
                  {profile.phone}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-blue-500 transition">
                  <Linkedin className="h-3.5 w-3.5 shrink-0 text-blue-500" />
                  LinkedIn
                </a>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3.5">
                <a
                  href="#projects"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition hover:bg-blue-500 active:scale-98 sm:w-auto sm:px-6 sm:py-3.5"
                >
                  Explore Valuation & Work
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsCVModalOpen(true)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/90 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-xl transition hover:border-blue-500 hover:text-blue-600 active:scale-98 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white dark:hover:border-blue-400 sm:w-auto sm:px-6 sm:py-3.5"
                >
                  <FileText className="h-4 w-4 text-blue-500" />
                  View Full CV / Resume
                </button>

                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-transparent px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white sm:w-auto"
                >
                  Contact Candidate
                </a>
              </div>

              {/* Financial Stats Grid */}
              <dl className="mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:grid-cols-4 sm:gap-3">
                {profile.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-200/80 bg-white/70 p-3 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/70 sm:p-3.5"
                  >
                    <dt className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </dt>
                    <dd className="mt-0.5 text-xl font-black text-slate-900 dark:text-white sm:mt-1 sm:text-2xl">
                      {stat.value}
                    </dd>
                    <p className="mt-0.5 text-[9px] text-slate-500 dark:text-slate-400 line-clamp-1 sm:text-[10px]">
                      {stat.sublabel}
                    </p>
                  </div>
                ))}
              </dl>
            </motion.div>

            {/* Desktop Profile Hero Card */}
            <motion.div
              className="hidden lg:block relative mx-auto w-full max-w-xl"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              <HeroPhotoCard />
            </motion.div>
          </div>
        </section>

        {/* ABOUT & OBJECTIVE SECTION */}
        <section id="about" className="px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              kicker="About Candidate"
              title="Finance Student Driven by Rigorous Valuation & Data Automation."
              copy="Md Rafatullah merges rigorous fundamental finance theory from Jagannath University with modern data analytics: DCF equity modeling, 100K-trial Monte Carlo risk simulations, automated Power BI reporting, and SQL dataset extraction."
            />

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Left Column: Narrative & Focus Areas */}
              <motion.div
                className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/85 sm:p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      Eager to Support Corporate Finance & Analytics Workflows
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                      BBA Finance Final-Year Student • Jagannath University
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  Currently seeking a <strong>3-month mandatory finance internship</strong> to build upon my foundational capabilities in <strong>Discounted Cash Flow (DCF) Valuation</strong>, financial statement analysis, and management reporting. With hands-on proficiency in <strong>Advanced Excel, Power BI dashboards, SQL databases, and Python</strong>, I am prepared to contribute immediately to data preparation, financial analysis, and executive reporting under senior mentorship.
                </p>

                <h4 className="mt-6 sm:mt-8 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Key Financial & Analytical Capabilities
                </h4>

                <div className="mt-3.5 grid gap-2 sm:grid-cols-2">
                  {focusAreas.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 text-xs font-semibold text-slate-800 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-200"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Target Internship Roles */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 sm:mt-8 sm:pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Target Roles
                  </h4>
                  <div className="mt-2.5 flex flex-wrap gap-1.5 sm:gap-2">
                    {[
                      "Finance Intern",
                      "Financial Analyst Intern",
                      "Equity Research Intern",
                      "Corporate Finance Trainee",
                      "Business Intelligence Analyst",
                      "Management Reporting Support"
                    ].map((role) => (
                      <span
                        key={role}
                        className="rounded-full border border-blue-500/20 bg-blue-50 px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold text-blue-700 dark:border-blue-400/20 dark:bg-blue-950/40 dark:text-blue-300"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Valuation Methodology Diagram */}
              <motion.div
                className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 to-slate-950 p-5 text-white shadow-xl sm:p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={sectionVariants}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3.5">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400">
                      Core Framework
                    </span>
                    <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] sm:text-xs text-slate-300">
                      Corporate Valuation
                    </span>
                  </div>

                  <h3 className="mt-3.5 text-xl sm:text-2xl font-bold tracking-tight text-white">
                    Integrated Financial Analysis Pipeline
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                    How Rafatullah structures fundamental corporate equity valuation from raw audited financial reports to probabilistic simulations:
                  </p>

                  <div className="mt-5 space-y-2.5 sm:space-y-3">
                    <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-3 sm:p-3.5">
                      <div className="flex items-center gap-3">
                        <span className="grid h-6 w-6 sm:h-7 sm:w-7 shrink-0 place-items-center rounded-lg bg-blue-600 text-[10px] sm:text-xs font-bold text-white">
                          01
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white">Historical Statement Normalization</p>
                          <p className="text-[10px] sm:text-[11px] text-slate-400">6-year revenue, EBITDA, working capital & Capex trends</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-3 sm:p-3.5">
                      <div className="flex items-center gap-3">
                        <span className="grid h-6 w-6 sm:h-7 sm:w-7 shrink-0 place-items-center rounded-lg bg-indigo-600 text-[10px] sm:text-xs font-bold text-white">
                          02
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white">WACC & Cost of Capital Modeling</p>
                          <p className="text-[10px] sm:text-[11px] text-slate-400">CAPM, risk-free benchmarking & capital structure weighting</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-3 sm:p-3.5">
                      <div className="flex items-center gap-3">
                        <span className="grid h-6 w-6 sm:h-7 sm:w-7 shrink-0 place-items-center rounded-lg bg-emerald-600 text-[10px] sm:text-xs font-bold text-white">
                          03
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white">5-Year FCFF Forecasting & Terminal Value</p>
                          <p className="text-[10px] sm:text-[11px] text-slate-400">Explicit cash flow projection & Gordon Growth/exit multiples</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-3 sm:p-3.5">
                      <div className="flex items-center gap-3">
                        <span className="grid h-6 w-6 sm:h-7 sm:w-7 shrink-0 place-items-center rounded-lg bg-amber-600 text-[10px] sm:text-xs font-bold text-white">
                          04
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white">100K-Trial Monte Carlo & Sensitivity Matrix</p>
                          <p className="text-[10px] sm:text-[11px] text-slate-400">Altman Z-Score solvency & stochastic distribution testing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-850/80 p-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Applied in Case Study:</span>
                    <span className="font-bold text-emerald-400">Robi Axiata Ltd.</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* VALUATION & PROJECTS SECTION */}
        <section id="projects" className="px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              kicker="Portfolio Case Studies"
              title="Valuation Models & Commercial Analytics"
              copy="Deep-dive into complete valuation models, unit economics decompositions, and automated business intelligence dashboards extracted from actual corporate case studies and coursework."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpenDetails={(p) => setSelectedProject(p)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CORE COMPETENCIES SECTION */}
        <section id="competencies" className="px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              kicker="Core Competencies"
              title="Technical Stack, Soft Skills & Languages"
              copy="A comprehensive breakdown of quantitative modeling abilities, relational database querying, business communication, and multilingual proficiencies."
            />

            {/* Filter Tabs */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {["All", "Technical Skills", "Soft Skills", "Languages"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveCompetencyTab(tab)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition sm:px-4 sm:py-2 ${
                    activeCompetencyTab === tab
                      ? "bg-blue-600 text-white shadow-md"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Competency Group Cards */}
            <div className="space-y-8 sm:space-y-10">
              {filteredCompetencies.map((group) => (
                <div key={group.category}>
                  <div className="mb-3.5 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {group.description}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
                    {group.skills.map((skill) => {
                      const Icon = iconMap[skill.icon] || BarChart3;

                      return (
                        <div
                          key={skill.name}
                          className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-2xs backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-blue-500/40 dark:border-slate-800/80 dark:bg-slate-900/85 sm:p-5"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-2.5 sm:gap-3">
                              <div className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                              </div>
                              <div>
                                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                                  {skill.name}
                                </h4>
                                {skill.proficiency && (
                                  <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                                    {skill.proficiency}
                                  </span>
                                )}
                              </div>
                            </div>
                            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                              {skill.level}%
                            </span>
                          </div>

                          <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-h-[2.5rem]">
                            {skill.description}
                          </p>

                          <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS SECTION */}
        <section id="education" className="px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              kicker="Academic & Training Credentials"
              title="Education, Bootcamps & Professional Certifications"
              copy="Formal academic degrees in finance and business studies paired with hands-on enterprise data analytics training."
            />

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {/* Academic Education */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                  <GraduationCap className="h-4 w-4" />
                  Formal Academic Degrees
                </div>

                {education.map((item) => (
                  <div
                    key={item.institution}
                    className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/85 sm:p-7"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <span className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] sm:text-xs font-bold text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 mb-1.5">
                          {item.period} • {item.status}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                          {item.institution}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {item.location}
                        </p>
                      </div>

                      <div className="self-start rounded-xl border border-emerald-500/30 bg-emerald-50 px-3 py-1.5 text-left sm:text-center dark:border-emerald-500/20 dark:bg-emerald-950/30">
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
                          Result
                        </span>
                        <span className="text-sm sm:text-base font-black text-emerald-800 dark:text-emerald-300">
                          {item.result}
                        </span>
                      </div>
                    </div>

                    <h4 className="mt-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {item.degree}
                    </h4>

                    <ul className="mt-2.5 space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-blue-500 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Certifications & Reference */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                  <Award className="h-4 w-4" />
                  Professional Certifications
                </div>

                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/85 sm:p-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] sm:text-xs font-bold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                        {cert.badge}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {cert.period}
                      </span>
                    </div>

                    <h3 className="mt-2.5 text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {cert.issuer}
                    </p>

                    <div className="mt-3.5">
                      <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                        Key Curriculum Modules:
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {cert.keyModules.map((m) => (
                          <span
                            key={m}
                            className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-800/70 dark:text-slate-300"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3.5 rounded-xl bg-slate-50 p-3 border border-slate-100 dark:border-slate-800 dark:bg-slate-800/50 sm:p-3.5">
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                        <span className="font-bold text-slate-900 dark:text-white">Capstone Execution: </span>
                        {cert.practicalApplication}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Academic Reference Card */}
                <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 p-5 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:from-slate-900/90 dark:to-slate-950/90 sm:p-7">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    <ShieldCheck className="h-4 w-4" />
                    Academic Reference
                  </div>
                  <h3 className="mt-2.5 text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {reference.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {reference.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {reference.organization}
                  </p>

                  <div className="mt-3.5 flex flex-col gap-1 text-xs text-slate-600 dark:text-slate-300">
                    <a href={`mailto:${reference.email}`} className="hover:text-blue-600 transition break-all">
                      Email: {reference.email}
                    </a>
                    <a href={`tel:${reference.phone}`} className="hover:text-blue-600 transition">
                      Phone: {reference.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={sectionVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2.5 sm:px-3.5 sm:py-1 sm:text-xs">
                <Mail className="h-3.5 w-3.5" />
                Contact & Hiring
              </div>

              <h2 className="text-balance text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Ready for Corporate Finance Opportunities.
              </h2>

              <p className="mt-3 text-xs sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Seeking a 3-month mandatory finance internship. Open for financial modeling, DCF valuation, business reporting, and data analytics trainee roles in Dhaka.
              </p>

              <div className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3">
                {socialLinks.map((link) => {
                  const opensNewTab = link.href.startsWith("http");

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={opensNewTab ? "_blank" : undefined}
                      rel={opensNewTab ? "noreferrer" : undefined}
                      className="group flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 sm:px-5 sm:py-4 font-medium text-slate-800 shadow-2xs backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800/80 dark:bg-slate-900/80 dark:text-slate-200"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-500 shrink-0">
                          {link.label}:
                        </span>
                        <span className="text-xs sm:text-sm font-semibold truncate">{link.value}</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-blue-500 group-hover:translate-x-0.5" />
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 sm:mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsCVModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-98 text-white py-3 sm:py-3.5 text-xs font-bold shadow-md transition"
                >
                  <FileText className="h-4 w-4" />
                  View & Print Full CV
                </button>
              </div>
            </motion.div>

            {/* Direct Inquiry Form */}
            <motion.form
              className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-xl backdrop-blur-2xl dark:border-slate-800/80 dark:bg-slate-900/90 sm:p-8"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                Send an Internship or Project Inquiry
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                Directly reaches rafatullah.r.h@gmail.com
              </p>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Name
                  </span>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-base sm:text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-800/70 dark:text-white"
                    type="text"
                    name="name"
                    placeholder="e.g. Hiring Manager / Recruiter"
                    required
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Organization / Company
                  </span>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-base sm:text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-800/70 dark:text-white"
                    type="text"
                    name="company"
                    placeholder="e.g. Bank / Asset Management / Corporate"
                  />
                </label>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2 sm:gap-4 sm:mt-4">
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Work Email
                  </span>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-base sm:text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-800/70 dark:text-white"
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    required
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Subject / Role Opportunity
                  </span>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-base sm:text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-800/70 dark:text-white"
                    type="text"
                    name="subject"
                    placeholder="Finance Internship / Case Study Discussion"
                  />
                </label>
              </div>

              <label className="mt-3 block sm:mt-4">
                <span className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Message Details
                </span>
                <textarea
                  className="min-h-28 sm:min-h-32 w-full resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-base sm:text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-800/70 dark:text-white"
                  name="message"
                  placeholder="Share details regarding the internship opportunity or interview invitation..."
                  required
                />
              </label>

              <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:mt-6 sm:gap-4">
                <button
                  type="submit"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 active:scale-98 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400 dark:hover:text-white px-5 py-3 sm:px-6 sm:py-3.5 text-xs font-bold text-white shadow-md transition"
                >
                  <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  Submit Inquiry
                </button>

                {formStatus ? (
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {formStatus}
                  </p>
                ) : (
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Direct phone: {profile.phone}
                  </p>
                )}
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <Footer onOpenCV={() => setIsCVModalOpen(true)} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-2 sm:bottom-5 sm:right-5 print:hidden">
        <button
          type="button"
          onClick={() => setIsCVModalOpen(true)}
          className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl bg-blue-600 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-500 active:scale-95"
          aria-label="View Full CV"
          title="View Full CV / Resume"
        >
          <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <a
          href={`mailto:${profile.email}`}
          className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl border border-slate-200 bg-white/90 text-slate-700 shadow-md backdrop-blur-xl transition hover:-translate-y-0.5 hover:text-blue-600 active:scale-95 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200"
          aria-label="Email"
          title="Email Md Rafatullah"
        >
          <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
      </div>

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}

export default App;
