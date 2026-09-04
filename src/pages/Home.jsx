import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';

export default function Home({ onOpenContact }) {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const location = useLocation();

  // Handle direct hash navigation when navigating from /projects/:projectId back to /#section
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="space-y-16 md:space-y-24 pb-12 animate-fade-in">
      {/* 1. Hero Section (#home) */}
      <Hero onOpenContact={onOpenContact} />

      {/* 2. About Section (#about) */}
      <AboutSection />

      {/* 3. Featured Projects & Architecture Section (#projects) */}
      <ProjectsSection
        selectedSkill={selectedSkill}
        onClearSkill={() => setSelectedSkill(null)}
      />

      {/* 4. Professional Experience Section (#experience) */}
      <ExperienceSection />

      {/* 5. Academic Education Section (#education) */}
      <EducationSection />

      {/* 6. Technical Skills Section (#skills) */}
      <SkillsSection
        onSelectSkill={(skill) => setSelectedSkill(skill)}
      />

      {/* 7. Verified Certifications Section (#certifications) */}
      <CertificationsSection />

      {/* 8. Contact Conversion Section (#contact) */}
      <ContactSection />
    </div>
  );
}
