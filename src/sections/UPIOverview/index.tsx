// src/sections/UPIOverview/index.tsx
import { motion } from 'framer-motion';
import { useIntersectionObserver, useAnimatedCounter } from '../../hooks/useIntersectionObserver';
import { upiStatistics } from '../../data/statistics';
import SectionHeader from '../../components/layout/SectionHeader';
import { TrendingUp, Database, Activity, Building2 } from 'lucide-react';

const icons = [TrendingUp, Database, Activity, Building2];
const colors = ['#593ACB', '#0891B2', '#D97706', '#16865D'];

function StatCard({
  stat,
  index,
  isVisible,
}: {
  stat: (typeof upiStatistics)[0];
  index: number;
  isVisible: boolean;
}) {
  const count = useAnimatedCounter(stat.value, 2200, isVisible);
  const Icon = icons[index % icons.length];
  const color = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:border-[#593ACB]/30 hover:shadow-lg hover:shadow-[#593ACB]/5 transition-all duration-300 group"
    >
      <div
        className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
        style={{ backgroundColor: `${color}12` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>

      <div className="flex items-baseline gap-1 mb-1">
        {stat.prefix && (
          <span className="font-heading text-2xl font-bold" style={{ color }}>
            {stat.prefix}
          </span>
        )}
        <span className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color }}>
          {count.toLocaleString()}{stat.suffix || ''}
        </span>
      </div>

      <p className="font-body text-xs font-semibold text-[#475569] mb-1">{stat.unit}</p>
      <h3 className="font-heading text-base font-bold text-[#0F172A] mb-3">{stat.label}</h3>

      <div className="border-t border-[#F1F5F9] pt-3 space-y-1">
        <p className="font-body text-xs text-[#475569] font-medium">{stat.period}</p>
        <p className="font-body text-xs font-semibold" style={{ color }}>Source: {stat.source}</p>
      </div>
    </motion.div>
  );
}

export default function UPIOverview() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="overview"
      ref={ref as React.RefObject<HTMLElement>}
      className="site-section bg-[#F7F8FC]"
      aria-labelledby="overview-heading"
    >
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 01 — UPI AT A GLANCE"
            title="The Scale of India's Digital Payment Revolution"
            subtitle="UPI has become the backbone of India's retail payment infrastructure. Understanding its scale is essential to understanding why it is a high-value target for fraudsters."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {upiStatistics.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} isVisible={isVisible} />
          ))}
        </div>

        {/* Context bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm"
        >
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#DC4545] animate-pulse" aria-hidden="true" />
            <span className="font-body text-xs font-bold text-[#DC4545] uppercase tracking-widest">
              Research Context
            </span>
          </div>
          <p className="font-body text-sm sm:text-base text-[#334155] leading-relaxed">
            As UPI transaction volumes surpassed{' '}
            <strong className="text-[#0F172A] font-extrabold">185 billion transactions</strong> in FY 2024–25,
            cybercrime reports related to digital payments rose proportionally. The{' '}
            <strong className="text-[#0F172A] font-extrabold">National Cybercrime Helpline 1930</strong>{' '}
            received millions of distress calls, highlighting an urgent public education and awareness gap.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
