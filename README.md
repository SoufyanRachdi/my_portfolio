# Soufyan Rachdi — Developer Portfolio & Engineering Architecture

A modern, high-performance, single-page developer portfolio showcasing multi-component software ecosystems across **Flutter & Dart**, **Node.js & NestJS**, **Real-Time WebSockets**, **BLE IoT Telemetry**, **Distributed Databases**, and **Developer Tooling**.

🌐 **Live Deployment**: [https://soufyanrachdi.vercel.app/](https://soufyanrachdi.vercel.app/)

---

## 🛠️ Technical Stack

- **Frontend Core**: React 18, Vite, Tailwind CSS, Lucide Icons, React Router v6
- **Architecture**: One-Page Scroll-Spy Navigation (`#home` $\rightarrow$ `#contact`) + Deep-Link Case Study Routing (`/projects/:projectId`)
- **Performance & Analytics**: Hardware-accelerated CSS animations (`motion-safe:`), Vite dynamic asset chunking, `@vercel/analytics`
- **Accessibility & SEO**: WAI-ARIA 1.2 compliant, Schema.org `Person` JSON-LD, Open Graph & Twitter Card rich social previews

---

## 🚀 Key Engineering Ecosystems Showcased

1. **Caredify (Startup & PFE Graduation Ecosystem)**:
   - Wearable Bluetooth Low Energy (BLE) ECG telemetry streaming in **Flutter & Dart**.
   - Cloud REST API & session history in **Node.js, Express.js & MongoDB Atlas**.
   - Interfaced with Python **Keras / Anaconda** AI arrhythmia detection and clinical web portal.
2. **Football Manager Multiplayer Game**:
   - Synchronized match lobbies & live transfer market (mercato) with dynamic bidding.
   - **NestJS**, **Socket.IO**, **Prisma ORM**, **CockroachDB** (distributed ACID transactions), **Redis** caching, and **BullMQ** background queues deployed on **Render**.
3. **QuizApp Arena Multiplayer Ecosystem**:
   - Sub-second synchronized countdown timers, live leaderboards, and category catalogs.
   - **Flutter**, **Node.js / Express.js**, **Socket.IO**, **Supabase**, and **Flutter Web** administration portal.
4. **Mkarchi Tooling Ecosystem**:
   - Multi-platform project scaffolding engine published on **PyPI** (**Python**).
   - Visual GUI workspace (**Electron**) and documentation portal (**Next.js & Tailwind CSS**).
5. **KabaadHub Commercial Marketplace**:
   - Production recycling marketplace published on the **Google Play Store** (**Flutter & Firebase**).
   - Dedicated web moderation portal (**Flutter Web**).

---

## 📁 Repository Structure & Documentation

```text
├── docs/
│   ├── errors.md         # Comprehensive bug and audit resolution log (22/22 fixed)
│   ├── improve.md        # Feature roadmap & completed enhancements log
│   └── required.md       # Checklist of assets, screenshots, and deliverables
├── job-search.md         # Practical job search playbook & market targeting strategy
├── public/
│   ├── projectsimages/   # Screenshots for Caredify, Mkarchi, KabaadHub, Lawyer App, etc.
│   ├── softwarelogo/     # High-res SVGs & PNGs for 40+ technologies and IDEs
│   ├── cv.pdf            # Professional CV / Resume
│   ├── isimg.png         # ISIMG higher education emblem
│   ├── lycceroutedegabes.png # Lycée Route de Gabès emblem
│   ├── sitemap.xml       # Search engine index sitemap
│   └── robots.txt        # Web crawler directives
└── src/
    ├── components/       # Semantic section components (Hero, About, Projects, Experience, Education, Skills, Certifications, Contact, Navbar, etc.)
    ├── pages/            # Home (One-Page Master) & ProjectDetail (Case Studies)
    └── utils/            # Data models, image loaders, tech logo resolvers
```

---

## 💻 Local Development & Build

```bash
# Navigate to the portfolio directory
cd my_portfolio

# Install dependencies
npm install

# Start local development server
npm run dev

# Run ESLint validation
npm run lint

# Compile production bundle
npm run build

# Preview production build locally
npm run preview
```
