import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../utils/projects";

const categories = ["All", "Web", "Mobile", "Games", "Tools", "Desktop", "Business Software"];
const statuses = ["All", "Ready to Use", "In Development", "Open Source"];

export default function Projects() {
    const [searchParams] = useSearchParams();
    const skillFilter = searchParams.get("skill");
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeStatus, setActiveStatus] = useState("All");
    const [sortBy, setSortBy] = useState("featured"); // featured, az, za

    const filteredProjects = useMemo(() => {
        let list = [...projects];

        // Filter by skill if present in URL
        if (skillFilter) {
            list = list.filter((project) =>
                project.tech.some((tech) => tech.toLowerCase() === skillFilter.toLowerCase())
            );
        }

        // Filter by category
        if (activeCategory !== "All") {
            list = list.filter((project) => {
                if (activeCategory === "Web") {
                    // Lawyer App and MkArchi Desktop are NOT web
                    if (project.id === "mkarchi-desktop" || project.id === "lawyer-app") return false;
                    return project.tech.some(t => ["React", "Next.js", "Symfony", "PHP", "HTML", "CSS", "TypeScript", "Tailwind"].includes(t));
                }
                if (activeCategory === "Mobile") return project.tech.some(t => ["Flutter", "Kotlin", "Dart"].includes(t));
                if (activeCategory === "Games") return project.tech.some(t => ["Godot", "GDScript", "Blender"].includes(t));
                if (activeCategory === "Tools") {
                    // Lawyer App is NOT a tool
                    if (project.id === "lawyer-app") return false;
                    return project.tech.some(t => ["Python", "MkArchi CLI", "Electron"].includes(t));
                }
                if (activeCategory === "Desktop") return project.tech.some(t => ["Electron", "Java", "Swing", "MkArchi Desktop"].includes(t)) || project.id === "mkarchi-desktop" || project.id === "lawyer-app";
                if (activeCategory === "Business Software") return ["car4cra", "restaurant-management", "lawyer-app"].includes(project.id);
                return true;
            });
        }

        // Filter by status
        if (activeStatus !== "All") {
            list = list.filter((project) => {
                if (activeStatus === "Ready to Use") return project.deployed || (!project.inDevelopment && project.link && !project.stopped);
                if (activeStatus === "In Development") return project.inDevelopment;
                if (activeStatus === "Open Source") return project.openSource;
                return true;
            });
        }

        // Sorting
        if (sortBy === "az") {
            list.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === "za") {
            list.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortBy === "featured") {
            list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        }
        // If sorting is 'Default' (original order), we don't need to do anything since we used [...projects]

        return list;
    }, [skillFilter, activeCategory, activeStatus, sortBy]);

    return (
        <section className="animate-fade-in max-w-6xl mx-auto">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                    Independent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
                </h2>
                <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                    A collection of tools, applications, and experiments I've built to solve real-world problems and explore new technologies.
                </p>
            </div>

            <div className="space-y-6 mb-12">
                {/* Category Filter */}
                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mr-2">Category:</span>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border ${activeCategory === cat
                                ? "bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-lg shadow-cyan-500/10"
                                : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Status Filter and Sort Wrapper */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4 border-t border-slate-800/50">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mr-2">Status:</span>
                        {statuses.map((status) => (
                            <button
                                key={status}
                                onClick={() => setActiveStatus(status)}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border ${activeStatus === status
                                    ? "bg-blue-500/10 border-blue-500 text-blue-400 shadow-lg shadow-blue-500/10"
                                    : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mr-2">Sort By:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-slate-900 border border-slate-800 text-slate-300 text-xs rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block p-2 transition-colors hover:border-slate-700"
                        >
                            <option value="featured">Featured First</option>
                            <option value="az">Name (A-Z)</option>
                            <option value="za">Name (Z-A)</option>
                        </select>
                    </div>
                </div>
            </div>

            {skillFilter && (
                <div className="flex items-center gap-2 mb-8 bg-cyan-400/10 w-fit px-4 py-2 rounded-full border border-cyan-400/20">
                    <span className="text-slate-300 text-sm">Filtering by skill:</span>
                    <span className="text-cyan-400 font-bold text-sm tracking-wide uppercase">{skillFilter}</span>
                </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>

            <div className="mt-20 text-center">
                <a href="https://github.com/SoufyanRachdi" target="_blank" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-slate-900 rounded-full font-bold text-slate-200 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden shadow-xl" aria-label="View Full Project Archive">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative">View Full Project Archive</span>
                    <span className="relative whitespace-nowrap group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </section>
    );
}
