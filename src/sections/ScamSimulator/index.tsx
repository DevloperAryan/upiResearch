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
  Smartphone,
  ShieldAlert,
  ArrowRight,
  HelpCircle,
  Flame,
  Gift,
  Headphones,
} from 'lucide-react';
import type { SimulatorScenario, SimulatorChoice } from '../../types';

const outcomeConfig = {
  safe: {
    color: '#16865D',
    bg: '#F0FFF8',
    border: '#16865D',
    icon: CheckCircle2,
    badgeText: 'Safe Decision — Scam Blocked',
    title: 'Excellent Protection Instinct!',
  },
  unsafe: {
    color: '#DC4545',
    bg: '#FFF5F5',
    border: '#DC4545',
    icon: XCircle,
    badgeText: 'Dangerous — Fraud Executed',
    title: 'Account Compromised!',
  },
  neutral: {
    color: '#D97706',
    bg: '#FFFBEB',
    border: '#D97706',
    icon: Info,
    badgeText: 'Cautious Observation',
    title: 'Good Instinct to Investigate',
  },
};

const scenarioIcons = [Flame, Gift, Headphones];
const scenarioTags = ['E-Commerce Vector', 'Lottery/Prize Vector', 'Vishing Vector'];

function PhoneMockup({
  scenario,
  onChoose,
  chosen,
}: {
  scenario: SimulatorScenario;
  onChoose: (choice: SimulatorChoice) => void;
  chosen: SimulatorChoice | null;
}) {
  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
      {/* Outer Smartphone Chasis */}
      <div className="relative rounded-[36px] p-3 sm:p-4 bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#1E293B] shadow-2xl shadow-[#1E293B]/25 border-4 border-[#334155]">
        {/* Hardware side buttons */}
        <div className="absolute -left-[7px] top-24 w-1.5 h-10 bg-[#475569] rounded-l-sm" aria-hidden="true" />
        <div className="absolute -left-[7px] top-38 w-1.5 h-10 bg-[#475569] rounded-l-sm" aria-hidden="true" />
        <div className="absolute -right-[7px] top-28 w-1.5 h-14 bg-[#475569] rounded-r-sm" aria-hidden="true" />

        {/* Inner Screen */}
        <div className="relative rounded-[28px] bg-[#F8FAFC] overflow-hidden border border-[#CBD5E1] flex flex-col justify-between min-h-[580px]">
          {/* Top Notch / Dynamic Island & Status Bar */}
          <div className="bg-[#FFFFFF] px-5 pt-3 pb-2.5 border-b border-[#E2E8F0] flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-[#0F172A]">09:41</span>
            
            {/* Pill Notch */}
            <div className="w-24 h-4 bg-[#0F172A] rounded-full flex items-center justify-end px-2.5 gap-1.5" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#334155]" />
            </div>

            <div className="flex items-center gap-1.5 font-body text-xs font-semibold text-[#0F172A]">
              <span>5G</span>
              <div className="w-5 h-2.5 border border-[#0F172A] rounded-sm p-[1px] flex items-center" aria-hidden="true">
                <div className="w-full h-full bg-[#0F172A] rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* UPI App Header Bar */}
          <div className="bg-[#593ACB] px-4 py-3 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading text-sm font-bold leading-tight">PaySecure UPI</p>
                <p className="font-body text-xs text-white/80 leading-none">Collect Request Pending</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#DC4545] text-white font-body text-xs font-bold animate-pulse">
              Action Required
            </span>
          </div>

          {/* Screen Body: The Realistic Collect Request Dialog */}
          <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
            
            {/* Payment Request Card */}
            <div className="bg-white rounded-2xl border-2 border-[#DC4545]/30 p-4 sm:p-5 shadow-sm space-y-3.5">
              
              {/* Requester Profile */}
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#FFF5F5] border border-[#DC4545]/30 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-[#DC4545]" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-[#0F172A] leading-snug">
                      {scenario.senderName}
                    </h4>
                    <p className="font-mono text-xs text-[#DC4545] font-semibold break-all">
                      {scenario.senderHandle}
                    </p>
                  </div>
                </div>

                <span className="px-2 py-1 rounded-md bg-[#FFF5F5] text-[#DC4545] font-body text-[11px] font-bold border border-[#DC4545]/20 uppercase tracking-wide shrink-0">
                  Unverified
                </span>
              </div>

              {/* Message Note */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3">
                <p className="font-body text-xs text-[#475569] uppercase font-bold tracking-wider mb-1">
                  Transaction Note from Requester:
                </p>
                <p className="font-body text-sm font-medium text-[#1E293B] leading-relaxed">
                  "{scenario.message}"
                </p>
              </div>

              {/* Amount Display */}
              <div className="bg-[#FFF5F5] border border-[#DC4545]/20 rounded-xl p-4 text-center">
                <p className="font-body text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">
                  Amount Requested to Debit
                </p>
                <p className="font-heading text-3xl sm:text-4xl font-extrabold text-[#DC4545]">
                  ₹{scenario.amount.toLocaleString('en-IN')}
                </p>
                <div className="flex items-center justify-center gap-1.5 mt-2 bg-[#DC4545]/10 py-1 px-2 rounded-lg">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#DC4545]" aria-hidden="true" />
                  <p className="font-body text-xs font-bold text-[#DC4545]">
                    Attention: Approving will DEDUCT ₹{scenario.amount.toLocaleString('en-IN')} from your bank!
                  </p>
                </div>
              </div>

              {/* Mandatory UPI PIN Notice */}
              <div className="p-2.5 rounded-lg bg-[#EFF6FF] border border-[#3B82F6]/20 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="font-body text-xs text-[#1E3A8A] leading-relaxed">
                  <strong>UPI Rule:</strong> Entering your PIN confirms payment transfer. PIN is never required to receive funds.
                </p>
              </div>
            </div>

            {/* Quick action buttons right inside the mockup */}
            <div className="space-y-2 pt-1">
              <p className="text-center font-body text-xs font-bold text-[#475569] uppercase tracking-wider">
                What action will you take?
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {scenario.choices.slice(0, 2).map((choice) => {
                  const isApprove = choice.id === 'approve';
                  const isSelected = chosen?.id === choice.id;
                  return (
                    <button
                      key={choice.id}
                      type="button"
                      onClick={() => onChoose(choice)}
                      className={`py-3 px-2 rounded-xl font-heading text-xs sm:text-sm font-bold transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-[#593ACB] ${
                        isApprove
                          ? 'bg-[#DC4545] text-white hover:bg-[#B91C1C]'
                          : 'bg-[#16865D] text-white hover:bg-[#15803D]'
                      } ${isSelected ? 'ring-4 ring-offset-1 ring-[#593ACB]' : ''}`}
                    >
                      {choice.label}
                    </button>
                  );
                })}
              </div>
              {scenario.choices[2] && (
                <button
                  type="button"
                  onClick={() => onChoose(scenario.choices[2])}
                  className={`w-full py-2.5 px-3 rounded-xl border border-[#CBD5E1] bg-white font-body text-xs font-semibold text-[#334155] hover:bg-[#F1F5F9] hover:border-[#94A3B8] transition-all ${
                    chosen?.id === scenario.choices[2].id ? 'ring-4 ring-offset-1 ring-[#593ACB]' : ''
                  }`}
                >
                  {scenario.choices[2].label}
                </button>
              )}
            </div>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="bg-white py-2 flex justify-center border-t border-[#E2E8F0]">
            <div className="w-32 h-1 bg-[#94A3B8] rounded-full" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
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
    <section id="simulator" className="site-section bg-[#FFFFFF]" aria-labelledby="simulator-heading">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="mb-10">
          <SectionHeader
            label="§ 04 — INTERACTIVE FRAUD LAB"
            title="Real-World UPI Fraud Simulation"
            subtitle="Test your threat recognition against three documented deception vectors targeting Indian digital payment users. Choose your response and inspect the immediate outcome."
            accentColor="#593ACB"
          />
        </div>

        {/* Safety Disclaimer Banner */}
        <div className="flex items-start sm:items-center gap-3.5 bg-[#F0FFF8] border border-[#16865D]/30 rounded-2xl p-4 sm:p-5 mb-8 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-[#16865D]/15 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-[#16865D]" aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold text-[#16865D]">
              Safe Educational Simulation Environment
            </h4>
            <p className="font-body text-xs sm:text-sm text-[#334155] leading-relaxed">
              No genuine banking links or credentials are used. This simulator replicates exact UI templates used by fraudsters on OLX, WhatsApp, and phishing calls.
            </p>
          </div>
        </div>

        {/* Scenario Switcher Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-10" role="tablist" aria-label="Simulation Scenarios">
          {simulatorScenarios.map((s, i) => {
            const Icon = scenarioIcons[i % scenarioIcons.length];
            const isSelected = scenarioIndex === i;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  setScenarioIndex(i);
                  setChosen(null);
                }}
                className={`p-4 sm:p-5 rounded-2xl text-left border-2 transition-all flex items-start gap-4 focus-visible:outline-2 focus-visible:outline-[#593ACB] ${
                  isSelected
                    ? 'bg-[#F0EEFA] border-[#593ACB] shadow-md shadow-[#593ACB]/10'
                    : 'bg-white border-[#E2E8F0] hover:border-[#593ACB]/40 hover:bg-[#F8FAFC]'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-[#593ACB] text-white shadow-sm' : 'bg-[#F1F5F9] text-[#475569]'
                  }`}
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-body text-xs font-bold uppercase tracking-wider text-[#593ACB]">
                      Scenario {i + 1}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#0F172A]">
                      ₹{s.amount.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#0F172A] truncate">
                    {s.title}
                  </h4>
                  <p className="font-body text-xs text-[#64748B] mt-0.5 font-medium">
                    {scenarioTags[i]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage: Smartphone on Left, Analysis & Decision Console on Right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (5 cols): Authentic Smartphone Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <PhoneMockup
              scenario={scenario}
              onChoose={handleChoose}
              chosen={chosen}
            />
          </div>

          {/* Right Column (7 cols): Fraud Anatomy, Decision Console, & Instant Outcome */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Action State: Decision Prompt or Detailed Outcome */}
            <AnimatePresence mode="wait">
              {!chosen ? (
                <motion.div
                  key="decision-prompt"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-2xl p-6 sm:p-7 shadow-sm space-y-5"
                >
                  <div className="flex items-center gap-2.5 pb-4 border-b border-[#E2E8F0]">
                    <HelpCircle className="w-5 h-5 text-[#593ACB]" aria-hidden="true" />
                    <div>
                      <h3 className="font-heading text-lg font-bold text-[#0F172A]">
                        Decision Console: Evaluate the Incoming Request
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-[#475569]">
                        Review the message details on the phone screen and choose the response you would make.
                      </p>
                    </div>
                  </div>

                  {/* Decision Option Buttons with expanded explanations */}
                  <div className="space-y-3">
                    {scenario.choices.map((choice) => {
                      const isUnsafe = choice.outcome === 'unsafe';
                      const isSafe = choice.outcome === 'safe';
                      return (
                        <button
                          key={choice.id}
                          type="button"
                          onClick={() => handleChoose(choice)}
                          className="w-full text-left p-4 sm:p-5 bg-white border border-[#CBD5E1] rounded-xl hover:border-[#593ACB] hover:shadow-md transition-all group focus-visible:outline-2 focus-visible:outline-[#593ACB]"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span
                                  className={`w-2.5 h-2.5 rounded-full ${
                                    isUnsafe
                                      ? 'bg-[#DC4545]'
                                      : isSafe
                                      ? 'bg-[#16865D]'
                                      : 'bg-[#D97706]'
                                  }`}
                                  aria-hidden="true"
                                />
                                <h4 className="font-heading text-base font-bold text-[#0F172A] group-hover:text-[#593ACB] transition-colors">
                                  {choice.label}
                                </h4>
                              </div>
                              <p className="font-body text-xs sm:text-sm text-[#475569] leading-relaxed">
                                {choice.id === 'approve'
                                  ? 'Proceed with the PIN authorization as prompted by the requester.'
                                  : choice.id === 'decline'
                                  ? 'Immediately reject the collect notification and deny authorization.'
                                  : 'Pause and verify through independent customer channels.'}
                              </p>
                            </div>
                            <ChevronRight
                              className="w-5 h-5 text-[#94A3B8] group-hover:text-[#593ACB] group-hover:translate-x-1 transition-all shrink-0 mt-1"
                              aria-hidden="true"
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Deception Anatomy Guide */}
                  <div className="pt-2">
                    <h4 className="font-heading text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-3">
                      Deception Red Flags in this Scenario:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {scenario.redFlags.map((flag, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#E2E8F0]"
                        >
                          <span className="text-[#DC4545] font-bold text-sm shrink-0">⚠</span>
                          <span className="font-body text-xs font-semibold text-[#334155] leading-snug">
                            {flag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="outcome-view"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  role="status"
                  aria-live="polite"
                  className="space-y-5"
                >
                  {/* Outcome Results Card */}
                  {(() => {
                    const cfg = outcomeConfig[chosen.outcome];
                    const OutcomeIcon = cfg.icon;
                    return (
                      <div
                        className="rounded-2xl p-6 sm:p-7 border-2 shadow-md space-y-4"
                        style={{ backgroundColor: cfg.bg, borderColor: `${cfg.color}40` }}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                              style={{ backgroundColor: `${cfg.color}20` }}
                            >
                              <OutcomeIcon className="w-6 h-6" style={{ color: cfg.color }} aria-hidden="true" />
                            </div>
                            <div>
                              <span
                                className="font-body text-xs font-bold uppercase tracking-wider block"
                                style={{ color: cfg.color }}
                              >
                                {cfg.badgeText}
                              </span>
                              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F172A]">
                                {cfg.title}
                              </h3>
                            </div>
                          </div>

                          <div className="px-3.5 py-1.5 rounded-full bg-white border font-mono text-xs font-bold text-[#0F172A]">
                            Choice: {chosen.label}
                          </div>
                        </div>

                        {/* Detailed Forensic Breakdown */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-[#E2E8F0] space-y-2.5">
                          <h4 className="font-heading text-base font-bold text-[#0F172A]">
                            {chosen.explanation}
                          </h4>
                          <p className="font-body text-sm text-[#334155] leading-relaxed font-normal">
                            {chosen.consequence}
                          </p>
                        </div>

                        {/* Financial Impact Note */}
                        <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E2E8F0]">
                          <span className="font-body text-xs font-bold text-[#475569] uppercase tracking-wider">
                            Financial Consequence:
                          </span>
                          <span
                            className="font-heading text-base font-extrabold"
                            style={{ color: cfg.color }}
                          >
                            {chosen.outcome === 'unsafe'
                              ? `- ₹${scenario.amount.toLocaleString('en-IN')} (Lost)`
                              : chosen.outcome === 'safe'
                              ? `₹${scenario.amount.toLocaleString('en-IN')} Preserved (Safe)`
                              : '₹0 Lost (Verification Step)'}
                          </span>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Red Flags Forensic Analysis */}
                  <div className="bg-white border border-[#CBD5E1] rounded-2xl p-6 shadow-sm space-y-3">
                    <h4 className="font-heading text-sm font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#DC4545]" aria-hidden="true" />
                      <span>Deception Markers Detected in this Case</span>
                    </h4>
                    <ul className="space-y-2">
                      {scenario.redFlags.map((flag, i) => (
                        <li key={i} className="flex items-start gap-2.5 font-body text-xs sm:text-sm text-[#334155]">
                          <span className="text-[#DC4545] font-bold shrink-0 mt-0.5">✕</span>
                          <span>{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reset / Next Scenario Button */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setChosen(null)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-white border-2 border-[#CBD5E1] text-[#0F172A] font-heading text-sm font-bold rounded-xl hover:bg-[#F1F5F9] transition-all focus-visible:outline-2 focus-visible:outline-[#593ACB]"
                    >
                      <RotateCcw className="w-4 h-4 text-[#475569]" aria-hidden="true" />
                      <span>Try Other Choices</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#593ACB] text-white font-heading text-sm font-bold rounded-xl hover:bg-[#4F33B7] shadow-md shadow-[#593ACB]/20 transition-all focus-visible:outline-2 focus-visible:outline-[#593ACB]"
                    >
                      <span>Next Scenario</span>
                      <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
