'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Cpu, Camera, Music, Sparkles, MapPin, GraduationCap } from 'lucide-react';

const INTERESTS = [
  { icon: Brain, label: 'Artificial Intelligence', desc: 'Neural architectures & probabilistic reasoning' },
  { icon: Code, label: 'Software Engineering', desc: 'Scalable full-stack systems & API engineering' },
  { icon: Cpu, label: 'Creative Technology', desc: 'Real-time 3D graphics & computer vision' },
  { icon: Camera, label: 'Photography', desc: 'Composition, light dynamics & visual storytelling' },
  { icon: Music, label: 'Music & Guitar', desc: 'Harmonics, acoustic resonance & auditory design' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-gold-muted uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>02 // PERSPECTIVE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-tx-primary">
            BEYOND THE <span className="gold-gradient-text">CODE.</span>
          </h2>
        </div>

        {/* Layered Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-bg-surface border border-border p-8 sm:p-10 rounded-xl relative overflow-hidden group hover:border-gold/50 transition-colors"
          >
            {/* Subtle Gold Ambient Corner Light */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2 text-xs font-mono text-gold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" />
              <span>PHILOSOPHY // CORE INQUIRY</span>
            </div>

            <p className="text-xl sm:text-2xl font-light text-tx-primary leading-relaxed mb-6">
              "I'm fascinated by how technology can turn ambitious ideas into practical experiences. My interests span Artificial Intelligence, Machine Learning, software development, automation and creative technology."
            </p>

            <p className="text-base text-tx-secondary leading-relaxed font-normal mb-8">
              I enjoy learning by building, experimenting with new tools and solving problems that have real-world applications. Every project is an opportunity to turn complex algorithmic architectures into fluid, human-centric realities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-border/60">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-bg-secondary border border-border text-gold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gold-muted uppercase">DEGREE PROGRAM</div>
                  <div className="text-sm font-medium text-tx-primary">B.Tech Artificial Intelligence</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-bg-secondary border border-border text-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gold-muted uppercase">BASE LOCATION</div>
                  <div className="text-sm font-medium text-tx-primary">Kerala, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Curated Interests Index */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="text-xs font-mono text-gold tracking-widest uppercase mb-1">
              <span>CURATED PURSUITS</span>
            </div>

            {INTERESTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="p-4 rounded-lg bg-bg-surface/60 border border-border hover:border-gold hover:bg-bg-surface transition-all flex items-center gap-4 group cursor-default"
                >
                  <div className="p-2.5 rounded-md bg-bg border border-border/80 text-gold group-hover:scale-110 group-hover:text-gold-bright transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-tx-primary tracking-wide group-hover:text-gold transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-xs text-tx-secondary mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
