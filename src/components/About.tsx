import { BookOpen, LineChart, Cpu, Shield, GraduationCap, MapPin } from 'lucide-react';
import { BIOGRAPHY, PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono font-medium tracking-wider text-zinc-400 uppercase">
            Background &amp; Mission
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {BIOGRAPHY.sectionTitle}
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography Prose */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-base leading-relaxed">
            {BIOGRAPHY.paragraphs.map((p, idx) => (
              <p key={idx}>
                {p}
              </p>
            ))}

            {/* Quick credentials callout */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-md bg-zinc-900 border border-zinc-800">
                <div className="flex items-center gap-2 text-white mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">Current Studies</span>
                </div>
                <div className="text-sm font-semibold text-white">B.A. in General Studies</div>
                <div className="text-xs text-zinc-400 mt-0.5">Saint Louis University (via JWL)</div>
              </div>

              <div className="p-4 rounded-md bg-zinc-900 border border-zinc-800">
                <div className="flex items-center gap-2 text-white mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">Based In</span>
                </div>
                <div className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</div>
                <div className="text-xs text-zinc-400 mt-0.5">Community &amp; Global Impact</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Flow Diagram */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-xs font-mono font-medium text-zinc-200 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-white" />
                  Technical Nexus &amp; Focus Areas
                </span>
                <span className="text-[11px] font-mono text-zinc-400">Production Ready</span>
              </div>

              {/* Data Flow Diagram - Monochrome */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-md bg-black border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">01. Relational Ingestion</span>
                    <span className="text-[11px] font-mono text-zinc-400">PostgreSQL</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Structured storage, schema normalization &amp; query optimization.
                  </p>
                </div>

                <div className="flex justify-center -my-1 text-zinc-600">
                  <span className="text-xs font-mono">↓</span>
                </div>

                <div className="p-3.5 rounded-md bg-black border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">02. Analytical Transformation</span>
                    <span className="text-[11px] font-mono text-zinc-400">R &amp; Statistics</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Exploratory data analysis, hypothesis testing &amp; summary metrics.
                  </p>
                </div>

                <div className="flex justify-center -my-1 text-zinc-600">
                  <span className="text-xs font-mono">↓</span>
                </div>

                <div className="p-3.5 rounded-md bg-black border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">03. Visual Translation</span>
                    <span className="text-[11px] font-mono text-zinc-400">Tableau &amp; Excel</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Interactive dashboards, calculated fields &amp; decision reports.
                  </p>
                </div>

                <div className="flex justify-center -my-1 text-zinc-600">
                  <span className="text-xs font-mono">↓</span>
                </div>

                <div className="p-3.5 rounded-md bg-black border border-zinc-700 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">04. Education &amp; Empowerment</span>
                    <span className="text-[11px] font-mono text-zinc-300">JWL Facilitation</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Teaching learners to turn concepts into practical digital outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* "What Drives Me" Subsection */}
        <div className="mt-16 pt-12 border-t border-zinc-800">
          <div className="mb-8">
            <span className="text-xs font-mono font-medium tracking-wider text-zinc-400 uppercase">
              Core Tenets
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
              What Drives Me
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BIOGRAPHY.principles.map((principle, index) => (
              <div
                key={principle.title}
                className="p-6 rounded-md bg-zinc-900 border border-zinc-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-white">
                    0{index + 1}.
                  </span>
                  {index === 0 && <BookOpen className="w-4 h-4 text-zinc-400" />}
                  {index === 1 && <LineChart className="w-4 h-4 text-zinc-400" />}
                  {index === 2 && <Shield className="w-4 h-4 text-zinc-400" />}
                </div>
                <h4 className="text-base font-semibold text-white">
                  {principle.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
