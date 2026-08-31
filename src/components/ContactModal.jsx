import { useState, useEffect, useRef } from 'react';
import { X, Copy, Check, Mail, MessageSquare, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../utils/socialLinks';

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const modalRef = useRef(null);
  const email = 'Soufyanrachdiii@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is unavailable
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const linkedinLink = socialLinks.find((l) => l.label === 'LinkedIn')?.href || 'https://www.linkedin.com/in/soufyan-rachdi-996061247/';
  const githubLink = socialLinks.find((l) => l.label === 'GitHub')?.href || 'https://github.com/SoufyanRachdi';
  const whatsappLink = socialLinks.find((l) => l.label === 'WhatsApp')?.href || 'https://wa.me/21629031065';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-8 shadow-2xl shadow-cyan-950/30 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
          <div>
            <h3 id="contact-modal-title" className="text-xl font-bold text-slate-100 font-heading">
              Get in Touch
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Available for full-time roles, remote opportunities & freelance
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close contact dialog"
            className="rounded-lg p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
          >
            <X size={20} />
          </button>
        </div>

        {/* Primary Email Card with Direct Copy & Mailto */}
        <div className="mt-6 space-y-4">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Direct Email
                  </div>
                  <div className="text-sm md:text-base font-mono font-medium text-slate-200 select-all">
                    {email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/60 transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                  aria-label={copied ? 'Email address copied' : 'Copy email address to clipboard'}
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                >
                  <span>Open Mail</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Social Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/40 border border-slate-800/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/50 transition-all group focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            >
              <Linkedin size={18} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-xs font-medium">LinkedIn</span>
              <ArrowUpRight size={12} className="ml-auto opacity-60 group-hover:opacity-100" />
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/40 border border-slate-800/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/50 transition-all group focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            >
              <Github size={18} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-xs font-medium">GitHub</span>
              <ArrowUpRight size={12} className="ml-auto opacity-60 group-hover:opacity-100" />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/40 border border-slate-800/80 text-slate-300 hover:text-green-400 hover:border-green-500/40 hover:bg-slate-800/50 transition-all group focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            >
              <MessageSquare size={18} className="text-slate-400 group-hover:text-green-400 transition-colors" />
              <span className="text-xs font-medium">WhatsApp</span>
              <ArrowUpRight size={12} className="ml-auto opacity-60 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800/60 text-center">
          <p className="text-xs text-slate-400">
            Based in Tunisia · Open to remote roles & relocation
          </p>
        </div>
      </div>
    </div>
  );
}
