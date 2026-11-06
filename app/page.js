'use client';

import FloatingNav from '@/components/FloatingNav';
import Hero3D from '@/components/Hero3D';
import AboutSection from '@/components/AboutSection';
import TechSection from '@/components/TechSection';
import ProjectsSection from '@/components/ProjectsSection';
import AnalyticsSection from '@/components/AnalyticsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg text-tx-primary selection:bg-gold selection:text-bg overflow-x-hidden">
      {/* Floating Navigation */}
      <FloatingNav />

      {/* 01: Hero 3D Cinematic Experience */}
      <Hero3D />

      {/* 02: About Section */}
      <AboutSection />

      {/* 03: Technology Showcase */}
      <TechSection />

      {/* 04: Selected Projects */}
      <ProjectsSection />

      {/* 05: Live Analytics & Heatmap */}
      <AnalyticsSection />

      {/* 06: Contact Experience */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

