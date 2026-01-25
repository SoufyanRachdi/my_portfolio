import { projects } from "../utils/projects";

const skillsData = {
    coreTech: [
        { name: 'Java', logo: '/softwarelogo/java-programming-language-icon.svg' },
        { name: 'Python', logo: '/softwarelogo/python-programming-language-icon.svg' },
        { name: 'C/C++', logo: '/softwarelogo/c-plus-plus-programming-language-icon.svg' },
        { name: 'JavaScript', logo: '/softwarelogo/javascript-programming-language-icon.svg' },
        { name: 'TypeScript', logo: '/softwarelogo/typescript-programming-language-icon.svg' },
        { name: 'GDScript', logo: '/softwarelogo/gdscript-icon.svg' },
        { name: 'Dart', logo: '/softwarelogo/dart-programming-language-icon.svg' },
        { name: 'PHP', logo: '/softwarelogo/php-programming-language-icon.svg' },
        { name: 'Kotlin', logo: '/softwarelogo/kotlin-programming-language-icon.svg' },
    ],
    webAndMobile: [
        { name: 'React', logo: '/softwarelogo/react-js-icon.svg' },
        { name: 'Node.js', logo: '/softwarelogo/node-js-icon.svg' },
        { name: 'Tailwind', logo: '/softwarelogo/tailwind-css-icon.svg' },
        { name: 'Next.js', logo: '/softwarelogo/nextjs.svg' },
        { name: 'Flutter', logo: '/softwarelogo/flutter-icon.svg' },
        { name: 'Firebase', logo: '/softwarelogo/google-firebase-icon.svg' },
        { name: 'Vercel', logo: '/softwarelogo/vercel-v0-icon.svg' },
        { name: 'HTML', logo: '/softwarelogo/html-icon.svg' },
        { name: 'CSS', logo: '/softwarelogo/css-icon.svg' },
    ],
    toolsAndFrameworks: [
        { name: 'Git', logo: '/softwarelogo/git-icon.svg' },
        { name: 'GitHub', logo: '/softwarelogo/github-icon.svg' },
        { name: 'VS Code', logo: '/softwarelogo/visual-studio-code-icon.svg' },
        { name: 'PyCharm', logo: '/softwarelogo/pycharm-icon.svg' },
        { name: 'Android Studio', logo: '/softwarelogo/android-studio-icon.svg' },
        { name: 'MySQL', logo: '/softwarelogo/mysql-icon.svg' },
        { name: 'SQLite', logo: '/softwarelogo/sqlite-icon.svg' },
        { name: 'Symfony', logo: '/softwarelogo/symfony-icon.svg' },
        { name: 'XAMPP', logo: '/softwarelogo/xampp-icon.svg' },
        { name: 'Electron', logo: '/softwarelogo/electron.svg' },
        { name: 'Godot', logo: '/softwarelogo/godot-game-engine-icon.svg' },
        { name: 'Blender', logo: '/softwarelogo/blender-icon.svg' },
        { name: 'MkArchi Desktop', logo: '/softwarelogo/mkarchi-desktop.png' },
    ]
};

const projectCountBySkill = projects.reduce((acc, project) => {
    project.tech.forEach((tech) => {
        acc[tech] = (acc[tech] || 0) + 1;
    });
    return acc;
}, {});

const getSkillLink = (skillName) => `/projects?skill=${encodeURIComponent(skillName)}`;

export default function Skills() {
    return (
        <section className="animate-fade-in">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8 font-heading">Skills</h2>
            <div className="grid gap-4">
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all">
                    <h3 className="text-cyan-400 font-bold mb-4 font-heading">Core Tech</h3>
                    <div className="flex flex-wrap gap-3">
                        {skillsData.coreTech.map(skill => {
                            const count = projectCountBySkill[skill.name] || 0;
                            return (
                                <a
                                    key={skill.name}
                                    href={count > 0 ? getSkillLink(skill.name) : undefined}
                                    className="flex flex-col items-center gap-2 px-4 py-3 bg-cyan-950/30 text-cyan-300 rounded-xl text-sm font-medium border border-cyan-900/50 hover:border-cyan-500/50 hover:bg-cyan-900/40 transition-all min-w-[120px]"
                                >
                                    <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
                                    <span>{skill.name}</span>
                                    <span className="text-xs text-cyan-200/80">Projects: {count}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all">
                    <h3 className="text-cyan-400 font-bold mb-4 font-heading">Web & Mobile</h3>
                    <div className="flex flex-wrap gap-3">
                        {skillsData.webAndMobile.map(skill => {
                            const count = projectCountBySkill[skill.name] || 0;
                            return (
                                <a
                                    key={skill.name}
                                    href={count > 0 ? getSkillLink(skill.name) : undefined}
                                    className="flex flex-col items-center gap-2 px-4 py-3 bg-blue-950/30 text-blue-300 rounded-xl text-sm font-medium border border-blue-900/50 hover:border-blue-500/50 hover:bg-blue-900/40 transition-all min-w-[120px]"
                                >
                                    <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
                                    <span>{skill.name}</span>
                                    <span className="text-xs text-blue-200/80">Projects: {count}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all">
                    <h3 className="text-cyan-400 font-bold mb-4 font-heading">Tools & Frameworks</h3>
                    <div className="flex flex-wrap gap-3">
                        {skillsData.toolsAndFrameworks.map(skill => {
                            const count = projectCountBySkill[skill.name] || 0;
                            return (
                                <a
                                    key={skill.name}
                                    href={count > 0 ? getSkillLink(skill.name) : undefined}
                                    className="flex flex-col items-center gap-2 px-4 py-3 bg-purple-950/30 text-purple-300 rounded-xl text-sm font-medium border border-purple-900/50 hover:border-purple-500/50 hover:bg-purple-900/40 transition-all min-w-[120px]"
                                >
                                    <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
                                    <span>{skill.name}</span>
                                    <span className="text-xs text-purple-200/80">Projects: {count}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
