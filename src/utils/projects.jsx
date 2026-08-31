import {
    caredifyProjectImages,
    footballManagerProjectImages,
    quizAppProjectImages,
    antiScrollProjectImages,
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
    // 1. CAREDIFY (PFE & Internship Flagship)
    {
        id: 'caredify',
        title: 'Caredify — Remote ECG Telemetry & AI Diagnosis System',
        tagline: 'PFE & Internship Project: Real-time cardiac telemetry via BLE, mobile waveform rendering, and cloud backend',
        category: ['Mobile', 'Backend'],
        description: (
            <>
                <p className="mb-2">
                    A comprehensive healthcare engineering ecosystem developed as my final-year graduation project (PFE) and software engineering internship, designed for continuous remote cardiac monitoring.
                </p>
                <p className="mb-2">
                    Interfaces directly with Bluetooth Low Energy (BLE) ECG sensors to stream raw cardiac electrical signals, render real-time continuous waveform graphs on mobile devices, and compute vital metrics.
                </p>
                <p>
                    Backed by a scalable Node.js &amp; Express.js backend with MongoDB Atlas for persistent health record storage, alongside integrated AI-assisted anomaly detection pipelines.
                </p>
            </>
        ),
        problemSolved: 'Enables remote continuous cardiovascular telemetry and early detection of arrhythmias by bridging wearable BLE sensors with mobile waveform visualization and cloud backend persistence.',
        role: 'Lead Software Engineer (PFE & Internship)',
        challenges: 'Maintaining high-throughput, low-latency BLE packet streaming without UI frame drops, processing continuous ECG data asynchronously, and structuring scalable MongoDB schemas for time-series biometric streams.',
        tech: ['Flutter', 'Dart', 'BLE', 'Kotlin', 'Node.js', 'Express.js', 'MongoDB', 'MongoDB Atlas', 'REST APIs', 'Android Studio', 'VS Code', 'Git', 'GitHub'],
        images: caredifyProjectImages,
        logo: '/projectsimages/caredify/applogo.png',
        featured: true,
        pfe: true,
        internship: true,
        priority: 1
    },

    // 2. FOOTBALL MANAGER
    {
        id: 'football-manager',
        title: 'Football Manager Multiplayer Game',
        tagline: 'Real-time multiplayer club management simulation with synchronized transfer market, rooms & NestJS backend',
        category: ['Mobile', 'Games', 'Backend'],
        description: (
            <>
                <p className="mb-2">
                    A real-time multiplayer football club management simulation game built with Flutter and a modular NestJS backend architecture.
                </p>
                <p className="mb-2">
                    Features synchronized multiplayer match lobbies via Socket.IO, a live transfer market (mercato) with dynamic bidding mechanics, custom tactical formation builders, squad depth management, and club financial balance sheets.
                </p>
                <p>
                    Employs CockroachDB to guarantee distributed ACID transactions and prevent race conditions during high-concurrency player transfer auctions and match resolution states.
                </p>
            </>
        ),
        problemSolved: 'Delivers an interactive, low-latency multiplayer club management experience with server-authoritative state synchronization, live transfer bidding, and distributed database consistency.',
        role: 'Full-Stack & Game Developer',
        challenges: 'Designing server-authoritative state resolution with Socket.IO, handling concurrent race conditions during player transfer auctions in CockroachDB, and building a responsive mobile game UI in Flutter.',
        tech: ['Flutter', 'Dart', 'NestJS', 'Socket.IO', 'CockroachDB', 'REST APIs', 'VS Code', 'Git', 'GitHub'],
        images: footballManagerProjectImages,
        logo: '/projectsimages/football-manager/applogo.png',
        featured: true,
        priority: 2
    },

    // 3. QUIZAPP
    {
        id: 'quizapp',
        title: 'Multiplayer Quiz Arena',
        tagline: 'Live synchronized competitive quiz game with real-time room matchmaking and Supabase backend',
        category: ['Mobile', 'Games', 'Backend'],
        description: (
            <>
                <p className="mb-2">
                    A real-time competitive multiplayer trivia game developed in Flutter with a Node.js / Express.js and Socket.IO backend service, integrated with Supabase.
                </p>
                <p className="mb-2">
                    Supports instant multiplayer room matchmaking, synchronized sub-second question countdown timers, real-time score broadcasting across connected clients, and dynamic category-based question catalogs.
                </p>
                <p>
                    Demonstrates full-stack mobile engineering spanning frontend state synchronization, WebSocket communication channels, and cloud database persistence.
                </p>
            </>
        ),
        problemSolved: 'Provides a low-latency real-time multiplayer quiz environment with synchronized timers, room matchmaking, and cloud database persistence.',
        role: 'Full-Stack & Mobile Developer',
        challenges: 'Synchronizing sub-second countdown timers across mobile clients via WebSockets and handling graceful client reconnection states during active matches.',
        tech: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'Socket.IO', 'Supabase', 'REST APIs', 'VS Code', 'Git', 'GitHub'],
        images: quizAppProjectImages,
        logo: '/projectsimages/quizapp/applogo.png',
        featured: true,
        priority: 3
    },

    // 4. ANTI-SCROLL
    {
        id: 'anti-scroll',
        title: 'Anti-Scroll Android Utility',
        tagline: 'Native Android systems utility using Accessibility Services to monitor and regulate addictive scrolling patterns',
        category: ['Mobile', 'Tools'],
        description: (
            <>
                <p className="mb-2">
                    A native Android systems utility engineered in Java leveraging the Android Accessibility Service API to monitor window events and intercept compulsive, repetitive short-form video scrolling.
                </p>
                <p className="mb-2">
                    Employs background window state detection, event filtering, configurable time-based intervention thresholds, and battery-efficient event hooks without polling.
                </p>
                <p>
                    Demonstrates deep understanding of native Android operating system internals, background service lifecycles, and OS-level accessibility event listeners.
                </p>
            </>
        ),
        problemSolved: 'Helps users curb digital distraction by detecting infinite-scroll behaviors across targeted apps and triggering configurable gentle friction interventions.',
        role: 'Android Systems Developer',
        challenges: 'Designing high-frequency AccessibilityEvent filters with minimal battery and CPU overhead while safely adhering to Android runtime security sandboxes.',
        tech: ['Java', 'Android SDK', 'Accessibility Service', 'Android Studio', 'Gradle', 'Git', 'GitHub'],
        images: antiScrollProjectImages,
        logo: '/projectsimages/anti-scroll/applogo.png',
        featured: true,
        priority: 4
    },

    // 5. MKARCHI CLI
    {
        id: 'mkarchi',
        title: 'Mkarchi CLI',
        tagline: 'Developer CLI tool to scaffold and reverse-engineer directory architectures from tree definitions',
        category: 'Tools',
        description: (
            <>
                <p className="mb-2">
                    The core command-line tool powering the Mkarchi developer ecosystem. It automates the generation of complex directory structures, boilerplates, and files from concise tree-formatted text definitions.
                </p>
                <p>
                    Published on PyPI with smart ignore rules, template reverse-engineering from existing repos, safety constraints, and automated architecture validation.
                </p>
            </>
        ),
        problemSolved: 'Eliminates repetitive manual directory creation and enforces standardized architectural conventions across developer teams and multi-service repositories.',
        role: 'Creator & Lead Developer',
        challenges: 'Building a robust parser for arbitrary ASCII and indented tree formats, handling cross-platform file permissions, and safely reverse-engineering deeply nested repositories.',
        tech: ['Python', 'PyPI', 'PyCharm', 'Git', 'GitHub'],
        github: 'https://github.com/SoufyanRachdi/mkarchi',
        link: 'https://www.mkarchi.me/cli',
        images: mkarchiProjectImages,
        logo: '/projectsimages/mkarchi/applogo.png',
        openSource: true,
        deployed: true
    },

    // 6. MKARCHI DESKTOP
    {
        id: 'mkarchi-desktop',
        title: 'Mkarchi Desktop',
        tagline: 'Visual GUI application for interactive project scaffolding and tree extraction',
        category: ['Desktop', 'Tools'],
        description: (
            <>
                <p className="mb-2">
                    A desktop application companion for the Mkarchi ecosystem. It provides software developers with an interactive graphical workspace to visually inspect, design, scaffold, and extract project directory blueprints.
                </p>
                <p>
                    Integrates create/apply modes, live syntax validation, and bi-directional synchronization with the Mkarchi CLI engine.
                </p>
            </>
        ),
        problemSolved: 'Offers an intuitive graphical interface for developers who prefer visual architecture design and rapid project template configuration.',
        role: 'Creator & Lead Developer',
        challenges: 'Interfacing the Electron render process with native desktop filesystem APIs and bundling lightweight standalone installers for multiple OS platforms.',
        tech: ['Electron', 'JavaScript', 'HTML', 'CSS', 'Mkarchi', 'Git', 'GitHub', 'VS Code'],
        github: 'https://github.com/SoufyanRachdi/mkarchi_desktop',
        link: 'https://www.mkarchi.me/desktop/',
        download: 'https://www.mkarchi.me/desktop/downloads',
        images: mkarchiDesktopProjectImages,
        logo: '/projectsimages/mkarchi_desktop/applogo.png',
        openSource: true,
        deployed: true
    },

    // 7. KABAADHUB MOBILE
    {
        id: 'kabaadhub',
        title: 'KabaadHub Mobile App',
        tagline: 'Production Flutter & Firebase marketplace app published on Google Play Store',
        category: 'Mobile',
        description: (
            <>
                <p className="mb-2">
                    Commercial cross-platform mobile marketplace application built for buying and selling recycled goods and materials.
                </p>
                <p>
                    Features real-time in-app buyer-seller chat, geolocation-based item discovery, multi-image upload workflows, and push notification alerts.
                </p>
            </>
        ),
        problemSolved: 'Connects recyclers, scrap dealers, and everyday sellers through a localized real-time exchange marketplace with immediate messaging.',
        role: 'Freelance Mobile Developer',
        challenges: 'Managing real-time messaging state with Cloud Firestore, handling image caching/compression on mobile devices, and optimizing location-based queries.',
        tech: ['Flutter', 'Dart', 'Firebase', 'Android Studio', 'VS Code', 'Git', 'GitHub'],
        playStore: 'https://play.google.com/store/apps/details?id=com.kabaadhub.app&pli=1',
        images: kabaadhubappprojectImages,
        logo: '/projectsimages/kabaadhub/applogo.png',
        freelance: true,
        deployed: true
    },

    // 8. KABAADHUB ADMIN
    {
        id: 'kabaadhub-admin',
        title: 'KabaadHub Admin Dashboard',
        tagline: 'Web administration panel for user moderation, product approval, and analytics',
        category: ['Web', 'Business Software'],
        description: (
            <>
                <p className="mb-2">
                    A dedicated administrative web application for managing the KabaadHub marketplace platform.
                </p>
                <p>
                    Built with Flutter Web and Firebase, enabling platform operators to moderate listings, verify merchant accounts, resolve transaction disputes, and manage platform permissions in real time.
                </p>
            </>
        ),
        problemSolved: 'Gives platform administrators comprehensive oversight and rapid moderation tools to maintain marketplace quality and transaction trust.',
        role: 'Freelance Full-Stack Developer',
        challenges: 'Structuring role-based Firestore security rules and building responsive data-heavy data tables in Flutter Web.',
        tech: ['Flutter', 'Dart', 'Firebase', 'VS Code', 'Git', 'GitHub'],
        images: [],
        logo: '/projectsimages/kabaadhub-admin-panel/applogo.png',
        freelance: true,
        deployed: true
    },

    // 9. LAWYER APP
    {
        id: 'lawyer-app',
        title: 'Lawyer Desktop Management Application',
        tagline: 'Desktop legal practice management tool for case tracking, documents, and client records',
        category: 'Business Software',
        description: (
            <>
                <p className="mb-2">
                    A specialized legal practice desktop application designed to streamline case management, hearing schedules, client information, and billing records for law offices.
                </p>
                <p>
                    Features local SQLite storage for privacy, document archiving, case progression timelines, and automated client billing generation.
                </p>
            </>
        ),
        problemSolved: 'Replaces disorganized paper and spreadsheet legal tracking with a centralized, offline-first case file repository and courtroom calendar.',
        role: 'Full-Stack Software Developer',
        challenges: 'Designing relational SQLite schemas with referential integrity for complex legal case relationships and creating clean desktop UI views in React.',
        tech: ['Electron', 'React', 'Node.js', 'SQLite', 'Mkarchi', 'JavaScript', 'HTML', 'CSS', 'Git', 'GitHub'],
        images: lawyerAppProjectImages,
        logo: '/projectsimages/lawyer-app/applogo.png',
        inDevelopment: true
    },

    // 10. RESTAURANT MANAGEMENT SYSTEM
    {
        id: 'restaurant-management',
        title: 'Restaurant Management System',
        tagline: 'Centralized Java MVC desktop system for restaurant point-of-sale and kitchen workflows',
        category: ['Desktop', 'Business Software'],
        description: (
            <>
                <p className="mb-2">
                    A desktop management system built in Java Swing demonstrating clean Object-Oriented Programming (OOP) and Model-View-Controller (MVC) architecture.
                </p>
                <p>
                    Implements role-based access control for Clients, Waitstaff (ordering and billing), and Kitchen staff (live menu management and queue processing) with BCrypt password hashing and JDBC persistence.
                </p>
            </>
        ),
        problemSolved: 'Coordinates front-of-house order placement with kitchen preparation queues while guaranteeing accurate billing and role-separated permissions.',
        role: 'Software Engineer (Academic)',
        challenges: 'Building robust concurrent JDBC transactions, designing custom Swing UI components, and implementing BCrypt security for authentication.',
        tech: ['Java', 'Swing', 'MySQL', 'MySQL Workbench', 'JDBC', 'IntelliJ IDEA', 'Git', 'GitHub'],
        github: 'https://github.com/elParadigm/SystemeDeGestionDunRestaurant',
        images: restaurantProjectImages,
        academic: true,
        showcase: true
    },

    // 11. CAR4CRA
    {
        id: 'car4cra',
        title: 'Car4Cra Automotive Platform',
        tagline: 'Full-stack MVC web application for vehicle rental bookings and automotive fleet management',
        category: 'Business Software',
        description: (
            <>
                <p className="mb-2">
                    A comprehensive automotive services and vehicle management web application developed using the Symfony PHP framework and MySQL.
                </p>
                <p>
                    Includes catalog browsing with dynamic filtering, customer reservation flows, fleet availability tracking, and administrative control panels for rental operations.
                </p>
            </>
        ),
        problemSolved: 'Automates car rental workflows, availability checking, customer reservations, and fleet maintenance records in a centralized web portal.',
        role: 'Full-Stack Developer',
        challenges: 'Implementing clean MVC routing, ORM entity mappings in Symfony, and role-based access control for rental customers versus fleet managers.',
        tech: ['Symfony', 'PHP', 'MySQL', 'XAMPP', 'VS Code', 'Git', 'GitHub', 'HTML', 'CSS'],
        github: 'https://github.com/SoufyanRachdi/Car4Cra',
        images: car4craProjectImages,
        logo: '/projectsimages/car4cra/logo.svg',
        openSource: true,
        academic: true,
        showcase: true
    },

    // 12. MKARCHI WEB
    {
        id: 'mkarchi-web',
        title: 'Mkarchi Web & Documentation',
        tagline: 'Official landing page and technical documentation portal for the Mkarchi ecosystem',
        category: 'Web',
        description: (
            <>
                <p>
                    The official website and technical documentation portal for Mkarchi. Built with Next.js, TypeScript, and Tailwind CSS, offering interactive syntax guides, command references, and installation tutorials for developers.
                </p>
            </>
        ),
        problemSolved: 'Provides developers with clear documentation, quick-start guides, and command references to facilitate onboarding with the CLI and desktop tools.',
        role: 'Frontend & Documentation Developer',
        challenges: 'Optimizing static page generation and organizing technical markdown documentation for smooth developer reading.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Git', 'GitHub', 'VS Code', 'HTML', 'CSS', 'Mkarchi'],
        link: 'https://www.mkarchi.me/',
        images: mkarchiWebProjectImages,
        logo: '/projectsimages/mkarchi_web/applogo.png',
        deployed: true
    },

    // 13. ZOMBIE GAME
    {
        id: 'zombie-game',
        title: '3D Zombie Survival Prototype',
        tagline: '3D survival game built in Godot Engine with AI state machines and 3D physics',
        category: 'Games',
        description: (
            <>
                <p>
                    An action-survival 3D game prototype where the player navigates an environment against wave-based enemy encounters. Features 3D navigation meshes, enemy state machines, physics raycasting, audio spatialization, and character progression.
                </p>
            </>
        ),
        problemSolved: 'Exploration of game systems architecture, real-time 3D physics, enemy pathfinding, and custom Blender asset pipelines.',
        role: 'Game Developer & Systems Programmer',
        challenges: 'Optimizing 3D enemy pathfinding and collision detection in Godot GDScript.',
        tech: ['Godot', 'GDScript', 'Blender', 'Git', 'GitHub'],
        github: 'https://github.com/SoufyanRachdi/zombie-game',
        images: zombieGameprojectImages,
        openSource: true,
        showcase: true
    },

    // 14. TRIANGLE GAME
    {
        id: 'triangle-game',
        title: 'Multiplayer Triangle Game Prototype',
        tagline: '2D networked multiplayer survival game prototype with custom combat mechanics',
        category: 'Games',
        description: (
            <>
                <p>
                    A 2D multiplayer game prototype supporting up to 50 concurrent participants. Players maneuver rotating triangles with directional vulnerability rules, featuring multiplayer networking and collision resolution.
                </p>
            </>
        ),
        problemSolved: 'Exploration of real-time multiplayer networking synchronization, packet interpolation, and 2D physics state management.',
        role: 'Game Developer & Networking Programmer',
        challenges: 'Handling client-server synchronization, latency compensation, and collision detection across concurrent players.',
        tech: ['Godot', 'GDScript', 'Git', 'GitHub'],
        github: 'https://github.com/SoufyanRachdi/multiplayer_triangle_game',
        images: triangleGameprojectImages,
        openSource: true,
        showcase: true
    },

    // 15. SOYF TUBE
    {
        id: 'soyf-tube',
        title: 'Soyf Tube',
        tagline: 'Native Android video streaming application prototype built with Kotlin',
        category: 'Mobile',
        description: (
            <>
                <p>
                    A native Android video exploration application prototype designed to evaluate modern Android architecture patterns, media playback services, and video feed caching.
                </p>
            </>
        ),
        problemSolved: 'Testing native Android MVVM architecture and media player playback lifecycles.',
        role: 'Android Developer',
        challenges: 'Managing native background playback services and asynchronous video streaming buffers.',
        tech: ['Kotlin', 'Android Studio', 'Git', 'GitHub', 'VS Code', 'Mkarchi'],
        github: 'https://github.com/SoufyanRachdi/soyftube',
        images: soyftubeProjectImages,
        inDevelopment: true
    },

    // 16. SOYF MUSIC
    {
        id: 'soyf-music',
        title: 'Soyf Music',
        tagline: 'Cross-platform audio player application prototype built with Flutter',
        category: 'Mobile',
        description: (
            <>
                <p>
                    A cross-platform mobile audio player prototype exploring local playlist management, background audio streaming, and animated equalizer UI visualizations.
                </p>
            </>
        ),
        problemSolved: 'Testing Flutter background audio state management and smooth mobile audio controls.',
        role: 'Mobile Developer',
        challenges: 'Handling background audio playback notification channels across Android and iOS.',
        tech: ['Flutter', 'Dart', 'Android Studio', 'VS Code', 'Git', 'GitHub', 'Mkarchi'],
        github: 'https://github.com/SoufyanRachdi/soyfmusic',
        images: soyfmusicProjectImages,
        inDevelopment: true
    }
];
