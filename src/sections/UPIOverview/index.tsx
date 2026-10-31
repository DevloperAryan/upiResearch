// src/sections/UPIOverview/index.tsx
import { motion } from 'framer-motion';
import { useIntersectionObserver, useAnimatedCounter } from '../../hooks/useIntersectionObserver';
import { upiStatistics } from '../../data/statistics';
import SectionHeader from '../../components/layout/SectionHeader';
import { TrendingUp, Database, Activity, Building2 } from 'lucide-react';

const icons = [TrendingUp, Database, Activity, Building2];
const colors = ['#38BDF8', '#34D399', '#FBBF24', '#60A5FA'];

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
      className="bg-[#11243A] border border-[#24364D] rounded-xl p-6 hover:border-[#38BDF8]/40 hover:shadow-lg hover:shadow-cyan-950/20 transition-all duration-300 group"
    >
      <div
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>

      <div className="flex items-baseline gap-1 mb-1">
        {stat.prefix && (
          <span className="font-mono text-2xl font-bold" style={{ color }}>
            {stat.prefix}
          </span>
        )}
        <span className="font-mono text-3xl font-bold tracking-tight" style={{ color }}>
          {count.toLocaleString()}{stat.suffix || ''}
        </span>
      </div>

      <p className="font-mono text-xs text-[#94A3B8] mb-1">{stat.unit}</p>
      <p className="font-heading text-sm font-semibold text-white mb-3">{stat.label}</p>

      <div className="border-t border-[#24364D] pt-3 space-y-1">
        <p className="font-mono text-[10px] text-[#94A3B8]/70">{stat.period}</p>
        <p className="font-mono text-[10px] text-[#38BDF8]/60">Source: {stat.source}</p>
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
      className="site-section bg-[#0B192B]"
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
          className="bg-[#11243A] border border-[#24364D] rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-2 h-2 rounded-full bg-[#F87171] animate-pulse" />
            <span className="font-mono text-xs text-[#F87171] uppercase tracking-widest">
              Research Context
            </span>
          </div>
          <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
            As UPI transaction volumes surpassed{' '}
            <span className="text-white font-medium">185 billion transactions</span> in FY 2024–25,
            cybercrime reports related to digital payments rose proportionally. The{' '}
            <span className="text-white font-medium">National Cybercrime Helpline 1930</span>{' '}
            received millions of calls, highlighting an urgent awareness and education gap.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
