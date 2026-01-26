import { useParams, Link } from "react-router-dom";
import { projects } from "../utils/projects";

const techLogoMap = {
    React: "/softwarelogo/react-js-icon.svg",
    "Node.js": "/softwarelogo/node-js-icon.svg",
    "Tailwind": "/softwarelogo/tailwind-css-icon.svg",
    "Tailwind CSS": "/softwarelogo/tailwind-css-icon.svg",
    "Next.js": "/softwarelogo/nextjs.svg",
    Flutter: "/softwarelogo/flutter-icon.svg",
    Firebase: "/softwarelogo/google-firebase-icon.svg",
    Java: "/softwarelogo/java-programming-language-icon.svg",
    Python: "/softwarelogo/python-programming-language-icon.svg",
    "C/C++": "/softwarelogo/c-plus-plus-programming-language-icon.svg",
    JavaScript: "/softwarelogo/javascript-programming-language-icon.svg",
    HTML: "/softwarelogo/html-icon.svg",
    CSS: "/softwarelogo/css-icon.svg",
    TypeScript: "/softwarelogo/typescript-programming-language-icon.svg",
    GDScript: "/softwarelogo/godot-game-engine-icon.svg",
    Dart: "/softwarelogo/dart-programming-language-icon.svg",
    PHP: "/softwarelogo/php-programming-language-icon.svg",
    Kotlin: "/softwarelogo/kotlin-programming-language-icon.svg",
    MySQL: "/softwarelogo/mysql-icon.svg",
    "MySQL Workbench": "/softwarelogo/mysql-icon.svg",
    SQLite: "/softwarelogo/sqlite-icon.svg",
    Laravel: "/softwarelogo/laravel-icon.svg",
    Symfony: "/softwarelogo/symfony-icon.svg",
    Electron: "/softwarelogo/electron.svg",
    "Android Studio": "/softwarelogo/android-studio-icon.svg",
    Godot: "/softwarelogo/godot-game-engine-icon.svg",
    Git: "/softwarelogo/git-icon.svg",
    GitHub: "/softwarelogo/github-icon.svg",
    "VS Code": "/softwarelogo/visual-studio-code-icon.svg",
    Vercel: "/softwarelogo/vercel-v0-icon.svg",
    XAMPP: "/softwarelogo/xampp-icon.svg",
    PyCharm: "/softwarelogo/pycharm-icon.svg",
    Blender: "/softwarelogo/blender-icon.svg",
    "IntelliJ IDEA": "/softwarelogo/intellij-idea-ide-icon.svg",
    "Mkarchi": "/softwarelogo/mkarchi-desktop.svg",
};

export default function ProjectDetail() {
    const { projectId } = useParams();
    const project = projects.find((p) => p.id === projectId);

    if (!project) {
        return (
            <section className="animate-fade-in">
                <p className="text-slate-300 mb-4">Project not found.</p>
                <Link to="/projects" className="text-cyan-400 hover:underline">Back to projects</Link>
            </section>
        );
    }

    return (
        <section className="animate-fade-in space-y-8">
            <div className="flex items-start gap-4 flex-wrap">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                    {project.logo ? (
                        <img src={project.logo} alt={`${project.title} logo`} className="w-16 h-16 object-contain" />
                    ) : (
                        <img src="/softwarelogo/no_logo.svg" alt="No logo available" className="w-16 h-16 object-contain opacity-50" />
                    )}
                </div>
                <div className="flex-1 min-w-[260px]">
                    <h1 className="text-3xl font-bold text-slate-100 mb-2">{project.title}</h1>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => {
                            const logo = techLogoMap[tech];
                            return (
                                <span key={tech} className="inline-flex items-center gap-2 bg-cyan-400/10 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium border border-cyan-900/50">
                                    {logo && <img src={logo} alt={`${tech} logo`} className="w-5 h-5" />}<span>{tech}</span>
                                </span>
                            );
                        })}
                    </div>
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                        {project.inDevelopment && (
                            <span className="inline-flex items-center gap-1 bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-semibold border border-yellow-500/30">
                                In Development
                            </span>
                        )}
                        {project.openSource && (
                            <span className="inline-flex items-center gap-1 bg-green-400/20 text-green-300 px-2 py-1 rounded-full text-xs font-semibold border border-green-500/30">
                                Open Source
                            </span>
                        )}
                        {project.freelance && (
                            <span className="inline-flex items-center gap-1 bg-orange-400/20 text-orange-300 px-2 py-1 rounded-full text-xs font-semibold border border-orange-500/30">
                                Freelance
                            </span>
                        )}
                        {project.academic && (
                            <span className="inline-flex items-center gap-1 bg-purple-400/20 text-purple-300 px-2 py-1 rounded-full text-xs font-semibold border border-purple-500/30">
                                Academic
                            </span>
                        )}
                        {project.deployed && (
                            <span className="inline-flex items-center gap-1 bg-blue-400/20 text-blue-300 px-2 py-1 rounded-full text-xs font-semibold border border-blue-500/30">
                                Live
                            </span>
                        )}
                    </div>
                    <div className="flex gap-4 text-sm">
                        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Source</a>}
                        {project.deployed && <a href={project.deployed} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Live Demo</a>}
                        {project.link && !project.deployed && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Details</a>}
                    </div>
                </div>
            </div>

            <div className="text-slate-300 space-y-3 leading-relaxed">
                {project.description}
            </div>

            {project.images && project.images.length > 0 && (
                <div className="space-y-3">
                    <h3 className="text-slate-200 font-semibold">Gallery</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {project.images.map((img, idx) => (
                            <div key={idx} className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                                <img src={img} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <Link to="/projects" className="inline-flex items-center text-cyan-400 hover:underline">← Back to projects</Link>
        </section>
    );
}
