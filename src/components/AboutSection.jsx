import { Smartphone, Server, Terminal, Brain, ArrowRight, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 space-y-10 pt-6">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles size={13} />
          <span>Background &amp; Profile</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Focus &amp; Architecture</span>
        </h2>
        <p className="text-slate-400 max-w-3xl text-sm md:text-base leading-relaxed">
          I am a Tunisian Computer Science graduate from the <span className="text-slate-200 font-medium">Higher Institute of Computer Science and Multimedia of Gabès (ISIMG)</span>, based in <span className="text-slate-200 font-medium">Médenine &amp; Gabès, Tunisia</span>. As a Junior Full-Stack &amp; Mobile Developer, I combine rigorous academic foundations in algorithms, relational databases, and operating systems with production experience building cross-platform <span className="text-slate-200 font-medium">Flutter applications</span>, <span className="text-slate-200 font-medium">Node.js &amp; NestJS backend microservices</span>, real-time WebSockets, and hardware BLE IoT telemetry.
        </p>
      </div>

      {/* 4 Core Architectural Focus Cards */}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Card 1: Mobile & BLE Telemetry */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3 hover:border-cyan-500/40 transition-colors">
          <div className="h-10 w-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
            <Smartphone size={20} />
          </div>
          <h3 className="text-lg font-bold text-slate-100 font-heading">
            Mobile Architecture &amp; BLE Telemetry
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Engineering cross-platform mobile apps in <span className="text-slate-200 font-medium">Flutter &amp; Dart</span> with native Kotlin bridges, interfacing with Bluetooth Low Energy (BLE) sensors for real-time cardiac signal streaming and Android OS accessibility services.
          </p>
        </div>

        {/* Card 2: Backend & Real-Time Systems */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3 hover:border-blue-500/40 transition-colors">
          <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
            <Server size={20} />
          </div>
          <h3 className="text-lg font-bold text-slate-100 font-heading">
            Backend &amp; Real-Time Systems
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Architecting modular microservices with <span className="text-slate-200 font-medium">Node.js, Express.js &amp; NestJS</span>, utilizing <span className="text-slate-200 font-medium">Socket.IO</span> for synchronized multiplayer state, <span className="text-slate-200 font-medium">CockroachDB</span> for ACID transfer auctions, and <span className="text-slate-200 font-medium">MongoDB Atlas</span> for cloud persistence.
          </p>
        </div>

        {/* Card 3: Developer Tooling & CLI Ecosystems */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3 hover:border-purple-500/40 transition-colors">
          <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
            <Terminal size={20} />
          </div>
          <h3 className="text-lg font-bold text-slate-100 font-heading">
            Developer CLI &amp; Desktop Systems
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Creator of the <span className="text-slate-200 font-medium">Mkarchi</span> ecosystem (published on PyPI), an open-source Python CLI and Electron desktop workspace automating directory scaffolding, AST tree parsing, and repository architecture reverse-engineering.
          </p>
        </div>

        {/* Card 4: Algorithmic Problem Solving */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3 hover:border-emerald-500/40 transition-colors">
          <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <Brain size={20} />
          </div>
          <h3 className="text-lg font-bold text-slate-100 font-heading">
            Algorithmic Problem Solving
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Trained in competitive programming through the ISIMG Competitive Programming Club (CPC), solving complex algorithmic problems in <span className="text-slate-200 font-medium">C++ and Python</span> focusing on graph traversal, dynamic programming, and computational efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}
