import { Database, LineChart, BarChart2, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'postgresql-management':
        return <Database className="w-5 h-5 text-white" />;
      case 'data-analytics-r':
        return <LineChart className="w-5 h-5 text-white" />;
      case 'tableau-excel-reporting':
        return <BarChart2 className="w-5 h-5 text-white" />;
      case 'technical-training':
        return <GraduationCap className="w-5 h-5 text-white" />;
      default:
        return <Database className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="text-xs font-mono font-medium tracking-wider text-zinc-400 uppercase">
            Professional Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How I Can Help
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            Collaborating with organizations, teams, and learners to architect reliable data backends, extract empirical insights, and build practical technical capacity.
          </p>
        </div>

        {/* 4 Service Cards Grid - Pure Monochrome */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="p-7 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded bg-black border border-zinc-800 w-fit">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-zinc-500">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wide">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 space-y-2 border-t border-zinc-800">
                  <div className="text-xs font-mono text-zinc-400">Potential Scope &amp; Deliverables:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-zinc-300 focus-visible:outline-2 focus-visible:outline-white transition-colors"
                >
                  <span>Discuss a Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
