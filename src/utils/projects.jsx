import {
    restaurantProjectImages,
    zombieGameprojectImages,
    triangleGameprojectImages,
    kabaadhubappprojectImages
} from './images';

export const projects = [
    {
        id: 'mkarchi-desktop',
        title: 'MkArchi Desktop',
        description: (
            <>
                <p className="mb-2">A powerful desktop application for the MkArchi CLI ecosystem. It allows developers to visually design, scaffold, and manage project architectures with ease.</p>
                <p>Features create/apply modes, structure extraction, and seamless integration with the CLI tool.</p>
            </>
        ),
        tech: ['Electron', 'React', 'Tailwind', 'Node.js'],
        github: 'https://github.com/SoufyanRachdi/mkarchi_desktop',
        images: [], // Todo: Add screenshots
        featured: true
    },
    {
        id: 'mkarchi',
        title: 'MkArchi CLI',
        description: (
            <>
                <p className="mb-2">The core CLI tool that powers the ecosystem. It generates complex directory and file structures from simple tree-like text definitions.</p>
                <p>Includes features like smart ignore integration, file size limits, and reverse engineering existing projects into templates.</p>
            </>
        ),
        tech: ['Python', 'CLI', 'File System'],
        github: 'https://github.com/SoufyanRachdi/mkarchi',
        images: [],
        featured: true
    },
    {
        id: 'mkarchi-web',
        title: 'MkArchi Web',
        description: (
            <>
                <p>The official documentation and landing site for MkArchi. Provides comprehensive guides, command references, and tutorials for using the tools.</p>
            </>
        ),
        tech: ['React', 'Next.js', 'Tailwind', 'Vercel'],
        github: 'https://github.com/SoufyanRachdi/mkarchi_web', // Note: Check link
        images: [],
    },
    {
        id: 'car4cra',
        title: 'Car4Cra',
        description: (
            <>
                <p>A comprehensive platform related to automotive services. (Description to be updated with specific details from the repository).</p>
            </>
        ),
        tech: ['React', 'Full Stack'], // Placeholder stack
        github: 'https://github.com/SoufyanRachdi/Car4Cra',
        images: [],
    },
    {
        id: 'kabaadhub',
        title: 'KabaadHub App',
        description: (
            <>
                <p className="mb-2">Freelance Flutter Developer — Designed and developed a cross-platform mobile application (Android/iOS) using Flutter & Firebase, dedicated to buying and selling recycled products.</p>
                <p>Features real-time messaging, advanced search with geolocation, and a web admin panel for moderation.</p>
            </>
        ),
        tech: ['Flutter', 'Firebase', 'Dart', 'Google Maps API'],
        github: 'https://github.com/SoufyanRachdi/project_app_KabaadHub/tree/main',
        images: kabaadhubappprojectImages,
    },
    {
        id: 'zombie-game',
        title: '3D Zombie Survival',
        description: (
            <>
                <p>A 3D survival game where the player faces waves of zombies in an immersive environment. Includes 3D movement, enemy AI, collision/physics, and a progression system.</p>
            </>
        ),
        tech: ['Godot', 'GDScript', '3D Game Dev'],
        github: 'https://github.com/SoufyanRachdi/zombie-game',
        images: zombieGameprojectImages,
    },
    {
        id: 'triangle-game',
        title: 'Multiplayer Triangle Game',
        description: (
            <>
                <p>A 2D multiplayer survival game with 50 participants. Players control triangles that can only damage others with one specific side. Includes networking logic and collision handling.</p>
            </>
        ),
        tech: ['Godot', 'GDScript', 'Networking'],
        github: 'https://github.com/SoufyanRachdi/multiplayer_triangle_game',
        images: triangleGameprojectImages,
    },
    {
        id: 'restaurant-management',
        title: 'Restaurant Management System',
        description: (
            <>
                <p>Academic Project – A centralized Java Swing application with MySQL for managing restaurant operations: client orders, real-time kitchen monitoring, and billing.</p>
            </>
        ),
        tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
        github: 'https://github.com/elParadigm/SystemeDeGestionDunRestaurant',
        images: restaurantProjectImages,
    },
];
