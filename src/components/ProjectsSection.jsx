import { useState, useMemo } from 'react';
import { X, RotateCcw, Filter, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../utils/projects';

const categories = ['All', 'Mobile', 'Backend', 'Tools', 'Desktop', 'Business Software', 'Games'];
const statuses = ['All', 'Featured / Flagship', 'Live / Production', 'Open Source', 'Commercial / Client', 'Academic / PFE'];
const PRIMARY_PROJECT_IDS = ['caredify', 'mkarchi', 'kabaadhub'];

export default function ProjectsSection({ selectedSkill, onClearSkill }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeStatus, setActiveStatus] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleResetAllFilters = () => {
    if (onClearSkill) onClearSkill();
    setActiveCategory('All');
    setActiveStatus('All');
    setSortBy('featured');
    setIsExpanded(false);
  };

  const hasActiveFilters = Boolean(selectedSkill || activeCategory !== 'All' || activeStatus !== 'All');

  const filteredProjects = useMemo(() => {
    let list = [...projects];

    // Filter by skill if selected
    if (selectedSkill) {
      list = list.filter((project) =>
        project.tech.some((tech) => tech.toLowerCase() === selectedSkill.toLowerCase())
      );
    }

    // Filter by category
    if (activeCategory !== 'All') {
      list = list.filter((project) => {
        const cats = Array.isArray(project.category) ? project.category : [project.category];
        return cats.includes(activeCategory);
      });
    }

    // Filter by status
    if (activeStatus !== 'All') {
      list = list.filter((project) => {
        if (activeStatus === 'Featured / Flagship') return project.featured;
        if (activeStatus === 'Live / Production') return project.deployed;
        if (activeStatus === 'Open Source') return project.openSource;
        if (activeStatus === 'Commercial / Client') return project.freelance;
        if (activeStatus === 'Academic / PFE') return project.academic || project.pfe;
        return true;
      });
    }

    // Sorting
    if (sortBy === 'az') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'za') {
      list.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === 'featured') {
      list.sort((a, b) => {
        const priorityA = a.priority || (a.featured ? 10 : 99);
        const priorityB = b.priority || (b.featured ? 10 : 99);
        return priorityA - priorityB;
      });
    }

    return list;
  }, [selectedSkill, activeCategory, activeStatus, sortBy]);

  // If no filters are active and user hasn't expanded, display only the 3 flagship ecosystems
  const displayedProjects = useMemo(() => {
    if (hasActiveFilters || isExpanded) {
      return filteredProjects;
    }
    // Show only the 3 primary flagship ecosystems: Caredify, Mkarchi, KabaadHub
    const primaryOnly = filteredProjects.filter((p) => PRIMARY_PROJECT_IDS.includes(p.id));
    return primaryOnly.length > 0 ? primaryOnly : filteredProjects.slice(0, 3);
  }, [filteredProjects, hasActiveFilters, isExpanded]);

  const remainingCount = filteredProjects.length - displayedProjects.length;

  return (
    <section id="projects" className="scroll-mt-24 space-y-10 pt-6">
      {/* Page Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles size={13} />
          <span>Engineering Systems</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
          Featured Projects &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Software Architecture</span>
        </h2>
        <p className="text-slate-400 max-w-3xl text-sm md:text-base leading-relaxed">
          Healthcare BLE telemetry systems, multi-platform developer tooling ecosystems, and commercial mobile marketplaces.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-5">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setIsExpanded(true);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                activeCategory === cat
                  ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 shadow-sm shadow-cyan-500/10'
                  : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Status Pills and Sorting */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-4 border-t border-slate-800/60">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
              Status:
            </span>
            {statuses.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => {
                  setActiveStatus(status);
                  setIsExpanded(true);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                  activeStatus === status
                    ? 'bg-blue-500/20 border border-blue-500/40 text-blue-300 shadow-sm shadow-blue-500/10'
                    : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort projects"
              className="bg-slate-950/80 border border-slate-800 text-slate-300 text-xs font-medium rounded-lg px-3 py-1.5 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            >
              <option value="featured">Flagship Priority</option>
              <option value="az">Name (A-Z)</option>
              <option value="za">Name (Z-A)</option>
            </select>
          </div>
        </div>

        {/* Active Skill Filter Banner */}
        {selectedSkill && (
          <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span>Filtering projects by technology:</span>
              <span className="font-bold text-cyan-300 uppercase tracking-wide bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                {selectedSkill}
              </span>
            </div>
            <button
              type="button"
              onClick={onClearSkill}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors font-medium"
              aria-label="Clear technology filter"
            >
              <X size={12} />
              <span>Clear Filter</span>
            </button>
          </div>
        )}
      </div>

      {/* Projects Grid: 3 Projects Per Row on Large Screens */}
      {displayedProjects.length > 0 ? (
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Show More / Show Less Projects Button */}
          {!hasActiveFilters && filteredProjects.length > 3 && (
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  const nextState = !isExpanded;
                  setIsExpanded(nextState);
                  if (!nextState) {
                    const el = document.getElementById('projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 text-sm font-semibold shadow-lg shadow-black/20 transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <span>
                  {isExpanded
                    ? 'Show Fewer Projects'
                    : `Show More Projects (${remainingCount} More)`}
                </span>
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <div className="h-12 w-12 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto mb-4">
            <Filter size={20} />
          </div>
          <h3 className="text-lg font-bold text-slate-200 font-heading mb-1">
            No matching projects found
          </h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
            There are no projects currently matching the selected criteria. Try adjusting your category or technology filters.
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetAllFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            >
              <RotateCcw size={14} />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>
      )}
    </section>
  );
}
