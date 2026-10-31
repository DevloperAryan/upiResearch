// src/sections/ResearchLibrary/index.tsx
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { references } from '../../data/references';
import SectionHeader from '../../components/layout/SectionHeader';
import { ExternalLink, Search, BookOpen, Tag } from 'lucide-react';
import type { ReferenceCategory } from '../../types';

const categoryLabels: Record<ReferenceCategory, string> = {
  'upi-architecture': 'UPI Architecture',
  'digital-fraud': 'Digital Fraud',
  'social-engineering': 'Social Engineering',
  'qr-fraud': 'QR Code Fraud',
  'sim-swapping': 'SIM Swapping',
  'mobile-banking': 'Mobile Banking',
  'cybersecurity-awareness': 'Cybersecurity Awareness',
  regulations: 'Regulations',
};

const typeColors = {
  primary: { color: '#38BDF8', label: 'Primary Source' },
  government: { color: '#34D399', label: 'Government' },
  academic: { color: '#C084FC', label: 'Academic' },
  news: { color: '#FBBF24', label: 'News' },
};

const allCategories = Object.keys(categoryLabels) as ReferenceCategory[];

export default function ResearchLibrary() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<ReferenceCategory | 'all'>('all');

  const filtered = useMemo(() => {
    return references.filter((ref) => {
      const matchCat = activeCategory === 'all' || ref.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        ref.title.toLowerCase().includes(q) ||
        ref.organization.toLowerCase().includes(q) ||
        ref.description.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <section id="references" className="site-section bg-[#0B192B]">
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 11 — REFERENCES & RESEARCH LIBRARY"
            title="Sources and Research Materials"
            subtitle="A curated library of official government, regulatory, and academic sources used in this research. All links verified at time of publication."
          />
        </div>

        {/* Research integrity */}
        <div className="bg-[#38BDF8]/5 border border-[#38BDF8]/15 rounded-xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
            <div>
              <p className="font-mono text-xs text-[#38BDF8] uppercase tracking-widest mb-1">
                Research Integrity Standards
              </p>
              <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
                This library contains only verified sources. No publication titles, authors, URLs, or
                statistics have been fabricated. Primary government and regulatory sources are prioritised.
                Access dates are recorded for all web resources.
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search sources..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#11243A] border border-[#24364D] rounded-lg font-body text-sm text-white placeholder-[#94A3B8]/50 focus:border-[#38BDF8]/40 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-colors ${
                activeCategory === 'all'
                  ? 'bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-[#38BDF8]'
                  : 'border border-[#24364D] text-[#94A3B8] hover:text-[#38BDF8]'
              }`}
            >
              All
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-[#38BDF8]'
                    : 'border border-[#24364D] text-[#94A3B8] hover:text-[#38BDF8]'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <p className="font-mono text-xs text-[#94A3B8] mb-5">
          {filtered.length} source{filtered.length !== 1 ? 's' : ''} found
        </p>

        <div className="space-y-3">
          {filtered.map((ref, i) => {
            const typeConfig = typeColors[ref.type];
            return (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.05, 0.3) }}
                className="bg-[#071426] border border-[#24364D] rounded-xl p-5 hover:border-[#38BDF8]/20 transition-colors group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded border"
                        style={{
                          color: typeConfig.color,
                          borderColor: `${typeConfig.color}25`,
                          backgroundColor: `${typeConfig.color}10`,
                        }}
                      >
                        {typeConfig.label}
                      </span>
                      <div className="flex items-center gap-1">
                        <Tag className="w-3 h-3 text-[#94A3B8]/50" />
                        <span className="font-mono text-[9px] text-[#94A3B8]/60">
                          {categoryLabels[ref.category]}
                        </span>
                      </div>
                    </div>

                    <h4 className="font-heading text-sm font-semibold text-white mb-1 leading-snug">
                      {ref.title}
                    </h4>
                    <p className="font-body text-xs text-[#94A3B8] leading-relaxed mb-3">
                      {ref.description}
                    </p>

                    <div className="flex flex-wrap gap-3 font-mono text-[10px] text-[#94A3B8]/60">
                      <span>{ref.organization}</span>
                      {ref.date && <span>· {ref.date}</span>}
                      <span>· Accessed {ref.accessDate}</span>
                    </div>
                  </div>

                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-2 px-4 py-2 border border-[#24364D] rounded-lg font-mono text-xs text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/30 transition-colors"
                    aria-label={`Open ${ref.title}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Visit Source
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-body text-[#94A3B8]">No sources found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
