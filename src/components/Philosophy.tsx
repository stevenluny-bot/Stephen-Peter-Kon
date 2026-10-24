import { Quote } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Philosophy() {
  return (
    <section className="py-20 lg:py-24 bg-black border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
          <Quote className="w-4 h-4 text-white" />
          <span className="text-xs font-mono font-medium uppercase tracking-wider">
            Personal Philosophy
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
          "{PERSONAL_INFO.philosophyHeadline}"
        </h3>

        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto font-normal">
          {PERSONAL_INFO.philosophyBody}
        </p>

        <div className="pt-2 flex items-center justify-center gap-3 text-xs font-mono text-zinc-500">
          <span className="text-zinc-300 font-semibold">{PERSONAL_INFO.fullName}</span>
          <span aria-hidden="true">/</span>
          <span>Kakuma, Kenya</span>
        </div>
      </div>
    </section>
  );
}
