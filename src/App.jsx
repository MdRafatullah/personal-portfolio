import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  FileSpreadsheet,
  Languages,
  Mail,
  MapPin,
  Megaphone,
  Palette,
  PenLine,
  Phone,
  Send,
  Sparkles
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import {
  focusAreas,
  interests,
  profile,
  projects,
  reference,
  skills,
  socialLinks,
  timeline
} from "./data.js";

const iconMap = {
  Bot,
  FileSpreadsheet,
  Languages,
  Megaphone,
  Palette,
  PenLine
};

const contactIconMap = {
  Email: Mail,
  Phone,
  Location: MapPin
};

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function SectionHeader({ kicker, title, copy }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVariants}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-electric">
        {kicker}
      </p>
      <h2 className="text-balance text-3xl font-semibold text-graphite dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-base leading-8 text-slate-600 dark:text-slate-300">
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
    const delay = atWordEnd && !isDeleting ? 1400 : isDeleting ? 34 : 62;

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

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [formStatus, setFormStatus] = useState("");
  const [hasCoverImage, setHasCoverImage] = useState(true);
  const sectionIds = useMemo(
    () => ["home", "about", "projects", "experience", "contact"],
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
    setFormStatus("Thanks. Your message is ready to send.");
    event.currentTarget.reset();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-cloud text-graphite transition-colors duration-500 dark:bg-ink dark:text-white">
      <CustomCursor />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="animated-aurora absolute left-1/2 top-[-18rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full opacity-70 blur-3xl" />
        <div className="absolute bottom-0 left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-mint/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-violet/20 blur-3xl" />
        <div className="noise-layer absolute inset-0 opacity-[0.05]" />
      </div>

      <Navbar
        activeSection={activeSection}
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      />

      <main>
        <section
          id="home"
          className="relative flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-8 lg:px-12"
        >
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/8 dark:text-slate-200">
                <Sparkles className="h-4 w-4 text-mint" aria-hidden="true" />
                {profile.availability}
              </div>

              <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-normal text-graphite dark:text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                {profile.name}
              </h1>
              <p className="mt-6 min-h-12 text-2xl font-medium text-slate-700 dark:text-slate-200 sm:text-3xl">
                {typedTitle}
                <span className="ml-1 inline-block h-7 w-[3px] translate-y-1 animate-pulse rounded-full bg-electric" />
              </p>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 dark:text-slate-300">
                {profile.tagline}
              </p>

              <div className="mt-7 flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300 sm:flex-row sm:flex-wrap">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-electric" aria-hidden="true" />
                  {profile.location}
                </span>
                <a className="inline-flex items-center gap-2 hover:text-electric" href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4 text-electric" aria-hidden="true" />
                  {profile.email}
                </a>
                <a className="inline-flex items-center gap-2 hover:text-electric" href="tel:+8801882222669">
                  <Phone className="h-4 w-4 text-electric" aria-hidden="true" />
                  {profile.phone}
                </a>
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-graphite px-6 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-cloud dark:bg-white dark:text-ink dark:hover:bg-mint dark:focus:ring-offset-ink"
                >
                  View My Work
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/60 px-6 py-3 text-sm font-semibold text-graphite backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-electric/50 hover:text-electric dark:border-white/10 dark:bg-white/8 dark:text-white"
                >
                  Contact Rafatullah
                </a>
              </div>

              <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
                {profile.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-slate-900/10 bg-white/55 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/8"
                  >
                    <dt className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 text-2xl font-semibold text-graphite dark:text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-xl"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            >
              <div className="absolute inset-8 rounded-full bg-electric/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white/55 p-4 shadow-glass backdrop-blur-2xl dark:border-white/10 dark:bg-white/8">
                <div className="relative min-h-[34rem] overflow-hidden rounded-[1.5rem] border border-white/20 bg-ink text-white">
                  {hasCoverImage ? (
                    <img
                      className="absolute inset-0 h-full w-full object-cover object-center"
                      src={profile.coverImage}
                      alt={`Portrait of ${profile.name}`}
                      onError={() => setHasCoverImage(false)}
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-slate-900 via-slate-800 to-electric/60">
                      <div className="grid h-44 w-44 place-items-center rounded-full border border-white/20 bg-white/10 text-6xl font-semibold shadow-glow backdrop-blur-xl">
                        {profile.initials}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
                      <p className="text-sm uppercase tracking-[0.24em] text-mint">
                        {profile.title}
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold">{profile.name}</h2>
                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {["SMM", "Excel", "Canva"].map((item) => (
                          <div key={item} className="rounded-lg bg-white/10 px-4 py-3 text-center">
                            <p className="text-sm font-semibold">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              kicker="About"
              title="Detail-oriented finance student building a career in SMM and digital operations."
              copy="Rafatullah combines finance education with practical digital skills: social media trend awareness, Excel-based data handling, content writing, AI-assisted research, and beginner-friendly design execution."
            />

            <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
              <motion.div
                className="rounded-3xl border border-slate-900/10 bg-white/65 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-90px" }}
                variants={sectionVariants}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-2xl font-semibold text-graphite dark:text-white">
                  Practical, organized, and ready to support growing teams.
                </h3>
                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                  Dedicated and detail-oriented BBA Finance student at Jagannath University
                  with a focus on finance and business administration. Proficient in MS
                  Office, MS Excel data handling, content writing, AI research tools, and
                  basic Canva design.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {focusAreas.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg bg-slate-900/[0.04] px-4 py-3 text-sm font-medium text-slate-700 dark:bg-white/8 dark:text-slate-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-mint" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-electric">
                    Interests
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <span
                        key={interest}
                        className="rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/8 dark:text-slate-300"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-4">
                {skills.map((skill, index) => {
                  const Icon = iconMap[skill.icon];

                  return (
                    <motion.div
                      key={skill.name}
                      className="rounded-3xl border border-slate-900/10 bg-white/65 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-electric/40 dark:border-white/10 dark:bg-white/8"
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ delay: index * 0.08, duration: 0.55 }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-electric/20 to-violet/20 text-electric">
                            <Icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-graphite dark:text-white">
                              {skill.name}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-electric">{skill.level}%</span>
                      </div>
                      <div className="mt-5 h-2 rounded-full bg-slate-900/10 dark:bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-electric via-violet to-mint"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.15 + index * 0.08 }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              kicker="Work"
              title="Portfolio focus areas shaped from the CV."
              copy="The CV does not list public project links yet, so these cards present the strongest professional focus areas and can be swapped for live case studies later."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              kicker="Experience"
              title="Work experience and education timeline."
              copy="A clean view of Rafatullah's data entry experience, ongoing BBA Finance degree, and business studies foundation."
            />

            <div className="relative">
              <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-electric via-violet to-transparent sm:block" />
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.article
                    key={`${item.year}-${item.title}`}
                    className="relative rounded-3xl border border-slate-900/10 bg-white/65 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/8 sm:ml-12"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                  >
                    <div className="absolute -left-[3.32rem] top-8 hidden h-8 w-8 rounded-full border-4 border-cloud bg-electric shadow-glow dark:border-ink sm:block" />
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-electric">
                          {item.year}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-graphite dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-slate-500 dark:text-slate-400">
                          {item.organization}
                        </p>
                      </div>
                      <div className="rounded-full bg-slate-900/[0.04] px-4 py-2 text-sm font-medium text-slate-600 dark:bg-white/8 dark:text-slate-300">
                        {item.type}
                      </div>
                    </div>
                    <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={sectionVariants}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-electric">
                Contact
              </p>
              <h2 className="text-balance text-3xl font-semibold text-graphite dark:text-white sm:text-5xl">
                Available for social media, content, and organized data support.
              </h2>
              <p className="mt-6 max-w-xl text-pretty leading-8 text-slate-600 dark:text-slate-300">
                Reach out for SMM support, content writing, Excel data entry, or junior
                business operations opportunities in Dhaka.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {socialLinks.map((link) => {
                  const Icon = contactIconMap[link.label] || ArrowUpRight;
                  const opensNewTab = link.href.startsWith("http");

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={opensNewTab ? "_blank" : undefined}
                      rel={opensNewTab ? "noreferrer" : undefined}
                      className="group flex items-center justify-between rounded-lg border border-slate-900/10 bg-white/60 px-5 py-4 font-medium text-slate-700 backdrop-blur-xl transition hover:-translate-y-1 hover:border-electric/50 hover:text-electric dark:border-white/10 dark:bg-white/8 dark:text-slate-200"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-electric" aria-hidden="true" />
                        {link.label}
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 rounded-3xl border border-slate-900/10 bg-white/60 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-electric">
                  Reference
                </p>
                <h3 className="mt-3 text-xl font-semibold text-graphite dark:text-white">
                  {reference.name}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  {reference.title}
                </p>
                <p className="text-slate-500 dark:text-slate-400">{reference.organization}</p>
                <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <a href={`mailto:${reference.email}`} className="hover:text-electric">
                    {reference.email}
                  </a>
                  <a href="tel:+8801711246101" className="hover:text-electric">
                    {reference.phone}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.form
              className="rounded-3xl border border-slate-900/10 bg-white/70 p-6 shadow-glass backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 sm:p-8"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-300">
                    Name
                  </span>
                  <input
                    className="w-full rounded-lg border border-slate-900/10 bg-white/80 px-4 py-3 text-graphite outline-none transition focus:border-electric focus:ring-4 focus:ring-electric/15 dark:border-white/10 dark:bg-white/8 dark:text-white"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-300">
                    Email
                  </span>
                  <input
                    className="w-full rounded-lg border border-slate-900/10 bg-white/80 px-4 py-3 text-graphite outline-none transition focus:border-electric focus:ring-4 focus:ring-electric/15 dark:border-white/10 dark:bg-white/8 dark:text-white"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-300">
                  Message
                </span>
                <textarea
                  className="min-h-40 w-full resize-y rounded-lg border border-slate-900/10 bg-white/80 px-4 py-3 text-graphite outline-none transition focus:border-electric focus:ring-4 focus:ring-electric/15 dark:border-white/10 dark:bg-white/8 dark:text-white"
                  name="message"
                  placeholder="Tell Rafatullah what kind of support you need..."
                  required
                />
              </label>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-graphite px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:bg-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-cloud dark:bg-white dark:text-ink dark:hover:bg-mint dark:focus:ring-offset-ink"
                >
                  Send Message
                  <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
                {formStatus ? (
                  <p className="text-sm font-medium text-mint" role="status">
                    {formStatus}
                  </p>
                ) : (
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Direct contact: {profile.phone}
                  </p>
                )}
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <Footer />

      <div className="fixed bottom-5 right-5 z-40 flex gap-2">
        <a
          href={`mailto:${profile.email}`}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-900/10 bg-white/70 text-slate-700 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:text-electric dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
          aria-label={`Email ${profile.name}`}
          title="Email"
        >
          <Mail className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href="tel:+8801882222669"
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-900/10 bg-white/70 text-slate-700 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:text-electric dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
          aria-label={`Call ${profile.name}`}
          title="Phone"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href="https://www.google.com/maps/search/Jurain,+Shyampur,+Dhaka-1203"
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-900/10 bg-white/70 text-slate-700 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:text-electric dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
          aria-label={`${profile.name} location`}
          target="_blank"
          rel="noreferrer"
          title="Location"
        >
          <MapPin className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default App;
