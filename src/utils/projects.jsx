import {
    restaurantProjectImages,
    zombieGameprojectImages,
    triangleGameprojectImages,
    kabaadhubappprojectImages,
    car4craProjectImages,
    mkarchiProjectImages,
    mkarchiDesktopProjectImages,
    mkarchiWebProjectImages,
    soyfmusicProjectImages,
    soyftubeProjectImages,
    lawyerAppProjectImages
} from './images';

export const projects = [
    {
        id: 'mkarchi',
        title: 'MkArchi CLI',
        description: (
            <>
                <p className="mb-2">The core CLI tool that powers the ecosystem. It generates complex directory and file structures from simple tree-like text definitions.</p>
                <p>Includes features like smart ignore integration, file size limits, and reverse engineering existing projects into templates.</p>
            </>
        ),
        tech: ['Python', 'PyPI', 'PyCharm', 'Git', 'GitHub'],
        github: 'https://github.com/SoufyanRachdi/mkarchi',
        link: 'https://www.mkarchi.me/cli',
        images: mkarchiProjectImages,
        logo: '/projectsimages/mkarchi/applogo.png',
        featured: true,
        openSource: true
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
        tech: ['Android Studio', 'VS Code', 'Flutter', 'Firebase', 'Git', 'GitHub', 'Dart'],
        github: 'https://github.com/SoufyanRachdi/project_app_KabaadHub/tree/main',
        playStore: 'https://play.google.com/store/apps/details?id=com.kabaadhub.app&pli=1',
        link: '/projects/kabaadhub',
        images: kabaadhubappprojectImages,
        logo: '/projectsimages/kabaadhub/applogo.png',
        freelance: true,
        deployed: true
    },
    {
        id: 'mkarchi-web',
        title: 'MkArchi Web',
        description: (
            <>
                <p>The official documentation and landing site for MkArchi. Provides comprehensive guides, command references, and tutorials for using the tools.</p>
            </>
        ),
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel', 'Git', 'GitHub', 'VS Code', 'HTML', 'CSS'],
        github: 'https://github.com/SoufyanRachdi/mkarchi_web',
        link: 'https://www.mkarchi.me/',
        images: mkarchiWebProjectImages,
        logo: '/projectsimages/mkarchi_web/applogo.png',
        deployed: true
    },
    {
        id: 'mkarchi-desktop',
        title: 'MkArchi Desktop',
        description: (
            <>
                <p className="mb-2">A powerful desktop application for the MkArchi CLI ecosystem. It allows developers to visually design, scaffold, and manage project architectures with ease.</p>
                <p>Features create/apply modes, structure extraction, and seamless integration with the CLI tool.</p>
            </>
        ),
        tech: ['Electron', 'Git', 'GitHub', 'VS Code', 'MkArchi CLI', 'JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/SoufyanRachdi/mkarchi_desktop',
        link: 'https://www.mkarchi.me/desktop/',
        download: 'https://www.mkarchi.me/desktop/downloads',
        images: mkarchiDesktopProjectImages,
        logo: '/projectsimages/mkarchi_desktop/applogo.png',
        featured: true,
        openSource: true
    },
    {
        id: 'lawyer-app',
        title: 'Lawyer Application',
        description: (
            <>
                <p>An application for managing legal services, client information, and case management for law firms.</p>
            </>
        ),
        tech: ['Electron', 'Node.js', 'React', 'SQLite', 'Git', 'GitHub', 'JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/SoufyanRachdi/lawyer-app',
        link: '/projects/lawyer-app',
        images: lawyerAppProjectImages,
        logo: '/projectsimages/laywer app/applogo.png',
        inDevelopment: true
    },
    {
        id: 'car4cra',
        title: 'Car4Cra',
        description: (
            <>
                <p>A comprehensive platform related to automotive services. (Description to be updated with specific details from the repository).</p>
            </>
        ),
        tech: ['Symfony', 'XAMPP', 'VS Code', 'Git', 'GitHub', 'HTML', 'CSS', 'PHP'],
        github: 'https://github.com/SoufyanRachdi/Car4Cra',
        link: '/projects/car4cra',
        images: car4craProjectImages,
        logo: '/projectsimages/car4cra/logo.svg',
        openSource: true,
        academic: true
    },
    {
        id: 'soyf-tube',
        title: 'Soyf Tube',
        description: (
            <>
                <p>A video sharing platform with features for uploading, streaming, and managing video content.</p>
            </>
        ),
        tech: ['Kotlin', 'VS Code', 'Android Studio', 'Git', 'GitHub'],
        github: 'https://github.com/SoufyanRachdi/soyftube',
        link: '/projects/soyf-tube',
        images: soyftubeProjectImages,
        logo: '/projectsimages/soyftube/applogo.png',
        inDevelopment: true
    },
    {
        id: 'soyf-music',
        title: 'Soyf Music',
        description: (
            <>
                <p>A music streaming application with features for playing, managing, and organizing music collections.</p>
            </>
        ),
        tech: ['Flutter', 'VS Code', 'Android Studio', 'Git', 'GitHub', 'Dart'],
        github: 'https://github.com/SoufyanRachdi/soyfmusic',
        link: '/projects/soyf-music',
        images: soyfmusicProjectImages,
        logo: '/projectsimages/soyfmusic/applogo.png',
        inDevelopment: true
    },
    {
        id: 'zombie-game',
        title: '3D Zombie Survival',
        description: (
            <>
                <p>A 3D survival game where the player faces waves of zombies in an immersive environment. Includes 3D movement, enemy AI, collision/physics, and a progression system.</p>
            </>
        ),
        tech: ['Godot', 'GDScript', 'Blender', 'Git', 'GitHub'],
        github: 'https://github.com/SoufyanRachdi/zombie-game',
        link: '/projects/zombie-game',
        images: zombieGameprojectImages,
        logo: '/projectsimages/zombiegame/applogo.png',
        openSource: true,
        stopped: true
    },
    {
        id: 'triangle-game',
        title: 'Multiplayer Triangle Game',
        description: (
            <>
                <p>A 2D multiplayer survival game with 50 participants. Players control triangles that can only damage others with one specific side. Includes networking logic and collision handling.</p>
            </>
        ),
        tech: ['Godot', 'GDScript', 'Networking', 'Git', 'GitHub'],
        github: 'https://github.com/SoufyanRachdi/multiplayer_triangle_game',
        link: '/projects/triangle-game',
        images: triangleGameprojectImages,
        logo: '/projectsimages/trianglegame/applogo.png',
        openSource: true,
        stopped: true
    },
    {
        id: 'restaurant-management',
        title: 'Restaurant Management System',
        description: (
            <>
                <p>Academic Project – A centralized Java Swing application with MySQL for managing restaurant operations: client orders, real-time kitchen monitoring, and billing.</p>
            </>
        ),
        tech: ['Java', 'Swing', 'MySQL', 'MySQL Workbench', 'JDBC', 'Git', 'GitHub'],
        github: 'https://github.com/elParadigm/SystemeDeGestionDunRestaurant',
        link: '/projects/restaurant-management',
        images: restaurantProjectImages,
        logo: '/projectsimages/restaurant/applogo.png',
        academic: true,
        openSource: false,
        stopped: true
    },
];
