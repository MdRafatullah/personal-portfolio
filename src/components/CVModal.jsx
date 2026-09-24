import { X, Printer, Mail, Phone, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../data.js";

/* Brand Logos matching the exact CV styling */
function RobiBrandLogo() {
  return (
    <span className="inline-flex items-center gap-1 brand-logo align-middle shrink-0 ml-1.5 print:inline-flex">
      <svg className="h-3.5 w-3.5 inline-block shrink-0" viewBox="0 0 40 40" fill="none">
        <polygon points="20,2 38,13 20,25" fill="#E31B23" />
        <polygon points="20,2 2,13 20,25" fill="#FF5E00" />
        <polygon points="2,13 20,25 20,38" fill="#C4121A" />
        <polygon points="38,13 20,25 20,38" fill="#E31B23" />
        <polygon points="20,25 20,38 29,38" fill="#990000" />
      </svg>
      <span className="text-[12px] font-bold text-[#E31B23] tracking-tighter leading-none lowercase">robi</span>
    </span>
  );
}

function FabrilifeBrandLogo() {
  return (
    <span className="inline-flex items-center gap-1 brand-logo align-middle shrink-0 ml-1.5 print:inline-flex">
      <svg className="h-3 w-3 inline-block shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 3h14l-3 4.5H8.5l-1 2.5H13l-3 4.5H6.5L3 21h4.5l4-8H16l3.5-5H9l1.5-2.5H20L22 3H4z" fill="#000000" />
      </svg>
      <span className="text-[10px] font-black text-black tracking-tight leading-none uppercase">FABRILIFE</span>
    </span>
  );
}

function HDNBBrandLogo() {
  return (
    <span className="inline-flex items-center gap-1 brand-logo align-middle shrink-0 ml-1.5 print:inline-flex">
      <svg className="h-3 w-3 inline-block shrink-0" viewBox="0 0 20 20">
        <rect x="2" y="2" width="6.5" height="6.5" rx="1.5" fill="#16a34a" />
        <rect x="11.5" y="2" width="6.5" height="6.5" rx="1.5" fill="#dc2626" />
        <rect x="2" y="11.5" width="6.5" height="6.5" rx="1.5" fill="#ca8a04" />
        <rect x="11.5" y="11.5" width="6.5" height="6.5" rx="1.5" fill="#2563eb" />
      </svg>
      <span className="text-[10px] font-black text-[#1e3a8a] tracking-tight leading-none uppercase">HDNB</span>
    </span>
  );
}

function LinkedInBadge() {
  return (
    <svg className="h-3.5 w-3.5 inline-block shrink-0 contact-icon align-middle" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#0077b5" />
      <path
        d="M6.5 9h2.5v8.5h-2.5v-8.5zm1.25-4c.8 0 1.45.65 1.45 1.45s-.65 1.45-1.45 1.45-1.45-.65-1.45-1.45.65-1.45 1.45-1.45zm3.75 4h2.4v1.2h.03c.33-.63 1.15-1.3 2.37-1.3 2.53 0 3 1.67 3 3.84v4.76h-2.5v-4.22c0-1.01-.02-2.3-1.4-2.3-1.4 0-1.62 1.09-1.62 2.23v4.29h-2.5v-8.5z"
        fill="#ffffff"
      />
    </svg>
  );
}

function CVSectionHeading({ title }) {
  return (
    <div className="mb-2">
      <h2 className="text-[12px] font-bold uppercase tracking-wider text-black">
        {title}
      </h2>
      <div className="border-b-[1.5px] border-black mt-0.5" />
    </div>
  );
}

function CVModal({ isOpen, onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className={
        isOpen
          ? "fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto cv-modal-overlay print:static print:block print:p-0 print:m-0 print:overflow-visible"
          : "hidden print:block print:static"
      }
    >
      {/* Modal Backdrop - strictly hidden during print */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md print:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}

      {/* Modal Dialog Box */}
      <div
        id="printable-cv-dialog"
        className={
          isOpen
            ? "relative w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-2xl bg-white text-slate-900 shadow-2xl z-10 p-4 sm:p-8 md:p-10 border border-slate-200 print:border-none print:shadow-none print:p-0 print:m-0 print:max-h-none print:overflow-visible print:w-full print:max-w-full"
            : "w-full bg-white text-slate-900 p-0 m-0 border-none shadow-none"
        }
      >
        {/* Action Toolbar - Hidden on Print */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4 sm:mb-6 print:hidden print-hidden">
          <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-slate-500">
            Curriculum Vitae Preview • MD RAFATULLAH
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-3.5 py-1.5 text-xs font-semibold shadow transition cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              Print / Save PDF (1 Page)
            </button>
            <button
              type="button"
              onClick={onClose}
              className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 1-PAGE EXACT CV DOCUMENT CONTAINER */}
        <div
          id="printable-cv"
          className="cv-document bg-white text-black font-sans text-[11px] sm:text-[11.5px] leading-[1.38] mx-auto max-w-[800px] print:max-w-none print:w-full print:p-0 print:m-0"
        >
          {/* HEADER: Candidate Info (Left) & Portrait Photo (Right) */}
          <div className="cv-section flex items-start justify-between gap-4 pb-3">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-black">
                {profile.name}
              </h1>
              <p className="text-xs sm:text-[13px] font-medium text-slate-800 mt-0.5 tracking-normal">
                {profile.title}
              </p>

              {/* Contact Row 1 */}
              <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-[11.5px] text-black">
                <span className="inline-flex items-center gap-1">
                  <Phone className="h-3 w-3 text-[#0284c7] shrink-0 contact-icon" />
                  <span>{profile.phone}</span>
                </span>
                <span className="text-slate-400 font-light">|</span>
                <span className="inline-flex items-center gap-1">
                  <Mail className="h-3 w-3 text-[#0284c7] shrink-0 contact-icon" />
                  <span>{profile.email}</span>
                </span>
                <span className="text-slate-400 font-light">|</span>
              </div>

              {/* Contact Row 2 */}
              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-[11.5px] text-black">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-[#0284c7] shrink-0 contact-icon" />
                  <span>{profile.location.replace(", Bangladesh", "")}</span>
                </span>
                <span className="text-slate-400 font-light">|</span>
                <span className="inline-flex items-center gap-1">
                  <LinkedInBadge />
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-black underline cv-linkedin-link hover:text-blue-700"
                  >
                    linkedin.com/in/mdrafatullah
                  </a>
                </span>
                <span className="text-slate-400 font-light">|</span>
              </div>

              {/* Contact Row 3 */}
              <div className="mt-1 flex items-center gap-1.5 text-[11px] sm:text-[11.5px] text-black">
                <Globe className="h-3 w-3 text-black shrink-0 contact-icon" />
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-blue-700"
                >
                  mdrafatullah.github.io
                </a>
              </div>
            </div>

            {/* Profile Photo: Cutout upright portrait */}
            <div className="shrink-0 pt-0.5">
              <img
                src={profile.cvPhoto || "rafatullah-photo.png"}
                alt={profile.name}
                className="w-24 sm:w-28 h-auto object-contain rounded-sm"
              />
            </div>
          </div>

          {/* SECTION 1: CAREER OBJECTIVE */}
          <div className="cv-section mt-2">
            <CVSectionHeading title="Career Objective" />
            <p className="text-[11px] sm:text-[11.5px] leading-relaxed text-black text-justify">
              {profile.careerObjective}
            </p>
          </div>

          {/* SECTION 2: EDUCATION */}
          <div className="cv-section mt-3">
            <CVSectionHeading title="Education" />
            <div className="space-y-1.5">
              <div className="text-[11px] sm:text-[11.5px]">
                <div className="flex items-baseline justify-between font-bold text-black">
                  <span>Jagannath University | Dhaka, Bangladesh</span>
                  <span className="font-normal text-black text-right shrink-0">3.35/4 CGPA</span>
                </div>
                <div className="text-black italic text-[10.5px] sm:text-[11px]">
                  Bachelor of Business Administration (BBA) in Finance | 2023 – Present
                </div>
              </div>

              <div className="text-[11px] sm:text-[11.5px]">
                <div className="flex items-baseline justify-between font-bold text-black">
                  <span>Dhaka College | Dhaka, Bangladesh</span>
                  <span className="font-normal text-black text-right shrink-0">5.00/5.00 GPA</span>
                </div>
                <div className="text-black italic text-[10.5px] sm:text-[11px]">
                  Higher Secondary Certificate (HSC) – Business Studies | 2019 – 2020
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: PROJECTS */}
          <div className="cv-section mt-3">
            <CVSectionHeading title="Projects" />
            <div className="space-y-2.5">
              {/* Robi Axiata Project */}
              <div>
                <div className="flex items-center font-bold text-black text-[11.5px] sm:text-[12px]">
                  <span>Financial Valuation of Robi Axiata Ltd.</span>
                  <RobiBrandLogo />
                </div>
                <ul className="list-disc pl-4 mt-1 space-y-0.5 text-black text-[10.5px] sm:text-[11px] leading-[1.38]">
                  <li>
                    Performed a complete DCF equity valuation, historical financial and bankruptcy analysis, and 100,000-trial Monte Carlo risk modeling for Robi Axiata Ltd.
                  </li>
                  <li>
                    Analyzed 6-year financial performance, calculated a 7.70% WACC to model DCF share value, and tested market uncertainty via sensitivity and simulation analysis.
                  </li>
                  <li>
                    Evaluated Robi Axiata's intrinsic share price and financial health using 5-year DCF forecasting, Altman Z-scores, and multi-variable risk simulations.
                  </li>
                </ul>
              </div>

              {/* Fabrilife Project */}
              <div>
                <div className="flex items-center font-bold text-black text-[11.5px] sm:text-[12px]">
                  <span>E-Business Model & Market Analysis of Fabrilife</span>
                  <FabrilifeBrandLogo />
                </div>
                <ul className="list-disc pl-4 mt-1 space-y-0.5 text-black text-[10.5px] sm:text-[11px] leading-[1.38]">
                  <li>
                    Evaluated Fabrilife's print-on-demand (POD) revenue model, analyzing gross margin structures, creator commission payouts, and zero-inventory working capital efficiency.
                  </li>
                  <li>
                    Analyzed unit economics and operational supply chain risks, identifying critical cost drivers in domestic last-mile logistics partnerships and blank garment sourcing.
                  </li>
                  <li>
                    Formulated data-driven strategic recommendations for institutional B2B bulk orders, fulfillment automation, and digital payment scalability.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SECTION 4: CORE COMPETENCIES */}
          <div className="cv-section mt-3">
            <CVSectionHeading title="Core Competencies" />
            <div className="space-y-1 text-[10.5px] sm:text-[11px] leading-snug">
              <div className="grid grid-cols-[130px_1fr] sm:grid-cols-[140px_1fr] items-baseline">
                <span className="font-bold text-black">Technical Skills</span>
                <span className="text-black">
                  MS Office, Power BI, Data Studio, Excel, SQL, Python, Financial Modeling (DCF).
                </span>
              </div>
              <div className="grid grid-cols-[130px_1fr] sm:grid-cols-[140px_1fr] items-baseline">
                <span className="font-bold text-black">Soft Skills</span>
                <span className="text-black">
                  Analytical Thinking, Collaboration & Teamwork, Business Communication, Time Management, Quick Learner.
                </span>
              </div>
              <div className="grid grid-cols-[130px_1fr] sm:grid-cols-[140px_1fr] items-baseline">
                <span className="font-bold text-black">Language Skills</span>
                <span className="text-black">
                  Bengali (Native), English (Professional Working Proficiency), Hindi (Spoken)
                </span>
              </div>
            </div>
          </div>

          {/* SECTION 5: CERTIFICATIONS */}
          <div className="cv-section mt-3">
            <CVSectionHeading title="Certifications" />
            <div>
              <div className="flex items-center font-bold text-black text-[11.5px] sm:text-[12px]">
                <span>Data Analytics Career Bootcamp | Human Development Network Bangladesh (HDNB)</span>
                <HDNBBrandLogo />
              </div>
              <ul className="list-disc pl-4 mt-1 space-y-0.5 text-black text-[10.5px] sm:text-[11px] leading-[1.38]">
                <li>
                  <strong className="font-bold text-black">Key Modules:</strong> Advanced Excel, Microsoft Power BI, Relational Databases (SQL), Python for Analytics, AI-Driven Workflow Automation
                </li>
                <li>
                  Built interactive Power BI dashboards, automated reporting workflows, and applied SQL queries to extract and structure large business datasets.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVModal;
