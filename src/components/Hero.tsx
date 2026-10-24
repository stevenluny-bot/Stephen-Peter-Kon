import { ArrowDown, Database, BarChart3, LineChart, FileSpreadsheet, MapPin, UserCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onExploreClick, onContactClick }: HeroProps) {
  return (
    <section id="top" className="pt-32 pb-16 lg:pt-36 lg:pb-24 border-b border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Introductory label */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-zinc-400 uppercase">
              <span>{PERSONAL_INFO.heroKicker}</span>
              <span className="text-zinc-700">/</span>
              <span className="inline-flex items-center gap-1 text-zinc-400 font-sans">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Main Headline - High-contrast black and white */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight [text-wrap:balance]">
              Turning Data Into <span className="underline decoration-zinc-600 underline-offset-8">Insight</span>. Turning Knowledge Into Impact.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreClick}
                className="px-6 py-3 text-sm font-semibold text-black bg-white hover:bg-zinc-200 active:bg-zinc-300 rounded-md transition-colors inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-white"
              >
                Explore My Work
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onContactClick}
                className="px-6 py-3 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-white"
              >
                Get in Touch
              </button>
            </div>

            {/* Availability status line */}
            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400">
              <UserCheck className="w-4 h-4 text-white" />
              <span>{PERSONAL_INFO.availabilityStatus}</span>
            </div>
          </div>

          {/* Right Column: Professional Profile Picture inside a Circular Mask */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative flex items-center justify-center p-6">
              {/* Circular Mask Frame - Monochrome Styling */}
              <div className="w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 rounded-full overflow-hidden border-2 border-zinc-700 hover:border-white bg-zinc-950 shadow-2xl relative transition-colors duration-300">
                <img
                  src="/assets/stephen_profile.png"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== 'https://i.postimg.cc/HLx2trT6/Professional-Office-Portrait.png') {
                      target.src = 'https://i.postimg.cc/HLx2trT6/Professional-Office-Portrait.png';
                    }
                  }}
                  alt="Stephen Peter Kon — Data Analyst & Learning Facilitator"
                  className="w-full h-full object-cover object-top grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Floating Solid Monochrome Badges */}
              {/* 1. PostgreSQL - Top Left */}
              <div className="absolute top-2 left-0 bg-black/90 border border-zinc-700 px-3 py-1.5 rounded-md shadow-lg flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-mono font-medium text-zinc-300">PostgreSQL</span>
              </div>

              {/* 2. R Analytics - Top Right */}
              <div className="absolute top-2 right-0 bg-black/90 border border-zinc-700 px-3 py-1.5 rounded-md shadow-lg flex items-center gap-2">
                <LineChart className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-mono font-medium text-zinc-300">R Analytics</span>
              </div>

              {/* 3. Tableau - Bottom Left */}
              <div className="absolute bottom-2 left-0 bg-black/90 border border-zinc-700 px-3 py-1.5 rounded-md shadow-lg flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-mono font-medium text-zinc-300">Tableau</span>
              </div>

              {/* 4. Excel - Bottom Right */}
              <div className="absolute bottom-2 right-0 bg-black/90 border border-zinc-700 px-3 py-1.5 rounded-md shadow-lg flex items-center gap-2">
                <FileSpreadsheet className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-mono font-medium text-zinc-300">MS Excel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Full-width Expertise Strip below hero */}
        <div className="mt-14 pt-6 border-t border-zinc-800">
          <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8 text-xs sm:text-sm font-medium text-zinc-400">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Core Capabilities:
            </span>
            {PERSONAL_INFO.expertiseStrip.map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                <span className="text-zinc-200 font-medium">{item}</span>
                {index < PERSONAL_INFO.expertiseStrip.length - 1 && (
                  <span className="text-zinc-700 hidden sm:inline" aria-hidden="true">/</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
