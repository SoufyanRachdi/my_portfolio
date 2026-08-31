import { Briefcase, GraduationCap, Trophy, Calendar, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Experience() {
  return (
    <section className="animate-fade-in space-y-12 pb-12">
      {/* Section Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
          Experience &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Education</span>
        </h1>
        <p className="text-slate-400 max-w-2xl text-base md:text-lg mt-2 leading-relaxed">
          Professional software engineering internship, commercial freelance delivery, and academic Computer Science graduation.
        </p>
      </div>

      {/* 1. Professional Experience */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-400 font-heading">
          <Briefcase size={16} />
          <span>Professional Experience &amp; Internships</span>
        </div>

        {/* Caredify Internship / Stage (PFE) */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg md:text-xl font-bold text-slate-100 font-heading">
                  Software Engineering Intern (PFE)
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[10px] font-bold uppercase tracking-wider">
                  Graduation Stage
                </span>
              </div>
              <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                Caredify — Remote ECG Monitoring &amp; Telemetry Project
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 w-fit">
              <Calendar size={13} />
              <span>Final Year Stage / PFE</span>
            </div>
          </div>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Led the end-to-end mobile architecture and backend development of <span className="text-slate-100 font-medium">Caredify</span>, a remote cardiac monitoring system acquiring live ECG telemetry over Bluetooth Low Energy (BLE) and synchronizing with a cloud backend.
          </p>

          <ul className="space-y-2 text-xs md:text-sm text-slate-400 list-disc list-inside">
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

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {['Flutter', 'Dart', 'BLE', 'Kotlin', 'Node.js', 'Express.js', 'MongoDB', 'MongoDB Atlas', 'REST APIs'].map((t) => (
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
              <span>View Technical Project Details</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* KabaadHub Commercial Project */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-slate-100 font-heading">
                Freelance Mobile &amp; Full-Stack Developer
              </h2>
              <div className="text-sm font-semibold text-slate-300">
                KabaadHub Marketplace Ecosystem
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 w-fit">
              <Calendar size={13} />
              <span>Commercial Delivery</span>
            </div>
          </div>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Designed and delivered a production cross-platform mobile marketplace application published on the{' '}
            <span className="text-slate-100 font-medium">Google Play Store</span> alongside a real-time web administration portal.
          </p>

          <ul className="space-y-2 text-xs md:text-sm text-slate-400 list-disc list-inside">
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

          <div className="pt-2 flex flex-wrap gap-1.5">
            {['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Google Play', 'Flutter Web'].map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-800 text-slate-300 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Academic Education & Graduation */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-400 font-heading">
          <GraduationCap size={16} />
          <span>Academic Education &amp; Graduation</span>
        </div>

        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg md:text-xl font-bold text-slate-100 font-heading">
                  Licence / Bachelor's Degree in Computer Science
                </h2>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider">
                  <CheckCircle2 size={12} />
                  <span>Graduated</span>
                </span>
              </div>
              <div className="text-sm font-semibold text-slate-300 mt-1">
                Higher Institute of Computer Science and Multimedia of Gabès (ISIMG)
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 w-fit">
              <Calendar size={13} />
              <span>Completed / Graduated</span>
            </div>
          </div>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Graduated with a comprehensive curriculum covering software engineering, algorithms, data structures, relational database systems, network protocols, operating systems, and distributed application development.
          </p>

          <div className="space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Core Academic Competencies:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Algorithms & Complexity Analysis',
                'Object-Oriented Programming (Java, C++)',
                'Relational Database Systems & SQL (MySQL, SQLite)',
                'Full-Stack Web & Mobile Architecture',
                'Operating Systems & Concurrent Programming',
                'Mathematics & Physics Foundations'
              ].map((c) => (
                <span
                  key={c}
                  className="px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-800 text-slate-300 text-xs font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Diploma Action Box */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-4 flex-wrap">
            <div className="text-xs text-slate-400">
              Graduation diploma and official transcripts verified.
            </div>
            <a
              href="/diploma.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              aria-label="View graduation diploma / certificate (opens PDF in new tab)"
            >
              <FileText size={14} className="text-cyan-400" />
              <span>View Diploma</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Leadership & Competitive Programming */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-400 font-heading">
          <Trophy size={16} />
          <span>Competitive Programming &amp; Activities</span>
        </div>

        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4">
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
                  <h2 className="text-lg md:text-xl font-bold text-slate-100 font-heading">
                    Competitive Programming Club (ISIMG CPC)
                  </h2>
                  <div className="text-sm font-semibold text-slate-400">
                    Active Member &amp; Problem Solver
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 w-fit">
                  <Calendar size={13} />
                  <span>2023 — Present</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mt-3">
                Sharpened algorithmic problem solving, time-complexity analysis, and optimization through weekly training sessions on C++, Python, and advanced graph and dynamic programming techniques. Participated in regional and national programming contests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
