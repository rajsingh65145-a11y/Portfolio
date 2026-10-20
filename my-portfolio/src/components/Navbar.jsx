import { useState, useEffect } from "react";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { personalInfo, navLinks } from "../data/personalInfo";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 180;
      for (const link of navLinks) {
        const sectionElement = document.getElementById(link.id);
        if (sectionElement) {
          const top = sectionElement.offsetTop;
          const height = sectionElement.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050508]/85 backdrop-blur-md border-b border-rose-950/40 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Left: Portfolio Brand Logo */}
          <a
            href="#home"
            onClick={() => handleLinkClick("home")}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-rose-500/20 to-pink-500/20 border border-rose-500/40 flex items-center justify-center group-hover:border-rose-400 transition-colors">
              <Terminal className="w-4 h-4 text-rose-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-wider text-white group-hover:text-rose-400 transition-colors">
                {personalInfo.brandName}
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                {personalInfo.name}
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-2 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                      isActive
                        ? "bg-rose-500/15 text-rose-300 border border-rose-500/30 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right: CTA Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={() => handleLinkClick("contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-400 hover:to-pink-400 transition-all shadow-md shadow-rose-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-rose-400 hover:border-rose-500/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>

        {/* Responsive Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 border border-rose-950/60 backdrop-blur-xl shadow-2xl">
            <ul className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={() => handleLinkClick(link.id)}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-rose-500/15 text-rose-300 border border-rose-500/30"
                          : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-800">
              <a
                href="#contact"
                onClick={() => handleLinkClick("contact")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md shadow-rose-500/20"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;