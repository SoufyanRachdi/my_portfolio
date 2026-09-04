import { ArrowRight, Mail, Github, FileText, Sparkles } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="scroll-mt-24 relative pt-6 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20">
      <div className="flex flex-col items-center gap-8 md:gap-10 text-center max-w-4xl mx-auto">
        {/* Profile Avatar & Status */}
        <div className="relative">
          <div className="relative h-40 w-40 md:h-48 md:w-48 overflow-hidden rounded-full border-2 border-slate-700/80 shadow-2xl shadow-cyan-950/40 bg-slate-900 ring-4 ring-cyan-500/10">
            <img
              src="/mypic.png"
              alt="Soufyan Rachdi"
              width="192"
              height="192"
              fetchPriority="high"
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Availability Status Badge */}
          <div
            className="absolute bottom-2 right-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] font-medium text-slate-300 shadow-lg backdrop-blur-sm"
            title="Available for roles and freelance"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available</span>
          </div>
        </div>

        {/* Hero Copy */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} />
            <span>Computer Science Graduate · ISIMG (Tunisia)</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Soufyan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">Rachdi</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-300 font-heading">
            Junior Full-Stack &amp; Flutter Mobile Developer
          </h2>

          <p className="mx-auto max-w-2xl text-slate-400 text-base md:text-lg leading-relaxed font-normal">
            Computer Science graduate building high-performance cross-platform mobile apps with{' '}
            <span className="text-slate-200 font-medium">Flutter &amp; Dart</span>, robust backend services with{' '}
            <span className="text-slate-200 font-medium">Node.js &amp; NestJS</span>, real-time WebSocket architectures, and hardware BLE integrations.
          </p>
        </div>

        {/* Primary and Secondary Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => handleScrollTo('projects')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
          >
            <span>Explore Featured Work</span>
            <ArrowRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                handleScrollTo('contact');
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
          >
            <Mail size={16} className="text-cyan-400" />
            <span>Get In Touch</span>
          </button>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-medium text-sm transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            aria-label="View or download CV / Resume (opens in new tab)"
          >
            <FileText size={16} className="text-cyan-400" />
            <span>View CV</span>
          </a>

          <a
            href="https://github.com/SoufyanRachdi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-medium text-sm transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            aria-label="GitHub Profile (opens in new tab)"
          >
            <Github size={16} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>

        {/* Technical Domain Badges */}
        <div className="flex flex-wrap justify-center items-center gap-2 pt-2 text-xs text-slate-400">
          <span className="px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800/80">
            📱 Flutter &amp; Mobile
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800/80">
            ⚡ Node.js &amp; NestJS
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800/80">
            🔄 Real-Time &amp; Socket.IO
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800/80">
            📡 BLE &amp; IoT Telemetry
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800/80">
            🧠 Algorithms (C++/Java)
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800/80">
            🔍 Technical SEO &amp; Performance
          </span>
        </div>
      </div>
    </section>
  );
}
