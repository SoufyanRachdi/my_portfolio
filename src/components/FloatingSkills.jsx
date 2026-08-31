const floatingSkills = [
  { name: 'React', logo: '/softwarelogo/react-js-icon.svg', top: '8%', left: '8%', delay: '0s' },
  { name: 'Node.js', logo: '/softwarelogo/node-js-icon.svg', top: '15%', left: '78%', delay: '1.5s' },
  { name: 'Flutter', logo: '/softwarelogo/flutter-icon.svg', top: '65%', left: '6%', delay: '2s' },
  { name: 'Python', logo: '/softwarelogo/python-programming-language-icon.svg', top: '78%', left: '82%', delay: '0.5s' },
  { name: 'Java', logo: '/softwarelogo/java-programming-language-icon.svg', top: '35%', left: '4%', delay: '3s' },
  { name: 'Mkarchi', logo: '/softwarelogo/mkarchi-desktop.svg', top: '12%', left: '52%', delay: '1s' },
  { name: 'Firebase', logo: '/softwarelogo/google-firebase-icon.svg', top: '58%', left: '72%', delay: '4s' },
  { name: 'Godot', logo: '/softwarelogo/godot-game-engine-icon.svg', top: '82%', left: '16%', delay: '2.5s' },
  { name: 'TypeScript', logo: '/softwarelogo/typescript-programming-language-icon.svg', top: '5%', left: '32%', delay: '1.2s' },
  { name: 'Tailwind', logo: '/softwarelogo/tailwind-css-icon.svg', top: '28%', left: '88%', delay: '0.8s' },
  { name: 'Next.js', logo: '/softwarelogo/nextjs.svg', top: '52%', left: '42%', delay: '2.2s' },
  { name: 'Git', logo: '/softwarelogo/git-icon.svg', top: '22%', left: '18%', delay: '1.8s' },
  { name: 'MySQL', logo: '/softwarelogo/mysql-icon.svg', top: '46%', left: '92%', delay: '3.5s' },
  { name: 'PHP', logo: '/softwarelogo/php-programming-language-icon.svg', top: '14%', left: '3%', delay: '0.3s' },
  { name: 'Electron', logo: '/softwarelogo/electron.svg', top: '72%', left: '32%', delay: '2.8s' },
  { name: 'Kotlin', logo: '/softwarelogo/kotlin-programming-language-icon.svg', top: '40%', left: '68%', delay: '1.1s' },
  { name: 'C++', logo: '/softwarelogo/c-plus-plus-programming-language-icon.svg', top: '20%', left: '92%', delay: '2.7s' },
  { name: 'Dart', logo: '/softwarelogo/dart-programming-language-icon.svg', top: '64%', left: '88%', delay: '0.9s' },
  { name: 'Symfony', logo: '/softwarelogo/symfony-icon.svg', top: '90%', left: '6%', delay: '1.6s' },
  { name: 'SQLite', logo: '/softwarelogo/sqlite-icon.svg', top: '36%', left: '44%', delay: '0.4s' },
];

export default function FloatingSkills() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Subtle background ambient gradients */}
      <div className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] rounded-full bg-cyan-500/5 blur-[140px]" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[45%] h-[45%] rounded-full bg-blue-600/5 blur-[140px]" />

      {/* Floating skill icons with reduced motion safety */}
      {floatingSkills.map((skill, index) => (
        <div
          key={`${skill.name}-${index}`}
          className="absolute opacity-10 grayscale motion-safe:animate-drift"
          style={{
            top: skill.top,
            left: skill.left,
            animationDelay: skill.delay,
            width: '2.5rem',
            height: '2.5rem',
          }}
        >
          <img
            src={skill.logo}
            alt=""
            width="40"
            height="40"
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
