const floatingSkills = [
    { name: 'React', logo: '/softwarelogo/react-js-icon.svg', top: '5%', left: '10%', delay: '0s' },
    { name: 'Node.js', logo: '/softwarelogo/node-js-icon.svg', top: '15%', left: '75%', delay: '1.5s' },
    { name: 'Flutter', logo: '/softwarelogo/flutter-icon.svg', top: '65%', left: '5%', delay: '2s' },
    { name: 'Python', logo: '/softwarelogo/python-programming-language-icon.svg', top: '75%', left: '80%', delay: '0.5s' },
    { name: 'Java', logo: '/softwarelogo/java-programming-language-icon.svg', top: '35%', left: '3%', delay: '3s' },
    { name: 'Mkarchi', logo: '/softwarelogo/mkarchi-desktop.svg', top: '10%', left: '55%', delay: '1s' },
    { name: 'Firebase', logo: '/softwarelogo/google-firebase-icon.svg', top: '60%', left: '70%', delay: '4s' },
    { name: 'Godot', logo: '/softwarelogo/godot-game-engine-icon.svg', top: '80%', left: '15%', delay: '2.5s' },
    { name: 'TypeScript', logo: '/softwarelogo/typescript-programming-language-icon.svg', top: '2%', left: '35%', delay: '1.2s' },
    { name: 'Tailwind', logo: '/softwarelogo/tailwind-css-icon.svg', top: '30%', left: '85%', delay: '0.8s' },
    { name: 'Next.js', logo: '/softwarelogo/nextjs.svg', top: '55%', left: '45%', delay: '2.2s' },
    { name: 'Git', logo: '/softwarelogo/git-icon.svg', top: '22%', left: '20%', delay: '1.8s' },
    { name: 'MySQL', logo: '/softwarelogo/mysql-icon.svg', top: '48%', left: '90%', delay: '3.5s' },
    { name: 'PHP', logo: '/softwarelogo/php-programming-language-icon.svg', top: '12%', left: '2%', delay: '0.3s' },
    { name: 'Electron', logo: '/softwarelogo/electron.svg', top: '70%', left: '35%', delay: '2.8s' },
    { name: 'Kotlin', logo: '/softwarelogo/kotlin-programming-language-icon.svg', top: '42%', left: '65%', delay: '1.1s' },
    { name: 'Blender', logo: '/softwarelogo/blender-icon.svg', top: '85%', left: '55%', delay: '3.2s' },
    { name: 'VS Code', logo: '/softwarelogo/visual-studio-code-icon.svg', top: '50%', left: '12%', delay: '0.7s' },
    { name: 'HTML', logo: '/softwarelogo/html-icon.svg', top: '28%', left: '50%', delay: '2.4s' },
    { name: 'CSS', logo: '/softwarelogo/css-icon.svg', top: '45%', left: '25%', delay: '1.3s' },
    { name: 'Swift', logo: '/softwarelogo/java-programming-language-icon.svg', top: '18%', left: '92%', delay: '2.7s' },
    { name: 'Dart', logo: '/softwarelogo/dart-programming-language-icon.svg', top: '62%', left: '88%', delay: '0.9s' },
    { name: 'Android', logo: '/softwarelogo/android-studio-icon.svg', top: '8%', left: '82%', delay: '3.8s' },
    { name: 'Symfony', logo: '/softwarelogo/symfony-icon.svg', top: '92%', left: '4%', delay: '1.6s' },
    { name: 'Laravel', logo: '/softwarelogo/laravel-icon.svg', top: '88%', left: '38%', delay: '2.1s' },
    { name: 'SQLite', logo: '/softwarelogo/sqlite-icon.svg', top: '38%', left: '42%', delay: '0.4s' },
    { name: 'Godot', logo: '/softwarelogo/godot-game-engine-icon.svg', top: '52%', left: '78%', delay: '3.1s' },
];

export default function FloatingSkills() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[130px]" />
            <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[130px]" />

            {floatingSkills.map((skill, index) => (
                <div
                    key={index}
                    className="absolute animate-drift opacity-15 hover:opacity-100 transition-opacity duration-700 select-none grayscale hover:grayscale-0"
                    style={{
                        top: skill.top,
                        left: skill.left,
                        animationDelay: skill.delay,
                        width: '3rem',
                        height: '3rem',
                    }}
                >
                    <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                </div>
            ))}
        </div>
    );
}
