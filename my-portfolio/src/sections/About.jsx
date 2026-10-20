import { Code2, Compass, Layers, Rocket, Sparkles, Terminal } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

function About() {
  const journeyCards = [
    {
      icon: Code2,
      title: "Frontend Foundations",
      text: "Started with HTML, CSS, and JavaScript—focusing on clean layouts, responsive design, and interactive browser logic.",
    },
    {
      icon: Layers,
      title: "React & Modern UI",
      text: "Built modular, reusable component architectures with React and Tailwind CSS to create fast, scalable user interfaces.",
    },
    {
      icon: Rocket,
      title: "3D Web & Node.js Journey",
      text: "Currently exploring immersive Three.js experiences on the frontend while learning Node.js to grow into a full-stack developer.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050508] border-t border-rose-950/25 overflow-hidden"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>{personalInfo.about.subtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl">
            About{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-white bg-clip-text text-transparent">
              Me & My Craft
            </span>
          </h2>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN: Futuristic Developer Identity Terminal Card (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800/90 hover:border-rose-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl transition-colors">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-pink-500/80" />
                <span className="w-3 h-3 rounded-full bg-slate-700" />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-rose-400" />
                <span>developer-profile.js</span>
              </div>
            </div>

            {/* Identity Highlights from personalInfo.js */}
            <div className="space-y-5">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-1">
                  // Developer Identity
                </p>
                <h3 className="text-2xl font-bold text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-sm text-slate-400 mt-0.5">
                  {personalInfo.role}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2">
                {personalInfo.about.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="p-3.5 rounded-xl bg-[#08080f] border border-slate-800/80 flex flex-col"
                  >
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-rose-200 mt-1">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Availability Status Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/30 flex items-center gap-3">
                <Compass className="w-5 h-5 text-rose-400 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-200 font-medium">
                  {personalInfo.availability}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Story Paragraphs & Learning Journey Cards (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                {personalInfo.about.heading}
              </h3>

              <div className="space-y-4 text-slate-300/90 text-sm sm:text-base leading-relaxed">
                {personalInfo.about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* 3 Visual Storytelling Journey Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {journeyCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.title}
                    className="group p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-rose-500/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-3 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5">
                      {card.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;