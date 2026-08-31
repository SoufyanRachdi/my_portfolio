import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Play, Download, X, ChevronLeft, ChevronRight, CheckCircle2, Layers, ShieldCheck, Network, Box } from 'lucide-react';
import { projects } from '../utils/projects';
import { getTechLogo } from '../utils/techLogos';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  // Resolve either direct project ID or any sub-module ecosystem ID
  const project = projects.find(
    (p) => p.id === projectId || p.ecosystem?.some((e) => e.id === projectId)
  );

  const [activeImageIndex, setActiveImageIndex] = useState(null);

  // Keyboard navigation for screenshot lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowLeft' && project?.images?.length) {
        setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : project.images.length - 1));
      } else if (e.key === 'ArrowRight' && project?.images?.length) {
        setActiveImageIndex((prev) => (prev < project.images.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, project]);

  if (!project) {
    return (
      <section className="py-16 text-center space-y-4 animate-fade-in">
        <h1 className="text-2xl font-bold text-slate-100 font-heading">Project Not Found</h1>
        <p className="text-slate-400 text-sm">The project you are looking for does not exist or has been moved.</p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-sm font-semibold"
        >
          <ArrowLeft size={16} />
          <span>Back to All Projects</span>
        </Link>
      </section>
    );
  }

  const hasImages = project.images && project.images.length > 0;
  const hasEcosystem = project.ecosystem && project.ecosystem.length > 0;

  return (
    <section className="animate-fade-in space-y-10 pb-16">
      {/* Breadcrumb Navigation */}
      <div>
        <button
          type="button"
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded"
        >
          <ArrowLeft size={14} />
          <span>Back to Projects</span>
        </button>
      </div>

      {/* Main Project Header Card */}
      <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            {project.logo ? (
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-slate-950 border border-slate-800 p-2.5 flex items-center justify-center flex-shrink-0 shadow-inner">
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width="56"
                  height="56"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ) : (
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-slate-950 border border-slate-800 p-3 flex items-center justify-center flex-shrink-0 text-2xl font-bold font-heading text-slate-500">
                {project.title.charAt(0)}
              </div>
            )}

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {hasEcosystem && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider">
                    <Network size={12} />
                    <span>Ecosystem · {project.ecosystem.length} Integrated Parts</span>
                  </span>
                )}
                {project.pfe && (
                  <span className="px-2.5 py-0.5 rounded-md bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold uppercase tracking-wider">
                    PFE / Graduation
                  </span>
                )}
                {project.internship && (
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider">
                    Internship
                  </span>
                )}
                {project.freelance && (
                  <span className="px-2.5 py-0.5 rounded-md bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-wider">
                    Commercial / Freelance
                  </span>
                )}
                {project.openSource && (
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
                    Open Source
                  </span>
                )}
                {project.deployed && (
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider">
                    Live / Production
                  </span>
                )}
                {project.academic && (
                  <span className="px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-bold uppercase tracking-wider">
                    Academic Project
                  </span>
                )}
                {project.privateRepo && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">
                    <ShieldCheck size={13} className="text-cyan-400" />
                    <span>Private / Proprietary Startup Repository</span>
                  </span>
                )}
              </div>

              <h1 className="text-2xl md:text-4xl font-extrabold text-white font-heading tracking-tight">
                {project.title}
              </h1>

              {project.tagline && (
                <p className="text-sm md:text-base text-slate-300 mt-1 font-medium">
                  {project.tagline}
                </p>
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <span>Visit Live</span>
                <ExternalLink size={14} />
              </a>
            )}
            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 font-semibold text-xs transition-all focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
              >
                <Play size={14} />
                <span>Google Play</span>
              </a>
            )}
            {project.download && (
              <a
                href={project.download}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <Download size={14} />
                <span>Download</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <Github size={14} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Technologies List */}
        <div className="pt-4 border-t border-slate-800/80">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Technologies &amp; Architecture:
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => {
              const logo = getTechLogo(tech);
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 text-xs font-medium"
                >
                  {logo && (
                    <img
                      src={logo}
                      alt=""
                      width="14"
                      height="14"
                      loading="lazy"
                      className="w-3.5 h-3.5 object-contain"
                    />
                  )}
                  <span>{tech}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ecosystem & Integrated Sub-Projects Breakdown (When available) */}
      {hasEcosystem && (
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 font-heading">
              <Network size={16} />
              <span>System Ecosystem &amp; Integrated Parts</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-100 font-heading">
              Architectural Breakdown &amp; Sub-Projects
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              This system consists of multiple coordinated components, client platforms, and backend services:
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {project.ecosystem.map((mod) => (
              <div
                key={mod.title}
                className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4 flex flex-col justify-between hover:border-cyan-500/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold uppercase tracking-wider">
                      {mod.badge || mod.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 font-heading">
                    {mod.title}
                  </h3>

                  {mod.role && (
                    <div className="text-xs font-semibold text-slate-400">
                      {mod.role}
                    </div>
                  )}

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800/80">
                  {/* Action links specific to this sub-project */}
                  <div className="flex flex-wrap gap-2">
                    {mod.github && (
                      <a
                        href={mod.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-[11px] font-medium"
                      >
                        <Github size={12} />
                        <span>Source</span>
                      </a>
                    )}
                    {mod.link && (
                      <a
                        href={mod.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-[11px] font-medium"
                      >
                        <ExternalLink size={12} />
                        <span>Website / Portal</span>
                      </a>
                    )}
                    {mod.playStore && (
                      <a
                        href={mod.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-[11px] font-medium"
                      >
                        <Play size={12} />
                        <span>Play Store</span>
                      </a>
                    )}
                    {mod.download && (
                      <a
                        href={mod.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-[11px] font-medium"
                      >
                        <Download size={12} />
                        <span>Downloads</span>
                      </a>
                    )}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1">
                    {mod.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-medium border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Project Overview & Architecture Deep-Dive */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Left 2 Cols: Description & Problem Solved */}
        <div className="md:col-span-2 space-y-6">
          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-100 font-heading flex items-center gap-2">
              <Layers size={18} className="text-cyan-400" />
              <span>Project Overview</span>
            </h2>
            <div className="text-slate-300 leading-relaxed space-y-3 text-sm md:text-base">
              {project.description}
            </div>
          </div>

          {project.problemSolved && (
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3">
              <h2 className="text-lg font-bold text-slate-100 font-heading flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span>Problem Solved</span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
          )}
        </div>

        {/* Right 1 Col: Role & Technical Challenges */}
        <div className="space-y-6">
          {project.role && (
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Engineering Role
              </div>
              <div className="text-sm font-semibold text-slate-200">
                {project.role}
              </div>
            </div>
          )}

          {project.challenges && (
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Technical Highlights
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {project.challenges}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Screenshot Gallery Section */}
      {hasImages && (
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-100 font-heading">
              Application Gallery &amp; Screenshots
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Click on any screenshot to expand full resolution preview
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {project.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950 aspect-video focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                aria-label={`View screenshot ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-cyan-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1 rounded-md bg-slate-900/90 text-xs font-medium text-slate-200 border border-slate-700">
                    Click to Zoom
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Screenshot Lightbox Modal */}
      {activeImageIndex !== null && hasImages && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveImageIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot lightbox"
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with counter & close */}
            <div className="w-full flex items-center justify-between py-2 text-slate-300 text-xs mb-2">
              <span className="font-mono">
                {activeImageIndex + 1} / {project.images.length}
              </span>
              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                aria-label="Close screenshot preview"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Preview Image */}
            <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
              <img
                src={project.images[activeImageIndex]}
                alt={`${project.title} screenshot full view`}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />

              {/* Prev / Next controls */}
              {project.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev > 0 ? prev - 1 : project.images.length - 1
                      )
                    }
                    className="absolute left-3 p-2 rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-800 border border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev < project.images.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="absolute right-3 p-2 rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-800 border border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
