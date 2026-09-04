import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, FileText, Send, Sparkles } from 'lucide-react';
import { socialLinks } from '../utils/socialLinks';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'Soufyanrachdiii@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-8 pt-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles size={13} />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
          Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Something Great</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
          I am actively exploring <span className="text-slate-200 font-medium">Software Engineering roles</span>, <span className="text-slate-200 font-medium">Full-Stack &amp; Mobile Developer opportunities</span>, remote work, and freelance engineering collaborations.
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="p-8 md:p-10 rounded-3xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md shadow-2xl shadow-black/40 max-w-3xl mx-auto space-y-8">
        {/* Quick Email Copy & Launcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
          <div className="flex items-center gap-3 text-left w-full sm:w-auto">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Direct Email</div>
              <div className="text-sm sm:text-base font-semibold text-slate-100 font-mono select-all">
                {emailAddress}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleCopyEmail}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700'
              }`}
              aria-label="Copy email address to clipboard"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied to clipboard!' : 'Copy Email'}</span>
            </button>

            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              aria-label="Open email client to send email"
            >
              <Send size={14} />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Social & Professional Channels */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center">
            Connect Across Professional Channels:
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 text-slate-200 transition-all group focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                aria-label={`Visit ${link.label} (opens in new tab)`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform block [&>svg]:w-5 [&>svg]:h-5">
                    {link.svg}
                  </span>
                  <span className="text-sm font-semibold">{link.label}</span>
                </div>
                <ExternalLink size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* CV Download CTA */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs text-slate-400">
            Looking for a downloadable summary of skills, experience, and projects?
          </div>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none flex-shrink-0"
            aria-label="Download CV / Resume PDF (opens in new tab)"
          >
            <FileText size={15} className="text-cyan-400" />
            <span>Download Curriculum Vitae (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
