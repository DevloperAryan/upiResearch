// src/sections/ThreatExplorer/index.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { threats } from '../../data/threats';
import SectionHeader from '../../components/layout/SectionHeader';
import {
  AlertTriangle,
  ChevronRight,
  Eye,
  Brain,
  ShieldAlert,
  Zap,
  Target,
} from 'lucide-react';
import type { Threat } from '../../types';

const riskColors = {
  critical: { bg: '#DC4545', text: '#DC4545', border: '#DC4545' },
  high: { bg: '#D97706', text: '#D97706', border: '#D97706' },
  medium: { bg: '#0891B2', text: '#0891B2', border: '#0891B2' },
};

function AttackFlowDiagram({ threat }: { threat: Threat }) {
  const actorColors = { attacker: '#DC4545', victim: '#D97706', system: '#0891B2' };

  return (
    <div className="space-y-2" role="list" aria-label="Step-by-step attack progression">
      {threat.attackFlow.map((step, i) => (
        <motion.div
          key={step.id}
          role="listitem"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08 }}
          className="flex items-start gap-3.5"
        >
          <div className="flex flex-col items-center shrink-0" aria-hidden="true">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0"
              style={{
                backgroundColor: `${actorColors[step.type]}15`,
                border: `1.5px solid ${actorColors[step.type]}40`,
                color: actorColors[step.type],
              }}
            >
              {step.id}
            </div>
            {i < threat.attackFlow.length - 1 && (
              <div className="w-0.5 h-6 mt-1" style={{ backgroundColor: `${actorColors[step.type]}30` }} />
            )}
          </div>
          <div className="flex-1 pb-2">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="font-body text-[10px] uppercase tracking-wider font-bold"
                style={{ color: actorColors[step.type] }}
              >
                {step.actor}
              </span>
              <span className="font-mono text-xs text-[#94A3B8]" aria-hidden="true">→</span>
              <span className="font-body text-xs font-bold text-[#172033]">{step.action}</span>
            </div>
            <p className="font-body text-xs text-[#475569] leading-relaxed">{step.detail}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ThreatDetail({ threat }: { threat: Threat }) {
  const [tab, setTab] = useState<'overview' | 'flow' | 'prevention'>('overview');
  const riskColor = riskColors[threat.riskLevel];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'flow', label: 'Attack Flow', icon: Zap },
    { id: 'prevention', label: 'Prevention', icon: ShieldAlert },
  ] as const;

  return (
    <div
      id={`threat-panel-${threat.id}`}
      role="tabpanel"
      aria-labelledby={`threat-tab-${threat.id}`}
      className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden h-full shadow-sm"
    >
      {/* Header */}
      <div className="p-6 border-b border-[#F3F4F6]">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <span
              className="font-body text-[10px] uppercase tracking-wider mb-1 block font-bold"
              style={{ color: riskColor.text }}
            >
              {threat.riskLevel} severity · {threat.category}
            </span>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#172033]">{threat.title}</h3>
          </div>
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-full shrink-0"
            style={{ backgroundColor: `${riskColor.bg}12`, border: `1px solid ${riskColor.border}30` }}
            aria-label={`Risk level: ${threat.riskLevel}`}
          >
            <AlertTriangle className="w-3.5 h-3.5" style={{ color: riskColor.text }} aria-hidden="true" />
            <span className="font-body text-[11px] font-bold uppercase" style={{ color: riskColor.text }}>
              {threat.riskLevel}
            </span>
          </div>
        </div>
        <p className="font-body text-sm text-[#475569] leading-relaxed">{threat.description}</p>
      </div>

      {/* Tabs list */}
      <div className="flex border-b border-[#F3F4F6]" role="tablist" aria-label="Threat details tabs">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isSelected = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${threat.id}-${t.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${threat.id}-${t.id}`}
              onClick={() => setTab(t.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-body font-semibold uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-[#593ACB] ${
                isSelected
                  ? 'text-[#593ACB] border-b-2 border-[#593ACB] bg-[#F0EEFA]/40'
                  : 'text-[#64748B] hover:text-[#172033] hover:bg-[#F9FAFB]'
              }`}
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="p-6 min-h-[380px]">
        <AnimatePresence mode="wait">
          {tab === 'overview' && (
            <motion.div
              key="overview"
              id={`panel-${threat.id}-overview`}
              role="tabpanel"
              aria-labelledby={`tab-${threat.id}-overview`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <Brain className="w-4 h-4 text-[#D97706]" aria-hidden="true" />
                  <h4 className="font-body text-xs text-[#D97706] uppercase tracking-widest font-bold">
                    Psychological Manipulation Vectors
                  </h4>
                </div>
                <ul className="space-y-2">
                  {threat.psychologicalTactics.map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#D97706] font-bold mt-0.5 shrink-0" aria-hidden="true">›</span>
                      <span className="font-body text-xs text-[#334155] leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <Eye className="w-4 h-4 text-[#DC4545]" aria-hidden="true" />
                  <h4 className="font-body text-xs text-[#DC4545] uppercase tracking-widest font-bold">
                    Critical Warning Signs (Red Flags)
                  </h4>
                </div>
                <ul className="space-y-2">
                  {threat.warningsigns.map((w, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#DC4545] font-bold mt-0.5 shrink-0" aria-hidden="true">⚠</span>
                      <span className="font-body text-xs text-[#334155] leading-relaxed">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <Target className="w-4 h-4 text-[#475569]" aria-hidden="true" />
                  <h4 className="font-body text-xs text-[#475569] uppercase tracking-widest font-bold">
                    Potential Consequences
                  </h4>
                </div>
                <ul className="space-y-2">
                  {threat.consequences.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#64748B] font-bold mt-0.5 shrink-0" aria-hidden="true">•</span>
                      <span className="font-body text-xs text-[#475569] leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {tab === 'flow' && (
            <motion.div
              key="flow"
              id={`panel-${threat.id}-flow`}
              role="tabpanel"
              aria-labelledby={`tab-${threat.id}-flow`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <p className="font-body text-xs text-[#172033] uppercase tracking-widest mb-4 font-bold">
                Sequential Attack Path
              </p>
              <AttackFlowDiagram threat={threat} />
            </motion.div>
          )}

          {tab === 'prevention' && (
            <motion.div
              key="prevention"
              id={`panel-${threat.id}-prevention`}
              role="tabpanel"
              aria-labelledby={`tab-${threat.id}-prevention`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <p className="font-body text-xs text-[#16865D] uppercase tracking-widest mb-4 font-bold">
                Actionable Defense & Verification Rules
              </p>
              <ul className="space-y-3.5">
                {threat.prevention.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full bg-[#16865D]/15 border border-[#16865D]/30 flex items-center justify-center shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <span className="font-body text-[10px] text-[#16865D] font-bold">{i + 1}</span>
                    </div>
                    <span className="font-body text-sm text-[#334155] leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-[#F0FFF8] border border-[#16865D]/25 rounded-xl">
                <p className="font-body text-xs text-[#16865D] uppercase tracking-widest mb-1.5 font-bold">
                  Immutable UPI Rule
                </p>
                <p className="font-body text-xs text-[#172033] font-medium leading-relaxed">
                  UPI PIN is strictly an <strong>outward authorization key</strong>. You never need to enter your PIN or OTP to receive money, cashbacks, or refunds.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ThreatExplorer() {
  const [activeThreat, setActiveThreat] = useState(0);

  return (
    <section id="threats" className="site-section bg-[#F7F8FC]" aria-labelledby="threats-heading">
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 03 — THREAT INTELLIGENCE CENTER"
            title="Five Major UPI Fraud Categories"
            subtitle="An in-depth analysis of the primary social engineering and technical attack vectors targeting UPI users in India."
            accentColor="#DC4545"
          />
        </div>

        <div className="grid lg:grid-cols-[minmax(15rem,18.5rem)_minmax(0,1fr)] gap-6">
          {/* Threat category navigation with role="tablist" */}
          <div className="flex flex-col gap-2.5" role="tablist" aria-label="Fraud threat categories" aria-orientation="vertical">
            {threats.map((threat, i) => {
              const riskColor = riskColors[threat.riskLevel];
              const isActive = activeThreat === i;
              return (
                <button
                  key={threat.id}
                  type="button"
                  role="tab"
                  id={`threat-tab-${threat.id}`}
                  aria-selected={isActive}
                  aria-controls={`threat-panel-${threat.id}`}
                  onClick={() => setActiveThreat(i)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#593ACB] ${
                    isActive
                      ? 'bg-white border-[#593ACB]/40 shadow-md shadow-[#593ACB]/10 ring-1 ring-[#593ACB]/20'
                      : 'bg-white/80 border-[#E5E7EB] hover:border-[#593ACB]/30 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className="font-body text-[10px] uppercase tracking-wider font-bold"
                      style={{ color: riskColor.text }}
                    >
                      {threat.riskLevel}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90 text-[#593ACB]' : 'text-[#94A3B8]'}`}
                      aria-hidden="true"
                    />
                  </div>
                  <p
                    className={`font-heading text-sm font-bold ${isActive ? 'text-[#172033]' : 'text-[#334155]'}`}
                  >
                    {threat.title}
                  </p>
                  <p className="font-body text-xs text-[#64748B] mt-1">{threat.category}</p>
                </button>
              );
            })}
          </div>

          {/* Threat detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeThreat}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              transition={{ duration: 0.25 }}
              className="min-w-0"
            >
              <ThreatDetail threat={threats[activeThreat]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
