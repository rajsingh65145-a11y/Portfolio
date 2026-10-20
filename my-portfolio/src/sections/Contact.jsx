import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  Info,
} from "lucide-react";
import { contactData } from "../data/socialLinks";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const hasRealEmail = Boolean(
    contactData.email && contactData.email.trim() !== ""
  );
  const hasGithub = Boolean(
    contactData.githubUrl && contactData.githubUrl.trim() !== ""
  );
  const hasLinkedin = Boolean(
    contactData.linkedinUrl && contactData.linkedinUrl.trim() !== ""
  );

  const displayedEmail = hasRealEmail
    ? contactData.email
    : contactData.emailPlaceholderDisplay;

  const handleCopyEmail = () => {
    const textToCopy = hasRealEmail
      ? contactData.email
      : "your.email@example.com";
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!hasRealEmail) {
      setStatusMessage(
        "Note: Pehle src/data/socialLinks.js mein apna real email add karein taaki mail client aapke email par khule!"
      );
      return;
    }

    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
    setStatusMessage(
      "Opening your email client with the pre-filled message..."
    );
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050508] border-t border-rose-950/25 overflow-hidden"
    >
      {/* Ambient Red/Pink Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Let&apos;s Build{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-white bg-clip-text text-transparent">
              Something Together
            </span>
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl">
            Open to frontend developer internships, entry-level roles, and exciting web project collaborations.
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: Direct Contact Cards & Social Profiles (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 contact-animate">
            {/* Email Card with Copy Button */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-rose-500/40 transition-colors backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-rose-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Direct Email
              </p>
              <p className="text-sm sm:text-base font-semibold text-white mt-1 break-all">
                {displayedEmail}
              </p>
            </div>

            {/* GitHub Profile Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-rose-500/40 transition-colors backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    GitHub Repositories
                  </p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {contactData.githubDisplay}
                  </p>
                </div>
              </div>

              {hasGithub ? (
                <a
                  href={contactData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-rose-500 text-slate-200 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-[11px] font-mono text-rose-300/80 bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-500/20">
                  Placeholder
                </span>
              )}
            </div>

            {/* LinkedIn Profile Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-rose-500/40 transition-colors backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    LinkedIn Network
                  </p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {contactData.linkedinDisplay}
                  </p>
                </div>
              </div>

              {hasLinkedin ? (
                <a
                  href={contactData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-rose-500 text-slate-200 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-[11px] font-mono text-rose-300/80 bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-500/20">
                  Placeholder
                </span>
              )}
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-rose-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Location & Status
                </p>
                <p className="text-sm font-semibold text-white mt-0.5">
                  {contactData.location}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Client-Side Mailto Message Composer (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl contact-animate">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Compose a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 flex items-start gap-2">
              <Info className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>
                This frontend form prepares your message and opens it directly in your default email app (`mailto:`)—no third-party tracking.
              </span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#08080f] border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#08080f] border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship / Frontend Opportunity / Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-[#08080f] border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello! I came across your 3D portfolio and would love to connect..."
                  className="w-full px-4 py-3 rounded-xl bg-[#08080f] border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-400 hover:to-pink-400 transition-all shadow-lg shadow-rose-500/20 cursor-pointer"
              >
                <span>Open in Email App</span>
                <Send className="w-4 h-4" />
              </button>

              {statusMessage && (
                <p className="text-xs font-mono text-rose-300 bg-rose-500/10 border border-rose-500/30 rounded-xl p-3 mt-3">
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;