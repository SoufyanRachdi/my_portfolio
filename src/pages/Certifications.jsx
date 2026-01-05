export default function Certifications() {
    return (
        <section className="animate-fade-in">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8 font-heading">Certifications</h2>
            <ul className="grid gap-4">
                {[
                    { name: 'C++ Certification', issuer: 'CodinGame', url: 'https://www.codingame.com/certification/iZ_f3jSzi7dpmw6Fi_XGgQ' },
                    { name: 'Problem Solving (Basic)', issuer: 'HackerRank', url: 'https://www.hackerrank.com/certificates/df79960f4ed9' },
                    { name: 'Python (Basic)', issuer: 'HackerRank', url: 'https://www.hackerrank.com/certificates/066aa343105d' }
                ].map((cert) => (
                    <li key={cert.url}>
                        <a href={cert.url} target="_blank" className="group flex items-center justify-between p-4 rounded-lg bg-slate-900/30 border border-slate-800/50 hover:bg-slate-800/50 transition-all">
                            <div>
                                <div className="font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">{cert.name}</div>
                                <div className="text-sm text-slate-500">{cert.issuer}</div>
                            </div>
                            <div className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all">→</div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
