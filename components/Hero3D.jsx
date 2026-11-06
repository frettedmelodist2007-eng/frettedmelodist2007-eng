'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, ChevronDown, Compass, Sparkles } from 'lucide-react';
import Scene3D from './Scene3D';

const ROLES = [
  'AI STUDENT',
  'DEVELOPER',
  'CREATIVE BUILDER',
  'TECH ENTHUSIAST',
];

export default function Hero3D() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Smooth Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="introduction" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-16 px-6 sm:px-12">
      {/* Real 3D Interactive Canvas */}
      <Scene3D />

      {/* Radial vignette overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none z-[1] opacity-70"
           style={{ background: 'radial-gradient(circle at center, transparent 30%, #080808 85%)' }} />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Authentic Profile Portrait with 3D Depth Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center lg:items-start"
        >
          <div className="relative group">
            {/* Ambient Gold Aura */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold to-gold-bright rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
            
            {/* Portrait Frame */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1.5 bg-gradient-to-b from-gold via-border to-bg-surface shadow-2xl overflow-hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-bg-surface">
                <Image
                  src="/assets/profile.png"
                  alt="Ayush R. - Portrait"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Corner Precision Marker */}
            <div className="absolute -bottom-2 right-2 bg-bg-surface border border-gold/40 px-3 py-1 rounded-full text-[11px] font-mono text-gold flex items-center gap-1.5 shadow-lg backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span>ACTIVE // 10°N 76°E</span>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs font-mono text-tx-secondary tracking-widest uppercase">
            <span className="text-gold">B.TECH</span>
            <span className="text-border">&bull;</span>
            <span>ARTIFICIAL INTELLIGENCE</span>
            <span className="text-border">&bull;</span>
            <span>KERALA, INDIA</span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Large Editorial Typography & Dynamic Designation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col text-center lg:text-left"
        >
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs font-mono tracking-[0.25em] text-gold-muted uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-gold" />
            <span>PORTFOLIO // DIGITAL IDENTITY 2026</span>
          </div>

          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-tx-primary leading-none mb-4">
            AYUSH <span className="gold-gradient-text">R.</span>
          </h1>

          {/* Animated Typist Designation */}
          <div className="h-10 flex items-center justify-center lg:justify-start text-lg sm:text-2xl font-mono text-gold mb-4">
            <span className="font-semibold tracking-wider">{displayText}</span>
            <span className="w-2.5 h-6 ml-1.5 bg-gold animate-pulse inline-block" />
          </div>

          {/* Core Signature Headline */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-tx-primary tracking-wide mb-4">
            "IDEAS INTO REALITY."
          </h2>

          <p className="text-base sm:text-lg text-tx-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed font-light mb-8">
            AI student, developer and curious builder exploring the intersection of intelligence, technology and creativity.
          </p>

          {/* Primary Call-to-Actions */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="group relative px-7 py-3.5 bg-gold text-bg font-semibold text-sm tracking-wider uppercase rounded-md overflow-hidden transition-all duration-300 hover:bg-gold-bright hover:shadow-[0_0_25px_rgba(198,166,107,0.4)] flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>EXPLORE MY WORK</span>
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 bg-bg-surface hover:bg-bg-secondary text-tx-primary border border-border hover:border-gold font-medium text-sm tracking-wider uppercase rounded-md transition-all duration-300 flex items-center gap-2 group"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-gold-muted text-xs font-mono tracking-widest uppercase cursor-pointer pointer-events-auto"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span>SCROLL</span>
        <ChevronDown className="w-4 h-4 text-gold" />
      </motion.div>
    </section>
  );
}

