// Centralized Projects Data File
// Yahan se aap bina kisi React component ko chhede apne projects ka:
// Title, Description, Technologies, Screenshot Path, GitHub Link, aur Live Demo Link update kar sakte hain.

export const projectsData = [
  {
    id: "chronos",
    number: "01",
    title: "CHRONOS",
    subtitle: "Futuristic Time & Temporal Interface",
    themeKey: "chronos",
    // Editable placeholder description (Aap yahan apne project ki exact details likh sakte hain)
    description:
      "A futuristic, time-inspired web application crafted with a sleek dark interface, precision visual indicators, and smooth interactive controls.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    // Jab aap screenshot dalein, toh public/images/projects/chronos.jpg naam se rakhein
    image: "/images/projects/chronos.jpg",
    // Jab aapke paas links hon, toh "" ke andar apna real URL paste kar dein (e.g. "https://github.com/...")
    githubUrl: "https://github.com/rajsingh65145-a11y/CHRONOS",
    liveUrl: "https://chronos-hazel-nine.vercel.app/",
    accentGradient: "from-rose-500 via-pink-500 to-amber-400",
    borderHover: "hover:border-rose-500/50",
    badgeStyle: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  },
  {
    id: "f1-hub",
    number: "02",
    title: "F1-Hub",
    subtitle: "Motorsport Inspired Web Experience",
    themeKey: "f1",
    description:
      "A high-octane, motorsport-themed platform designed with racing telemetry aesthetics, bold typography, and fast responsive navigation.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    image: "/images/projects/f1-hub.jpg",
    githubUrl: "",
    liveUrl: "",
    accentGradient: "from-red-500 via-rose-500 to-white",
    borderHover: "hover:border-red-500/50",
    badgeStyle: "bg-red-500/15 text-red-300 border-red-500/30",
  },
  {
    id: "ctet-quiz",
    number: "03",
    title: "CTET Quiz",
    subtitle: "Clean Educational Practice Platform",
    themeKey: "ctet",
    description:
      "A structured, distraction-free educational quiz interface designed to make exam practice intuitive, readable, and accessible across devices.",
    technologies: ["React", "JavaScript", "CSS3"],
    image: "/images/projects/ctet-quiz.jpg",
    githubUrl: "https://github.com/rajsingh65145-a11y/Ctet-Quiz",
    liveUrl: "https://ctet-quiz-f8rk.vercel.app/",
    accentGradient: "from-pink-500 via-rose-400 to-emerald-400",
    borderHover: "hover:border-pink-500/50",
    badgeStyle: "bg-pink-500/15 text-pink-300 border-pink-500/30",
  },
  {
    id: "quiz-competition",
    number: "04",
    title: "Quiz Competition",
    subtitle: "Interactive Challenge & Scoreboard System",
    themeKey: "competition",
    description:
      "An engaging competition-oriented quiz experience featuring dynamic question states, interactive feedback, and an energetic visual layout.",
    technologies: ["JavaScript", "React", "Tailwind CSS"],
    image: "/images/projects/quiz-competition.jpg",
    githubUrl: "https://github.com/rajsingh65145-a11y/Quiz-competition",
    liveUrl: "https://quiz-competition-mocha.vercel.app/",
    accentGradient: "from-rose-400 via-fuchsia-500 to-pink-400",
    borderHover: "hover:border-fuchsia-500/50",
    badgeStyle: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30",
  },
  {
    id: "productivity-dashboard",
    number: "05",
    title: "Productivity Dashboard",
    subtitle: "Workspace & Data Interface System",
    themeKey: "productivity",
    description:
      "A polished personal productivity and workflow dashboard combining clean data cards, organized task views, and a modern dark UI system.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    image: "/images/projects/productivity-dashboard.jpg",
    githubUrl: "https://github.com/rajsingh65145-a11y/Productivity-Dashboard",
    liveUrl: "https://productivitydashboard-pi-livid.vercel.app/",
    accentGradient: "from-rose-500 via-pink-400 to-white",
    borderHover: "hover:border-rose-400/50",
    badgeStyle: "bg-rose-500/15 text-rose-200 border-rose-500/30",
  },
];