import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { X, RotateCcw, ExternalLink, Filter, Sparkles } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/projects';

const categories = ['All', 'Mobile', 'Backend', 'Tools', 'Desktop', 'Business Software', 'Games'];
const statuses = ['All', 'Featured / Flagship', 'Live / Production', 'Open Source', 'Commercial / Client', 'Academic / PFE'];

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const skillFilter = searchParams.get('skill');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeStatus, setActiveStatus] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const handleClearSkillFilter = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('skill');
    setSearchParams(newParams);
  };

  const handleResetAllFilters = () => {
    handleClearSkillFilter();
    setActiveCategory('All');
    setActiveStatus('All');
    setSortBy('featured');
  };

  const filteredProjects = useMemo(() => {
    let list = [...projects];

    // Filter by skill if present in URL query
    if (skillFilter) {
      list = list.filter((project) =>
        project.tech.some((tech) => tech.toLowerCase() === skillFilter.toLowerCase())
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
  }, [skillFilter, activeCategory, activeStatus, sortBy]);

  const hasActiveFilters = skillFilter || activeCategory !== 'All' || activeStatus !== 'All';

  return (
    <section className="animate-fade-in space-y-10">
      {/* Page Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles size={12} />
          <span>Featured Engineering Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
          Projects &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Software Systems</span>
        </h1>
        <p className="text-slate-400 max-w-2xl text-base md:text-lg mt-2 leading-relaxed">
          Healthcare BLE telemetry systems, real-time multiplayer backends, Android accessibility utilities, and open-source developer tooling.
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
              onClick={() => setActiveCategory(cat)}
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
                onClick={() => setActiveStatus(status)}
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
        {skillFilter && (
          <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span>Filtering projects by technology:</span>
              <span className="font-bold text-cyan-300 uppercase tracking-wide bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                {skillFilter}
              </span>
            </div>
            <button
              type="button"
              onClick={handleClearSkillFilter}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors font-medium"
              aria-label="Clear technology filter"
            >
              <X size={12} />
              <span>Clear Filter</span>
            </button>
          </div>
        )}
      </div>

      {/* Projects Grid or Empty State */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 auto-rows-fr">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
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

      {/* GitHub Archive Footer Callout */}
      <div className="text-center pt-8">
        <a
          href="https://github.com/SoufyanRachdi?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-bold uppercase tracking-wider transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
        >
          <span>View All Repositories on GitHub</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}
