import { Github, ExternalLink, Folder, Download, Play } from 'lucide-react';

const techLogoMap = {
    // ... (same as before)
    React: '/softwarelogo/react-js-icon.svg',
    'Node.js': '/softwarelogo/node-js-icon.svg',
    'Tailwind': '/softwarelogo/tailwind-css-icon.svg',
    'Tailwind CSS': '/softwarelogo/tailwind-css-icon.svg',
    'Next.js': '/softwarelogo/nextjs.svg',
    Flutter: '/softwarelogo/flutter-icon.svg',
    Firebase: '/softwarelogo/google-firebase-icon.svg',
    Java: '/softwarelogo/java-programming-language-icon.svg',
    Python: '/softwarelogo/python-programming-language-icon.svg',
    'C/C++': '/softwarelogo/c-plus-plus-programming-language-icon.svg',
    JavaScript: '/softwarelogo/javascript-programming-language-icon.svg',
    HTML: '/softwarelogo/html-icon.svg',
    CSS: '/softwarelogo/css-icon.svg',
    TypeScript: '/softwarelogo/typescript-programming-language-icon.svg',
    GDScript: '/softwarelogo/godot-game-engine-icon.svg',
    Dart: '/softwarelogo/dart-programming-language-icon.svg',
    PHP: '/softwarelogo/php-programming-language-icon.svg',
    Kotlin: '/softwarelogo/kotlin-programming-language-icon.svg',
    MySQL: '/softwarelogo/mysql-icon.svg',
    'MySQL Workbench': '/softwarelogo/mysql-icon.svg',
    SQLite: '/softwarelogo/sqlite-icon.svg',
    Laravel: '/softwarelogo/laravel-icon.svg',
    Symfony: '/softwarelogo/symfony-icon.svg',
    Electron: '/softwarelogo/electron.svg',
    'Android Studio': '/softwarelogo/android-studio-icon.svg',
    Godot: '/softwarelogo/godot-game-engine-icon.svg',
    Git: '/softwarelogo/git-icon.svg',
    GitHub: '/softwarelogo/github-icon.svg',
    'VS Code': '/softwarelogo/visual-studio-code-icon.svg',
    Vercel: '/softwarelogo/vercel-v0-icon.svg',
    XAMPP: '/softwarelogo/xampp-icon.svg',
    PyCharm: '/softwarelogo/pycharm-icon.svg',
    Blender: '/softwarelogo/blender-icon.svg',
    'MkArchi Desktop': '/softwarelogo/mkarchi-desktop.png',
    'MkArchi CLI': '/softwarelogo/mkarchi-desktop.png',
};

export default function ProjectCard({ project, index }) {
    const hasLogo = project.logo;
    const projectHref = project.link || project.github;

    const handleCardClick = () => {
        if (projectHref) {
            window.open(projectHref, '_blank');
        }
    };

    const handleKeyDown = (event) => {
        if ((event.key === 'Enter' || event.key === ' ') && projectHref) {
            event.preventDefault();
            window.open(projectHref, '_blank');
        }
    };

    const stopPropagation = (event) => event.stopPropagation();

    return (
        <div
            className="group relative animate-fade-in flex h-full"
            style={{ animationDelay: `${index * 100}ms` }}
            role="link"
            tabIndex={0}
            onClick={handleCardClick}
            onKeyDown={handleKeyDown}
        >
            {/* Card Hover Glow Effect */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

            <div className="relative glass overflow-hidden rounded-xl transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-2xl group-hover:shadow-cyan-500/10 flex flex-col w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-6 md:p-8 flex flex-col h-full flex-grow">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-wrap items-center gap-2">
                            {hasLogo ? (
                                <div className="p-3 bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700/50">
                                    <img src={project.logo} alt={`${project.title} logo`} className="w-10 h-10 object-contain" />
                                </div>
                            ) : (
                                <div className="p-3 bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700/50">
                                    <img src="/softwarelogo/no_logo.svg" alt="No logo available" className="w-10 h-10 object-contain opacity-50" />
                                </div>
                            )}
                        </div>
                        <div className="flex gap-2">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:bg-slate-800/50 rounded-full"
                                    aria-label="View Source"
                                    onClick={stopPropagation}
                                >
                                    <Github size={20} />
                                </a>
                            )}
                            {project.playStore && (
                                <a
                                    href={project.playStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-green-400 transition-colors p-2 hover:bg-slate-800/50 rounded-full"
                                    aria-label="Google Play Store"
                                    onClick={stopPropagation}
                                >
                                    <Play size={20} />
                                </a>
                            )}
                            {project.download && (
                                <a
                                    href={project.download}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:bg-slate-800/50 rounded-full"
                                    aria-label="Download"
                                    onClick={stopPropagation}
                                >
                                    <Download size={20} />
                                </a>
                            )}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:bg-slate-800/50 rounded-full"
                                    aria-label="View Project"
                                    onClick={stopPropagation}
                                >
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.inDevelopment && (
                            <span className="inline-flex items-center gap-1 bg-yellow-400/10 text-yellow-300 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-yellow-500/20">
                                In Development
                            </span>
                        )}
                        {project.openSource && (
                            <span className="inline-flex items-center gap-1 bg-green-400/10 text-green-300 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-green-500/20">
                                Open Source
                            </span>
                        )}
                        {project.stopped && (
                            <span className="inline-flex items-center gap-1 bg-red-400/10 text-red-300 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-red-500/20">
                                Dev Stopped
                            </span>
                        )}
                        {project.academic && (
                            <span className="inline-flex items-center gap-1 bg-purple-400/10 text-purple-300 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-purple-500/20">
                                Academic
                            </span>
                        )}
                        {project.deployed && (
                            <span className="inline-flex items-center gap-1 bg-blue-400/10 text-blue-300 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-500/20">
                                Live
                            </span>
                        )}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">
                        {project.title}
                    </h3>

                    <div className="text-slate-400 text-sm leading-relaxed mb-8">
                        {project.description}
                    </div>

                    <ul className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/50 mt-auto">
                        {project.tech.map((tech, i) => {
                            const logo = techLogoMap[tech];
                            return (
                                <li
                                    key={i}
                                    className="flex items-center gap-1.5 text-[11px] font-medium text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50 hover:border-cyan-500/30 transition-colors"
                                >
                                    {logo && <img src={logo} alt={`${tech} logo`} className="w-3.5 h-3.5 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />}
                                    <span>{tech}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
