// src/sections/ScamSimulator/index.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { simulatorScenarios } from '../../data/simulator';
import SectionHeader from '../../components/layout/SectionHeader';
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  Shield,
  ChevronRight,
  RotateCcw,
} from 'lucide-react';
import type { SimulatorScenario, SimulatorChoice } from '../../types';

const outcomeConfig = {
  safe: {
    color: '#34D399',
    icon: CheckCircle2,
    label: 'Safe Choice',
    bg: '#34D399',
  },
  unsafe: {
    color: '#F87171',
    icon: XCircle,
    label: 'Dangerous!',
    bg: '#F87171',
  },
  neutral: {
    color: '#FBBF24',
    icon: Info,
    label: 'Cautious',
    bg: '#FBBF24',
  },
};

function PhoneMessage({ scenario }: { scenario: SimulatorScenario }) {
  return (
    <div className="bg-[#071426] rounded-2xl border border-[#24364D] overflow-hidden">
      {/* Phone status bar */}
      <div className="bg-[#0B192B] px-4 py-2 flex items-center justify-between border-b border-[#24364D]">
        <span className="font-mono text-[9px] text-[#94A3B8]">9:41</span>
        <span className="font-mono text-[9px] text-[#38BDF8]">UPI REQUEST</span>
        <span className="font-mono text-[9px] text-[#94A3B8]">●●●</span>
      </div>

      {/* Message */}
      <div className="p-5 space-y-4">
        {/* Sender info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#F87171]/20 border border-[#F87171]/30 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-[#F87171]" />
          </div>
          <div>
            <p className="font-heading text-sm font-semibold text-white">
              {scenario.senderName}
            </p>
            <p className="font-mono text-[10px] text-[#F87171]">{scenario.senderHandle}</p>
          </div>
        </div>

        {/* Message bubble */}
        <div className="bg-[#11243A] border border-[#24364D] rounded-xl p-4">
          <p className="font-body text-sm text-[#F8FAFC] leading-relaxed">{scenario.message}</p>
        </div>

        {/* Amount */}
        <div className="bg-[#071426] border border-[#F87171]/20 rounded-xl p-4 text-center">
          <p className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest mb-1">
            Request Amount
          </p>
          <p className="font-mono text-3xl font-bold text-[#F87171]">
            ₹{scenario.amount.toLocaleString('en-IN')}
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-2">
            <AlertTriangle className="w-3 h-3 text-[#FBBF24]" />
            <p className="font-mono text-[10px] text-[#FBBF24]">
              This will DEDUCT money from your account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OutcomePanel({
  choice,
  redFlags,
  onReset,
}: {
  choice: SimulatorChoice;
  redFlags: string[];
  onReset: () => void;
}) {
  const config = outcomeConfig[choice.outcome];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-4"
    >
      {/* Outcome header */}
      <div
        className="rounded-xl p-5 border"
        style={{
          backgroundColor: `${config.color}10`,
          borderColor: `${config.color}30`,
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <Icon className="w-6 h-6" style={{ color: config.color }} />
          <span
            className="font-mono text-sm font-bold uppercase tracking-wider"
            style={{ color: config.color }}
          >
            {config.label}
          </span>
        </div>
        <p className="font-heading text-base font-semibold text-white mb-2">
          {choice.explanation}
        </p>
        <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
          {choice.consequence}
        </p>
      </div>

      {/* Red flags */}
      <div className="bg-[#11243A] border border-[#24364D] rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-[#F87171]" />
          <span className="font-mono text-[10px] text-[#F87171] uppercase tracking-widest">
            Red Flags in This Scenario
          </span>
        </div>
        <ul className="space-y-2">
          {redFlags.map((flag, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#F87171] shrink-0 mt-0.5">›</span>
              <span className="font-body text-xs text-[#94A3B8]">{flag}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onReset}
        className="w-full flex items-center justify-center gap-2 py-3 border border-[#24364D] rounded-xl font-mono text-xs text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/30 transition-colors"
      >
        <RotateCcw className="w-4 h-4" />
        Try Another Scenario
      </button>
    </motion.div>
  );
}

export default function ScamSimulator() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [chosen, setChosen] = useState<SimulatorChoice | null>(null);

  const scenario = simulatorScenarios[scenarioIndex];

  function handleChoose(choice: SimulatorChoice) {
    setChosen(choice);
  }

  function handleReset() {
    setChosen(null);
    setScenarioIndex((i) => (i + 1) % simulatorScenarios.length);
  }

  return (
    <section id="simulator" className="site-section bg-[#071426]">
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 04 — INTERACTIVE SCAM SIMULATOR"
            title="Experience Fraud Scenarios Safely"
            subtitle="This is a purely educational simulation. No real banking systems, credentials or financial data are involved. All scenarios are illustrative examples of common fraud patterns."
            accentColor="#FBBF24"
          />
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 bg-[#34D399]/5 border border-[#34D399]/20 rounded-xl p-4 mb-8">
          <Shield className="w-5 h-5 text-[#34D399] shrink-0 mt-0.5" />
          <div>
            <p className="font-mono text-xs text-[#34D399] uppercase tracking-widest mb-1">
              Educational Simulation
            </p>
            <p className="font-body text-sm text-[#94A3B8]">
              Never enter real UPI PINs, OTPs, or banking credentials anywhere except your
              official bank app. This simulator does not collect any personal data.
            </p>
          </div>
        </div>

        {/* Scenario selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {simulatorScenarios.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { setScenarioIndex(i); setChosen(null); }}
              className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-colors ${
                scenarioIndex === i
                  ? 'bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-[#38BDF8]'
                  : 'border border-[#24364D] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/20'
              }`}
            >
              Scenario {i + 1}: {s.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Phone UI */}
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse" />
              <span className="font-mono text-[11px] text-[#FBBF24] uppercase tracking-widest">
                Simulated UPI Interface
              </span>
            </div>
            <PhoneMessage scenario={scenario} />
          </div>

          {/* Right: Choices or outcome */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              {!chosen ? (
                <motion.div
                  key="choices"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-3"
                >
                  <p className="font-mono text-xs text-[#94A3B8] uppercase tracking-widest mb-4">
                    What would you do?
                  </p>

                  {scenario.choices.map((choice) => {
                      return (
                      <button
                        key={choice.id}
                        onClick={() => handleChoose(choice)}
                        className="w-full text-left p-4 bg-[#0B192B] border border-[#24364D] rounded-xl hover:border-[#38BDF8]/30 transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-heading text-sm font-semibold text-white group-hover:text-[#38BDF8] transition-colors">
                            {choice.label}
                          </span>
                          <ChevronRight className="w-4 h-4 text-[#24364D] group-hover:text-[#38BDF8] transition-colors" />
                        </div>
                      </button>
                    );
                  })}

                  <div className="mt-6 p-4 bg-[#0B192B] border border-[#24364D] rounded-xl">
                    <p className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest mb-2">
                      Remember
                    </p>
                    <p className="font-body text-xs text-[#94A3B8]">
                      There is no "right" answer to force — think carefully about each option before choosing.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <OutcomePanel
                  key="outcome"
                  choice={chosen}
                  redFlags={scenario.redFlags}
                  onReset={handleReset}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
