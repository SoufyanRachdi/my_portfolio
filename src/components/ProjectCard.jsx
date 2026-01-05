import { Github, ExternalLink, Folder } from 'lucide-react';

export default function ProjectCard({ project, index }) {
    return (
        <div
            className="group relative animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-slate-800 rounded-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">
                            <Folder size={24} />
                        </div>
                        <div className="flex gap-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                                    aria-label="View Source"
                                >
                                    <Github size={20} />
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                                    aria-label="View Demo"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                    </h3>

                    <div className="text-slate-400 text-sm leading-relaxed mb-6">
                        {project.description}
                    </div>

                    <ul className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((tech, i) => (
                            <li
                                key={i}
                                className="text-xs font-medium text-cyan-400/80 bg-cyan-400/10 px-3 py-1 rounded-full"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
