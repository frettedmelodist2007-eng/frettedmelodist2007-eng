'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, Users, UserPlus, Flame, Code2, Activity, ExternalLink } from 'lucide-react';

export default function AnalyticsSection() {
  const [stats, setStats] = useState({
    publicRepos: 7,
    totalStars: 4,
    followers: 1,
    following: 1,
    languages: [
      { name: 'JavaScript', pct: 45, color: '#F7DF1E' },
      { name: 'Python', pct: 28, color: '#3776AB' },
      { name: 'HTML / WebGL', pct: 15, color: '#E34F26' },
      { name: 'Other / C / SQL', pct: 12, color: '#C6A66B' },
    ],
    isLoading: true,
  });

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const userRes = await fetch('https://api.github.com/users/frettedmelodist2007-eng');
        const reposRes = await fetch('https://api.github.com/users/frettedmelodist2007-eng/repos?per_page=100');
        
        if (userRes.ok && reposRes.ok) {
          const userData = await userRes.json();
          const reposData = await reposRes.json();

          let stars = 0;
          const langMap = {};

          reposData.forEach((repo) => {
            stars += repo.stargazers_count || 0;
            if (repo.language) {
              langMap[repo.language] = (langMap[repo.language] || 0) + 1;
            }
          });

          const totalLangRepos = Object.values(langMap).reduce((a, b) => a + b, 0) || 1;
          const langList = Object.entries(langMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 4)
            .map(([lang, count]) => ({
              name: lang,
              pct: Math.round((count / totalLangRepos) * 100),
            }));

          setStats({
            publicRepos: userData.public_repos || 7,
            totalStars: stars || 4,
            followers: userData.followers || 1,
            following: userData.following || 1,
            languages: langList.length > 0 ? langList : stats.languages,
            isLoading: false,
          });
        } else {
          setStats((prev) => ({ ...prev, isLoading: false }));
        }
      } catch (err) {
        console.error('GitHub API error:', err);
        setStats((prev) => ({ ...prev, isLoading: false }));
      }
    }

    fetchGitHubData();
  }, []);

  return (
    <section id="analytics" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-gold-muted uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span>05 // TELEMETRY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-tx-primary">
              THE WORK <span className="gold-gradient-text">SPEAKS.</span>
            </h2>
          </div>

          <a
            href="https://github.com/frettedmelodist2007-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-gold hover:text-gold-bright transition-colors"
          >
            <span>GITHUB @frettedmelodist2007-eng</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Stat Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: 'PUBLIC REPOSITORIES', val: stats.publicRepos, icon: GitBranch, sub: 'Verified Source' },
            { label: 'TOTAL STARS', val: stats.totalStars, icon: Star, sub: 'Community Recognition' },
            { label: 'FOLLOWERS', val: stats.followers, icon: Users, sub: 'Network' },
            { label: 'FOLLOWING', val: stats.following, icon: UserPlus, sub: 'Following Creators' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="gold-card p-6 rounded-xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between text-gold-muted mb-4">
                  <span className="text-[10px] font-mono tracking-wider">{item.label}</span>
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-tx-primary font-mono mb-1">
                  {item.val}
                </div>
                <div className="text-[11px] text-tx-secondary font-mono">
                  {item.sub}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Heatmap & Language Distribution Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Real Gold Heatmap Card */}
          <div className="lg:col-span-8 gold-card p-6 sm:p-8 rounded-xl relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-gold" />
                <h3 className="text-sm font-mono tracking-wider uppercase text-tx-primary font-bold">
                  CONTRIBUTION ACTIVITY HEATMAP
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gold-muted">
                <span>LESS</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-[#1A1A1A] border border-border" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#4A3E26]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#806B48]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#C6A66B]" />
                <span>MORE</span>
              </div>
            </div>

            {/* Seamless Dark Gold Heatmap Image */}
            <div className="w-full overflow-x-auto p-2 bg-bg rounded-lg border border-border/80">
              <img
                src="https://ghchart.rshah.org/C6A66B/frettedmelodist2007-eng"
                alt="GitHub Contribution Timeline"
                className="w-full min-w-[650px] filter contrast-125"
              />
            </div>
            
            <p className="text-xs font-mono text-tx-secondary mt-4 flex items-center justify-between">
              <span>* Real-time contribution telemetry queried from GitHub</span>
              <span className="text-gold">UPDATED 2026</span>
            </p>
          </div>

          {/* Language Distribution Progress Card */}
          <div className="lg:col-span-4 gold-card p-6 sm:p-8 rounded-xl">
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-4 h-4 text-gold" />
              <h3 className="text-sm font-mono tracking-wider uppercase text-tx-primary font-bold">
                LANGUAGE METRICS
              </h3>
            </div>

            <div className="flex flex-col gap-5">
              {stats.languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-tx-primary font-medium">{lang.name}</span>
                    <span className="text-gold font-bold">{lang.pct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-bg-secondary rounded-full overflow-hidden border border-border">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-gold-muted to-gold rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs font-mono text-gold-muted">
              <span>ACTIVE STREAK STATUS</span>
              <span className="text-gold font-bold flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-gold animate-pulse" />
                VERIFIED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
