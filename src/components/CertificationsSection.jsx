import { Award, ExternalLink, CheckCircle, Sparkles } from 'lucide-react';

const certifications = [
  {
    name: 'C++ Certification',
    issuer: 'CodinGame',
    url: 'https://www.codingame.com/certification/iZ_f3jSzi7dpmw6Fi_XGgQ',
    description: 'Certified algorithmic and language proficiency in C++, data structures, and memory manipulation.',
    badge: 'Algorithms & C++',
  },
  {
    name: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    url: 'https://www.hackerrank.com/certificates/df79960f4ed9',
    description: 'Verified assessment covering data structures, algorithmic complexity, sorting, and search logic.',
    badge: 'Problem Solving',
  },
  {
    name: 'Python (Basic)',
    issuer: 'HackerRank',
    url: 'https://www.hackerrank.com/certificates/066aa343105d',
    description: 'Verified proficiency in core Python programming, data types, OOP, and functional constructs.',
    badge: 'Python Programming',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-24 space-y-10 pt-6">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles size={13} />
          <span>Credentials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
          Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Certifications</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
          Online technical certifications and competitive problem-solving credentials with public verification records.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid gap-5 md:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.url}
            className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-bold uppercase tracking-wider">
                  {cert.badge}
                </span>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle size={13} />
                  <span>Verified</span>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:scale-105 transition-transform flex-shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-400 transition-colors font-heading">
                    {cert.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-400 mt-0.5">
                    {cert.issuer}
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                {cert.description}
              </p>
            </div>

            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full p-2.5 rounded-xl bg-slate-950/80 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/30 text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              aria-label={`Verify ${cert.name} on ${cert.issuer} (opens in new tab)`}
            >
              <span>View Official Credential</span>
              <ExternalLink size={13} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
