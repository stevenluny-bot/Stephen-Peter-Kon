import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { EXPERIENCES, EDUCATION_ITEMS } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-24 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono font-medium tracking-wider text-zinc-400 uppercase">
            Trajectory &amp; Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience &amp; Education
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            A chronological timeline of educational facilitation, community teaching, academic studies, and accredited technical certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Professional Teaching & Facilitation Experience */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-zinc-800">
              <Briefcase className="w-5 h-5 text-white" />
              <h3 className="text-xl font-bold text-white">
                Professional Experience
              </h3>
            </div>

            {/* Vertical Timeline */}
            <div className="relative pl-6 border-l border-zinc-800 space-y-8 ml-2">
              {EXPERIENCES.map((item) => (
                <div key={item.id} className="relative">
                  {/* Timeline Node */}
                  <div
                    className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                      item.isOngoing
                        ? 'bg-white border-white'
                        : 'bg-black border-zinc-600'
                    }`}
                  />

                  <div className="p-5 rounded-md bg-zinc-900 border border-zinc-800 space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-medium text-white flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      {item.isOngoing && (
                        <span className="text-[11px] font-mono text-white bg-black border border-zinc-700 px-2 py-0.5 rounded">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white">
                        {item.role}
                      </h4>
                      <p className="text-sm text-zinc-300 font-medium">
                        {item.institution}
                      </p>
                      {item.location && (
                        <p className="text-xs text-zinc-400 mt-0.5 font-mono">
                          {item.location}
                        </p>
                      )}
                    </div>

                    <ul className="space-y-1.5 pt-2 border-t border-zinc-800 text-xs text-zinc-300 leading-relaxed">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-white mt-0.5">▪</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Professional Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-zinc-800">
              <GraduationCap className="w-5 h-5 text-white" />
              <h3 className="text-xl font-bold text-white">
                Education &amp; Credentials
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_ITEMS.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 rounded-md bg-zinc-900 border border-zinc-800 space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                        edu.status === 'in_progress'
                          ? 'text-white bg-black border-zinc-700'
                          : 'text-zinc-400 bg-black border-zinc-800'
                      }`}
                    >
                      {edu.status === 'in_progress' ? 'Degree In Progress' : 'Certified'}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white">
                      {edu.credential}
                    </h4>
                    <p className="text-sm text-zinc-300 font-medium">
                      {edu.institution}
                    </p>
                  </div>

                  {edu.note && (
                    <p className="text-xs text-zinc-400 pt-1">
                      {edu.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
