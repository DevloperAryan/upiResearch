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
  primary: { color: '#593ACB', bg: '#F0EEFA', label: 'Primary Source' },
  government: { color: '#16865D', bg: '#F0FFF8', label: 'Government' },
  academic: { color: '#0891B2', bg: '#EFF8FA', label: 'Academic' },
  news: { color: '#D97706', bg: '#FFFBEB', label: 'Official Advisory' },
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
    <section id="references" className="site-section bg-white" aria-labelledby="references-heading">
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 11 — REFERENCES & RESEARCH LIBRARY"
            title="Curated Sources & Legal Documentation"
            subtitle="A curated bibliography of official government circulars, NPCI frameworks, and peer-reviewed cybersecurity literature. All links verified for academic authenticity."
            accentColor="#593ACB"
          />
        </div>

        {/* Research integrity notice */}
        <div className="bg-[#F7F8FC] border border-[#E5E7EB] rounded-2xl p-5 mb-8 shadow-sm">
          <div className="flex items-start gap-3.5">
            <BookOpen className="w-5 h-5 text-[#593ACB] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-body text-xs text-[#593ACB] uppercase tracking-widest font-bold mb-1">
                Academic Rigour & Transparency Standards
              </p>
              <p className="font-body text-sm text-[#475569] leading-relaxed">
                Every citation referenced in this symposium study represents authentic published data issued by statutory regulators (RBI, NPCI, CERT-In, MHA). Access dates are permanently logged.
              </p>
            </div>
          </div>
        </div>

        {/* Filters and Search form */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <label htmlFor="reference-search" className="sr-only">
              Search citations by keyword, agency, or title
            </label>
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" aria-hidden="true" />
            <input
              id="reference-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by keywords, RBI, NPCI, or title..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#CBD5E1] rounded-xl font-body text-sm text-[#172033] placeholder-[#94A3B8] focus:border-[#593ACB] focus:outline-none focus:ring-2 focus:ring-[#593ACB]/15 transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter citations by topic">
            <button
              type="button"
              aria-pressed={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-2 rounded-xl font-body text-xs font-semibold transition-all focus-visible:outline-2 focus-visible:outline-[#593ACB] ${
                activeCategory === 'all'
                  ? 'bg-[#593ACB] text-white shadow-sm'
                  : 'bg-white border border-[#E5E7EB] text-[#475569] hover:border-[#593ACB]/30 hover:text-[#593ACB]'
              }`}
            >
              All Categories
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl font-body text-xs font-semibold transition-all focus-visible:outline-2 focus-visible:outline-[#593ACB] ${
                  activeCategory === cat
                    ? 'bg-[#593ACB] text-white shadow-sm'
                    : 'bg-white border border-[#E5E7EB] text-[#475569] hover:border-[#593ACB]/30 hover:text-[#593ACB]'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic results count */}
        <p className="font-body text-xs font-semibold text-[#475569] mb-5" aria-live="polite">
          Showing {filtered.length} verified citation{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Bibliography items */}
        <div className="space-y-3.5" role="list">
          {filtered.map((ref, i) => {
            const typeConfig = typeColors[ref.type];
            return (
              <motion.div
                key={ref.id}
                role="listitem"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.04, 0.25) }}
                className="bg-[#F7F8FC] border border-[#E5E7EB] rounded-2xl p-5 hover:border-[#593ACB]/30 hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                      <span
                        className="font-body text-xs uppercase tracking-wider px-3 py-1 rounded-full font-bold border"
                        style={{
                          color: typeConfig.color,
                          backgroundColor: typeConfig.bg,
                          borderColor: `${typeConfig.color}25`,
                        }}
                      >
                        {typeConfig.label}
                      </span>
                      <div className="flex items-center gap-1.5 text-[#475569]">
                        <Tag className="w-3.5 h-3.5 text-[#593ACB]" aria-hidden="true" />
                        <span className="font-body text-xs font-semibold">
                          {categoryLabels[ref.category]}
                        </span>
                      </div>
                    </div>

                    <h4 className="font-heading text-base sm:text-lg font-bold text-[#0F172A] mb-1.5 leading-snug">
                      {ref.title}
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-[#334155] leading-relaxed mb-3">
                      {ref.description}
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs text-[#475569] font-medium">
                      <span className="text-[#0F172A] font-bold">{ref.organization}</span>
                      {ref.date && <span>· Published: {ref.date}</span>}
                      <span>· Verified on: {ref.accessDate}</span>
                    </div>
                  </div>

                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-[#CBD5E1] rounded-xl font-body text-xs font-semibold text-[#172033] hover:text-[#593ACB] hover:border-[#593ACB] hover:bg-[#F0EEFA]/50 transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-[#593ACB]"
                    aria-label={`Open primary document: ${ref.title} in new tab`}
                  >
                    <span>View Source</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center bg-[#F7F8FC] border border-[#E5E7EB] rounded-2xl" role="status">
            <p className="font-heading text-base font-bold text-[#172033] mb-1">No references match your query</p>
            <p className="font-body text-xs text-[#475569]">Try refining your search terms or clearing the category filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
