export default function Skills() {
    return (
        <section className="animate-fade-in">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8 font-heading">Skills</h2>
            <div className="grid gap-4">
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all">
                    <h3 className="text-cyan-400 font-bold mb-4 font-heading">Core Tech</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Java', 'Python', 'C/C++', 'JavaScript', 'GDScript', 'Dart'].map(t => (
                            <span key={t} className="px-3 py-1 bg-cyan-950/30 text-cyan-300 rounded-full text-xs font-medium border border-cyan-900/50">{t}</span>
                        ))}
                    </div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all">
                    <h3 className="text-cyan-400 font-bold mb-4 font-heading">Web & Mobile</h3>
                    <div className="flex flex-wrap gap-2">
                        {['React', 'Node.js', 'Tailwind CSS', 'Next.js', 'Flutter', 'Firebase'].map(t => (
                            <span key={t} className="px-3 py-1 bg-blue-950/30 text-blue-300 rounded-full text-xs font-medium border border-blue-900/50">{t}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
