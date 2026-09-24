import { useState } from "react";
import { Menu, Moon, Sun, X, FileText, Download } from "lucide-react";
import { motion } from "framer-motion";
import { navItems, profile } from "../data.js";

function Navbar({ activeSection, theme, onThemeToggle, onOpenCV }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => setIsOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4 print:hidden">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200/80 bg-white/85 px-3 py-2.5 shadow-sm backdrop-blur-2xl dark:border-slate-800/80 dark:bg-slate-950/80 sm:px-5 sm:py-3"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="flex items-center gap-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleNavigate}
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 text-xs font-bold text-white shadow">
            {profile.initials}
          </span>
          <div className="hidden sm:block text-left">
            <span className="block text-sm font-bold tracking-tight text-slate-900 dark:text-white">
              {profile.name}
            </span>
            <span className="block text-[11px] font-medium text-blue-600 dark:text-blue-400">
              Finance Intern • BBA Final Year
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 rounded-xl bg-slate-100/80 p-1 dark:bg-slate-900/90 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
                  isActive
                    ? "text-white dark:text-slate-950"
                    : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-slate-900 dark:bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCV}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2 text-xs font-semibold shadow transition"
          >
            <FileText className="h-3.5 w-3.5" />
            View CV
          </button>

          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-slate-100/70 text-slate-700 transition hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            onClick={onThemeToggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-slate-100/70 text-slate-700 transition hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            title="Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="mx-auto mt-2 max-w-7xl rounded-2xl border border-slate-200/90 bg-white/95 p-3 shadow-xl backdrop-blur-2xl dark:border-slate-800/90 dark:bg-slate-950/95 lg:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block rounded-xl px-4 py-2 text-xs font-semibold transition ${
                  activeSection === item.id
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                }`}
                onClick={handleNavigate}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <button
              onClick={() => {
                handleNavigate();
                onOpenCV();
              }}
              className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 text-white py-2.5 text-xs font-semibold"
            >
              <FileText className="h-3.5 w-3.5" />
              View Full CV / Resume
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
