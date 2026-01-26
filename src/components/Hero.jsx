import { Heart } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
            </div>

            <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-12 px-6 text-center md:px-12">
                {/* Profile Image Section */}
                <div className="relative">
                    <div className="relative h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-full border-4 border-slate-800 shadow-2xl bg-slate-900 group">
                        <img
                            src="/mypic.png"
                            alt="Soufyan Rachdi"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    {/* Status Badge */}
                    <div className="absolute bottom-4 right-4 h-6 w-6 rounded-full border-4 border-slate-950 bg-green-500 shadow-lg shadow-green-500/20 animate-pulse" title="Online" />
                </div>

                <div className="max-w-3xl space-y-10">
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h1 className="font-heading text-6xl font-black tracking-tighter text-white sm:text-7xl md:text-8xl leading-none">
                                Soufyan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 drop-shadow-sm">Rachdi</span>
                            </h1>
                            <div className="flex items-center justify-center gap-4">
                                <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-slate-800" />
                                <h2 className="text-xl font-bold uppercase tracking-[0.3em] text-cyan-400 sm:text-2xl drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                                    Computer Science Student
                                </h2>
                                <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-slate-800" />
                            </div>
                        </div>
                        <p className="mx-auto max-w-2xl text-slate-400 leading-relaxed text-xl md:text-2xl font-light">
                            I am a <span className="text-slate-100 font-medium italic underline decoration-cyan-500/50 underline-offset-4">dynamic programmer</span> capable of tackling any project. My versatile skill set and creative <span className="text-cyan-400 font-medium">problem solving</span> allow me to adapt and deliver excellence across diverse technologies.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="https://github.com/sponsors/SoufyanRachdi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-pink-500/10 hover:bg-pink-500/20 text-pink-500 border border-pink-500/30 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-pink-500/5 hover:-translate-y-1 active:scale-95"
                        >
                            <Heart size={22} className="fill-current group-hover:scale-125 transition-transform" />
                            <span className="text-lg">Sponsor My Work</span>
                            <div className="absolute inset-0 rounded-2xl bg-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>

                        <div className="flex items-center justify-center gap-6 px-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white tracking-tight">15+</div>
                                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Projects Built</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
