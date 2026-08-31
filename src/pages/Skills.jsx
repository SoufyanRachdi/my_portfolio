import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Server, Database, Globe, Code2, Wrench, ArrowRight } from 'lucide-react';
import { projects } from '../utils/projects';
import { getTechLogo } from '../utils/techLogos';

const skillGroups = [
  {
    title: 'Mobile Engineering',
    icon: Smartphone,
    skills: [
      { name: 'Flutter' },
      { name: 'Dart' },
      { name: 'Kotlin' },
      { name: 'Android SDK' },
      { name: 'BLE' },
      { name: 'Android Studio' },
    ],
  },
  {
    title: 'Backend & Real-Time Systems',
    icon: Server,
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'NestJS' },
      { name: 'Socket.IO' },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'Databases & Cloud Infrastructure',
    icon: Database,
    skills: [
      { name: 'MongoDB' },
      { name: 'MongoDB Atlas' },
      { name: 'Supabase' },
      { name: 'CockroachDB' },
      { name: 'Firebase' },
      { name: 'MySQL' },
      { name: 'SQLite' },
      { name: 'Vercel' },
    ],
  },
  {
    title: 'Web & Full-Stack',
    icon: Globe,
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Symfony' },
      { name: 'Tailwind' },
      { name: 'Electron' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Dart' },
      { name: 'Python' },
      { name: 'Java' },
      { name: 'Kotlin' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'C++' },
      { name: 'C' },
      { name: 'PHP' },
      { name: 'GDScript' },
    ],
  },
  {
    title: 'Developer Tooling & Systems',
    icon: Wrench,
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'IntelliJ IDEA' },
      { name: 'PyCharm' },
      { name: 'Gradle' },
      { name: 'Mkarchi' },
      { name: 'Godot' },
    ],
  },
];

export default function Skills() {
  const projectCountBySkill = useMemo(() => {
    return projects.reduce((acc, project) => {
      project.tech.forEach((tech) => {
        acc[tech] = (acc[tech] || 0) + 1;
      });
      return acc;
    }, {});
  }, []);

  return (
    <section className="animate-fade-in space-y-10 pb-12">
      {/* Section Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
        </h1>
        <p className="text-slate-400 max-w-2xl text-base md:text-lg mt-2 leading-relaxed">
          Categorized software engineering competencies, backend &amp; mobile frameworks, database architectures, and development environments. Click any technology to view matching project implementations.
        </p>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const GroupIcon = group.icon;
          return (
            <div
              key={group.title}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4 flex flex-col"
            >
              <div className="flex items-center gap-2.5 text-sm font-bold text-slate-100 font-heading">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <GroupIcon size={18} />
                </div>
                <h2>{group.title}</h2>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {group.skills.map((skill) => {
                  const logo = getTechLogo(skill.name);
                  const count = projectCountBySkill[skill.name] || 0;
                  const targetUrl = `/projects?skill=${encodeURIComponent(skill.name)}`;

                  const cardInner = (
                    <>
                      <div className="h-8 w-8 rounded-lg bg-slate-950 p-1.5 border border-slate-800 flex items-center justify-center flex-shrink-0">
                        {logo ? (
                          <img
                            src={logo}
                            alt=""
                            width="20"
                            height="20"
                            loading="lazy"
                            className="max-h-full max-w-full object-contain"
                          />
                        ) : (
                          <span className="text-xs font-bold text-slate-500">{skill.name.charAt(0)}</span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-slate-200 truncate group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {count > 0 ? `${count} ${count === 1 ? 'project' : 'projects'}` : 'Proficient'}
                        </div>
                      </div>
                    </>
                  );

                  return count > 0 ? (
                    <Link
                      key={skill.name}
                      to={targetUrl}
                      className="group flex items-center gap-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                    >
                      {cardInner}
                    </Link>
                  ) : (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/40 border border-slate-800/50 opacity-80"
                    >
                      {cardInner}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer link to projects */}
      <div className="text-center pt-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <span>Explore projects across all technologies</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
