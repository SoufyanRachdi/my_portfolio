import { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Certifications from "./pages/Certifications";
import { socialLinks } from "./utils/socialLinks";

function Layout() {
  const cursorRef = useRef(null);

  // Spotlight Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 font-sans selection:bg-cyan-900 selection:text-white">
      {/* Spotlight Canvas */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      />

      <Navbar />

      <div className="mx-auto max-w-screen-lg px-6 md:px-12 py-12">
        {/* Main Content */}
        <main className="min-h-[50vh]">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/certification" element={<Certifications />} />
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </main>

        <footer className="mt-24 pt-8 border-t border-slate-800/50 text-center text-sm text-slate-500">
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-400 hover:text-cyan-400 transition-transform hover:-translate-y-1">
                <span className="w-6 h-6 block [&>svg]:w-6 [&>svg]:h-6">{link.svg}</span>
              </a>
            ))}
          </div>
          <p>
            Designed in Figma and coded in VS Code. Built with Next.js and Tailwind CSS.
          </p>
        </footer>
      </div>
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
