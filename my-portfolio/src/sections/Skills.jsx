import { useState } from "react";
import { Sparkles, CheckCircle2, Cpu } from "lucide-react";
import { skillsData } from "../data/skills";

// Har skill ke liye custom crisp SVG emblem taaki koi external icon error na aaye
function SkillIcon({ id }) {
  switch (id) {
    case "html":
      return <span className="font-mono font-extrabold text-sm">&lt;/&gt;</span>;
    case "css":
      return <span className="font-mono font-extrabold text-sm">{`{ # }`}</span>;
    case "javascript":
      return <span className="font-mono font-extrabold text-sm">JS</span>;
    case "react":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        </svg>
      );
    case "tailwind":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      );
    case "nodejs":
      return <Cpu className="w-5 h-5" />;
    default:
      return <Sparkles className="w-5 h-5" />;
  }
}

// Individual 3D Tilt Skill Card Component
function SkillCard({ skill }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const isLearning = skill.status === "Learning";

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -7;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 7;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "900px" }}
      className="h-full"
    >
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        className={`group relative h-full rounded-2xl p-6 bg-slate-900/60 border transition-all duration-200 backdrop-blur-md flex flex-col justify-between overflow-hidden ${
          isLearning
            ? "border-rose-500/40 hover:border-rose-400 shadow-lg shadow-rose-500/10"
            : "border-slate-800/90 hover:border-rose-500/40"
        }`}
      >
        {/* Top Gradient Accent Bar */}
        <div
          className={`
            absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.accent} opacity-75 group-hover:opacity-100 transition-opacity
          `}
        />

        <div>
          {/* Card Header: Icon + Floating Status Label */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:border-rose-400 transition-all">
              <SkillIcon id={skill.id} />
            </div>

            {isLearning ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-rose-500/15 border border-rose-500/40 text-rose-300">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-rose-400 -ml-3.5" />
                {skill.badge}
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-slate-800/80 border border-slate-700/80 text-slate-300">
                {skill.badge}
              </span>
            )}
          </div>

          {/* Skill Title & Description */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
            {skill.name}
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            {skill.description}
          </p>
        </div>

        {/* Bottom Practical Highlights Pills */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
          {skill.highlights.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#08080f] border border-slate-800 text-xs font-mono text-slate-300 group-hover:border-rose-500/30 transition-colors"
            >
              <CheckCircle2 className="w-3 h-3 text-rose-400 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050508] border-t border-rose-950/25 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-rose-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Technical Arsenal</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            My{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-white bg-clip-text text-transparent">
              Skills & Stack
            </span>
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl">
            Technologies I use to build responsive, interactive web applications—along with what I am currently learning next.
          </p>
        </div>

        {/* 6 Interactive 3D Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;