import { Briefcase, Trophy, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 space-y-10 pt-6">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles size={13} />
          <span>Professional History</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
          Software engineering internship, commercial freelance product delivery, and competitive programming leadership.
        </p>
      </div>

      <div className="space-y-6">
        {/* Caredify Internship / Stage (PFE) */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4 hover:border-cyan-500/30 transition-colors">
          <div className="flex items-start gap-4">
            <img
              src="/caredify.png"
              alt="Caredify logo"
              width="48"
              height="48"
              loading="lazy"
              className="w-12 h-12 rounded-xl bg-slate-950 p-1.5 border border-slate-800 object-contain flex-shrink-0 shadow-inner"
            />
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg md:text-xl font-bold text-slate-100 font-heading">
                      Software Engineering Intern (PFE)
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[10px] font-bold uppercase tracking-wider">
                      Graduation Stage
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                    Caredify — Remote ECG Monitoring &amp; Telemetry Startup
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 w-fit flex-shrink-0">
                  <Calendar size={13} />
                  <span>Jan 2026 — Jun 2026</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mt-3">
                Led the end-to-end mobile architecture and cloud backend development of <span className="text-slate-100 font-medium">Caredify</span>, a remote cardiac monitoring ecosystem acquiring live ECG telemetry over Bluetooth Low Energy (BLE) and synchronizing with a cloud backend.
              </p>

              <ul className="space-y-2 text-xs md:text-sm text-slate-400 list-disc list-inside mt-3">
                <li>
                  Engineered cross-platform mobile application in Flutter interfacing with wearable BLE sensors to stream, filter, and render real-time continuous ECG waveform charts with minimal latency.
                </li>
                <li>
                  Architected and deployed Node.js &amp; Express.js REST API with MongoDB Atlas for persistent storage of patient records, session histories, and time-series biometric streams.
                </li>
                <li>
                  Integrated asynchronous health data processing pipelines and AI-assisted ECG anomaly detection hooks to assist in early arrhythmia identification.
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {['Flutter', 'Dart', 'BLE', 'Kotlin', 'Node.js', 'Express.js', 'MongoDB', 'MongoDB Atlas', 'REST APIs', 'VS Code', 'Git', 'GitHub'].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-800 text-slate-300 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to="/projects/caredify"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* KabaadHub Commercial Freelance Project */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4 hover:border-cyan-500/30 transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-950 p-2 border border-slate-800 flex items-center justify-center flex-shrink-0 shadow-inner">
              <img
                src="/freelancer.svg"
                alt="Freelance logo"
                width="36"
                height="36"
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg md:text-xl font-bold text-slate-100 font-heading">
                      Freelance Mobile &amp; Full-Stack Developer
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30 text-[10px] font-bold uppercase tracking-wider">
                      Commercial Client
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-slate-300 mt-0.5">
                    KabaadHub Marketplace Ecosystem
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 w-fit">
                  <Calendar size={13} />
                  <span>Commercial Delivery</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mt-3">
                Designed and delivered a production cross-platform mobile marketplace application published on the{' '}
                <span className="text-slate-100 font-medium">Google Play Store</span> alongside a real-time web administration portal.
              </p>

              <ul className="space-y-2 text-xs md:text-sm text-slate-400 list-disc list-inside mt-3">
                <li>
                  Engineered real-time in-app buyer/seller messaging utilizing Cloud Firestore and Firebase Auth.
                </li>
                <li>
                  Implemented geolocation-based filtering, multi-image upload handling, and optimized state management in Flutter.
                </li>
                <li>
                  Built a responsive web administration dashboard for platform operators to moderate listings in real time.
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Google Play', 'Flutter Web', 'VS Code', 'Git', 'GitHub'].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-800 text-slate-300 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to="/projects/kabaadhub"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Programming Leadership */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4 hover:border-cyan-500/30 transition-colors">
          <div className="flex items-start gap-4">
            <img
              src="/logoCpcIsimg.png"
              alt="Competitive Programming Club ISIMG logo"
              width="44"
              height="44"
              loading="lazy"
              className="w-11 h-11 rounded-xl bg-slate-950 p-1 border border-slate-800 object-contain flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-100 font-heading">
                    Competitive Programming Club (ISIMG CPC)
                  </h3>
                  <div className="text-sm font-semibold text-slate-400">
                    Active Competitor &amp; Problem Solver
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 w-fit">
                  <Calendar size={13} />
                  <span>2023 — Present</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mt-3">
                Sharpened algorithmic problem solving, time-complexity analysis, and optimization through weekly training sessions on C++, Python, graph traversal, and dynamic programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
