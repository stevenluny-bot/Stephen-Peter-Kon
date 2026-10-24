import { useState } from 'react';
import { Gamepad2, Users, Trophy, ShieldCheck, Layers, CheckCircle2, X, Clock } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  const [selectedProjectModal, setSelectedProjectModal] = useState<string | null>(null);
  const featuredProject = PROJECTS.find((p) => p.isFeatured) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-20 lg:py-24 border-b border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="text-xs font-mono font-medium tracking-wider text-zinc-400 uppercase">
            Flagship Engineering &amp; Platform Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Selected Work
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            Bridging web development, relational database storage, and operational administration into functional digital platforms.
          </p>
        </div>

        {/* Flagship Project: Elite Gamers Arena */}
        <div className="rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden mb-14">
          <div className="p-7 sm:p-9 space-y-7">
            {/* Top Tagline & Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                  Featured Project · Gaming Technology
                </span>
              </div>
              <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                <span>PostgreSQL</span>
                <span aria-hidden="true">/</span>
                <span>HTML5 &amp; CSS3</span>
                <span aria-hidden="true">/</span>
                <span>JavaScript</span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-2 max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {featuredProject.title}
              </h3>
              <p className="text-base text-zinc-300 leading-relaxed">
                {featuredProject.description}
              </p>
            </div>

            {/* Problem & Technical Solution Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="p-5 rounded-md bg-black border border-zinc-800 space-y-1.5">
                <div className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                  The Problem
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {featuredProject.problem}
                </p>
              </div>

              <div className="p-5 rounded-md bg-black border border-zinc-800 space-y-1.5">
                <div className="text-xs font-mono text-white font-semibold uppercase tracking-wider">
                  The Technical Approach
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {featuredProject.solution}
                </p>
              </div>
            </div>

            {/* Architecture Preview Box */}
            <div className="rounded-md bg-black border border-zinc-800 p-6 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-zinc-900 text-white border border-zinc-800">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Elite Gamers Arena — Tournament Hub Architecture
                    </h4>
                    <p className="text-xs text-zinc-400">
                      PostgreSQL Relational Core &amp; Web Administration Console
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProjectModal(featuredProject.id)}
                  className="px-3 py-1.5 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded transition-colors inline-flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5 text-white" />
                  <span>Inspect System Architecture</span>
                </button>
              </div>

              {/* 3 Simple Feature Modules */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded bg-zinc-900 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-white">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-mono font-semibold">1. Participant Pipeline</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Verification workflow capturing gamer tags, team rosters, and seed ratings into PostgreSQL.
                  </p>
                </div>

                <div className="p-4 rounded bg-zinc-900 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-white">
                    <Trophy className="w-4 h-4" />
                    <span className="text-xs font-mono font-semibold">2. Bracket Engine</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Knockout and round-robin scheduling algorithms with automatic match pairing and tiebreakers.
                  </p>
                </div>

                <div className="p-4 rounded bg-zinc-900 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-white">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-mono font-semibold">3. Verified Standings</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Arbiter score-signing preventing unauthorized score adjustments and ensuring live leaderboards.
                  </p>
                </div>
              </div>

              {/* Key Implementation Highlights */}
              <div className="pt-1">
                <div className="text-xs font-mono text-zinc-400 mb-2.5">Key Competencies Demonstrated:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {featuredProject.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary / Roadmap Projects Architecture */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">
              Upcoming &amp; Additional Projects
            </h3>
            <span className="text-xs font-mono text-zinc-500">
              In Development / Roadmap
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="p-5 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-white uppercase tracking-wide">
                      {project.category.split('·')[0].trim()}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                      <Clock className="w-3 h-3 text-zinc-500" />
                      In Development
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white">
                    {project.title}
                  </h4>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-zinc-300 bg-black px-2 py-0.5 rounded border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal: Detailed System Architecture */}
      {selectedProjectModal === 'elite-gamers-arena' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div>
                <h4 className="text-lg font-bold text-white">
                  Elite Gamers Arena · Technical Schema &amp; Data Model
                </h4>
                <p className="text-xs text-zinc-400 font-mono">
                  PostgreSQL Entity Relationship &amp; Workflow Overview
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProjectModal(null)}
                className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Close architecture modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs font-mono text-zinc-300">
              <div className="p-4 rounded bg-black border border-zinc-800 space-y-2">
                <div className="text-white font-bold uppercase">Database Entities:</div>
                <ul className="list-disc list-inside space-y-1 text-zinc-400 font-sans text-xs">
                  <li><strong className="font-mono text-white">players</strong> (id, gamer_tag, contact_email, seed_rank, created_at)</li>
                  <li><strong className="font-mono text-white">tournaments</strong> (id, title, game_title, format, max_teams, status)</li>
                  <li><strong className="font-mono text-white">matches</strong> (id, tournament_id, round_number, team_a, team_b, score_a, score_b, arbiter_sign)</li>
                  <li><strong className="font-mono text-white">leaderboards</strong> (tournament_id, player_id, win_count, loss_count, differential)</li>
                </ul>
              </div>

              <div className="p-4 rounded bg-black border border-zinc-800 space-y-1 font-sans">
                <div className="text-white font-bold font-mono uppercase text-xs">Administrative Integrity:</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  PostgreSQL constraints enforce unique player registration, bracket progression gates, and immutable match result auditing to guarantee competitive integrity.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProjectModal(null)}
                className="px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded transition-colors"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
