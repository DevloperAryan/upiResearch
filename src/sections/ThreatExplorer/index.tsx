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
  critical: { bg: '#F87171', text: '#F87171', border: '#F87171' },
  high: { bg: '#FBBF24', text: '#FBBF24', border: '#FBBF24' },
  medium: { bg: '#38BDF8', text: '#38BDF8', border: '#38BDF8' },
};

function AttackFlowDiagram({ threat }: { threat: Threat }) {
  const actorColors = { attacker: '#F87171', victim: '#FBBF24', system: '#38BDF8' };

  return (
    <div className="space-y-1.5">
      {threat.attackFlow.map((step, i) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-start gap-3"
        >
          <div className="flex flex-col items-center shrink-0">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold text-white shrink-0"
              style={{ backgroundColor: `${actorColors[step.type]}25`, border: `1.5px solid ${actorColors[step.type]}50` }}
            >
              {step.id}
            </div>
            {i < threat.attackFlow.length - 1 && (
              <div className="w-px h-4 mt-1" style={{ backgroundColor: `${actorColors[step.type]}30` }} />
            )}
          </div>
          <div className="flex-1 pb-2">
            <div className="flex items-center gap-2 mb-0.5">
              <span
                className="font-mono text-[9px] uppercase tracking-widest font-semibold"
                style={{ color: actorColors[step.type] }}
              >
                {step.actor}
              </span>
              <span className="font-mono text-[9px] text-[#94A3B8]">→</span>
              <span className="font-mono text-[10px] text-white">{step.action}</span>
            </div>
            <p className="font-body text-xs text-[#94A3B8] leading-relaxed">{step.detail}</p>
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
    <div className="bg-[#0B192B] border border-[#24364D] rounded-xl overflow-hidden h-full">
      {/* Header */}
      <div className="p-6 border-b border-[#24364D]">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <span
              className="font-mono text-[9px] uppercase tracking-widest mb-1 block"
              style={{ color: riskColor.text }}
            >
              {threat.riskLevel} risk · {threat.category}
            </span>
            <h3 className="font-heading text-xl font-semibold text-white">{threat.title}</h3>
          </div>
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full shrink-0"
            style={{ backgroundColor: `${riskColor.bg}15`, border: `1px solid ${riskColor.border}30` }}
          >
            <AlertTriangle className="w-3.5 h-3.5" style={{ color: riskColor.text }} />
            <span className="font-mono text-[10px] font-semibold uppercase" style={{ color: riskColor.text }}>
              {threat.riskLevel}
            </span>
          </div>
        </div>
        <p className="font-body text-sm text-[#94A3B8] leading-relaxed">{threat.description}</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#24364D]">
        {tabs.map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-mono uppercase tracking-wider transition-colors ${
                tab === t.id
                  ? 'text-[#38BDF8] border-b-2 border-[#38BDF8] bg-[#38BDF8]/5'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {t.label}
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
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-5"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-4 h-4 text-[#FBBF24]" />
                  <h4 className="font-mono text-xs text-[#FBBF24] uppercase tracking-widest">
                    Psychological Tactics
                  </h4>
                </div>
                <ul className="space-y-1.5">
                  {threat.psychologicalTactics.map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#FBBF24] mt-1.5 shrink-0">›</span>
                      <span className="font-body text-xs text-[#94A3B8]">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-[#F87171]" />
                  <h4 className="font-mono text-xs text-[#F87171] uppercase tracking-widest">
                    Warning Signs
                  </h4>
                </div>
                <ul className="space-y-1.5">
                  {threat.warningsigns.map((w, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#F87171] mt-1.5 shrink-0">⚠</span>
                      <span className="font-body text-xs text-[#94A3B8]">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-[#94A3B8]" />
                  <h4 className="font-mono text-xs text-[#94A3B8] uppercase tracking-widest">
                    Potential Consequences
                  </h4>
                </div>
                <ul className="space-y-1.5">
                  {threat.consequences.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#94A3B8] mt-1.5 shrink-0">·</span>
                      <span className="font-body text-xs text-[#94A3B8]">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {tab === 'flow' && (
            <motion.div
              key="flow"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <p className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest mb-4">
                Attack Sequence
              </p>
              <AttackFlowDiagram threat={threat} />
            </motion.div>
          )}

          {tab === 'prevention' && (
            <motion.div
              key="prevention"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <p className="font-mono text-[10px] text-[#34D399] uppercase tracking-widest mb-4">
                Protection Strategies
              </p>
              <ul className="space-y-3">
                {threat.prevention.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#34D399]/15 border border-[#34D399]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="font-mono text-[9px] text-[#34D399] font-bold">{i + 1}</span>
                    </div>
                    <span className="font-body text-sm text-[#94A3B8] leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-[#34D399]/5 border border-[#34D399]/20 rounded-lg">
                <p className="font-mono text-[10px] text-[#34D399] uppercase tracking-widest mb-2">
                  Key Reminder
                </p>
                <p className="font-body text-xs text-[#94A3B8]">
                  UPI PIN is only required to <strong className="text-white">send</strong> money.
                  You never need to enter it to receive funds.
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
    <section id="threats" className="site-section bg-[#0B192B]">
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 03 — THREAT INTELLIGENCE CENTER"
            title="Five Major UPI Fraud Categories"
            subtitle="An in-depth analysis of the primary social engineering and technical attack vectors targeting UPI users in India."
            accentColor="#F87171"
          />
        </div>

        <div className="grid lg:grid-cols-[minmax(15rem,17.5rem)_minmax(0,1fr)] gap-6">
          {/* Threat navigation */}
          <div className="flex flex-col gap-2">
            {threats.map((threat, i) => {
              const riskColor = riskColors[threat.riskLevel];
              const isActive = activeThreat === i;
              return (
                <button
                  key={threat.id}
                  onClick={() => setActiveThreat(i)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                    isActive
                      ? 'bg-[#11243A] border-[#38BDF8]/40'
                      : 'bg-[#0B192B] border-[#24364D] hover:border-[#38BDF8]/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: riskColor.text }}
                    >
                      {threat.riskLevel}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90 text-[#38BDF8]' : 'text-[#24364D]'}`}
                    />
                  </div>
                  <p
                    className={`font-heading text-sm font-semibold ${isActive ? 'text-white' : 'text-[#94A3B8]'}`}
                  >
                    {threat.title}
                  </p>
                  <p className="font-mono text-[10px] text-[#94A3B8]/60 mt-1">{threat.category}</p>
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
