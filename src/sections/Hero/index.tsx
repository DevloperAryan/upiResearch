// src/sections/Hero/index.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Shield,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

const fraudLabels = [
  { text: 'Collect Request Fraud', color: '#DC4545' },
  { text: 'Fake Customer Care', color: '#D97706' },
  { text: 'QR Code Scams', color: '#593ACB' },
  { text: 'SIM Swap Attacks', color: '#0891B2' },
  { text: 'Screen Share Malware', color: '#16865D' },
];

function UPIFlowIllustration() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveNode((n) => (n + 1) % 3), 1800);
    return () => clearInterval(t);
  }, []);

  const nodes = [
    { id: 0, label: 'Payer', x: 60, y: 140, color: '#593ACB' },
    { id: 1, label: 'NPCI Switch', x: 210, y: 80, color: '#0891B2' },
    { id: 2, label: 'Payee', x: 360, y: 140, color: '#16865D' },
  ];

  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      {/* Main illustration card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative bg-white rounded-2xl border border-[#E5E7EB] shadow-xl shadow-[#593ACB]/8 p-6 overflow-hidden"
      >
        {/* Top purple accent */}
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: 'linear-gradient(90deg, #593ACB, #0891B2)' }} />

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#593ACB] flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-[#0F172A]">UPI Transaction Flow</p>
              <p className="font-body text-xs text-[#16865D] font-bold">● SECURE PROTOCOL ACTIVE</p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-[#F0EEFA] border border-[#593ACB]/20">
            <span className="font-body text-xs text-[#593ACB] font-bold">Real-time</span>
          </div>
        </div>

        {/* SVG Flow Diagram */}
        <svg viewBox="0 0 420 220" className="w-full h-auto mb-4" role="img" aria-label="UPI transaction flow diagram">
          {/* Connection lines */}
          <motion.line
            x1="95" y1="155" x2="185" y2="95"
            stroke="#593ACB" strokeWidth="2.5" strokeDasharray="6 3"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
            strokeLinecap="round"
          />
          <motion.line
            x1="235" y1="95" x2="325" y2="155"
            stroke="#0891B2" strokeWidth="2.5" strokeDasharray="6 3"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatDelay: 2 }}
            strokeLinecap="round"
          />

          {/* Shield overlay on the route */}
          <motion.g
            animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <circle cx="150" cy="125" r="14" fill="white" stroke="#593ACB" strokeWidth="2" />
            <text x="150" y="131" textAnchor="middle" fontSize="12">🔐</text>
          </motion.g>
          <motion.g
            animate={{ x: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
          >
            <circle cx="278" cy="125" r="14" fill="white" stroke="#0891B2" strokeWidth="2" />
            <text x="278" y="131" textAnchor="middle" fontSize="12">✓</text>
          </motion.g>

          {/* Nodes */}
          {nodes.map((node) => (
            <g key={node.id}>
              <motion.circle
                cx={node.x + 35}
                cy={node.y}
                r={activeNode === node.id ? 34 : 28}
                fill={activeNode === node.id ? node.color : 'white'}
                stroke={node.color}
                strokeWidth={activeNode === node.id ? 0 : 2.5}
                transition={{ duration: 0.3 }}
                style={{ filter: activeNode === node.id ? `drop-shadow(0 4px 12px ${node.color}40)` : 'none' }}
              />
              {/* Icon area */}
              <text
                x={node.x + 35}
                y={node.y + 6}
                textAnchor="middle"
                fontSize="18"
                style={{ userSelect: 'none' }}
              >
                {node.id === 0 ? '📱' : node.id === 1 ? '🏛️' : '💳'}
              </text>
              <text
                x={node.x + 35}
                y={node.y + 50}
                textAnchor="middle"
                fontSize="12"
                fontFamily="Inter, sans-serif"
                fontWeight="700"
                fill={node.color}
              >
                {node.label}
              </text>
            </g>
          ))}

          {/* Amount Transfer indicator */}
          <motion.g
            animate={{ x: [0, 260, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <rect x="50" y="168" width="66" height="24" rx="12" fill="#593ACB" />
            <text x="83" y="184" textAnchor="middle" fontSize="11" fill="white" fontFamily="Inter, sans-serif" fontWeight="bold">₹2,500</text>
          </motion.g>
        </svg>

        {/* UPI PIN Rule Banner */}
        <div className="bg-[#F0FFF8] border border-[#16865D]/30 rounded-xl p-3.5 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#16865D] shrink-0" aria-hidden="true" />
          <p className="font-body text-xs sm:text-sm text-[#172033] leading-snug">
            <strong>Key Rule:</strong> UPI PIN is strictly for <strong>sending</strong> money. Never share it to receive funds.
          </p>
        </div>
      </motion.div>

      {/* Floating fraud labels */}
      {fraudLabels.map((label, i) => (
        <motion.div
          key={label.text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
          className="absolute hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 bg-white rounded-full border shadow-sm shadow-black/5"
          style={{
            borderColor: `${label.color}25`,
            top: i === 0 ? '-16px' : i === 1 ? '45%' : i === 2 ? '72%' : i === 3 ? '18%' : '55%',
            right: i % 2 === 0 ? '-16px' : undefined,
            left: i % 2 !== 0 ? '-16px' : undefined,
          }}
        >
          <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: label.color }} />
          <span className="font-body text-[9px] font-semibold" style={{ color: label.color }}>
            {label.text}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-24 pb-16" style={{ backgroundColor: '#F7F8FC' }}>

      {/* Subtle grid background */}
      <div className="absolute inset-0 tech-grid pointer-events-none" />

      {/* Atmospheric purple glow — top left */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(89,58,203,0.06) 0%, transparent 70%)', transform: 'translate(-20%, -20%)' }} />
      {/* Atmospheric cyan glow — bottom right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.05) 0%, transparent 70%)', transform: 'translate(20%, 20%)' }} />

      {/* Main Grid Content */}
      <div className="site-container relative grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full z-10">

        {/* Left Column: Editorial Headline (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start">

          {/* Research Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F0EEFA] border border-[#593ACB]/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#593ACB] animate-pulse" />
            <span className="font-body text-[11px] text-[#593ACB] font-semibold uppercase tracking-[0.15em]">
              VSIT Research Symposium 2026
            </span>
            <span className="text-[#593ACB]/30">|</span>
            <span className="font-body text-[11px] text-[#64748B]">Cybersecurity Track</span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#172033]">
              UPI <span className="text-gradient-purple">SCAMS.</span>
              <br />
              <span style={{ color: '#172033', opacity: 0.85 }}>SPOT THEM.</span>
              <br />
              <span style={{ color: '#172033', opacity: 0.65 }}>STOP THEM.</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-3"
          >
            <h2 className="font-body text-sm md:text-base text-[#593ACB] uppercase tracking-wider font-semibold">
              Digital Payments and UPI: Security Challenges
            </h2>
          </motion.div>

          {/* Abstract */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-[#334155] text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-normal"
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
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#593ACB] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#4F33B7] hover:shadow-lg hover:shadow-[#593ACB]/25 transition-all focus-visible:outline-2 focus-visible:outline-[#593ACB]"
            >
              <span>Explore Threats</span>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="#research"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-[#172033] font-heading font-semibold text-xs uppercase tracking-wider rounded-xl border border-[#CBD5E1] hover:border-[#593ACB] hover:shadow-md transition-all focus-visible:outline-2 focus-visible:outline-[#593ACB]"
            >
              <span>Explore Research</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#593ACB]" aria-hidden="true" />
            </a>
          </motion.div>

          {/* Key Stats Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full max-w-xl grid grid-cols-3 gap-3 pt-6 border-t border-[#E5E7EB]"
            role="region"
            aria-label="Core National Payment Metrics"
          >
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-3.5 shadow-sm">
              <span className="font-heading text-xl sm:text-2xl font-black text-[#593ACB] block">
                185B+
              </span>
              <span className="font-body text-xs font-bold text-[#334155] uppercase tracking-wider block mt-1">
                UPI Txns FY25
              </span>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-3.5 shadow-sm">
              <span className="font-heading text-xl sm:text-2xl font-black text-[#0891B2] block">
                ₹246L Cr
              </span>
              <span className="font-body text-xs font-bold text-[#334155] uppercase tracking-wider block mt-1">
                Total Value
              </span>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-3.5 shadow-sm">
              <span className="font-heading text-xl sm:text-2xl font-black text-[#DC4545] block">
                5
              </span>
              <span className="font-body text-xs font-bold text-[#334155] uppercase tracking-wider block mt-1">
                Fraud Vectors
              </span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Illustration (5 cols) */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-w-0 px-4 sm:px-8 lg:px-0">
          <UPIFlowIllustration />
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="font-body text-xs font-bold text-[#475569] uppercase tracking-[0.18em]">
          Scroll to investigate
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-[#593ACB]" aria-hidden="true" />
        </motion.div>
      </motion.div>

    </section>
  );
}
