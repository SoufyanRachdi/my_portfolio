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
        id: 'kabaadhub-admin',
        title: 'KabaadHub Admin Panel',
        category: ['Web', 'Business Software'],
        description: (
            <>
                <p className="mb-2">A dedicated administrative dashboard for managing the KabaadHub ecosystem.</p>
                <p>Built with Flutter Web and Firebase, it allows for real-time moderation of products, users, and transactions.</p>
            </>
        ),
        tech: ['Flutter', 'Firebase', 'VS Code', 'Dart', 'Git', 'GitHub'],
        link: '/projects/kabaadhub-admin',
        images: [],
        logo: '/projectsimages/kabaadhub-admin-panel/applogo.png',
        freelance: true,
        deployed: true
    },
    {
        id: 'mkarchi',
        title: 'Mkarchi CLI',
        category: 'Tools',
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
        category: 'Mobile',
        description: (
            <>
                <p className="mb-2">Freelance Flutter Developer — Designed and developed a cross-platform mobile application (Android/iOS) using Flutter & Firebase, dedicated to buying and selling recycled products.</p>
                <p>Features real-time messaging, advanced search with geolocation, and a web admin panel for moderation.</p>
            </>
        ),
        tech: ['Android Studio', 'VS Code', 'Flutter', 'Firebase', 'Git', 'GitHub', 'Dart'],
        playStore: 'https://play.google.com/store/apps/details?id=com.kabaadhub.app&pli=1',
        link: '/projects/kabaadhub',
        images: kabaadhubappprojectImages,
        logo: '/projectsimages/kabaadhub/applogo.png',
        freelance: true,
        deployed: true
    },
    {
        id: 'mkarchi-web',
        title: 'Mkarchi Web',
        category: 'Web',
        description: (
            <>
                <p>The official documentation and landing site for Mkarchi. Provides comprehensive guides, command references, and tutorials for using the tools.</p>
            </>
        ),
        tech: ['Mkarchi', 'Next.js', 'TypeScript', 'Tailwind', 'Vercel', 'Git', 'GitHub', 'VS Code', 'HTML', 'CSS'],
        link: 'https://www.mkarchi.me/',
        images: mkarchiWebProjectImages,
        logo: '/projectsimages/mkarchi_web/applogo.png',
        deployed: true
    },
    {
        id: 'mkarchi-desktop',
        title: 'Mkarchi Desktop',
        category: ['Desktop', 'Tools'],
        description: (
            <>
                <p className="mb-2">A powerful desktop application for the Mkarchi CLI ecosystem. It allows developers to visually design, scaffold, and manage project architectures with ease.</p>
                <p>Features create/apply modes, structure extraction, and seamless integration with the CLI tool.</p>
            </>
        ),
        tech: ['Mkarchi', 'Electron', 'Git', 'GitHub', 'VS Code', 'Mkarchi CLI', 'JavaScript', 'HTML', 'CSS'],
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
        category: 'Business Software',
        description: (
            <>
                <p>An application for managing legal services, client information, and case management for law firms.</p>
            </>
        ),
        tech: ['Mkarchi', 'Electron', 'Node.js', 'React', 'SQLite', 'Git', 'GitHub', 'JavaScript', 'HTML', 'CSS'],
        link: '/projects/lawyer-app',
        images: lawyerAppProjectImages,
        logo: '/projectsimages/lawyer-app/applogo.png',
        inDevelopment: true
    },
    {
        id: 'car4cra',
        title: 'Car4Cra',
        category: 'Business Software',
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
        category: 'Mobile',
        description: (
            <>
                <p>A video sharing platform with features for uploading, streaming, and managing video content.</p>
            </>
        ),
        tech: ['Kotlin', 'VS Code', 'Android Studio', 'Git', 'GitHub','Mkarchi'],
        github: 'https://github.com/SoufyanRachdi/soyftube',
        images: soyftubeProjectImages,
        inDevelopment: true
    },
    {
        id: 'soyf-music',
        title: 'Soyf Music',
        category: 'Mobile',
        description: (
            <>
                <p>A music streaming application with features for playing, managing, and organizing music collections.</p>
            </>
        ),
        tech: ['Flutter', 'VS Code', 'Android Studio', 'Git', 'GitHub', 'Dart','Mkarchi'],
        github: 'https://github.com/SoufyanRachdi/soyfmusic',
        images: soyfmusicProjectImages,
        inDevelopment: true
    },
    {
        id: 'zombie-game',
        title: '3D Zombie Survival',
        category: 'Games',
        description: (
            <>
                <p>A 3D survival game where the player faces waves of zombies in an immersive environment. Includes 3D movement, enemy AI, collision/physics, and a progression system.</p>
            </>
        ),
        tech: ['Godot', 'GDScript', 'Blender', 'Git', 'GitHub'],
        github: 'https://github.com/SoufyanRachdi/zombie-game',
        link: '/projects/zombie-game',
        images: zombieGameprojectImages,
        openSource: true,
        stopped: true
    },
    {
        id: 'triangle-game',
        title: 'Multiplayer Triangle Game',
        category: 'Games',
        description: (
            <>
                <p>A 2D multiplayer survival game with 50 participants. Players control triangles that can only damage others with one specific side. Includes networking logic and collision handling.</p>
            </>
        ),
        tech: ['Godot', 'GDScript', 'Networking', 'Git', 'GitHub'],
        github: 'https://github.com/SoufyanRachdi/multiplayer_triangle_game',
        link: '/projects/triangle-game',
        images: triangleGameprojectImages,
        openSource: true,
        stopped: true
    },
    {
        id: 'restaurant-management',
        title: 'Restaurant Management System',
        category: ['Desktop', 'Business Software'],
        description: (
            <>
                <p className="mb-2">Academic Project – A centralized Java Swing application with MySQL for managing restaurant operations. Built to demonstrate OOP principles and MVC architecture.</p>
                <p>Features role-based access for Clients (ordering), Waitresses (order management & billing), and Cooks (menu management & real-time order processing). Includes secure authentication with BCrypt hashing.</p>
            </>
        ),
        tech: ['Java', 'Swing', 'IntelliJ IDEA', 'MySQL', 'MySQL Workbench', 'JDBC', 'Git', 'GitHub'],
        github: 'https://github.com/elParadigm/SystemeDeGestionDunRestaurant',
        link: '/projects/restaurant-management',
        images: restaurantProjectImages,
        academic: true,
        openSource: false,
        stopped: true
    },
];
