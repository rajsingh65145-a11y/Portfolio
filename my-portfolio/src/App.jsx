import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { useScrollAnimations } from "./hooks/useScrollAnimations";

function App() {
  // GSAP + ScrollTrigger animations activate karna
  useScrollAnimations();

  return (
    <div className="min-h-screen bg-[#050508] text-slate-100 selection:bg-rose-500/30 selection:text-rose-200">
      {/* Top Fixed Futuristic Navbar */}
      <Navbar />

      {/* Main Content Container */}
      <main>
        {/* 1. IMMERSIVE 3D HERO SECTION */}
        <Hero />

        {/* 2. ABOUT ME SECTION */}
        <About />

        {/* 3. INTERACTIVE SKILLS SECTION */}
        <Skills />

        {/* 4. 5-PROJECT SHOWCASE SECTION */}
        <Projects />

        {/* 5. CONTACT SECTION */}
        <Contact />
      </main>

      {/* 6. CLEAN FUTURISTIC FOOTER */}
      <Footer />
    </div>
  );
}

export default App;