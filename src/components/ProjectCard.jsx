import { Link } from 'react-router-dom';
import { Github, ExternalLink, Download, Play, ArrowRight, Network, ShieldCheck } from 'lucide-react';
import { getTechLogo } from '../utils/techLogos';

export default function ProjectCard({ project }) {
  const hasLogo = Boolean(project.logo);
  const isFeatured = Boolean(project.featured);
  const hasEcosystem = Boolean(project.isEcosystem && project.ecosystem?.length);

  return (
    <div
      className={`group relative flex flex-col h-full rounded-2xl bg-slate-900/60 border backdrop-blur-sm overflow-hidden transition-all duration-300 ${
        isFeatured
          ? 'border-slate-800 hover:border-cyan-500/50 shadow-lg shadow-black/20 hover:shadow-cyan-950/30'
          : 'border-slate-800/70 hover:border-slate-700'
      }`}
    >
      {/* Top accent line */}
      <div
        className={`h-1 w-full bg-gradient-to-r transition-all ${
          isFeatured
            ? 'from-cyan-500/40 via-blue-500/60 to-cyan-500/40 group-hover:via-cyan-400'
            : 'from-transparent via-slate-800 to-transparent group-hover:via-slate-700'
        }`}
      />

      <div className="p-6 md:p-7 flex flex-col flex-grow">
        {/* Header: Logo + Status Badges + Action Buttons */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            {hasLogo ? (
              <div className="h-12 w-12 rounded-xl bg-slate-950/90 border border-slate-800 p-2 flex items-center justify-center flex-shrink-0 shadow-inner">
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width="36"
                  height="36"
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ) : (
              <div className="h-12 w-12 rounded-xl bg-slate-950/90 border border-slate-800 p-2 flex items-center justify-center flex-shrink-0 text-slate-500 font-bold text-lg font-heading">
                {project.title.charAt(0)}
              </div>
            )}

            {/* Status & Category Badges */}
            <div className="flex flex-wrap gap-1.5">
              {hasEcosystem && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold uppercase tracking-wider">
                  <Network size={10} />
                  <span>Ecosystem · {project.ecosystem.length} Parts</span>
                </span>
              )}
              {project.pfe && (
                <span className="px-2 py-0.5 rounded-md bg-purple-500/15 text-purple-300 border border-purple-500/30 text-[10px] font-bold uppercase tracking-wider">
                  PFE / Graduation
                </span>
              )}
              {project.internship && (
                <span className="px-2 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold uppercase tracking-wider">
                  Internship
                </span>
              )}
              {project.freelance && (
                <span className="px-2 py-0.5 rounded-md bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[10px] font-bold uppercase tracking-wider">
                  Commercial
                </span>
              )}
              {project.openSource && (
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider">
                  Open Source
                </span>
              )}
              {project.deployed && (
                <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-bold uppercase tracking-wider">
                  Live
                </span>
              )}
              {project.privateRepo && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 text-[10px] font-medium">
                  <ShieldCheck size={11} className="text-cyan-400" />
                  <span>Private Startup Repo</span>
                </span>
              )}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <Github size={18} />
              </a>
            )}
            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on Google Play Store (opens in new tab)`}
                className="p-2 rounded-lg text-slate-400 hover:text-green-400 hover:bg-slate-800/80 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <Play size={18} />
              </a>
            )}
            {project.download && (
              <a
                href={project.download}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Download ${project.title} (opens in new tab)`}
                className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <Download size={18} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} live link (opens in new tab)`}
                className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-slate-100 mb-2 font-heading tracking-tight">
          <Link
            to={`/projects/${project.id}`}
            className="hover:text-cyan-400 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded-sm"
          >
            {project.title}
          </Link>
        </h3>

        {/* Tagline */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
          {project.tagline || (typeof project.description === 'string' ? project.description : 'Explore project architecture, technical challenges, and implementation details.')}
        </p>

        {/* Ecosystem Sub-Modules Preview */}
        {hasEcosystem && (
          <div className="mb-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              System Modules / Parts:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.ecosystem.map((mod) => (
                <span
                  key={mod.title}
                  className="px-2 py-0.5 rounded bg-slate-900 text-slate-200 border border-slate-800 text-[11px] font-medium"
                >
                  {mod.title}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Richer Featured Project Highlights */}
        {isFeatured && (
          <div className="space-y-2 mb-5 p-3 rounded-xl bg-slate-950/50 border border-slate-800/60 text-xs">
            {project.role && (
              <div className="flex items-baseline gap-1.5 text-slate-400">
                <span className="font-semibold text-slate-300">Role:</span>
                <span className="text-slate-400 truncate">{project.role}</span>
              </div>
            )}
            {project.challenges && (
              <div className="flex items-start gap-1.5 text-slate-400">
                <span className="font-semibold text-slate-300 flex-shrink-0">Key Challenge:</span>
                <span className="text-slate-400 line-clamp-2">{project.challenges}</span>
              </div>
            )}
          </div>
        )}

        {/* Tech Stack List */}
        <div className="mt-auto pt-4 border-t border-slate-800/60">
          <ul className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, isFeatured ? 8 : 6).map((tech) => {
              const logo = getTechLogo(tech);
              return (
                <li
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/70 text-slate-300 text-xs font-medium border border-slate-800/80"
                >
                  {logo && (
                    <img
                      src={logo}
                      alt=""
                      width="14"
                      height="14"
                      loading="lazy"
                      className="w-3.5 h-3.5 object-contain opacity-80"
                    />
                  )}
                  <span>{tech}</span>
                </li>
              );
            })}
            {project.tech.length > (isFeatured ? 8 : 6) && (
              <li className="inline-flex items-center px-2 py-1 rounded-md bg-slate-950/40 text-slate-500 text-xs font-mono">
                +{project.tech.length - (isFeatured ? 8 : 6)} more
              </li>
            )}
          </ul>

          {/* Details CTA Link */}
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded"
          >
            <span>Explore All Parts &amp; Technical Architecture</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
