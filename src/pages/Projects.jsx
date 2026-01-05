import ProjectCard from "../components/ProjectCard";
import { projects } from "../utils/projects";

export default function Projects() {
    return (
        <section className="animate-fade-in">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8 font-heading">Projects</h2>
            <div className="flex flex-col gap-12">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
            <div className="mt-12 text-center">
                <a href="https://github.com/SoufyanRachdi" target="_blank" className="inline-flex items-center font-medium leading-tight text-slate-200 font-heading group" aria-label="View Full Project Archive">
                    <span className="border-b border-transparent pb-px transition group-hover:border-cyan-300 motion-reduce:transition-none">View Full Project Archive</span>
                    <span className="whitespace-nowrap ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        </section>
    );
}
