# Portfolio Audit — Error Tracking (`errors.md`)

This document records all functional, architectural, accessibility, SEO, performance, and content issues discovered during the comprehensive audit of the portfolio codebase, along with their resolution details.

---

## 1. Summary of Issues & Resolution Status

| Severity | Total | FIXED | PENDING USER ASSETS | Status Summary |
| :--- | :---: | :---: | :---: | :--- |
| **CRITICAL** | 5 | 5 | 0 | All critical functional, routing, asset, and ARIA issues resolved |
| **HIGH** | 7 | 7 | 0 | All SEO, personal branding, navbar accessibility, and contact issues resolved |
| **MEDIUM** | 7 | 7 | 0 | All security links, status badges, timeline sections, and dead code resolved |
| **LOW** | 3 | 3 | 0 | All footer branding, certification cards, and image sizing resolved |
| **TOTAL** | **22** | **22** | **0** | **100% of discovered codebase audit items verified and fixed** |

---

## 2. Issues Log & Verification Details

### CRITICAL Issues

#### ERR-001 — CRITICAL
- **Severity**: CRITICAL
- **Location**: `src/pages/Experience.jsx`
- **Problem**: The primary experience entry ("Competitive Programming Club (ISIMG)") contained an anchor tag with `href="#"` and `target="_blank"`, accompanied by an absolute overlay span that turned the entire card into an invisible clickable hit area linking to a blank `#` browser tab.
- **Why it matters**: Clicking anywhere on the experience card redirected to a blank broken tab, breaking navigation.
- **Recommended fix**: Remove the broken `#` link and the pseudo-link overlay. Structure the card with clean semantic HTML.
- **Status**: **FIXED**
- **Changes Applied**: Removed broken anchor tag and overlay span; refactored experience into clean, accessible sections for Internship Experience (Caredify), Commercial/Freelance experience (KabaadHub), Academic Education (ISIMG), and Competitive Programming.

---

#### ERR-002 — CRITICAL
- **Severity**: CRITICAL
- **Location**: `src/utils/images.js`
- **Problem**: Typo in Vite image glob pattern: `import.meta.glob("/public/projectsimages/laywer app/*.{...}")` instead of `/public/projectsimages/lawyer-app/*.{...}`.
- **Why it matters**: The Lawyer Application project gallery images failed to resolve, rendering an empty gallery on the project detail page despite 8 valid screenshots existing in the repository.
- **Recommended fix**: Correct the glob path to target `lawyer-app` and verify image bundling.
- **Status**: **FIXED**
- **Changes Applied**: Corrected glob path to target `/public/projectsimages/lawyer-app/*.{png,jpg,jpeg,svg}`; verified all 8 screenshots resolve properly during production Vite build.

---

#### ERR-003 — CRITICAL
- **Severity**: CRITICAL
- **Location**: `src/components/Hero.jsx`
- **Problem**: The only call-to-action (CTA) button on the landing section was "Sponsor My Work" linking to GitHub Sponsors. There were no CTAs to explore projects, contact the developer, view resume/CV, or explore technical skills.
- **Why it matters**: Visitors and recruiters could not immediately take conversion actions to evaluate engineering projects or initiate contact.
- **Recommended fix**: Replace the Sponsor CTA with clear, high-conversion developer CTAs: Primary ("Explore Featured Work"), Secondary ("Get In Touch"), and quick-access links to Resume/CV and GitHub.
- **Status**: **FIXED**
- **Changes Applied**: Implemented "Explore Featured Work" (smooth scrolls to `#projects`), "Get In Touch" (opens accessible `ContactModal`), and direct CV view and GitHub links.

---

#### ERR-004 — CRITICAL
- **Severity**: CRITICAL
- **Location**: `src/components/ProjectCard.jsx`
- **Problem**: Invalid HTML & WAI-ARIA nesting: The outer card wrapper `div` was assigned `role="link"`, `tabIndex={0}`, with `onClick` and `onKeyDown` handlers, while containing nested interactive `<a>` tags (`Github`, `PlayStore`, `Download`, `ExternalLink`). Furthermore, the card click handler used `window.open(projectHref, '_blank')` for internal SPA routes.
- **Why it matters**: Violates WAI-ARIA and HTML5 specifications, breaking screen readers and keyboard navigation (Tab/Enter key).
- **Recommended fix**: Refactor `ProjectCard` to separate the main project link from action buttons without invalid nesting. Use React Router `<Link>` for internal navigation and distinct external buttons with `stopPropagation` and proper ARIA labels.
- **Status**: **FIXED**
- **Changes Applied**: Refactored card into semantic HTML where the title is an accessible `<Link to="...">`, external action buttons are independent `<a target="_blank" rel="noopener noreferrer">` tags with explicit `aria-label`, and full keyboard navigation (Tab/Shift+Tab/Enter) functions cleanly.

---

#### ERR-005 — CRITICAL
- **Severity**: CRITICAL
- **Location**: `src/utils/projects.jsx`
- **Problem**: Unfinished placeholder text in project data: `(Description to be updated with specific details from the repository).` within the `Car4Cra` project entry.
- **Why it matters**: Displaying raw developer placeholder text to visitors and recruiters signals an unfinished, unpolished website.
- **Recommended fix**: Replace placeholder with an accurate, concise technical description based on actual repository contents.
- **Status**: **FIXED**
- **Changes Applied**: Inspected actual project details and replaced placeholder with an accurate technical description of Car4Cra (Symfony PHP MVC platform with MySQL for automotive management and rental workflows).

---

### HIGH Issues

#### ERR-006 — HIGH
- **Severity**: HIGH
- **Location**: `index.html`
- **Problem**: Missing `<meta name="description">`, Open Graph tags, Twitter Card tags, canonical link, structured JSON-LD data; MIME type mismatch on favicon; invalid body Tailwind class syntax.
- **Why it matters**: Sharing links on LinkedIn, WhatsApp, X/Twitter, Discord, or Facebook produced broken preview cards without images or context.
- **Recommended fix**: Implement full Open Graph and Twitter Card metadata, correct favicon MIME types, theme-color, canonical URL, structured Schema.org JSON-LD Person data, and valid body classes.
- **Status**: **FIXED**
- **Changes Applied**: Added complete meta tags, Open Graph / Twitter metadata with `/mypic.png`, valid favicon declarations, Schema.org `Person` JSON-LD schema, canonical URL, and fixed body class to `bg-slate-950 text-slate-100 antialiased`.

---

#### ERR-007 — HIGH
- **Severity**: HIGH
- **Location**: `src/components/Hero.jsx`
- **Problem**: Hardcoded metric counter `15+ Projects Built`.
- **Why it matters**: Violates personal brand authenticity guidelines by approximating/fabricating metrics.
- **Recommended fix**: Remove arbitrary metric counter and replace with authentic technical focus domain badges.
- **Status**: **FIXED**
- **Changes Applied**: Removed `15+` counter; replaced with authentic technical focus badges (Mobile Development, Node.js & NestJS, Real-Time & Socket.IO, BLE Telemetry, Algorithmic Problem Solving).

---

#### ERR-008 — HIGH
- **Severity**: HIGH
- **Location**: `src/components/Hero.jsx` & `src/components/AboutSection.jsx`
- **Problem**: Generic, clichéd phrasing ("dynamic programmer capable of tackling any project", "passionate developer").
- **Why it matters**: Generic buzzwords do not convey specific technical capability or problem-solving strengths to recruiters.
- **Recommended fix**: Rewrite intro and About section to highlight concrete technical competencies in Flutter, Node.js, NestJS, Socket.IO, BLE, databases, and algorithms.
- **Status**: **FIXED**
- **Changes Applied**: Rewrote Hero and About section with concrete, professional language describing real engineering stacks, ISIMG Computer Science graduate degree, and target job opportunities.

---

#### ERR-009 — HIGH
- **Severity**: HIGH
- **Location**: `src/components/Navbar.jsx` & `src/App.jsx`
- **Problem**: Sticky navbar was nested inside a double-padded container, causing layout clipping. Mobile menu button lacked `aria-label`, `aria-expanded`, `aria-controls`, and lacked Escape key / outside click dismiss.
- **Why it matters**: Layout glitches when scrolling and inaccessibility for assistive tech and keyboard users.
- **Recommended fix**: Structure navbar as an accessible floating glass header with full ARIA attributes, active section scroll-spy, keyboard escape listener, and smooth mobile menu interactions.
- **Status**: **FIXED**
- **Changes Applied**: Refactored `Navbar.jsx` into a floating glass header with `aria-label="Main Navigation"`, active section scroll-spy, `aria-expanded`, `aria-controls="mobile-menu"`, keyboard Escape dismiss, outside click dismiss, and a quick contact trigger button.

---

#### ERR-010 — HIGH
- **Severity**: HIGH
- **Location**: `src/components/ProjectsSection.jsx`
- **Problem**: When filtering by skill or status produced 0 results, the page rendered a blank area with no empty-state message; no button to clear active skill filter.
- **Why it matters**: Visitors who clicked a skill or selected conflicting filters saw an unexplained blank screen.
- **Recommended fix**: Add dedicated Empty State component with a "Reset All Filters" button and an inline "✕ Clear Filter" dismiss button.
- **Status**: **FIXED**
- **Changes Applied**: Added active skill banner with "✕ Clear Filter" button and an Empty State UI with "Reset All Filters" button.

---

#### ERR-011 — HIGH
- **Severity**: HIGH
- **Location**: `src/components/FloatingSkills.jsx`
- **Problem**: Swift entry used Java icon; duplicate Godot entry; 27 unconstrained continuous CSS keyframe animations; dead hover rules inside `pointer-events-none`; no `prefers-reduced-motion` compliance.
- **Why it matters**: High continuous CPU/GPU usage on mobile devices and laptops, visual clutter, and lack of motion accessibility support.
- **Recommended fix**: Clean up animation to be subtle, lightweight, fix icon mappings, and respect `prefers-reduced-motion`.
- **Status**: **FIXED**
- **Changes Applied**: Fixed icon mappings, removed duplicate entries, optimized background gradients, and wrapped animation classes in `motion-safe:animate-drift`.

---

#### ERR-012 — HIGH
- **Severity**: HIGH
- **Location**: `src/utils/socialLinks.jsx`, `src/App.jsx`, `src/components/ContactModal.jsx`
- **Problem**: Gmail link used `mail.google.com` web URL which fails for non-Gmail or desktop mail clients; footer social links lacked `aria-label`, `target="_blank"`, and `rel="noopener noreferrer"`.
- **Why it matters**: Broken email contact flow and accessibility failure for screen readers.
- **Recommended fix**: Use universal `mailto:Soufyanrachdiii@gmail.com` protocol, add interactive copy-email feedback ("Copied to clipboard!"), and ensure proper ARIA labels and security attributes on all social links.
- **Status**: **FIXED**
- **Changes Applied**: Updated `socialLinks.jsx` to `mailto:Soufyanrachdiii@gmail.com`; created accessible `ContactModal.jsx` with instant clipboard copying and "Copied to clipboard!" state; added `aria-label`, `target="_blank"`, and `rel="noopener noreferrer"` to all social links.

---

### MEDIUM Issues

#### ERR-013 — MEDIUM
- **Severity**: MEDIUM
- **Location**: `src/components/ProjectsSection.jsx`, `src/components/CertificationsSection.jsx`, `src/components/ProjectCard.jsx`
- **Problem**: External links with `target="_blank"` were missing `rel="noopener noreferrer"`.
- **Why it matters**: Reverse tabnabbing security vulnerability on older browser engines.
- **Recommended fix**: Add `rel="noopener noreferrer"` to all external anchor tags.
- **Status**: **FIXED**
- **Changes Applied**: Added `rel="noopener noreferrer"` to all external links across all components and pages.

---

#### ERR-014 — MEDIUM
- **Severity**: MEDIUM
- **Location**: `src/utils/projects.jsx`
- **Problem**: Harsh red badge `"Dev Stopped"` displayed for completed academic and game projects.
- **Why it matters**: Created the negative impression of broken projects rather than completed academic milestones or prototypes.
- **Recommended fix**: Rename status badge to "Completed Showcase" or "Academic Project" with refined badge styling.
- **Status**: **FIXED**
- **Changes Applied**: Refactored project status flags into "Showcase", "Academic Project", "Open Source", and "Live / Production" with subtle, cohesive badge aesthetics.

---

#### ERR-015 — MEDIUM
- **Severity**: MEDIUM
- **Location**: `src/components/Hero.jsx`
- **Problem**: Profile image `/mypic.png` lacked explicit `width`, `height`, and priority loading attributes.
- **Why it matters**: Caused Cumulative Layout Shift (CLS) during initial page load.
- **Recommended fix**: Add explicit aspect ratio, dimensions, and priority loading attributes.
- **Status**: **FIXED**
- **Changes Applied**: Added `width="192"`, `height="192"`, `loading="eager"`, and `fetchPriority="high"` on the hero profile avatar.

---

#### ERR-016 — MEDIUM
- **Severity**: MEDIUM
- **Location**: `src/components/ExperienceSection.jsx`
- **Problem**: Experience section contained only 1 entry (Competitive Programming Club) and lacked formal Education credentials and Internship / Freelance Software Engineering experience.
- **Why it matters**: Recruiters evaluating candidates need to see academic background, degrees, coursework, and client project delivery.
- **Recommended fix**: Structure page into clear chronological sections: Internship Experience (Caredify), Commercial / Freelance Experience (KabaadHub), Academic Education (ISIMG Bachelor's in CS), and Leadership / Contests (ISIMG CPC).
- **Status**: **FIXED**
- **Changes Applied**: Structured `ExperienceSection.jsx` and `EducationSection.jsx` with verified entries for Caredify (Jan-Jun 2026), KabaadHub mobile/web development, ISIMG Bachelor's in Computer Science, Lycée Route de Gabès Baccalauréat (Mention Bien 15.79), and Competitive Programming Club activities.

---

#### ERR-017 — MEDIUM
- **Severity**: MEDIUM
- **Location**: `src/components/BigTitre.jsx`, `src/components/Paragraph.jsx`, `src/components/Githubsource.jsx`, `src/utils/loadImages.js`, `src/App.css`
- **Problem**: Dead, unused, and redundant code files; `Githubsource.jsx` had conflicting light-theme styling.
- **Why it matters**: Dead code clutters the repository and increases maintenance overhead.
- **Recommended fix**: Verify absence of imports across the codebase and safely remove unused files.
- **Status**: **FIXED**
- **Changes Applied**: Verified via repository grep that none of these 5 files were imported or referenced, and safely deleted them.

---

#### ERR-018 — MEDIUM
- **Severity**: MEDIUM
- **Location**: `src/App.jsx`
- **Problem**: Spotlight `mousemove` listener ran on every pixel movement without throttling or touch device detection.
- **Why it matters**: Drains battery and wastes CPU cycles on mobile touchscreens where hover is unavailable.
- **Recommended fix**: Conditionally bind mousemove listener only on devices supporting `(hover: hover) and (pointer: fine)` with passive event listeners.
- **Status**: **FIXED**
- **Changes Applied**: Added pointer capability check `window.matchMedia('(hover: hover) and (pointer: fine)')` and passive event listener to optimize performance.

---

#### ERR-019 — MEDIUM
- **Severity**: MEDIUM
- **Location**: `src/pages/ProjectDetail.jsx`, `src/components/ProjectCard.jsx`
- **Problem**: Identical 40-line `techLogoMap` dictionary was duplicated across multiple component files.
- **Why it matters**: Violates DRY principles and creates maintenance discrepancies.
- **Recommended fix**: Extract `techLogoMap` into a centralized, shared constant utility.
- **Status**: **FIXED**
- **Changes Applied**: Created `src/utils/techLogos.js` with centralized `techLogoMap` and `getTechLogo` helper; imported across all components.

---

### LOW Issues

#### ERR-020 — LOW
- **Severity**: LOW
- **Location**: `src/App.jsx`
- **Problem**: Footer contained generic template copy: `"Designed in Figma and coded in VS Code. Built with Vite and Tailwind CSS."`
- **Why it matters**: Generic copy from Brittany Chiang's template footer without personal branding.
- **Recommended fix**: Personalize footer with dynamic copyright year and authentic stack details.
- **Status**: **FIXED**
- **Changes Applied**: Updated footer with dynamic current year (`new Date().getFullYear()`), personal branding, quick navigation links, and accessible social icons.

---

#### ERR-021 — LOW
- **Severity**: LOW
- **Location**: `src/components/CertificationsSection.jsx`
- **Problem**: Certification cards displayed minimal metadata (no platform badges, verification indicators, or descriptions).
- **Why it matters**: Presenting verified credentials with platform context enhances credibility.
- **Recommended fix**: Enhance certification cards with platform badges, verified status icons, and clean external link styling.
- **Status**: **FIXED**
- **Changes Applied**: Enhanced cards with verified status indicators, domain badges (Algorithms & C++, Problem Solving, Python Programming), and accessible external credential links.

---

#### ERR-022 — LOW
- **Severity**: LOW
- **Location**: `src/components/SkillsSection.jsx`
- **Problem**: Skill logos lacked explicit width/height ratios and lazy loading attributes.
- **Why it matters**: Minor performance optimization for rendering multiple SVG icons.
- **Recommended fix**: Add standard icon dimensions and lazy loading attributes.
- **Status**: **FIXED**
- **Changes Applied**: Added explicit dimensions (`width="24" height="24"`) and `loading="lazy"` on all SVG logos.
