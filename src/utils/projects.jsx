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
    // 1. CAREDIFY (PFE & Internship Flagship Ecosystem)
    {
        id: 'caredify',
        title: 'Caredify — Remote ECG Monitoring & AI Healthcare Ecosystem',
        tagline: 'PFE & Startup Ecosystem: Wearable BLE telemetry mobile app, Node.js cloud backend, AI anomaly detection & clinician portal',
        category: ['Mobile', 'Backend'],
        description: (
            <>
                <p className="mb-2">
                    A comprehensive healthcare engineering ecosystem developed as my final-year graduation project (PFE) and software engineering internship, designed for continuous remote cardiac monitoring.
                </p>
                <p className="mb-2">
                    Comprises a native-bridged Flutter mobile application interfacing directly with Bluetooth Low Energy (BLE) sensors to stream real-time cardiac signals, and a resilient Node.js &amp; Express.js REST API with MongoDB Atlas for secure cloud health record storage.
                </p>
                <p>
                    The system integrates with startup-level AI arrhythmia diagnostic models and clinical web dashboards to assist cardiologists in early detection of cardiac conditions.
                </p>
            </>
        ),
        problemSolved: 'Enables remote continuous cardiovascular telemetry and early detection of arrhythmias by bridging wearable BLE sensors with mobile waveform visualization and cloud backend persistence.',
        role: 'Lead Mobile & Backend Software Engineer (PFE & Internship)',
        challenges: 'Maintaining high-throughput, low-latency BLE packet streaming without UI frame drops, processing continuous ECG data asynchronously, and structuring scalable MongoDB schemas for time-series biometric streams.',
        tech: ['Flutter', 'Dart', 'BLE', 'Kotlin', 'Node.js', 'Express.js', 'MongoDB', 'MongoDB Atlas', 'REST APIs', 'Android Studio', 'VS Code', 'Git', 'GitHub'],
        images: caredifyProjectImages,
        logo: '/caredify.png',
        featured: true,
        pfe: true,
        internship: true,
        privateRepo: true,
        isEcosystem: true,
        priority: 1,
        ecosystem: [
            {
                id: 'caredify-mobile',
                title: 'Caredify Mobile Application',
                badge: 'My Core Part · Lead Mobile Engineer',
                role: 'Lead Flutter & BLE Developer',
                status: 'Core Implementation',
                tech: ['Flutter', 'Dart', 'BLE', 'Kotlin', 'Android Studio', 'VS Code', 'Git', 'GitHub'],
                description: 'Cross-platform mobile application interfacing directly with wearable Bluetooth Low Energy (BLE) ECG sensors. Performs high-throughput packet streaming, filtering, continuous real-time ECG waveform graphing, and on-device heart rate telemetry computation.'
            },
            {
                id: 'caredify-backend',
                title: 'Caredify Cloud Backend & REST API',
                badge: 'My Core Part · Lead Backend Engineer',
                role: 'Lead Backend Engineer',
                status: 'Core Implementation',
                tech: ['Node.js', 'Express.js', 'MongoDB', 'MongoDB Atlas', 'REST APIs', 'VS Code', 'Git', 'GitHub'],
                description: 'Centralized backend service responsible for patient authentication, secure biometric time-series data persistence in MongoDB Atlas, and session history management.'
            },
            {
                id: 'caredify-ai',
                title: 'AI Arrhythmia Detection Model',
                badge: 'Interfaced Startup Component',
                role: 'Collaborative Startup Module',
                status: 'Integrated with API',
                tech: ['Python', 'AI/ML', 'Biometric Signal Processing'],
                description: 'Machine learning classification pipeline designed to ingest time-series ECG data from our backend REST API to detect cardiac anomalies and assist in early diagnosis.'
            },
            {
                id: 'caredify-portal',
                title: 'Cardiologist Clinical Web Portal',
                badge: 'Interfaced Startup Component',
                role: 'Collaborative Startup Module',
                status: 'Integrated with API',
                tech: ['React', 'Web Dashboard', 'REST APIs'],
                description: 'Clinician web interface allowing cardiologists to inspect live and historical patient ECG strips, analyze AI diagnostic suggestions, and manage clinical patient files.'
            }
        ]
    },

    // 2. FOOTBALL MANAGER MULTIPLAYER ECOSYSTEM
    {
        id: 'football-manager',
        title: 'Football Manager — Multiplayer Game Ecosystem',
        tagline: 'Multi-component ecosystem: Flutter mobile client with synchronized transfer market (mercato) & modular NestJS/Socket.IO backend',
        category: ['Mobile', 'Games', 'Backend'],
        description: (
            <>
                <p className="mb-2">
                    A real-time multiplayer football club management simulation ecosystem built with a cross-platform Flutter client and a modular NestJS server architecture.
                </p>
                <p className="mb-2">
                    Features synchronized multiplayer match lobbies via Socket.IO, a live transfer market (mercato) with dynamic real-time bidding mechanics, custom tactical formation builders, squad depth management, and club financial balance sheets.
                </p>
                <p>
                    Employs CockroachDB to guarantee distributed ACID transactions and prevent race conditions during high-concurrency player transfer auctions and match resolution states.
                </p>
            </>
        ),
        problemSolved: 'Delivers an interactive, low-latency multiplayer club management experience with server-authoritative state synchronization, live transfer bidding, and distributed database consistency.',
        role: 'Full-Stack & Game Developer',
        challenges: 'Designing server-authoritative state resolution with Socket.IO, handling concurrent race conditions during player transfer auctions in CockroachDB, and building a responsive mobile game UI in Flutter.',
        tech: ['Flutter', 'Dart', 'NestJS', 'Socket.IO', 'CockroachDB', 'REST APIs', 'Android Studio', 'VS Code', 'Git', 'GitHub'],
        images: footballManagerProjectImages,
        logo: '/projectsimages/football-manager/applogo.png',
        featured: true,
        isEcosystem: true,
        priority: 2,
        ecosystem: [
            {
                id: 'football-manager-mobile',
                title: 'Football Manager Mobile Game Client',
                badge: 'Lead Mobile Developer',
                role: 'Game Client & UI Architect',
                status: 'Core Implementation',
                tech: ['Flutter', 'Dart', 'Android Studio', 'VS Code', 'Git', 'GitHub'],
                description: 'Cross-platform mobile game client providing tactical formation builders, squad depth management, live transfer market bidding interfaces, and real-time match visualizations.'
            },
            {
                id: 'football-manager-backend',
                title: 'NestJS Game Engine & State Server',
                badge: 'Lead Backend Developer',
                role: 'Game Server & Distributed DB Architect',
                status: 'Core Implementation',
                tech: ['NestJS', 'Socket.IO', 'CockroachDB', 'REST APIs', 'VS Code', 'Git', 'GitHub'],
                description: 'Modular NestJS backend orchestrating server-authoritative match room matchmaking, synchronized live transfer market auctions, and distributed ACID transactions via CockroachDB.'
            }
        ]
    },

    // 3. QUIZAPP ARENA MULTIPLAYER ECOSYSTEM
    {
        id: 'quizapp',
        title: 'QuizApp Arena — Multiplayer Trivia Ecosystem',
        tagline: 'Multi-component gaming ecosystem: Flutter mobile app, synchronized Node.js WebSocket backend & admin management portal',
        category: ['Mobile', 'Games', 'Backend', 'Web'],
        description: (
            <>
                <p className="mb-2">
                    A real-time competitive multiplayer trivia game ecosystem developed in Flutter with a Node.js / Express.js and Socket.IO backend service, integrated with Supabase and a dedicated administrative management dashboard.
                </p>
                <p className="mb-2">
                    Supports instant multiplayer room matchmaking, synchronized sub-second question countdown timers, real-time score broadcasting across connected clients, and dynamic category-based question catalogs.
                </p>
                <p>
                    Demonstrates full-stack engineering spanning synchronized mobile state, WebSocket channels, cloud database persistence, and administrative content curation.
                </p>
            </>
        ),
        problemSolved: 'Provides a low-latency real-time multiplayer quiz environment with synchronized timers, room matchmaking, and cloud database persistence.',
        role: 'Full-Stack & Mobile Developer',
        challenges: 'Synchronizing sub-second countdown timers across mobile clients via WebSockets and handling graceful client reconnection states during active matches.',
        tech: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'Socket.IO', 'Supabase', 'Flutter Web', 'REST APIs', 'Android Studio', 'VS Code', 'Git', 'GitHub'],
        images: quizAppProjectImages,
        logo: '/projectsimages/quizapp/applogo.png',
        featured: true,
        isEcosystem: true,
        priority: 3,
        ecosystem: [
            {
                id: 'quizapp-mobile',
                title: 'QuizApp Arena Mobile Client',
                badge: 'Lead Mobile Developer',
                role: 'Mobile Client & Real-Time Sync',
                status: 'Core Implementation',
                tech: ['Flutter', 'Dart', 'Android Studio', 'VS Code', 'Git', 'GitHub'],
                description: 'Competitive multiplayer mobile app featuring sub-second countdown timers, dynamic category catalogs, live score broadcasts, and match arenas.'
            },
            {
                id: 'quizapp-backend',
                title: 'Node.js & Socket.IO Match Service',
                badge: 'Lead Backend Developer',
                role: 'Real-Time Server & WebSocket Architect',
                status: 'Core Implementation',
                tech: ['Node.js', 'Express.js', 'Socket.IO', 'Supabase', 'REST APIs', 'VS Code', 'Git', 'GitHub'],
                description: 'High-throughput WebSocket backend orchestrating real-time room matchmaking, synchronized countdown timer events, and persistent score leaderboards via Supabase.'
            },
            {
                id: 'quizapp-admin',
                title: 'QuizApp Admin Web Dashboard',
                badge: 'Full-Stack Developer',
                role: 'Admin Dashboard & Content Management',
                status: 'Web Administration',
                tech: ['Flutter Web', 'Supabase', 'REST APIs', 'VS Code', 'Git', 'GitHub'],
                description: 'Web administration panel for quiz curators to author question banks, categorize trivia catalogs, review match analytics, and moderate player accounts.'
            }
        ]
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
        tech: ['Java', 'Android SDK', 'Accessibility Service', 'Android Studio', 'Gradle', 'VS Code', 'Git', 'GitHub'],
        images: antiScrollProjectImages,
        logo: '/projectsimages/anti-scroll/applogo.png',
        featured: true,
        priority: 4
    },

    // 5. MKARCHI ECOSYSTEM
    {
        id: 'mkarchi',
        title: 'Mkarchi — Developer Scaffolding & Architecture Ecosystem',
        tagline: 'Multi-platform developer ecosystem: Python CLI on PyPI, Electron desktop visual workspace & Next.js docs portal',
        category: ['Tools', 'Desktop', 'Web'],
        description: (
            <>
                <p className="mb-2">
                    A multi-platform developer tooling ecosystem created to automate project directory scaffolding, architectural standardization, and repository reverse-engineering from concise tree definitions.
                </p>
                <p className="mb-2">
                    Encompasses a high-performance Python CLI published on PyPI, an interactive Electron desktop design workspace, and an official Next.js technical documentation and tutorial portal.
                </p>
                <p>
                    Enables engineering teams to maintain clean, consistent project structures and eliminate manual directory creation workflows.
                </p>
            </>
        ),
        problemSolved: 'Eliminates repetitive manual directory creation and enforces standardized architectural conventions across developer teams and multi-service repositories.',
        role: 'Creator & Lead Ecosystem Developer',
        challenges: 'Building a robust parser for arbitrary ASCII and indented tree formats, handling cross-platform file permissions, and safely reverse-engineering deeply nested repositories.',
        tech: ['Python', 'PyPI', 'Electron', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'PyCharm', 'VS Code', 'Git', 'GitHub'],
        github: 'https://github.com/SoufyanRachdi/mkarchi',
        link: 'https://www.mkarchi.me/',
        images: [...mkarchiProjectImages, ...mkarchiDesktopProjectImages, ...mkarchiWebProjectImages],
        logo: '/projectsimages/mkarchi/applogo.png',
        openSource: true,
        deployed: true,
        isEcosystem: true,
        priority: 5,
        ecosystem: [
            {
                id: 'mkarchi-cli',
                title: 'Mkarchi CLI Engine',
                badge: 'Creator & Lead Developer',
                role: 'Core CLI Engine & AST Parser',
                status: 'Published on PyPI',
                tech: ['Python', 'PyPI', 'PyCharm', 'VS Code', 'Git', 'GitHub'],
                github: 'https://github.com/SoufyanRachdi/mkarchi',
                link: 'https://www.mkarchi.me/cli',
                description: 'Core command-line parsing engine published on PyPI. Scaffolds complex directory structures, boilerplates, and files from ASCII tree definitions with reverse-engineering capabilities.'
            },
            {
                id: 'mkarchi-desktop',
                title: 'Mkarchi Desktop Application',
                badge: 'Creator & Lead Developer',
                role: 'Visual Architecture Designer',
                status: 'Published / Open Source',
                tech: ['Electron', 'JavaScript', 'HTML', 'CSS', 'Mkarchi', 'VS Code', 'Git', 'GitHub'],
                github: 'https://github.com/SoufyanRachdi/mkarchi_desktop',
                download: 'https://www.mkarchi.me/desktop/downloads',
                link: 'https://www.mkarchi.me/desktop/',
                description: 'Cross-platform visual GUI application enabling developers to visually inspect, design, scaffold, and extract project directory blueprints.'
            },
            {
                id: 'mkarchi-web',
                title: 'Mkarchi Web & Technical Docs',
                badge: 'Frontend & Documentation Developer',
                role: 'Documentation & Tutorials Portal',
                status: 'Live at mkarchi.me',
                tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'VS Code', 'Git', 'GitHub'],
                link: 'https://www.mkarchi.me/',
                description: 'Official landing portal and technical documentation site built with Next.js and Tailwind CSS, offering interactive syntax guides and tutorials.'
            }
        ]
    },

    // 6. KABAADHUB ECOSYSTEM
    {
        id: 'kabaadhub',
        title: 'KabaadHub — Scrap & Recycling Marketplace Ecosystem',
        tagline: 'Commercial ecosystem: Production Flutter mobile app on Google Play with live chat + Flutter Web admin portal',
        category: ['Mobile', 'Web', 'Business Software'],
        description: (
            <>
                <p className="mb-2">
                    A commercial cross-platform marketplace ecosystem engineered for buying and selling recycled goods, scrap materials, and reusable commodities.
                </p>
                <p className="mb-2">
                    Integrates a production mobile application published on the Google Play Store with real-time buyer-seller messaging and geolocation discovery, backed by a dedicated Flutter Web administrative moderation portal.
                </p>
            </>
        ),
        problemSolved: 'Connects recyclers, scrap dealers, and everyday sellers through a localized real-time exchange marketplace with immediate messaging.',
        role: 'Freelance Lead Mobile & Full-Stack Developer',
        challenges: 'Managing real-time messaging state with Cloud Firestore, handling image caching/compression on mobile devices, and building responsive data tables in Flutter Web.',
        tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Flutter Web', 'Google Play', 'Android Studio', 'VS Code', 'Git', 'GitHub'],
        playStore: 'https://play.google.com/store/apps/details?id=com.kabaadhub.app&pli=1',
        images: kabaadhubappprojectImages,
        logo: '/projectsimages/kabaadhub/applogo.png',
        freelance: true,
        deployed: true,
        isEcosystem: true,
        priority: 6,
        ecosystem: [
            {
                id: 'kabaadhub-mobile',
                title: 'KabaadHub Mobile Marketplace App',
                badge: 'Freelance Lead Mobile Developer',
                role: 'Lead Mobile Developer',
                status: 'Published on Google Play',
                tech: ['Flutter', 'Dart', 'Firebase', 'Google Play', 'Android Studio', 'VS Code', 'Git', 'GitHub'],
                playStore: 'https://play.google.com/store/apps/details?id=com.kabaadhub.app&pli=1',
                description: 'Production mobile marketplace published on Google Play Store featuring real-time in-app buyer/seller messaging, geolocation discovery, and image upload pipelines.'
            },
            {
                id: 'kabaadhub-admin',
                title: 'KabaadHub Web Admin Dashboard',
                badge: 'Freelance Full-Stack Developer',
                role: 'Full-Stack Developer',
                status: 'Web Administration',
                tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Flutter Web', 'VS Code', 'Git', 'GitHub'],
                description: 'Dedicated web dashboard built with Flutter Web and Firebase for platform administrators to moderate listings, verify merchants, and manage platform permissions.'
            }
        ]
    },

    // 7. LAWYER APP
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
        tech: ['Electron', 'React', 'Node.js', 'SQLite', 'Mkarchi', 'JavaScript', 'HTML', 'CSS', 'VS Code', 'Git', 'GitHub'],
        images: lawyerAppProjectImages,
        logo: '/projectsimages/lawyer-app/applogo.png',
        inDevelopment: true
    },

    // 8. RESTAURANT MANAGEMENT SYSTEM
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
        tech: ['Java', 'Swing', 'MySQL', 'MySQL Workbench', 'JDBC', 'IntelliJ IDEA', 'VS Code', 'Git', 'GitHub'],
        github: 'https://github.com/elParadigm/SystemeDeGestionDunRestaurant',
        images: restaurantProjectImages,
        academic: true,
        showcase: true
    },

    // 9. CAR4CRA
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

    // 10. ZOMBIE GAME
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
        tech: ['Godot', 'GDScript', 'Blender', 'VS Code', 'Git', 'GitHub'],
        github: 'https://github.com/SoufyanRachdi/zombie-game',
        images: zombieGameprojectImages,
        openSource: true,
        showcase: true
    },

    // 11. TRIANGLE GAME
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
        tech: ['Godot', 'GDScript', 'VS Code', 'Git', 'GitHub'],
        github: 'https://github.com/SoufyanRachdi/multiplayer_triangle_game',
        images: triangleGameprojectImages,
        openSource: true,
        showcase: true
    },

    // 12. SOYF TUBE
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
        tech: ['Kotlin', 'Android Studio', 'VS Code', 'Git', 'GitHub', 'Mkarchi'],
        github: 'https://github.com/SoufyanRachdi/soyftube',
        images: soyftubeProjectImages,
        inDevelopment: true
    },

    // 13. SOYF MUSIC
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
