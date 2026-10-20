import Navbar from "./components/Navbar";
import { personalInfo } from "./data/personalInfo";

function App() {
  return (
    <div className="min-h-screen bg-[#050508] text-slate-100 selection:bg-rose-500/30 selection:text-rose-200">
      {/* Top Fixed Futuristic Navbar */}
      <Navbar />

      {/* Main Content Container */}
      <main>
        {/* 1. HOME / HERO SECTION PLACEHOLDER */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 border-b border-rose-950/20 relative overflow-hidden"
        >
          {/* Red & Pink Ambient Glow Blobs */}
          <div className="w-96 h-96 bg-rose-500/10 rounded-full blur-3xl absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="w-80 h-80 bg-pink-500/10 rounded-full blur-3xl absolute bottom-1/4 left-1/3 pointer-events-none" />

          <span className="px-3 py-1 rounded-full text-xs font-mono bg-rose-500/10 border border-rose-500/30 text-rose-400 mb-4 z-10">
            {personalInfo.heroBadge}
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-center max-w-3xl tracking-tight z-10">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-white bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-center max-w-xl z-10">
            Color theme successfully updated to Red, Pink & White! Navbar links aur smooth scrolling check karein. Agle step mein hum apna full-screen 3D Hero section banayenge.
          </p>
        </section>

        {/* 2. ABOUT SECTION PLACEHOLDER */}
        <section
          id="about"
          className="min-h-[70vh] flex flex-col items-center justify-center px-6 border-b border-rose-950/20"
        >
          <h2 className="text-3xl font-bold text-white">About Section</h2>
          <p className="text-slate-400 mt-2 text-sm">
            (Phase 10 mein yahan visual storytelling About section aayega)
          </p>
        </section>

        {/* 3. SKILLS SECTION PLACEHOLDER */}
        <section
          id="skills"
          className="min-h-[70vh] flex flex-col items-center justify-center px-6 border-b border-rose-950/20"
        >
          <h2 className="text-3xl font-bold text-white">Skills Section</h2>
          <p className="text-slate-400 mt-2 text-sm">
            (Phase 10 mein yahan interactive Skills cards aayenge)
          </p>
        </section>

        {/* 4. PROJECTS SECTION PLACEHOLDER */}
        <section
          id="projects"
          className="min-h-[70vh] flex flex-col items-center justify-center px-6 border-b border-rose-950/20"
        >
          <h2 className="text-3xl font-bold text-white">Projects Showcase</h2>
          <p className="text-slate-400 mt-2 text-sm">
            (Phase 11 mein CHRONOS, F1-Hub, CTET Quiz, Quiz Competition, aur Productivity Dashboard aayenge)
          </p>
        </section>

        {/* 5. CONTACT SECTION PLACEHOLDER */}
        <section
          id="contact"
          className="min-h-[70vh] flex flex-col items-center justify-center px-6"
        >
          <h2 className="text-3xl font-bold text-white">Contact Section</h2>
          <p className="text-slate-400 mt-2 text-sm">
            (Phase 13 mein Contact aur Footer aayenge)
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;