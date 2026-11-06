'use client';

export default function Footer() {
  return (
    <footer className="py-16 px-6 sm:px-12 max-w-7xl mx-auto border-t border-border flex flex-col items-center justify-center text-center gap-6">
      {/* Animated Astrolabe Accent */}
      <div className="w-10 h-10 relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-border border-dashed animate-spin-slow" />
        <div className="w-4 h-4 border border-gold rotate-45 animate-pulse-subtle" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-mono tracking-widest text-gold uppercase font-bold">
          "DESIGNED WITH CURIOSITY. BUILT WITH CODE."
        </p>
        <p className="text-xs font-mono text-tx-secondary tracking-wider">
          AYUSH R. &copy; 2026 &bull; KERALA, INDIA &bull; ALL RIGHTS RESERVED
        </p>
      </div>

      <div className="flex items-center gap-4 text-xs font-mono text-gold-muted mt-2">
        <a href="#introduction" className="hover:text-gold transition-colors">TOP &uarr;</a>
        <span>&bull;</span>
        <a href="https://ayushr-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">MAIN PORTFOLIO ↗</a>
        <span>&bull;</span>
        <a href="https://github.com/frettedmelodist2007-eng" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">GITHUB ↗</a>
      </div>
    </footer>
  );
}
