'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'introduction', num: '01', label: 'INTRODUCTION' },
  { id: 'about', num: '02', label: 'ABOUT' },
  { id: 'technologies', num: '03', label: 'TECHNOLOGIES' },
  { id: 'projects', num: '04', label: 'PROJECTS' },
  { id: 'analytics', num: '05', label: 'ANALYTICS' },
  { id: 'contact', num: '06', label: 'CONTACT' },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Floating Glass Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 sm:px-12 py-4 flex items-center justify-between ${
          isScrolled
            ? 'bg-bg/85 backdrop-blur-md border-b border-border/80 shadow-2xl py-3.5'
            : 'bg-transparent'
        }`}
      >
        <button
          onClick={() => scrollTo('introduction')}
          className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
        >
          <span className="w-2 h-2 rounded-full bg-gold group-hover:scale-125 transition-transform" />
          <span className="font-mono text-sm tracking-widest text-tx-primary font-bold group-hover:text-gold transition-colors">
            AYUSH R.
          </span>
          <span className="text-[11px] font-mono text-gold-muted hidden sm:inline-block ml-2 border-l border-border pl-2">
            AI &bull; CREATIVE DEV
          </span>
        </button>

        {/* Center Desktop Navigation Pills */}
        <nav className="hidden lg:flex items-center gap-1 bg-bg-surface/80 border border-border/80 rounded-full px-3 py-1.5 backdrop-blur-lg shadow-lg">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3.5 py-1 text-[11px] font-mono tracking-wider transition-colors rounded-full ${
                  isActive ? 'text-bg font-bold' : 'text-tx-secondary hover:text-tx-primary'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gold rounded-full z-0 shadow-[0_0_12px_rgba(198,166,107,0.5)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="opacity-70 text-[10px]">{item.num}</span>
                  <span>{item.label}</span>
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://ayushr-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-gold hover:text-gold-bright tracking-wider uppercase border border-gold/30 hover:border-gold px-3.5 py-1.5 rounded-full transition-all"
          >
            <span>PORTFOLIO</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md bg-bg-surface border border-border text-tx-primary hover:text-gold transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-16 z-40 bg-bg-secondary/95 backdrop-blur-xl border-b border-border p-6 shadow-2xl lg:hidden"
        >
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex items-center justify-between p-3 rounded-md text-sm font-mono tracking-wider transition-all text-left ${
                  activeSection === item.id
                    ? 'bg-gold/15 text-gold border-l-2 border-gold font-bold'
                    : 'text-tx-secondary hover:text-tx-primary hover:bg-bg-surface'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-gold-muted">{item.num}</span>
              </button>
            ))}
            <div className="pt-4 border-t border-border mt-2">
              <a
                href="https://ayushr-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-gold text-bg font-semibold text-xs font-mono tracking-widest uppercase rounded-md"
              >
                <span>OPEN MAIN PORTFOLIO ↗</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Floating Vertical Desktop Timeline Indicator */}
      <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 pointer-events-none">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <div
              key={item.id}
              className={`flex items-center gap-2 transition-all duration-300 pointer-events-auto cursor-pointer ${
                isActive ? 'opacity-100 scale-105' : 'opacity-40 hover:opacity-80'
              }`}
              onClick={() => scrollTo(item.id)}
            >
              <span className={`text-[10px] font-mono tracking-widest uppercase transition-colors ${
                isActive ? 'text-gold font-bold' : 'text-tx-secondary'
              }`}>
                {item.num} // {item.label}
              </span>
              <span className={`w-2.5 h-[1.5px] transition-all ${
                isActive ? 'w-6 bg-gold shadow-[0_0_8px_#C6A66B]' : 'bg-border'
              }`} />
            </div>
          );
        })}
      </div>
    </>
  );
}
