export default function Experience() {
    return (
        <section className="animate-fade-in">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8 font-heading">Experience</h2>

            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2023 to Present">2023 — Present</header>
                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                        <div className="flex items-center gap-2">
                            <img src="/logoCpcIsimg.png" alt="CPC ISIMG" className="w-8 h-8 rounded" />
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300 group/link text-base" href="#" target="_blank" rel="noreferrer" aria-label="Competitive Programming Club">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>Competitive Programming Club (ISIMG)</span>
                            </a>
                        </div>
                        <div className="text-slate-500" aria-hidden="true">Active Member</div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                        Sharpened algorithmic thinking through weekly training sessions on C++, Python, and advanced data structures. Regularly competed in national contests (Tunis, Sfax, Gabès), solving complex problems under time pressure and collaborating with teammates to optimize solutions.
                    </p>
                </div>
            </div>
        </section>
    );
}
