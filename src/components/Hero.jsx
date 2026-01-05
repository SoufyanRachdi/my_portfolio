export default function Hero() {
    return (
        <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
            <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-8 px-6 text-center md:px-12">
                {/* Image View "Better" */}
                <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-30 blur-2xl animate-blob" />
                    <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-slate-950 shadow-2xl ring-2 ring-cyan-500/50 md:h-64 md:w-64">
                        <img
                            src="/mypic.png"
                            alt="Soufyan Rachdi"
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                </div>

                <div className="max-w-2xl space-y-4">
                    <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl md:text-6xl">
                        Soufyan Rachdi
                    </h1>
                    <h2 className="text-xl font-medium text-cyan-400 sm:text-2xl">
                        Computer Science Student
                    </h2>
                    <p className="mx-auto max-w-lg text-slate-400 leading-relaxed text-lg">
                        Building immersive digital experiences with clean code and creative solutions.
                    </p>
                </div>
            </div>
        </section>
    );
}
