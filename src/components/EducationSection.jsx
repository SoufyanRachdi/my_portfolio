import { GraduationCap, Calendar, CheckCircle2, FileText, Sparkles, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 space-y-10 pt-6">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles size={13} />
          <span>Academic Foundation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
          Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Education &amp; Diplomas</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
          Higher education graduation, secondary baccalaureate distinction, and verified technical curricula.
        </p>
      </div>

      <div className="space-y-6">
        {/* 1. Higher Education: ISIMG Bachelor / Licence */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-5 hover:border-cyan-500/30 transition-colors">
          <div className="flex items-start gap-4">
            <img
              src="/isimg.png"
              alt="ISIMG logo"
              width="56"
              height="56"
              loading="lazy"
              className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-slate-950 p-1.5 border border-slate-800 object-contain flex-shrink-0 shadow-inner"
            />
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg md:text-xl font-bold text-slate-100 font-heading">
                      Licence / Bachelor's Degree in Computer Science
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider">
                      <CheckCircle2 size={12} />
                      <span>Graduated</span>
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-cyan-400 mt-1">
                    Higher Institute of Computer Science and Multimedia of Gabès (ISIMG)
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 w-fit flex-shrink-0">
                  <Calendar size={13} />
                  <span>Graduated / Completed</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-3">
                Graduated with a comprehensive curriculum covering software engineering principles, algorithms &amp; complexity analysis, data structures, relational database systems (SQL), network protocols, operating systems, and distributed application development.
              </p>

              <div className="space-y-2.5 mt-4">
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
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-4 flex-wrap">
                <div className="text-xs text-slate-400">
                  Graduation diploma and academic curriculum verified.
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
        </div>

        {/* 2. Secondary Education: Baccalauréat Informatique */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-5 hover:border-cyan-500/30 transition-colors">
          <div className="flex items-start gap-4">
            <img
              src="/lycceroutedegabes.png"
              alt="Lycée Route de Gabès logo"
              width="56"
              height="56"
              loading="lazy"
              className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-slate-950 p-1.5 border border-slate-800 object-contain flex-shrink-0 shadow-inner"
            />
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg md:text-xl font-bold text-slate-100 font-heading">
                      Baccalauréat in Computer Science (Bac Informatique)
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold uppercase tracking-wider">
                      <Award size={12} />
                      <span>Mention Bien · Moyenne 15.79</span>
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-cyan-400 mt-1">
                    Lycée Route de Gabès
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 w-fit flex-shrink-0">
                  <Calendar size={13} />
                  <span>2023</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-3">
                Achieved the national Baccalaureate certification in Computer Science with a high-standing <span className="text-slate-100 font-semibold">15.79 / 20</span> grade point average and <span className="text-cyan-400 font-medium">Mention Bien</span> distinction, demonstrating early excellence in computational logic, algorithmic problem solving, and scientific foundations.
              </p>

              <div className="space-y-2.5 mt-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Foundational Curriculum:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Algorithmic & Procedural Programming (Python, Pascal)',
                    'Database Management Systems & SQL',
                    'Digital Logic & Computer Systems Architecture',
                    'Advanced Mathematics & Analysis',
                    'Physical Sciences'
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
