import { ArrowRight, Mail, Sparkles, ChevronDown } from "lucide-react";
import { personalInfo } from "../data/personalInfo";
import HeroScene from "../three/HeroScene";
import ProfileFrame from "../components/ProfileFrame";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050508]"
    >
      {/* Background 3D Interactive Scene (Particles + Rings + Geometric Core) */}
      <HeroScene />

      {/* Ambient Gradient Glows (Background Depth) */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-rose-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Main 2-Column Hero Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Intro, Headline, Bio & CTA Buttons (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* Top Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono mb-6 backdrop-blur-md shadow-lg shadow-rose-500/5">
            <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            <span>{personalInfo.heroBadge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-white bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Professional Developer Headline */}
          <p className="text-lg sm:text-xl font-medium text-rose-200/90 mb-4 max-w-2xl font-mono">
            {personalInfo.role}
          </p>

          {/* Short Biography */}
          <p className="text-slate-300/90 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            {personalInfo.shortBio}
          </p>

          {/* Action Buttons (CTA) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-400 hover:to-pink-400 transition-all shadow-lg shadow-rose-500/25 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-slate-900/80 border border-slate-800 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-rose-500/30 transition-all backdrop-blur-sm hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick Social Links Bar */}
          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
              Connect:
            </span>
            <div className="h-4 w-[1px] bg-slate-800" />

            {/* GitHub Icon */}
            <a
              href="#contact"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-rose-500/40 hover:text-rose-400 transition-colors"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="#contact"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-rose-500/40 hover:text-rose-400 transition-colors"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Email Icon */}
            <a
              href="#contact"
              aria-label="Email Me"
              className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-rose-500/40 hover:text-rose-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Real Profile Photo with Animated Rings & Parallax (5 cols on desktop) */}
        <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
          <ProfileFrame />
        </div>
      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll down to About section"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-500 hover:text-rose-400 transition-colors"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-rose-400" />
      </a>
    </section>
  );
}

export default Hero;