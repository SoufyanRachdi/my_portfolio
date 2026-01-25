import { Heart } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
            <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-12 px-6 text-center md:px-12">

                {/* Simplified & Better Profile Image Section */}
                <div className="relative group">
                    {/* Subtle Gradient Glow */}
                    <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-2xl animate-pulse" />

                    <div className="relative animate-float">
                        <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-slate-900 bg-slate-900 p-1 md:h-56 md:w-56 shadow-2xl">
                            <div className="h-full w-full overflow-hidden rounded-full border-2 border-cyan-500/30">
                                <img
                                    src="/mypic.png"
                                    alt="Soufyan Rachdi"
                                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h1 className="font-heading text-5xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl">
                                Soufyan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Rachdi</span>
                            </h1>
                            <div className="flex items-center justify-center gap-3">
                                <div className="h-px w-8 bg-slate-800" />
                                <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-cyan-400 sm:text-xl">
                                    Computer Science Student
                                </h2>
                                <div className="h-px w-8 bg-slate-800" />
                            </div>
                        </div>
                        <p className="mx-auto max-w-xl text-slate-400 leading-relaxed text-lg md:text-xl font-medium">
                            Crafting high-performance digital solutions with <span className="text-slate-200">elegant code</span> and <span className="text-slate-200">creative problem solving</span>.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <a
                            href="https://github.com/sponsors/SoufyanRachdi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-pink-500/10 hover:bg-pink-500/20 text-pink-500 border border-pink-500/30 rounded-full font-bold transition-all duration-300 shadow-lg shadow-pink-500/5 hover:scale-105 active:scale-95"
                        >
                            <Heart size={20} className="fill-current group-hover:animate-ping" />
                            <span>Sponsor Me</span>
                            <div className="absolute inset-0 rounded-full bg-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
