'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, ArrowUpRight, Copy, Check } from 'lucide-react';

const CONTACTS = [
  {
    name: 'Personal Portfolio',
    handle: 'ayushr-portfolio.vercel.app',
    url: 'https://ayushr-portfolio.vercel.app/',
    icon: ArrowUpRight,
    isExternal: true,
  },
  {
    name: 'GitHub',
    handle: '@frettedmelodist2007-eng',
    url: 'https://github.com/frettedmelodist2007-eng',
    icon: Github,
    isExternal: true,
  },
  {
    name: 'LinkedIn',
    handle: 'ayush-r-0ab1a5378',
    url: 'https://www.linkedin.com/in/ayush-r-0ab1a5378',
    icon: Linkedin,
    isExternal: true,
  },
  {
    name: 'Instagram',
    handle: '@fretted_melodist',
    url: 'https://instagram.com/fretted_melodist',
    icon: Instagram,
    isExternal: true,
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'frettedmelodist2007@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-gold-muted uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>06 // DIALOGUE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-tx-primary">
            LET'S BUILD <span className="gold-gradient-text">SOMETHING.</span>
          </h2>
        </div>

        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Email Card */}
          <div className="lg:col-span-6 gold-card p-8 sm:p-10 rounded-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-gold uppercase tracking-wider mb-4">
                <Mail className="w-4 h-4" />
                <span>DIRECT CORRESPONDENCE</span>
              </div>

              <h3 className="text-2xl font-bold text-tx-primary mb-3">
                Have an inquiry or project proposal?
              </h3>
              <p className="text-sm text-tx-secondary font-light leading-relaxed mb-8">
                I am always open to exploring Artificial Intelligence research, software engineering challenges, creative computing collaborations, and technical opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-border">
              <a
                href={`mailto:${email}`}
                className="flex-1 py-3 px-5 bg-gold text-bg font-bold text-xs font-mono tracking-widest uppercase rounded-lg hover:bg-gold-bright transition-colors text-center"
              >
                SEND DIRECT EMAIL
              </a>

              <button
                onClick={copyEmail}
                className="py-3 px-4 bg-bg-secondary hover:bg-bg-surface text-tx-primary border border-border hover:border-gold rounded-lg transition-colors flex items-center justify-center gap-2 text-xs font-mono"
              >
                {copied ? <Check className="w-4 h-4 text-gold" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>

          {/* Social Channels Network */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CONTACTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="gold-card p-6 rounded-xl group flex flex-col justify-between hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-bg-secondary border border-border text-gold group-hover:border-gold/50 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-border group-hover:text-gold transition-colors" />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-tx-primary group-hover:text-gold transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs font-mono text-tx-secondary mt-1">
                      {item.handle}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
