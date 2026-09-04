# Required Information & Assets Checklist (`required.md`)

This document is the definitive checklist of manual files, documents, screenshots, and links needed from the developer (Soufyan Rachdi) to achieve 100% completion of the portfolio.

> [!NOTE]
> All code components, responsive layouts, buttons, routing, and download links are already fully implemented in the repository. As soon as you add any of the files below to `public/` or `src/utils/projects.jsx`, they will immediately render without requiring any code rewrites.

---

## 1. Summary Checklist

| Priority | ID | Category | Item | Expected Destination | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CRITICAL** | `REQ-001` | Document | **Curriculum Vitae (CV) PDF** | `public/cv.pdf` | **DONE** |
| **CRITICAL** | `REQ-002` | Project Link | **Caredify Repository Status** | `src/utils/projects.jsx` | **RESOLVED** (Private Startup Repo) |
| **CRITICAL** | `REQ-003` | Project Link | **Football Manager GitHub URL** | `src/utils/projects.jsx` | **TODO** |
| **CRITICAL** | `REQ-004` | Project Link | **QuizApp GitHub URL** | `src/utils/projects.jsx` | **TODO** |
| **CRITICAL** | `REQ-005` | Project Link | **Anti-Scroll GitHub URL** | `src/utils/projects.jsx` | **TODO** |
| **HIGH** | `REQ-006` | Document | **Graduation Diploma / Certificate (Redacted PDF)** | `public/diploma.pdf` | **TODO** |
| **HIGH** | `REQ-007` | Asset | **Caredify Official Logo** | `public/caredify.png` | **DONE** |
| **HIGH** | `REQ-008` | Experience | **Caredify Internship Exact Dates (`Jan 2026 — Jun 2026`)** | `src/components/ExperienceSection.jsx` | **DONE** |
| **HIGH** | `REQ-009` | Education | **Lycée Route de Gabès Logo & Baccalauréat Details** | `public/lycceroutedegabes.png` | **DONE** |
| **HIGH** | `REQ-010` | Asset | **Caredify ECG & App Screenshots** | `public/projectsimages/caredify/` | **DONE** (19 Screenshots Added) |
| **HIGH** | `REQ-011` | Asset | **Football Manager Screenshots** | `public/projectsimages/football-manager/` | **TODO** |
| **MEDIUM** | `REQ-012` | Asset | **QuizApp Arena Screenshots** | `public/projectsimages/quizapp/` | **TODO** |
| **MEDIUM** | `REQ-013` | Asset | **Anti-Scroll Android Screenshots** | `public/projectsimages/anti-scroll/` | **TODO** |
| **MEDIUM** | `REQ-014` | Document | **Caredify Internship Certificate / Attestation (Optional PDF)** | `public/internship_caredify.pdf` | **OPTIONAL** |
| **OPTIONAL** | `REQ-015` | Project Link | **Live Demos / Direct APK Downloads** | `src/utils/projects.jsx` | **OPTIONAL** |

---

## 2. Detailed Action Items

### A. Critical (Code & Repository Links)

#### REQ-003: Football Manager GitHub Repository
- **What to provide**: Public or private GitHub URL for the Football Manager project.
- **Where to add**: In `src/utils/projects.jsx` under `id: 'football-manager'`, add `github: 'https://github.com/SoufyanRachdi/...'`.
- **Impact**: Proves NestJS, Socket.IO WebSockets, and CockroachDB distributed transaction implementation to technical interviewers.

#### REQ-004: QuizApp GitHub Repository
- **What to provide**: GitHub repository URL for the real-time multiplayer trivia game.
- **Where to add**: In `src/utils/projects.jsx` under `id: 'quizapp'`, add `github: 'https://github.com/SoufyanRachdi/...'`.
- **Impact**: Demonstrates full-stack real-time state synchronization, WebSocket handling, and Supabase integration.

#### REQ-005: Anti-Scroll GitHub Repository
- **What to provide**: GitHub repository URL for the native Android Accessibility Service utility.
- **Where to add**: In `src/utils/projects.jsx` under `id: 'anti-scroll'`, add `github: 'https://github.com/SoufyanRachdi/...'`.
- **Impact**: Proves low-level native Android OS knowledge, event interception, and background service lifecycle management.

---

### B. High Priority (Documents & Screenshots)

#### REQ-006: Graduation Diploma / Degree Certificate
- **What to provide**: A redacted public PDF of your ISIMG Licence in Computer Science diploma (ensure personal national ID numbers or home address are blacked out).
- **Where to save**: `my_portfolio/public/diploma.pdf`.
- **Impact**: Instantly activates the "View Diploma" button in the Education section.

#### REQ-010: Caredify ECG & App Screenshots
- **Status**: **DONE** (19 screenshots placed in `public/projectsimages/caredify/` and automatically bundled into the case study gallery).
- **Impact**: Full visual proof of live ECG waveform charts, telemetry monitoring, BLE connectivity, and patient profiles.

#### REQ-011: Football Manager Screenshots
- **What to provide**: 3 to 5 screenshots showing the match lobby, tactical team editor (formation), squad management, and live transfer market bidding.
- **Where to save**: `my_portfolio/public/projectsimages/football-manager/`.
- **Impact**: Visual evidence of dynamic game UI and live auction mechanics.

---

### C. Medium Priority (Additional Screenshots & Attestations)

#### REQ-012: QuizApp Arena Screenshots
- **What to provide**: 2 to 4 screenshots showing the real-time match countdown timer, trivia questions, and live leaderboard.
- **Where to save**: `my_portfolio/public/projectsimages/quizapp/`.

#### REQ-013: Anti-Scroll Android Screenshots
- **What to provide**: 2 to 3 screenshots showing the Android Accessibility Service activation screen, trigger thresholds, and intervention overlay dialogs.
- **Where to save**: `my_portfolio/public/projectsimages/anti-scroll/`.

#### REQ-014: Caredify Internship Attestation / Certificate (Optional)
- **What to provide**: A redacted PDF of your stage completion certificate from Caredify.
- **Where to save**: `my_portfolio/public/internship_caredify.pdf`.
