import { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation, useNavigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';
import FloatingSkills from './components/FloatingSkills';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import { socialLinks } from './utils/socialLinks';

function FooterLink({ id, label }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', `#${id}`);
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className="hover:text-cyan-400 transition-colors cursor-pointer"
    >
      {label}
    </a>
  );
}

function Layout() {
  const cursorRef = useRef(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Spotlight Effect - enabled only on fine-pointer desktop devices
  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.background = `radial-gradient(550px circle at ${e.clientX}px ${e.clientY}px, rgba(14, 165, 233, 0.08), transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="relative min-h-screen font-sans bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Accessible Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-950 focus:font-bold focus:rounded-lg focus:shadow-xl focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Floating Background Ambient Particles */}
      <FloatingSkills />

      {/* Hardware-Accelerated Spotlight Glow */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
      />

      {/* Main Page Layout Wrapper */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6 md:py-8 flex flex-col min-h-screen">
        <Navbar onOpenContact={openContact} />

        {/* Main Content Area */}
        <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
          <Routes>
            <Route path="/" element={<Home onOpenContact={openContact} />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Professional Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500 space-y-6">
          {/* Social Channels */}
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} profile (opens in new tab)`}
                className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <span className="w-5 h-5 block [&>svg]:w-5 [&>svg]:h-5">{link.svg}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <FooterLink id="home" label="Home" />
            <span>·</span>
            <FooterLink id="about" label="About" />
            <span>·</span>
            <FooterLink id="projects" label="Projects" />
            <span>·</span>
            <FooterLink id="experience" label="Experience" />
            <span>·</span>
            <FooterLink id="education" label="Education" />
            <span>·</span>
            <FooterLink id="skills" label="Skills" />
            <span>·</span>
            <FooterLink id="certifications" label="Certifications" />
            <span>·</span>
            <FooterLink id="contact" label="Contact" />
          </div>

          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} Soufyan Rachdi · Computer Science Graduate &amp; Software Developer. Built with React, Vite &amp; Tailwind CSS.
          </p>
        </footer>
      </div>

      {/* Global Accessible Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />

      <Analytics />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
