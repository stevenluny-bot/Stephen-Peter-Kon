import { useState } from 'react';
import { Database, LineChart, BarChart3, FileSpreadsheet, Check, LayoutGrid, Layers } from 'lucide-react';

interface SkillItem {
  id: 'sql' | 'r' | 'tableau' | 'excel';
  name: string;
  category: string;
  icon: typeof Database;
  title: string;
  description: string;
  competencies: string[];
  appliedContext: string;
}

const SKILLS_DATA: SkillItem[] = [
  {
    id: 'sql',
    name: 'PostgreSQL',
    category: 'Database Management & SQL',
    icon: Database,
    title: 'PostgreSQL & Relational Architecture',
    description:
      'Deep focus on relational modeling, normalization, structured queries, and reliable data backends. Proficient in designing schemas, enforcing data integrity, and retrieving complex datasets efficiently.',
    competencies: [
      'SQL querying, filtering, and multi-table data joins',
      'Relational database concepts, schema design & normalization',
      'Structured storage, primary/foreign keys & integrity constraints',
      'Aggregations, group summaries, and analytical window functions',
      'Data preparation and cleaning for downstream reporting pipelines',
      'Backend database architecture for web applications',
    ],
    appliedContext:
      'PostgreSQL powers player data, competitive tournament brackets, and live results for Stephen\'s flagship project, Elite Gamers Arena.',
  },
  {
    id: 'r',
    name: 'R Analytics',
    category: 'Statistical Programming',
    icon: LineChart,
    title: 'Data Analytics with R',
    description:
      'Transforming raw quantitative observations into structured, decision-ready findings using R. Applying rigorous exploratory analysis, descriptive statistics, and reproducible reporting for educational and operational data.',
    competencies: [
      'Data cleaning, transformation & validation via tidyverse and dplyr',
      'Exploratory data analysis (EDA) for trend and pattern recognition',
      'Statistical summaries, mean, median, variance, and dispersion calculation',
      'Data processing pipelines and reproducible R analysis scripts',
      'Analytical reporting and learner cohort performance evaluation',
      'Evidence-based decision support for education and community operations',
    ],
    appliedContext:
      'Applied in educational learner cohort evaluation, performance distribution analysis, and structured statistical reporting.',
  },
  {
    id: 'tableau',
    name: 'Tableau',
    category: 'Business Intelligence & Reporting',
    icon: BarChart3,
    title: 'Tableau & Visual Analytics',
    description:
      'Designing intuitive, high-clarity visual dashboards that translate complex datasets into actionable narratives for non-technical stakeholders, operational leads, and executive decision-makers.',
    competencies: [
      'Interactive dashboard design with seamless filter propagation',
      'Calculated fields, Level of Detail (LOD) expressions & table calculations',
      'Regional and category-level comparative analytics',
      'Translating multi-source raw datasets into intuitive visual hierarchies',
      'Dashboard layout optimization, usability, and accessibility',
      'Key Performance Indicator (KPI) tracking and trend communication',
    ],
    appliedContext:
      'Utilized for regional performance tracking, institutional metric dashboards, and stakeholder reporting narratives.',
  },
  {
    id: 'excel',
    name: 'MS Excel',
    category: 'Spreadsheet Analysis & Modeling',
    icon: FileSpreadsheet,
    title: 'Microsoft Excel & Spreadsheet Modeling',
    description:
      'Rigorous data validation, formulaic computations, pivot summaries, and staging datasets cleanly before reporting or ingestion into BI pipelines and relational databases.',
    competencies: [
      'Spreadsheet data cleaning, deduplication, and normalization',
      'Lookup and logic modeling (XLOOKUP, INDEX/MATCH, nested IFs)',
      'Pivot table aggregations and multi-dimensional cross-tab summaries',
      'Data validation rules, input masks, and audit control sheets',
      'Structuring raw operational logs for Tableau ingestion',
      'Operational efficiency tracking sheets and automated templates',
    ],
    appliedContext:
      'Used for frontline data collection, cross-verification, audit logging, and rapid exploratory operational summaries.',
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'sql' | 'r' | 'tableau' | 'excel'>('sql');
  const [viewMode, setViewMode] = useState<'tabbed' | 'grid'>('tabbed');

  const activeSkill = SKILLS_DATA.find((s) => s.id === activeTab) || SKILLS_DATA[0];

  return (
    <section id="skills" className="py-20 lg:py-24 border-b border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="text-xs font-mono font-medium tracking-wider text-zinc-400 uppercase">
              Technical Specializations
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Technical Skills
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
              Core competencies in relational database systems, statistical programming, visual analytics, and spreadsheet modeling.
            </p>
          </div>

          {/* View Toggle */}
          <div className="inline-flex items-center p-1 bg-zinc-900 rounded border border-zinc-800 text-xs font-mono self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode('tabbed')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                viewMode === 'tabbed'
                  ? 'bg-white text-black font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Tabs</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white text-black font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
          </div>
        </div>

        {viewMode === 'tabbed' ? (
          <div>
            {/* Tab Selection Bar */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-zinc-900 rounded-lg border border-zinc-800 mb-8 max-w-3xl">
              {SKILLS_DATA.map((skill) => {
                const IconComponent = skill.icon;
                const isActive = activeTab === skill.id;
                return (
                  <button
                    key={skill.id}
                    type="button"
                    onClick={() => setActiveTab(skill.id)}
                    className={`flex-1 min-w-[130px] py-2.5 px-3 rounded text-xs font-medium transition-colors inline-flex items-center justify-center gap-2 ${
                      isActive
                        ? 'bg-white text-black font-semibold shadow-sm'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{skill.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Focused Description Card */}
            <div className="p-6 sm:p-8 rounded-lg bg-zinc-900 border border-zinc-800 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-zinc-800 pb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-black border border-zinc-800 text-white shrink-0 mt-0.5">
                    <activeSkill.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-zinc-400 tracking-wider uppercase">
                      {activeSkill.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {activeSkill.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Description */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Discipline Overview
                </div>
                <p className="text-base text-zinc-300 leading-relaxed max-w-4xl">
                  {activeSkill.description}
                </p>
              </div>

              {/* Competencies 2-Column Grid */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Core Competencies &amp; Technical Scope
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {activeSkill.competencies.map((comp) => (
                    <div
                      key={comp}
                      className="flex items-start gap-3 p-3.5 rounded bg-black border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                    >
                      <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 leading-snug">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applied Context */}
              <div className="p-4 rounded-lg bg-black border border-zinc-800 space-y-1.5">
                <div className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                  Practical Application
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {activeSkill.appliedContext}
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Grid View: All 4 Skills at a glance */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS_DATA.map((skill) => {
              const IconComp = skill.icon;
              return (
                <div
                  key={skill.id}
                  className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded bg-black border border-zinc-800 text-white">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                            {skill.category}
                          </span>
                          <h3 className="text-xl font-bold text-white tracking-tight">
                            {skill.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {skill.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-zinc-800">
                      <div className="text-xs font-mono text-zinc-400 uppercase">
                        Key Competencies
                      </div>
                      <div className="space-y-2">
                        {skill.competencies.slice(0, 4).map((comp) => (
                          <div key={comp} className="flex items-start gap-2 text-xs text-zinc-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                            <span>{comp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-800 text-xs text-zinc-400">
                    <span className="text-white font-medium">Applied: </span>
                    {skill.appliedContext}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
