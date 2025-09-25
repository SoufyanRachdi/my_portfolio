import { useEffect, useRef, useState } from 'react';
import BigTitre from './components/BigTitre';
import Paragraph from './components/Paragraph';
import GithubSource from './components/Githubsource';
import { restaurantProjectImages ,zombieGameprojectImages ,triangleGameprojectImages , kabaadhubappprojectImages} from './utils/images';
import SocialIcon from './components/SocialIcon';
import { socialLinks } from './utils/socialLinks.jsx';
export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const spotlightRef = useRef(null);
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const currentPosRef = useRef({ x: 0, y: 0 });
  const targetPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPosRef.current = { x: e.clientX, y: e.clientY };
      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(tick);
      }
    };

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const tick = () => {
      const { x: cx, y: cy } = currentPosRef.current;
      const { x: tx, y: ty } = targetPosRef.current;
      const nextX = lerp(cx, tx, 0.15);
      const nextY = lerp(cy, ty, 0.15);
      currentPosRef.current = { x: nextX, y: nextY };

      const el = spotlightRef.current;
      if (el) {
        el.style.transform = `translate3d(${nextX - 100}px, ${nextY - 100}px, 0)`;
      }

      const distance = Math.hypot(nextX - tx, nextY - ty);
      if (distance > 0.5) {
        animationFrameRef.current = requestAnimationFrame(tick);
      } else {
        animationFrameRef.current = null;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // Scroll spy: highlight active section in the left nav
  useEffect(() => {
    const rootEl = document.getElementById('right-scroll-root');
    const ids = ['about', 'skills', 'experiences', 'projects', 'certifications'];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!rootEl || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the scroll container
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { root: rootEl, threshold: 0.5 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative bg-background min-h-screen text-base md:text-lg"
    >
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-big shadow-lg">
        <div className="flex items-center justify-between p-4">
          <div className="text-white font-bold text-lg">Soufyan Rachdi</div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-big border-t border-white/20">
            <nav className="p-4">
              <ul className="space-y-2">
                {[
                  { id: 'about', label: 'About Me' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'experiences', label: 'Experiences' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'certifications', label: 'Certifications' },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all ${
                        activeSection === item.id
                          ? 'bg-white text-big font-semibold'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Mobile Social Icons */}
              <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-white/20">
                <a href="https://github.com/SoufyanRachdi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white hover:text-accent transition-colors p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.112.82-.262.82-.582 0-.287-.01-1.047-.016-2.055-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.304.763-1.604-2.665-.304-5.467-1.333-5.467-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6.004 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.48 5.922.431.372.815 1.102.815 2.222 0 1.604-.015 2.896-.015 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0z"/></svg>
                </a>
             {/* Facebook */}
             <a href="https://www.facebook.com/soufyan.rachdi.16" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.41c0-3.1 1.893-4.787 4.658-4.787 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.588l-.467 3.696h-3.121V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z"/></svg>
             </a>
             {/* Instagram */}
             <a href="https://www.instagram.com/soyf_d_rachdi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.17 0-3.548.012-4.796.07-1.042.048-1.608.223-1.984.37-.5.194-.86.426-1.237.803-.377.377-.609.737-.803 1.237-.147.376-.322.942-.37 1.984-.058 1.248-.07 1.626-.07 4.796s.012 3.548.07 4.796c.048 1.042.223 1.608.37 1.984.194.5.426.86.803 1.237.377.377.737.609 1.237.803.376.147.942.322 1.984.37 1.248.058 1.626.07 4.796.07s3.548-.012 4.796-.07c1.042-.048 1.608-.223 1.984-.37.5-.194.86-.426 1.237-.803.377-.377.609-.737.803-1.237.147-.376.322-.942.37-1.984.058-1.248.07-1.626.07-4.796s-.012-3.548-.07-4.796c-.048-1.042-.223-1.608-.37-1.984-.194-.5-.426-.86-1.237-1.237-.376-.147-.942-.322-1.984-.37-1.248-.058-1.626-.07-4.796-.07zm0 3.889a5.111 5.111 0 1 1 0 10.222 5.111 5.111 0 0 1 0-10.222zm0 1.838a3.273 3.273 0 1 0 0 6.546 3.273 3.273 0 0 0 0-6.546zm5.406-3.204a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/></svg>
             </a>
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=Soufyanrachdiii@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail" className="text-white hover:text-accent transition-colors p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12.713 1.2 5.25A2 2 0 0 1 2 5h20c.282 0 .552.059.8.163L12 12.713zM22 7.117v11.633A1.25 1.25 0 0 1 20.75 20h-2.5A1.25 1.25 0 0 1 17 18.75V10.5l5-3.383zM2 7.117 7 10.5v8.25A1.25 1.25 0 0 1 5.75 20h-2.5A1.25 1.25 0 0 1 2 18.75V7.117z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/soufyan-rachdi-996061247/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-accent transition-colors p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.5 8h4V24h-4V8zm7.5 0h3.841v2.177h.054c.534-1.012 1.84-2.08 3.788-2.08 4.05 0 4.797 2.665 4.797 6.133V24h-4v-6.672c0-1.592-.028-3.64-2.215-3.64-2.217 0-2.556 1.733-2.556 3.527V24h-3.909V8z"/></svg>
                </a>
                <a href="https://wa.me/21629031065" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white hover:text-accent transition-colors p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.484A11.84 11.84 0 0 0 11.995 0C5.365 0 .032 5.333.032 11.963c0 2.108.553 4.168 1.603 5.984L0 24l6.2-1.6a11.908 11.908 0 0 0 5.795 1.479h.005c6.63 0 11.963-5.333 11.963-11.964A11.84 11.84 0 0 0 20.52 3.484zM11.995 21.8h-.004a9.77 9.77 0 0 1-4.985-1.366l-.358-.212-3.678.949.983-3.586-.233-.369a9.77 9.77 0 0 1-1.522-5.254c0-5.396 4.389-9.784 9.785-9.784a9.7 9.7 0 0 1 6.94 2.874 9.7 9.7 0 0 1 2.874 6.94c0 5.396-4.389 9.784-9.802 9.808zm5.66-7.33c-.309-.155-1.826-.902-2.109-1.003-.282-.103-.487-.155-.694.154-.204.31-.797 1.003-.977 1.209-.18.206-.36.232-.67.078-.31-.155-1.309-.48-2.495-1.532-.922-.822-1.545-1.838-1.726-2.147-.18-.31-.02-.477.135-.632.138-.137.31-.36.465-.542.155-.18.206-.309.31-.515.103-.206.052-.387-.026-.542-.077-.155-.694-1.672-.95-2.287-.25-.601-.505-.52-.694-.53l-.594-.01c-.206 0-.542.077-.825.387-.282.31-1.08 1.055-1.08 2.574s1.107 2.987 1.26 3.194c.155.206 2.18 3.33 5.28 4.666.739.319 1.316.509 1.767.653.742.236 1.416.203 1.95.123.595-.089 1.826-.746 2.085-1.468.258-.722.258-1.34.18-1.468-.078-.129-.283-.206-.592-.361z"/></svg>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="lg:flex">
        {/* Desktop Left Sidebar */}
        <div className="hidden lg:block lg:fixed lg:left-0 lg:top-0 lg:w-1/2 lg:h-screen lg:z-10">
          <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-transparent px-8">
            <div className="text-3xl xl:text-5xl font-black leading-none text-big drop-shadow-[0_1px_0_rgba(0,0,0,0.3)] text-center">Soufyan Rachdi</div>
            <div className="text-xl xl:text-3xl font-black leading-none text-big drop-shadow-[0_1px_0_rgba(0,0,0,0.3)] text-center mb-8">COMPUTER SCIENCE STUDENT</div>
            {/* Category list */}
            <ul className="flex flex-col items-start gap-2 text-white w-full max-w-xs bg-big rounded-xl p-4">
            {[
              { id: 'about', label: 'About Me' },
              { id: 'skills', label: 'Skills' },
              { id: 'experiences', label: 'Experiences' },
              { id: 'projects', label: 'Projects' },
              { id: 'certifications', label: 'Certifications' },
            ].map((item) => (
              <li key={item.id} className="w-full">
                  <a
                    href={`#${item.id}`}
                    className={`block transition-all border-l-4 pl-3 py-1 rounded-r ${
                      activeSection === item.id
                        ? 'bg-white text-big border-white pl-5'
                        : 'border-white/40 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
            ))}
          </ul>
           {/* Social Icons */}
           <div className="flex items-center gap-5 text-white bg-big rounded-xl p-3">
             {/* GitHub */}
             <a href="https://github.com/SoufyanRachdi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-80 transition-opacity">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.112.82-.262.82-.582 0-.287-.01-1.047-.016-2.055-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.304.763-1.604-2.665-.304-5.467-1.333-5.467-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6.004 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.48 5.922.431.372.815 1.102.815 2.222 0 1.604-.015 2.896-.015 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0z"/></svg>
             </a>
             {/* Gmail */}
             <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=Soufyanrachdiii@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail" className="hover:opacity-80 transition-opacity">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12.713 1.2 5.25A2 2 0 0 1 2 5h20c.282 0 .552.059.8.163L12 12.713zM22 7.117v11.633A1.25 1.25 0 0 1 20.75 20h-2.5A1.25 1.25 0 0 1 17 18.75V10.5l5-3.383zM2 7.117 7 10.5v8.25A1.25 1.25 0 0 1 5.75 20h-2.5A1.25 1.25 0 0 1 2 18.75V7.117z"/></svg>
             </a>
             {/* LinkedIn */}
             <a href="https://www.linkedin.com/in/soufyan-rachdi-996061247/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.5 8h4V24h-4V8zm7.5 0h3.841v2.177h.054c.534-1.012 1.84-2.08 3.788-2.08 4.05 0 4.797 2.665 4.797 6.133V24h-4v-6.672c0-1.592-.028-3.64-2.215-3.64-2.217 0-2.556 1.733-2.556 3.527V24h-3.909V8z"/></svg>
             </a>
             {/* Facebook */}
             <a href="https://www.facebook.com/soufyan.rachdi.16" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.41c0-3.1 1.893-4.787 4.658-4.787 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.588l-.467 3.696h-3.121V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z"/></svg>
             </a>
             {/* Instagram */}
             <a href="https://www.instagram.com/soyf_d_rachdi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.17 0-3.548.012-4.796.07-1.042.048-1.608.223-1.984.37-.5.194-.86.426-1.237.803-.377.377-.609.737-.803 1.237-.147.376-.322.942-.37 1.984-.058 1.248-.07 1.626-.07 4.796s.012 3.548.07 4.796c.048 1.042.223 1.608.37 1.984.194.5.426.86.803 1.237.377.377.737.609 1.237.803.376.147.942.322 1.984.37 1.248.058 1.626.07 4.796.07s3.548-.012 4.796-.07c1.042-.048 1.608-.223 1.984-.37.5-.194.86-.426 1.237-.803.377-.377.609-.737.803-1.237.147-.376.322-.942.37-1.984.058-1.248.07-1.626.07-4.796s-.012-3.548-.07-4.796c-.048-1.042-.223-1.608-.37-1.984-.194-.5-.426-.86-1.237-1.237-.376-.147-.942-.322-1.984-.37-1.248-.058-1.626-.07-4.796-.07zm0 3.889a5.111 5.111 0 1 1 0 10.222 5.111 5.111 0 0 1 0-10.222zm0 1.838a3.273 3.273 0 1 0 0 6.546 3.273 3.273 0 0 0 0-6.546zm5.406-3.204a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/></svg>
             </a>
             {/* WhatsApp */}
             <a href="https://wa.me/21629031065" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:opacity-80 transition-opacity">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.484A11.84 11.84 0 0 0 11.995 0C5.365 0 .032 5.333.032 11.963c0 2.108.553 4.168 1.603 5.984L0 24l6.2-1.6a11.908 11.908 0 0 0 5.795 1.479h.005c6.63 0 11.963-5.333 11.963-11.964A11.84 11.84 0 0 0 20.52 3.484zM11.995 21.8h-.004a9.77 9.77 0 0 1-4.985-1.366l-.358-.212-3.678.949.983-3.586-.233-.369a9.77 9.77 0 0 1-1.522-5.254c0-5.396 4.389-9.784 9.785-9.784a9.7 9.7 0 0 1 6.94 2.874 9.7 9.7 0 0 1 2.874 6.94c0 5.396-4.389 9.784-9.802 9.808zm5.66-7.33c-.309-.155-1.826-.902-2.109-1.003-.282-.103-.487-.155-.694.154-.204.31-.797 1.003-.977 1.209-.18.206-.36.232-.67.078-.31-.155-1.309-.48-2.495-1.532-.922-.822-1.545-1.838-1.726-2.147-.18-.31-.02-.477.135-.632.138-.137.31-.36.465-.542.155-.18.206-.309.31-.515.103-.206.052-.387-.026-.542-.077-.155-.694-1.672-.95-2.287-.25-.601-.505-.52-.694-.53l-.594-.01c-.206 0-.542.077-.825.387-.282.31-1.08 1.055-1.08 2.574s1.107 2.987 1.26 3.194c.155.206 2.18 3.33 5.28 4.666.739.319 1.316.509 1.767.653.742.236 1.416.203 1.95.123.595-.089 1.826-.746 2.085-1.468.258-.722.258-1.34.18-1.468-.078-.129-.283-.206-.592-.361z"/></svg>
             </a>
           </div>
          </div>
      </div>
      
        {/* Desktop Right Content */}
        <div 
          id="right-scroll-root"
          className="lg:ml-[50%] lg:w-1/2 w-full overflow-y-auto scroll-smooth"
          style={{
            minHeight: '100vh'
          }}
        >
        <div className="p-4 lg:p-8 pt-20 lg:pt-8 font-comic">
          <div className="mb-8" id="about">
            <BigTitre a="About Me" className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-big inline-block px-3 py-1 rounded border-l-8 border-accent"/>
          </div>
          
          {/* Scrollable content */}
          <div className="space-y-6">
            <div className="rounded-lg p-4 md:p-6 bg-white border border-gray-200 shadow-sm">
              <Paragraph className="text-smallText leading-relaxed">
                I am a passionate and motivated Computer Science student in my third year at ISIMG, with a strong academic background in mathematics, physics, and computer science. I enjoy tackling complex problems and turning ideas into functional, high-quality software solutions.
                <br/><br/>
                My journey in tech started with solid foundations in programming (Java, Python, C/C++, JavaScript, GDScript) and grew through hands-on projects in web, mobile, and game development. I have built applications ranging from a restaurant management system in Java/MySQL to a cross-platform mobile app in Flutter & Firebase with an international client.
                <br/><br/>
                Beyond academics, I actively engage in competitive programming through my university club, where I organize workshops and participate in coding challenges to sharpen my algorithmic thinking and teamwork skills.
                <br/><br/>
                I have a strong interest in full-stack development, database systems, and game programming, with personal projects such as a 3D zombie survival game and a 2D multiplayer triangle game developed in Godot. These projects gave me practical experience in gameplay design, AI programming, and collaborative version control with Git.
                <br/><br/>
                I thrive in collaborative environments, adapt quickly to new technologies, and enjoy learning continuously. My goal is to secure a final-year internship where I can contribute to real-world projects, expand my expertise, and grow as a developer while bringing value to the team.
              </Paragraph>
            </div>
            </div>
          <div className="mb-8" id="skills">
            <BigTitre a="Skills" className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-big inline-block px-3 py-1 rounded border-l-8 border-accent"/>
            <div className="mt-4 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="space-y-2">
                <Paragraph className="text-smallText"><span className="font-semibold">Programming Languages:</span> Java, Python, C/C++, JavaScript, GDScript , Php</Paragraph>
                <Paragraph className="text-smallText"><span className="font-semibold">Web Development:</span> HTML, CSS, React, Node.js, Laravel</Paragraph>
                <Paragraph className="text-smallText"><span className="font-semibold">Mobile Development:</span> Flutter, Android Studio</Paragraph>
                <Paragraph className="text-smallText"><span className="font-semibold">Databases:</span> MySQL, NoSQL</Paragraph>
                <Paragraph className="text-smallText"><span className="font-semibold">Tools & Environments:</span> Git, GitHub, VS Code, IntelliJ IDEA, Godot, Firebase, Notion, XAMPP, PhpMyAdmin ,Wireshark</Paragraph>
                <Paragraph className="text-smallText"><span className="font-semibold">Soft Skills:</span> Problem Solving, Project Management, Teamwork</Paragraph>
                <Paragraph className="text-smallText"><span className="font-semibold">Languages:</span> French (Advanced), English (Advanced)</Paragraph>
              </div>
            </div>
          </div>
          <div className="mb-8" id="experiences">
            <BigTitre a="Experiences" className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-big inline-block px-3 py-1 rounded border-l-8 border-accent"/>
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-black">Active Member – Competitive Programming Club (CPC ISIMG) (2023 – 2025)</h3>
                <div className="mt-2 space-y-1">
                <Paragraph className="text-smallText" children="During my studies at ISIMG, I joined the Competitive Programming Club, an experience that greatly enriched both my technical and personal skills. As an active member, I took part in training sessions focused on C++, Python, and advanced problem-solving techniques. We regularly practiced on platforms such as Codeforces and LeetCode, sharpening our algorithmic thinking and speed in competitive environments. I also had the opportunity to represent the club in several competitions held in Tunis, Sfax, and Gabès, where I collaborated with teammates and challenged myself against strong participants. This experience not only improved my programming expertise but also strengthened my teamwork, persistence, and ability to perform under pressure."></Paragraph>
                </div>
              </div>
          </div>
          <div className="mb-8" id="projects">
            <BigTitre a="Projects" className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-big inline-block px-3 py-1 rounded border-l-8 border-accent"/>
            <div className="mt-4 space-y-4">
              <GithubSource
              photos={kabaadhubappprojectImages}
  source="https://github.com/SoufyanRachdi/project_app_KabaadHub/tree/main"
  title="Freelance Flutter Developer — Kabaadhub Application"
  text={
    <>
      <p className="font-semibold text-gray-800">July 2025 - Now</p>
      <p className="mt-2 text-gray-600">
        Designed and developed a cross-platform mobile application (Android/iOS) using Flutter & Firebase,
        dedicated to buying and selling recycled products. The app allows users to post ads, search with
        advanced filters, and benefit from precise geolocation via specialized APIs.
      </p>
      <p className="mt-2 text-gray-600">
        Integrated a real-time messaging system to facilitate communication between buyers and sellers.
        Additionally, developed an admin panel in Flutter Web, enabling user management, ad moderation, issue
        handling, and detailed statistics.
      </p>
      <p className="mt-2 text-gray-600">
        This project was carried out in collaboration with an international client (India), from design to final delivery.
      </p>
    </>
  }
/>
<GithubSource
photos={triangleGameprojectImages}
  source="https://github.com/SoufyanRachdi/multiplayer_triangle_game"
  title="Personal Project – 2D Multiplayer Triangle Game (Godot, GDScript)"
  text={
    <>
      <p className="font-semibold text-gray-800">june 2025 - july 2025</p>
      <p className="mt-2 text-gray-600">
        Developed a 2D multiplayer game where each triangle has three sides, but only one can deal damage to
opponents. Players compete on a map of 50 participants, with the objective of surviving until the end to
win.

      </p>
      <p className="mt-2 text-gray-600">
      The project includes player movement, collision handling, and combat logic. Although development was
not continued due to technical constraints, the project allowed me to strengthen my skills in game
programming, multiplayer logic, and project management with Git.
      </p>
    </>
  }
/>
              
              <GithubSource
              photos={zombieGameprojectImages}
  source="https://github.com/SoufyanRachdi/zombie-game"
  title="Personal Project – 3D Zombie Survival Game (Godot, GDScript)
"
  text={
    <>
      <p className="font-semibold text-gray-800">may 2025 - june 2025</p>
      <p className="mt-2 text-gray-600">
        Designed and developed a 3D survival game using Godot and GDScript, where the player faces waves of
zombies in an immersive environment.

      </p>
      <p className="mt-2 text-gray-600">
        The project includes a 3D movement system, enemy AI (chasing, attacking, patrolling), as well as collision
and physics management
      </p>
      <p className="mt-2 text-gray-600">
        Implemented a scoring and progression system, along with resource and weapon management elements.
This project allowed me to strengthen my skills in 3D development, gameplay design, and AI programming
within a modern game engine
      </p>
    </>
  }
/>
            <GithubSource
            photos={restaurantProjectImages}
  source="https://github.com/elParadigm/SystemeDeGestionDunRestaurant"
  title="Academic Project – Restaurant Management Application (ISIMG University)"
  text={
    <>
      <p className="font-semibold text-gray-800">mars 2025 - april 2025
</p>
      <p className="mt-2 text-gray-600">As part of my coursework, I contributed to the development of a restaurant management application built
with Java (Swing) and a MySQL Workbench database. The goal was to create a centralized solution to
manage the different actors and processes of a restaurant
      </p>
      <p className="mt-2 text-gray-600">
        IThe application included several modules: client (menu consultation, orders), server (real-time monitoring,
billing), and chef (dish visualization and management).

      </p>
      <p className="mt-2 text-gray-600">I contributed to object-oriented design, the implementation of a modular architecture, and used Java,
MySQL Workbench, and Git/GitHub for collaborative development.
This project provided me with practical experience in system modeling, event-driven programming, and

      </p>
    </>
  }
/>  
             
            </div>
          </div>
         <div className="mb-8" id="certifications">
  <BigTitre
    a="Certifications"
    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-big inline-block px-3 py-1 rounded border-l-8 border-accent"
  />
  <div className="mt-4 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
    <div className="space-y-2">
      <a
        href="https://www.codingame.com/certification/iZ_f3jSzi7dpmw6Fi_XGgQ"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:text-blue-600 transition"
      >
        <Paragraph className="text-smallText">C++ Certification — CodinGame</Paragraph>
        <span className="ml-2 text-sm">→</span>
      </a>

      <a
        href="https://www.hackerrank.com/certificates/df79960f4ed9"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:text-blue-600 transition"
      >
        <Paragraph className="text-smallText">Problem Solving (Basic) — HackerRank</Paragraph>
        <span className="ml-2 text-sm">→</span>
      </a>

      <a
        href="https://www.hackerrank.com/certificates/066aa343105d"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:text-blue-600 transition"
      >
        <Paragraph className="text-smallText">Python (Basic) — HackerRank</Paragraph>
        <span className="ml-2 text-sm">→</span>
      </a>
    </div>
  </div>
</div>

        </div>
        </div>
      </div>
    </div>
  );
}
