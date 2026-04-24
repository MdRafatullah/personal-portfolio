import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion } from "framer-motion";
import { navItems, profile } from "../data.js";

function Navbar({ activeSection, theme, onThemeToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => setIsOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-900/10 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-ink/70"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-electric"
          onClick={handleNavigate}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-electric to-violet text-sm font-bold text-white shadow-glow">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold text-graphite dark:text-white sm:block">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full bg-slate-900/[0.04] p-1 dark:bg-white/8 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "text-white dark:text-ink"
                    : "text-slate-600 hover:text-electric dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-graphite dark:bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-900/10 bg-white/60 text-slate-700 transition hover:-translate-y-0.5 hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric dark:border-white/10 dark:bg-white/8 dark:text-slate-200"
            onClick={onThemeToggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-900/10 bg-white/60 text-slate-700 transition hover:-translate-y-0.5 hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric dark:border-white/10 dark:bg-white/8 dark:text-slate-200 lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            title="Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          className="mx-auto mt-3 max-w-7xl rounded-3xl border border-slate-900/10 bg-white/90 p-3 shadow-glass backdrop-blur-2xl dark:border-white/10 dark:bg-ink/95 lg:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                activeSection === item.id
                  ? "bg-graphite text-white dark:bg-white dark:text-ink"
                  : "text-slate-700 hover:bg-slate-900/[0.04] dark:text-slate-200 dark:hover:bg-white/8"
              }`}
              onClick={handleNavigate}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
