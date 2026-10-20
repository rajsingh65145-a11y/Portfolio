import { useState } from "react";
import {
  Sparkles,
  ExternalLink,
  Clock,
  Gauge,
  BookOpenCheck,
  Trophy,
  LayoutDashboard,
  Code2,
  CheckCircle2,
  Flame,
} from "lucide-react";
import { projectsData } from "../data/projects";

// Custom CSS-Based Visual Preview (Jab tak real screenshot public/images/projects/ mein nahi hai)
function CustomProjectArtwork({ themeKey, title }) {
  switch (themeKey) {
    case "chronos":
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#0c0714] via-[#160a1c] to-[#050508] p-5 flex flex-col justify-between relative overflow-hidden">
          {/* Orbital Time Rings */}
          <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full border border-dashed border-rose-500/30 animate-spin" style={{ animationDuration: "28s" }} />
          <div className="absolute right-4 top-4 w-24 h-24 rounded-full border border-pink-500/25" />

          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-500/15 border border-rose-500/30 text-[10px] font-mono text-rose-300">
              <Clock className="w-3 h-3 text-rose-400" />
              TEMPORAL ENGINE
            </span>
            <span className="text-[11px] font-mono text-slate-400">SYNC // 60FPS</span>
          </div>

          {/* Center Futuristic Time Readout */}
          <div className="my-auto z-10 py-3">
            <div className="text-2xl sm:text-3xl font-mono font-extrabold tracking-widest text-white flex items-baseline gap-2">
              <span>23:59:59</span>
              <span className="text-xs text-rose-400">.99</span>
            </div>
            <div className="mt-2 h-1.5 w-3/4 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-rose-500 to-amber-400 rounded-full" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10 border-t border-slate-800/80 pt-2.5">
            <span>CHRONO-GRID ACTIVE</span>
            <span className="text-rose-300">{title}</span>
          </div>
        </div>
      );

    case "f1":
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#19060b] via-[#0d060a] to-[#050508] p-5 flex flex-col justify-between relative overflow-hidden">
          {/* Speed Diagonal Lines */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:12px_12px]" />

          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-500/20 border border-red-500/40 text-[10px] font-mono font-bold text-red-300">
              <Gauge className="w-3 h-3 text-red-400" />
              TELEMETRY LIVE
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white font-bold">
              DRS ENABLED
            </span>
          </div>

          {/* Motorsport Speed & Sector Bars */}
          <div className="my-auto z-10 space-y-2.5">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-mono text-slate-400">SPEED TRAP</p>
                <p className="text-2xl sm:text-3xl font-black italic tracking-tight text-white">
                  342 <span className="text-xs font-mono not-italic text-red-400">KM/H</span>
                </p>
              </div>
              <div className="text-right font-mono">
                <p className="text-[10px] text-slate-400">GEAR</p>
                <p className="text-xl font-extrabold text-rose-400">8TH</p>
              </div>
            </div>

            {/* RPM LED Strip */}
            <div className="grid grid-cols-8 gap-1">
              <div className="h-1.5 rounded-sm bg-emerald-400" />
              <div className="h-1.5 rounded-sm bg-emerald-400" />
              <div className="h-1.5 rounded-sm bg-rose-400" />
              <div className="h-1.5 rounded-sm bg-rose-500" />
              <div className="h-1.5 rounded-sm bg-red-500" />
              <div className="h-1.5 rounded-sm bg-red-500" />
              <div className="h-1.5 rounded-sm bg-pink-500" />
              <div className="h-1.5 rounded-sm bg-slate-800" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10 border-t border-red-950/60 pt-2.5">
            <span>SECTOR 1 // PURPLE</span>
            <span className="text-red-300 font-semibold">{title}</span>
          </div>
        </div>
      );

    case "ctet":
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#0a101d] via-[#110917] to-[#050508] p-5 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-pink-500/15 border border-pink-500/30 text-[10px] font-mono text-pink-300">
              <BookOpenCheck className="w-3 h-3 text-pink-400" />
              ASSESSMENT MODULE
            </span>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Q. 14 / 30
            </span>
          </div>

          {/* Mock Question Card */}
          <div className="my-auto z-10 space-y-2 bg-slate-900/80 border border-slate-800 rounded-xl p-3">
            <div className="h-2 w-4/5 rounded bg-slate-700" />
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="px-2.5 py-1.5 rounded-lg bg-rose-500/20 border border-rose-500/40 text-[10px] font-mono text-rose-200 flex items-center justify-between">
                <span>Option A</span>
                <span className="w-2 h-2 rounded-full bg-rose-400" />
              </div>
              <div className="px-2.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-[10px] font-mono text-slate-400">
                Option B
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10 border-t border-slate-800/80 pt-2.5">
            <span>STRUCTURED LEARNING UI</span>
            <span className="text-pink-300">{title}</span>
          </div>
        </div>
      );

    case "competition":
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#17091c] via-[#0e0714] to-[#050508] p-5 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-fuchsia-500/15 border border-fuchsia-500/30 text-[10px] font-mono text-fuchsia-300">
              <Trophy className="w-3 h-3 text-fuchsia-400" />
              LIVE ARENA
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-rose-300">
              <Flame className="w-3 h-3 text-rose-400" /> STREAK x5
            </span>
          </div>

          {/* Leaderboard / Score Comparison Mockup */}
          <div className="my-auto z-10 space-y-2">
            <div className="flex items-center justify-between p-2 rounded-lg bg-rose-500/15 border border-rose-500/30 text-xs font-mono">
              <span className="text-white font-bold">#1 Challenger</span>
              <span className="text-rose-300 font-bold">2,450 PTS</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono">
              <span className="text-slate-300">#2 Contender</span>
              <span className="text-slate-400">2,180 PTS</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10 border-t border-slate-800/80 pt-2.5">
            <span>REAL-TIME SCOREBOARD</span>
            <span className="text-fuchsia-300">{title}</span>
          </div>
        </div>
      );

    case "productivity":
    default:
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#120812] via-[#090912] to-[#050508] p-5 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-500/15 border border-rose-500/30 text-[10px] font-mono text-rose-200">
              <LayoutDashboard className="w-3 h-3 text-rose-400" />
              WORKSPACE OS
            </span>
            <span className="text-[10px] font-mono text-slate-400">TASKS // ANALYTICS</span>
          </div>

          {/* Mini Analytics Bars & Metric Widget */}
          <div className="my-auto z-10 grid grid-cols-12 gap-3 items-end bg-slate-900/75 border border-slate-800/90 rounded-xl p-3">
            <div className="col-span-5">
              <p className="text-[10px] font-mono text-slate-400">FOCUS FLOW</p>
              <p className="text-lg font-bold text-white mt-0.5">Active</p>
              <span className="inline-block mt-1 text-[9px] font-mono text-rose-300 bg-rose-500/15 px-1.5 py-0.5 rounded">
                +Workflow
              </span>
            </div>
            <div className="col-span-7 flex items-end justify-end gap-1.5 h-12">
              <div className="w-2.5 h-5 rounded-t bg-slate-700" />
              <div className="w-2.5 h-8 rounded-t bg-rose-500/50" />
              <div className="w-2.5 h-6 rounded-t bg-pink-500/60" />
              <div className="w-2.5 h-10 rounded-t bg-rose-500" />
              <div className="w-2.5 h-12 rounded-t bg-gradient-to-t from-rose-500 to-white" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10 border-t border-slate-800/80 pt-2.5">
            <span>DATA INTERFACE</span>
            <span className="text-rose-300">{title}</span>
          </div>
        </div>
      );
  }
}

// Single Project Card Component
function ProjectCard({ project }) {
  // Agar screenshot file abhi public/images/projects/ mein nahi hai, toh custom CSS preview dikhao
  const [imgError, setImgError] = useState(false);
  const [linkNotice, setLinkNotice] = useState("");

  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== "" && project.githubUrl !== "#");
  const hasLive = Boolean(project.liveUrl && project.liveUrl.trim() !== "" && project.liveUrl !== "#");

  const handlePlaceholderClick = (type) => {
    setLinkNotice(`Add ${type} URL in src/data/projects.js`);
    setTimeout(() => setLinkNotice(""), 3000);
  };

  return (
    <article
      className={`group relative rounded-2xl bg-slate-900/60 border border-slate-800/90 ${project.borderHover} transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-md flex flex-col justify-between overflow-hidden shadow-xl`}
    >
      {/* Top Gradient Accent Strip */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${project.accentGradient} opacity-80 group-hover:opacity-100 transition-opacity`}
      />

      <div>
        {/* Visual Preview Area (Real Image OR Custom Theme CSS Artwork) */}
        <div className="relative h-52 w-full overflow-hidden border-b border-slate-800/80 bg-[#08080f]">
          {!imgError && project.image ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full group-hover:scale-[1.02] transition-transform duration-500">
              <CustomProjectArtwork
                themeKey={project.themeKey}
                title={project.title}
              />
            </div>
          )}

          {/* Floating Project Number Badge */}
          <span className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-md bg-[#050508]/80 border border-slate-800 text-[11px] font-mono font-bold text-slate-300 backdrop-blur-md">
            #{project.number}
          </span>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <span
            className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono border mb-3 ${project.badgeStyle}`}
          >
            {project.subtitle}
          </span>

          <h3 className="text-2xl font-extrabold text-white group-hover:text-rose-300 transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Technologies Used Pills */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#08080f] border border-slate-800 text-xs font-mono text-slate-300"
              >
                <Code2 className="w-3 h-3 text-rose-400" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: GitHub & Live Demo Action Buttons */}
      <div className="px-6 pb-6 pt-2">
        <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
          {/* GitHub Repository Button */}
          {hasGithub ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-rose-500/40 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub Code</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={() => handlePlaceholderClick("GitHub")}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-slate-900/90 text-slate-400 hover:text-rose-300 border border-slate-800 hover:border-rose-500/30 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </button>
          )}

          {/* Live Demo Button */}
          {hasLive ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-400 hover:to-pink-400 transition-all shadow-md shadow-rose-500/20"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              type="button"
              onClick={() => handlePlaceholderClick("Live Demo")}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-rose-500/80 to-pink-500/80 hover:from-rose-500 hover:to-pink-500 text-white transition-all cursor-pointer"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Helper Notice if user clicks a placeholder link before adding URL */}
        {linkNotice && (
          <p className="mt-2.5 text-[11px] font-mono text-center text-rose-300 bg-rose-500/10 border border-rose-500/30 rounded-lg py-1 px-2">
            {linkNotice}
          </p>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050508] border-t border-rose-950/25 overflow-hidden"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Featured Work</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Selected{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-white bg-clip-text text-transparent">
              Projects Showcase
            </span>
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl">
            A curated collection of five interactive applications—each built with its own visual identity and clean frontend architecture.
          </p>
        </div>

        {/* Responsive Grid for 5 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;