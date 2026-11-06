'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles, Orbit, Brain, Car, Radio, HandMetal, FileText } from 'lucide-react';

const PROJECTS = [
  {
    num: '01',
    title: 'PatentRadar.AI',
    tagline: 'AI-Powered Intellectual Property & Novelty Analyzer',
    description: 'An intelligent Next.js application that evaluates invention ideas, checks novelty against patent datasets, discovers technical prior art, and synthesizes patentability reports with AI precision.',
    technologies: ['Next.js 16', 'React 19', 'Framer Motion', 'Tailwind CSS', 'CSV Parser'],
    github: 'https://github.com/frettedmelodist2007-eng/Patent-Radar',
    demo: null,
    icon: Brain,
    badge: 'AI & IP RESEARCH',
  },
  {
    num: '02',
    title: 'Car Price Predictor',
    tagline: 'Machine Learning Used Car Valuation Pipeline',
    description: 'End-to-end regression modeling and exploratory data analysis pipeline evaluating multi-feature automotive datasets to predict vehicle market valuations with high statistical confidence.',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Jupyter Notebook'],
    github: 'https://github.com/frettedmelodist2007-eng/CarPricePredictorV2',
    demo: null,
    icon: Car,
    badge: 'MACHINE LEARNING',
  },
  {
    num: '03',
    title: 'Galaxy Portfolio 3D',
    tagline: 'Real-Time Interactive 3D Digital Portfolio',
    description: 'Immersive developer portfolio featuring a real-time particle-based galaxy background rendered in Three.js, scroll-mapped camera trajectories, glassmorphic UI, and automated GitHub repository fetching.',
    technologies: ['Next.js 14', 'Three.js', 'React Three Fiber', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/frettedmelodist2007-eng/Ayush-R-Portfolio',
    demo: 'https://ayushr-portfolio.vercel.app/',
    icon: Orbit,
    badge: '3D GRAPHICS & WEBGL',
  },
  {
    num: '04',
    title: 'Gesture-Controlled Particles',
    tagline: 'Real-Time Computer Vision Point Cloud Morphing',
    description: 'Computer vision implementation tracking 21 3D hand landmarks via webcam using MediaPipe Hands, dynamically manipulating and morphing 10,000+ Three.js BufferGeometry particles in 3D space.',
    technologies: ['MediaPipe Hands', 'Three.js', 'WebGL', 'HTML5 Canvas', 'JavaScript'],
    github: 'https://github.com/frettedmelodist2007-eng/gesture-controlled-particles---threejs-mediapipe-particles',
    demo: null,
    icon: HandMetal,
    badge: 'COMPUTER VISION',
  },
  {
    num: '05',
    title: 'JARVIS',
    tagline: 'Cognitive Thought-to-Letter Application Synthesizer',
    description: 'Minimalist, socially impactful AI tool designed to convert unstructured human thoughts and natural notes into structured, formal leave applications and official letters.',
    technologies: ['JavaScript', 'AI / NLP', 'Modern Web APIs', 'CSS3'],
    github: 'https://github.com/frettedmelodist2007-eng/JARVIS',
    demo: null,
    icon: FileText,
    badge: 'AI APPLICATION',
  },
  {
    num: '06',
    title: 'Roger-26 Walkie-Talkie',
    tagline: 'Tactile Retro Analog Hardware Audio Simulator',
    description: 'A retro-styled tactical walkie-talkie web application featuring tactile interface elements, channel modulation, frequency tuning, and real-time audio communication capabilities.',
    technologies: ['JavaScript', 'Web Audio API', 'Audio Processing', 'Tactile UI'],
    github: 'https://github.com/frettedmelodist2007-eng/Roger-26',
    demo: null,
    icon: Radio,
    badge: 'WEB AUDIO & UI',
  },
];

export default function ProjectsSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="projects" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-gold-muted uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>04 // ARCHIVE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-tx-primary">
            SELECTED <span className="gold-gradient-text">EXPERIMENTS.</span>
          </h2>
        </div>

        {/* 3D Tilt Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((proj, idx) => {
            const Icon = proj.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={proj.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="gold-card p-7 rounded-2xl flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Glowing Corner Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none group-hover:bg-gold/15 transition-all duration-700" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono text-gold-muted font-bold tracking-widest">
                      {proj.num} // {proj.badge}
                    </span>
                    <div className="p-2.5 rounded-lg bg-bg-secondary border border-border text-gold group-hover:border-gold/50 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-tx-primary tracking-wide group-hover:text-gold transition-colors mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-gold/90 mb-4 tracking-wide">
                    {proj.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-tx-secondary leading-relaxed font-light mb-6">
                    {proj.description}
                  </p>
                </div>

                <div>
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-secondary text-tx-secondary border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/80">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-tx-secondary hover:text-gold transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>REPOSITORY</span>
                    </a>

                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-gold hover:text-gold-bright font-bold tracking-wider uppercase ml-auto"
                      >
                        <span>LIVE DEMO</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

