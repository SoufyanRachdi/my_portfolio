import { Smartphone, Server, Terminal, Brain, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

export default function About({ onOpenContact }) {
  return (
    <section className="animate-fade-in space-y-16 pb-12">
      {/* Hero Section */}
      <Hero onOpenContact={onOpenContact} />

      {/* Engineering Focus Areas */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white font-heading tracking-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Focus &amp; Architecture</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Combining Computer Science graduation foundations with production software development across mobile, backend, and real-time distributed systems.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Card 1: Mobile & Hardware Telemetry */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Smartphone size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 font-heading">
              Mobile Architecture &amp; BLE Telemetry
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Engineering cross-platform mobile apps in <span className="text-slate-200 font-medium">Flutter &amp; Dart</span> with native Kotlin hooks, interfacing with Bluetooth Low Energy (BLE) sensors for real-time biometric telemetry, continuous waveform rendering, and Android system accessibility services.
            </p>
          </div>

          {/* Card 2: Backend & Real-Time Systems */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Server size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 font-heading">
              Backend &amp; Real-Time Systems
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Architecting modular backend microservices in <span className="text-slate-200 font-medium">Node.js, Express.js &amp; NestJS</span> with <span className="text-slate-200 font-medium">Socket.IO</span> WebSockets for synchronized multiplayer state, transactional transfer markets with <span className="text-slate-200 font-medium">CockroachDB</span>, and cloud persistence with <span className="text-slate-200 font-medium">MongoDB Atlas &amp; Supabase</span>.
            </p>
          </div>

          {/* Card 3: Developer Tooling & CLI Ecosystems */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Terminal size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 font-heading">
              Developer CLI &amp; Desktop Systems
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Creator of the <span className="text-slate-200 font-medium">Mkarchi</span> ecosystem (published on PyPI), an open-source Python CLI and Electron desktop workspace automating directory scaffolding, AST tree parsing, and repository architecture reverse-engineering.
            </p>
          </div>

          {/* Card 4: Algorithms & Complexity Analysis */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Brain size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 font-heading">
              Algorithmic Problem Solving
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Trained in competitive programming with weekly problem solving in <span className="text-slate-200 font-medium">C++ and Python</span> on advanced data structures, graph traversals, dynamic programming, and sub-millisecond execution optimization through the ISIMG Competitive Programming Club.
            </p>
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-5">
        <h2 className="text-xl font-bold text-slate-100 font-heading">
          About My Background &amp; Engineering Journey
        </h2>

        <div className="text-slate-300 space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            I am a Computer Science graduate from the <span className="text-slate-100 font-semibold">Higher Institute of Computer Science and Multimedia of Gabès (ISIMG)</span>, holding a Licence in Computer Science. My academic curriculum provided rigorous grounding in algorithms, object-oriented design, relational database systems, and distributed networks.
          </p>
          <p>
            For my graduation project (PFE) and software engineering internship, I engineered <span className="text-slate-100 font-semibold">Caredify</span>, a remote cardiac telemetry system interfacing with Bluetooth Low Energy (BLE) sensors for continuous ECG streaming, mobile visualization, and cloud backend persistence. Additionally, I delivered commercial applications like <span className="text-slate-100 font-semibold">KabaadHub</span> on the Google Play Store and built full-stack real-time multiplayer systems including <span className="text-slate-100 font-semibold">Football Manager</span> (NestJS, Socket.IO, CockroachDB) and <span className="text-slate-100 font-semibold">QuizApp</span> (Supabase, Node.js).
          </p>
          <p>
            I am actively pursuing <span className="text-cyan-400 font-semibold">Software Engineering roles</span>, <span className="text-cyan-400 font-semibold">Full-Stack &amp; Mobile Developer positions</span>, <span className="text-cyan-400 font-semibold">remote opportunities</span>, and <span className="text-cyan-400 font-semibold">freelance engineering collaborations</span> where I can apply strong technical execution, clean architectural principles, and reliable problem solving.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/experience"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>View experience &amp; education timeline</span>
              <ArrowRight size={14} />
            </Link>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors"
            >
              <FileText size={13} className="text-cyan-400" />
              <span>Download CV</span>
            </a>
          </div>

          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
          >
            <span>Initiate Contact</span>
          </button>
        </div>
      </div>
    </section>
  );
}
