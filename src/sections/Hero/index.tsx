// src/sections/Hero/index.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Shield,
  AlertTriangle,
  ChevronRight,
  ShieldAlert,
  Radio,
  Lock,
  ExternalLink,
} from 'lucide-react';

const telemetryLogs = [
  'NPCI_SWITCH: Inspecting packet header [VPA_RESOLV]',
  'ANOMALY_ENGINE: Collect request pattern flagged',
  'CERT_IN_FEED: Matching known refund scam vectors',
  'AUTH_LAYER: PIN entry request rejected by user',
  'INCIDENT_NODE: Telemetry dispatched to 1930 portal',
];

function SmartphoneMockup() {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((i) => (i + 1) % telemetryLogs.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[340px] mx-auto z-10">
      {/* Outer Phone Shell */}
      <div className="relative rounded-[42px] p-3 bg-gradient-to-b from-[#24364D] via-[#11243A] to-[#071426] border border-[#38BDF8]/30 shadow-[0_20px_60px_-15px_rgba(56,189,248,0.15)]">
        
        {/* Antenna band accents */}
        <div className="absolute -left-[2px] top-24 w-[2px] h-8 bg-[#38BDF8]/40 rounded-l" />
        <div className="absolute -left-[2px] top-36 w-[2px] h-8 bg-[#38BDF8]/40 rounded-l" />
        <div className="absolute -right-[2px] top-28 w-[2px] h-12 bg-[#38BDF8]/40 rounded-r" />

        {/* Inner Phone Screen */}
        <div className="relative rounded-[32px] bg-[#071426] border border-[#24364D] overflow-hidden min-h-[min(560px,calc(100dvh-8rem))] flex flex-col justify-between">
          
          {/* Animated Laser Scan Beam */}
          <div className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-[#38BDF8]/15 to-transparent pointer-events-none z-30 animate-scan-beam">
            <div className="w-full h-[1.5px] bg-[#38BDF8] shadow-[0_0_12px_#38BDF8]" />
          </div>

          {/* Top Notch / Dynamic Island */}
          <div className="pt-3 px-5 pb-2 bg-[#0B192B]/90 border-b border-[#24364D]/60 flex items-center justify-between z-20">
            <span className="font-mono text-[10px] text-[#94A3B8] font-medium">09:41</span>
            {/* Camera / Pill */}
            <div className="w-20 h-4 bg-black rounded-full flex items-center justify-end px-2 gap-1.5 border border-[#24364D]/50">
              <div className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#11243A]" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[9px] text-[#34D399]">5G</span>
              <div className="w-3.5 h-2 border border-[#94A3B8] rounded-[2px] p-[1px] flex items-center">
                <div className="w-full h-full bg-[#34D399] rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="px-5 py-3 bg-[#0B192B]/50 border-b border-[#24364D]/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-[#38BDF8]" />
              </div>
              <div>
                <p className="font-heading text-xs font-bold text-white tracking-wide leading-none">
                  UPI SHIELD
                </p>
                <p className="font-mono text-[8px] text-[#34D399] leading-none mt-0.5">
                  LIVE PROTOCOL ACTIVE
                </p>
              </div>
            </div>
            <div className="px-2 py-0.5 rounded-full bg-[#F87171]/10 border border-[#F87171]/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F87171] animate-ping" />
              <span className="font-mono text-[8px] text-[#F87171] font-bold">1 THREAT</span>
            </div>
          </div>

          {/* Screen Body */}
          <div className="p-4 space-y-3.5 flex-1">
            
            {/* The Fraud Card */}
            <div className="bg-[#0B192B] border border-[#F87171]/40 rounded-2xl p-4 relative overflow-hidden shadow-lg shadow-red-950/20">
              {/* Corner alert accent */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                <div className="absolute transform rotate-45 bg-[#F87171] text-[#071426] font-mono text-[7px] font-bold py-0.5 right-[-35px] top-[14px] w-[120px] text-center tracking-widest">
                  DECEPTION
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#F87171]" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#F87171] font-semibold">
                  Incoming Collect Request
                </span>
              </div>

              <div className="mb-3">
                <p className="font-mono text-[10px] text-[#94A3B8]">Requester:</p>
                <p className="font-heading text-sm font-semibold text-white">
                  FlipMart Support (Refund Desk)
                </p>
                <p className="font-mono text-[9px] text-[#F87171] break-all">
                  vpa: refund-desk99@okaxis (Unverified)
                </p>
              </div>

              {/* Amount Display */}
              <div className="bg-[#11243A] rounded-xl p-3 border border-[#24364D] text-center my-2">
                <p className="font-mono text-[9px] text-[#94A3B8] uppercase tracking-widest">
                  Requested Amount
                </p>
                <p className="font-mono text-2xl font-bold text-[#F87171] mt-0.5">
                  ₹2,500.00
                </p>
                <p className="font-mono text-[8px] text-[#F87171] mt-1 font-semibold">
                  ⚠ Approving will DEDUCT ₹2,500 from your account!
                </p>
              </div>

              {/* Action Buttons inside phone */}
              <div className="space-y-1.5 pt-1">
                <button className="w-full py-2 bg-[#F87171]/20 hover:bg-[#F87171]/30 border border-[#F87171]/50 rounded-xl font-mono text-[10px] text-[#F87171] font-bold transition-all flex items-center justify-center gap-1.5">
                  <span>✕ Decline & Block Request (Safe)</span>
                </button>
                <button className="w-full py-1.5 bg-[#11243A] hover:bg-[#162D47] border border-[#24364D] rounded-xl font-mono text-[9px] text-[#94A3B8] transition-all flex items-center justify-center gap-1">
                  <ShieldAlert className="w-3 h-3 text-[#38BDF8]" />
                  <span>Inspect Forensic VPA Metadata</span>
                </button>
              </div>
            </div>

            {/* Security Notice Box */}
            <div className="bg-[#11243A]/60 border border-[#24364D] rounded-xl p-2.5 flex items-start gap-2">
              <Lock className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
              <p className="font-mono text-[8px] text-[#94A3B8] leading-relaxed">
                <strong className="text-white">Rule #1:</strong> Receiving money NEVER requires entering your UPI PIN. PIN entry is exclusively for authorizing payments OUT.
              </p>
            </div>
          </div>

          {/* Bottom Telemetry Ticker */}
          <div className="bg-[#0B192B] border-t border-[#24364D] p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-[8px] text-[#38BDF8] flex items-center gap-1">
                <Radio className="w-2.5 h-2.5 animate-pulse" />
                SECURITY TELEMETRY FEED
              </span>
              <span className="font-mono text-[8px] text-[#94A3B8]/60">PKT_ID: 9812A</span>
            </div>
            <p className="font-mono text-[8px] text-white/80 truncate animate-pulse">
              &gt; {telemetryLogs[logIndex]}
            </p>
          </div>

          {/* Home Bar */}
          <div className="bg-[#071426] py-2 flex justify-center border-t border-[#24364D]/40">
            <div className="w-28 h-1 bg-[#24364D] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#071426] pt-24 pb-16">
      
      {/* Background Cybersecurity Technical Elements */}
      <div className="absolute inset-0 tech-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 tech-crosshairs opacity-30 pointer-events-none" />

      {/* Atmospheric Radial Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#38BDF8]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#F87171]/5 blur-[120px] pointer-events-none" />

      {/* Main Grid Content */}
      <div className="site-container relative grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full z-10">
        
        {/* Left Column: Editorial Headline & Research Narrative (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          {/* Academic Context Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#11243A] border border-[#24364D] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="font-mono text-[10px] text-[#38BDF8] uppercase tracking-[0.18em] font-semibold">
              VSIT Research Symposium 2026
            </span>
            <span className="text-[#24364D]">|</span>
            <span className="font-mono text-[10px] text-[#94A3B8]">Cybersecurity Track</span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              UPI <span className="text-gradient-cyan">SCAMS.</span>
              <br />
              <span className="text-white/90">SPOT THEM.</span>
              <br />
              <span className="text-white/70">STOP THEM.</span>
            </h1>
          </motion.div>

          {/* Subtitle / Topic */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-3"
          >
            <h2 className="font-mono text-sm md:text-base text-[#38BDF8] uppercase tracking-wider font-semibold">
              Digital Payments and UPI: Security Challenges
            </h2>
          </motion.div>

          {/* Descriptive Abstract */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-xl mb-8"
          >
            An interactive investigation into digital payment fraud, social engineering vectors,
            cryptographic mechanisms, and user awareness across India's financial technology ecosystem.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a
              href="#threats"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#38BDF8] text-[#071426] font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#67E8F9] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all"
            >
              <span>Explore Threats</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            
            <a
              href="#research"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#11243A] text-white font-heading font-semibold text-xs uppercase tracking-wider rounded-xl border border-[#24364D] hover:border-[#38BDF8]/50 hover:bg-[#162D47] transition-all"
            >
              <span>Explore Research</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8]" />
            </a>
          </motion.div>

          {/* Key Verified Stats Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full max-w-xl grid grid-cols-3 gap-3 pt-6 border-t border-[#24364D]"
          >
            <div className="bg-[#0B192B] border border-[#24364D] rounded-xl p-3">
              <span className="font-mono text-lg sm:text-xl font-bold text-[#38BDF8] block">
                185B+
              </span>
              <span className="font-mono text-[9px] text-[#94A3B8] uppercase tracking-wider block mt-0.5">
                UPI Volume FY25
              </span>
            </div>

            <div className="bg-[#0B192B] border border-[#24364D] rounded-xl p-3">
              <span className="font-mono text-lg sm:text-xl font-bold text-[#34D399] block">
                ₹246L Cr
              </span>
              <span className="font-mono text-[9px] text-[#94A3B8] uppercase tracking-wider block mt-0.5">
                Total Value
              </span>
            </div>

            <div className="bg-[#0B192B] border border-[#24364D] rounded-xl p-3">
              <span className="font-mono text-lg sm:text-xl font-bold text-[#F87171] block">
                5 Vectors
              </span>
              <span className="font-mono text-[9px] text-[#94A3B8] uppercase tracking-wider block mt-0.5">
                Analyzed Frauds
              </span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Custom Visual Composition (5 cols) */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-w-0 px-8 sm:px-12 lg:px-0">
          
          {/* Orbiting / Satellite Intelligence Nodes */}
          
          {/* Top Left Intelligence Node */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden xl:flex absolute -left-6 top-12 z-20 items-center gap-2 px-3 py-2 bg-[#0B192B]/95 backdrop-blur-md border border-[#F87171]/40 rounded-xl shadow-lg shadow-black/40"
          >
            <div className="w-2 h-2 rounded-full bg-[#F87171] animate-ping" />
            <div>
              <p className="font-mono text-[8px] text-[#F87171] uppercase font-bold tracking-widest">
                ALERT LEVEL: CRITICAL
              </p>
              <p className="font-mono text-[10px] text-white">
                Collect Request Fraud
              </p>
            </div>
          </motion.div>

          {/* Top Right Intelligence Node */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden xl:flex absolute -right-4 top-24 z-20 items-center gap-2 px-3 py-2 bg-[#0B192B]/95 backdrop-blur-md border border-[#38BDF8]/40 rounded-xl shadow-lg shadow-black/40"
          >
            <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            <div>
              <p className="font-mono text-[8px] text-[#38BDF8] uppercase font-bold tracking-widest">
                NPCI PROTOCOL
              </p>
              <p className="font-mono text-[10px] text-white">
                Device Binding Active
              </p>
            </div>
          </motion.div>

          {/* Bottom Left Intelligence Node */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden xl:flex absolute -left-4 bottom-16 z-20 items-center gap-2 px-3 py-2 bg-[#0B192B]/95 backdrop-blur-md border border-[#FBBF24]/40 rounded-xl shadow-lg shadow-black/40"
          >
            <div className="w-2 h-2 rounded-full bg-[#FBBF24]" />
            <div>
              <p className="font-mono text-[8px] text-[#FBBF24] uppercase font-bold tracking-widest">
                HELPLINE 24×7
              </p>
              <p className="font-mono text-[10px] text-white">
                Dial 1930 for Cybercrime
              </p>
            </div>
          </motion.div>

          {/* Bottom Right Intelligence Node */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="hidden xl:flex absolute -right-6 bottom-28 z-20 items-center gap-2 px-3 py-2 bg-[#0B192B]/95 backdrop-blur-md border border-[#34D399]/40 rounded-xl shadow-lg shadow-black/40"
          >
            <div className="w-2 h-2 rounded-full bg-[#34D399]" />
            <div>
              <p className="font-mono text-[8px] text-[#34D399] uppercase font-bold tracking-widest">
                VERIFIED STATUS
              </p>
              <p className="font-mono text-[10px] text-white">
                Zero PIN on Receipt
              </p>
            </div>
          </motion.div>

          {/* The Smartphone Device */}
          <SmartphoneMockup />

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="font-mono text-[9px] text-[#94A3B8]/60 uppercase tracking-[0.2em]">
          Scroll to investigate
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#38BDF8]" />
        </motion.div>
      </motion.div>

    </section>
  );
}
