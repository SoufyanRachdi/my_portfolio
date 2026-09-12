import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Layers, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6 py-16 px-4 animate-fade-in">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
        404 Page Not Found
      </div>

      <h1 className="text-4xl sm:text-6xl font-black text-white font-heading tracking-tight">
        Lost in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cyberspace?</span>
      </h1>

      <p className="text-slate-400 max-w-md text-sm sm:text-base leading-relaxed">
        The page you are looking for might have been moved, renamed, or is temporarily unavailable. Explore my engineering projects or return to the homepage.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
        >
          <Home size={16} />
          <span>Return to Homepage</span>
        </Link>

        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
        >
          <Layers size={16} className="text-cyan-400" />
          <span>Explore Projects</span>
        </Link>
      </div>
    </section>
  );
}
