import { useState } from "react";
import { Code2, Cpu, Sparkles, UserCheck } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

function ProfileFrame() {
  // Agar public/images/profile.jpg nahi milti, toh imageError true ho jayega aur graceful fallback dikhega
  const [imageError, setImageError] = useState(false);

  // Mouse-responsive 3D tilt state
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left; // Element ke andar X position
    const y = event.clientY - rect.top; // Element ke andar Y position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max 12 degree tilt calculate karna
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    // Mouse hatane par frame smoothly wapas seedha ho jaye
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      className="relative flex items-center justify-center select-none py-6"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      {/* Interactive 3D Tilt Container */}
      <div
        className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* 1. Ambient Crimson-Pink Back Glow */}
        <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-rose-500/30 via-pink-500/20 to-transparent blur-2xl pointer-events-none" />

        {/* 2. Outer Animated Dashed Cyber Ring */}
        <div
          className="absolute inset-0 rounded-full border border-dashed border-rose-500/35 animate-spin pointer-events-none"
          style={{ animationDuration: "24s" }}
        />

        {/* 3. Middle Counter-Rotating Accent Ring */}
        <div
          className="absolute inset-4 rounded-full border border-pink-500/25 border-t-rose-400/80 border-b-white/40 animate-spin pointer-events-none"
          style={{ animationDuration: "16s", animationDirection: "reverse" }}
        />

        {/* 4. Inner Glowing Frame Border */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-1.5 bg-gradient-to-br from-rose-500 via-pink-500 to-white/80 shadow-2xl shadow-rose-500/25">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#090910] relative flex items-center justify-center border-2 border-[#050508]">
            {!imageError ? (
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            ) : (
              /* Graceful Fallback agar public/images/profile.jpg abhi nahi mili */
              <div className="flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-slate-900 to-[#050508] w-full h-full">
                <div className="w-16 h-16 rounded-2xl bg-rose-500/15 border border-rose-500/40 flex items-center justify-center mb-3 text-rose-400">
                  <UserCheck className="w-8 h-8" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">
                  {personalInfo.name}
                </span>
                <span className="text-[11px] font-mono text-rose-300/80 mt-1">
                  Add photo at:
                </span>
                <code className="text-[10px] font-mono text-slate-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800 mt-1">
                  public/images/profile.jpg
                </code>
              </div>
            )}

            {/* Subtle inner vignette overlay for cinematic blend */}
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/15 pointer-events-none" />
          </div>
        </div>

        {/* 5. Floating 3D Depth Tech Badges Around Portrait */}
        <div
          className="absolute -top-2 right-4 sm:right-6 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-rose-500/40 text-xs font-mono text-rose-200 flex items-center gap-1.5 shadow-lg backdrop-blur-md"
          style={{ transform: "translateZ(35px)" }}
        >
          <Code2 className="w-3.5 h-3.5 text-rose-400" />
          <span>React Dev</span>
        </div>

        <div
          className="absolute bottom-8 -left-2 sm:left-0 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-pink-500/40 text-xs font-mono text-pink-200 flex items-center gap-1.5 shadow-lg backdrop-blur-md"
          style={{ transform: "translateZ(40px)" }}
        >
          <Cpu className="w-3.5 h-3.5 text-pink-400" />
          <span>3D Web UI</span>
        </div>

        {/* 6. Bottom Status Pill */}
        <div
          className="absolute -bottom-3 px-4 py-1.5 rounded-full bg-[#0a0a12]/95 border border-rose-500/40 text-xs font-medium text-slate-200 flex items-center gap-2 shadow-xl backdrop-blur-md"
          style={{ transform: "translateZ(45px)" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
          <span className="text-[11px] font-mono tracking-wide text-slate-200">
            Open to Work
          </span>
          <Sparkles className="w-3 h-3 text-rose-400" />
        </div>
      </div>
    </div>
  );
}

export default ProfileFrame;