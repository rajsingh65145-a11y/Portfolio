import { ArrowUp, Terminal, Heart } from "lucide-react";
import { personalInfo, navLinks } from "../data/personalInfo";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040407] border-t border-rose-950/30 py-12 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="#home"
            className="inline-flex items-center gap-2.5 text-white font-bold tracking-wider hover:text-rose-400 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-rose-500/15 border border-rose-500/40 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-rose-400" />
            </div>
            <span>{personalInfo.brandName}</span>
          </a>
          <p className="text-xs text-slate-500 mt-2 max-w-xs">
            Interactive 3D Developer Portfolio built with React, Three.js, Tailwind CSS, and GSAP.
          </p>
        </div>

        {/* Center: Quick Navigation Links */}
        <ul className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="text-slate-400 hover:text-rose-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Scroll To Top Button */}
        <a
          href="#home"
          aria-label="Scroll back to top"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-rose-500/40 text-xs font-mono text-slate-300 hover:text-rose-300 transition-all"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-rose-400" />
        </a>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <p className="inline-flex items-center gap-1.5 font-mono">
          <span>Crafted with React, Three.js &</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        </p>
      </div>
    </footer>
  );
}

export default Footer;