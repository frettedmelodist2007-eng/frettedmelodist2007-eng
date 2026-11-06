'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Layout, Wrench, Layers } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'ALL TOOLS', icon: Layers },
  { id: 'programming', label: 'PROGRAMMING', icon: Terminal },
  { id: 'ai', label: 'AI & ML', icon: Cpu },
  { id: 'development', label: 'DEVELOPMENT', icon: Layout },
  { id: 'tools', label: 'WORKFLOW', icon: Wrench },
];

const TECH_ITEMS = [
  // Programming
  { name: 'Python', category: 'programming', tag: 'Core Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', category: 'programming', tag: 'Object Oriented', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C / C++', category: 'programming', tag: 'Systems & Logic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'SQL', category: 'programming', tag: 'Database Queries', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },

  // AI & ML
  { name: 'Artificial Intelligence', category: 'ai', tag: 'Core Domain', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Machine Learning', category: 'ai', tag: 'Predictive Modeling', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'Neural Networks', category: 'ai', tag: 'Deep Architectures', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'MediaPipe / CV', category: 'ai', tag: 'Computer Vision', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },

  // Development
  { name: 'Next.js', category: 'development', tag: 'Full-Stack React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'JavaScript', category: 'development', tag: 'Modern ES6+', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Three.js / WebGL', category: 'development', tag: 'Interactive 3D', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
  { name: 'HTML5 & CSS3', category: 'development', tag: 'Semantic Web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Streamlit', category: 'development', tag: 'Data Applications', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },

  // Tools
  { name: 'Git', category: 'tools', tag: 'Version Control', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', category: 'tools', tag: 'Collaboration', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'VS Code', category: 'tools', tag: 'Primary IDE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Android Studio', category: 'tools', tag: 'Mobile Dev', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
];

export default function TechSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all'
    ? TECH_ITEMS
    : TECH_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="technologies" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-gold-muted uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span>03 // TOOLKIT</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-tx-primary">
              TOOLS OF THE <span className="gold-gradient-text">TRADE.</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-bg-surface border border-border rounded-lg">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-gold text-bg font-bold shadow-md'
                      : 'text-tx-secondary hover:text-tx-primary hover:bg-bg-secondary'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Tilt Grid Cards */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                whileHover={{ y: -4 }}
                className="gold-card p-5 rounded-xl relative group overflow-hidden cursor-default"
              >
                {/* Edge gold sheen */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-bg-secondary p-2 flex items-center justify-center border border-border group-hover:border-gold/50 transition-colors">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-6 h-6 object-contain filter group-hover:brightness-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-gold-muted border border-border/80 px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-tx-primary tracking-wide group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

