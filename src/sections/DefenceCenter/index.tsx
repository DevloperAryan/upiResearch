// src/sections/DefenceCenter/index.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/layout/SectionHeader';
import {
  Shield,
  CheckSquare,
  Square,
  Phone,
  ExternalLink,
  AlertTriangle,
  Lock,
  Eye,
  Bell,
  Smartphone,
  FileText,
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  icon: typeof Lock;
  text: string;
  detail: string;
  color: string;
}

const checklistItems: ChecklistItem[] = [
  {
    id: '1',
    icon: Lock,
    text: 'Never disclose UPI PIN or OTP to anyone',
    detail: 'Your UPI PIN is an exclusive personal secret. Legitimate banks, government agencies and payment platforms never ask for it.',
    color: '#F87171',
  },
  {
    id: '2',
    icon: Eye,
    text: 'Verify payment recipient and amount before every transaction',
    detail: 'Confirm the registered name displayed by the UPI app before authorising any payment. A single digit error can redirect funds irreversibly.',
    color: '#38BDF8',
  },
  {
    id: '3',
    icon: AlertTriangle,
    text: 'Never approve unexpected collect requests',
    detail: 'Unsolicited collect requests are the primary fraud vector. You never need to approve one to receive a refund, prize or any payment.',
    color: '#FBBF24',
  },
  {
    id: '4',
    icon: Smartphone,
    text: 'Avoid unknown APKs and remote-access tools',
    detail: 'Install apps exclusively from official stores. No legitimate financial institution requests AnyDesk, TeamViewer or similar tools.',
    color: '#C084FC',
  },
  {
    id: '5',
    icon: FileText,
    text: 'Use official customer support channels only',
    detail: 'Find customer care numbers from your bank\'s official app or website. Never call numbers found on Google, WhatsApp or social media.',
    color: '#60A5FA',
  },
  {
    id: '6',
    icon: Lock,
    text: 'Secure your mobile device with strong authentication',
    detail: 'Enable device lock with PIN, biometric, or pattern. Keep your operating system and apps updated. Encrypt your device.',
    color: '#34D399',
  },
  {
    id: '7',
    icon: Bell,
    text: 'Monitor all transaction alerts immediately',
    detail: 'Enable SMS and push notifications for all UPI transactions. Report any unrecognised transaction to your bank without delay.',
    color: '#38BDF8',
  },
  {
    id: '8',
    icon: Shield,
    text: 'Report suspected fraud immediately without delay',
    detail: 'Time is critical. Contact your bank immediately, then call 1930. File a complaint at cybercrime.gov.in. Preserve all evidence.',
    color: '#F87171',
  },
];

const responseSteps = [
  { step: 1, action: 'Contact your bank or payment provider immediately', detail: 'Request a freeze on the account or transaction reversal where possible.', color: '#F87171' },
  { step: 2, action: 'Call the National Cybercrime Helpline: 1930', detail: 'Available 24×7. Report the incident with all transaction details.', color: '#FBBF24' },
  { step: 3, action: 'File a complaint on cybercrime.gov.in', detail: 'Upload transaction proof, message screenshots, and any evidence of the fraud.', color: '#38BDF8' },
  { step: 4, action: 'Preserve all transaction references and evidence', detail: 'Do not delete messages, screenshots, or transaction IDs. These are essential for investigation.', color: '#34D399' },
];

export default function DefenceCenter() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const progress = Math.round((checked.size / checklistItems.length) * 100);

  return (
    <section id="defence" className="site-section bg-[#071426]">
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 08 — SECURITY DEFENCE CENTER"
            title="Protect Yourself: Security Checklist"
            subtitle="A practical, actionable guide to protect yourself from UPI fraud — and what to do if you become a victim."
            accentColor="#34D399"
          />
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] gap-8">
          {/* Checklist */}
          <div>
            {/* Progress */}
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-[#94A3B8]">
                Security score: {checked.size}/{checklistItems.length}
              </span>
              <span
                className="font-mono text-xs font-bold"
                style={{ color: progress === 100 ? '#34D399' : '#38BDF8' }}
              >
                {progress}%
              </span>
            </div>
            <div className="h-2 bg-[#11243A] rounded-full overflow-hidden mb-8">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: progress === 100 ? '#34D399' : '#38BDF8' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="space-y-3">
              {checklistItems.map((item, i) => {
                const Icon = item.icon;
                const isChecked = checked.has(item.id);
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => toggle(item.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group ${
                      isChecked
                        ? 'bg-[#34D399]/5 border-[#34D399]/20'
                        : 'bg-[#0B192B] border-[#24364D] hover:border-[#38BDF8]/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-[#34D399] shrink-0 mt-0.5" />
                      ) : (
                        <Square className="w-5 h-5 text-[#24364D] shrink-0 mt-0.5 group-hover:text-[#38BDF8]/40 transition-colors" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-start gap-2">
                          <Icon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: item.color }} />
                          <p
                            className={`font-heading text-sm font-semibold leading-snug ${
                              isChecked ? 'text-[#34D399] line-through decoration-[#34D399]/40' : 'text-white'
                            }`}
                          >
                            {item.text}
                          </p>
                        </div>
                        <p className="font-body text-xs text-[#94A3B8] leading-relaxed mt-1.5 ml-6">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {progress === 100 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-[#34D399]/10 border border-[#34D399]/30 rounded-xl text-center"
              >
                <Shield className="w-8 h-8 text-[#34D399] mx-auto mb-2" />
                <p className="font-heading text-sm font-semibold text-[#34D399]">
                  Security checklist complete
                </p>
                <p className="font-mono text-xs text-[#94A3B8] mt-1">
                  You are prepared to use UPI safely.
                </p>
              </motion.div>
            )}
          </div>

          {/* Emergency panel */}
          <div className="space-y-5">
            {/* Emergency contact */}
            <div className="bg-[#F87171]/5 border border-[#F87171]/20 rounded-xl overflow-hidden">
              <div className="bg-[#F87171]/10 border-b border-[#F87171]/20 p-4 flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-[#F87171]" />
                <span className="font-mono text-xs text-[#F87171] uppercase tracking-widest font-bold">
                  Emergency Response
                </span>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest mb-1">
                    National Cybercrime Helpline
                  </p>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#F87171]" />
                    <span className="font-mono text-3xl font-bold text-[#F87171]">1930</span>
                  </div>
                  <p className="font-mono text-[10px] text-[#94A3B8] mt-1">
                    Available 24 × 7 · Free to call
                  </p>
                </div>

                <div className="border-t border-[#F87171]/10 pt-4">
                  <p className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest mb-2">
                    Official Portal
                  </p>
                  <a
                    href="https://cybercrime.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#38BDF8] hover:text-[#67E8F9] transition-colors font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    cybercrime.gov.in
                  </a>
                  <p className="font-mono text-[10px] text-[#94A3B8] mt-1">
                    Ministry of Home Affairs
                  </p>
                </div>
              </div>
            </div>

            {/* Response steps */}
            <div className="bg-[#0B192B] border border-[#24364D] rounded-xl p-5">
              <h4 className="font-mono text-[11px] text-[#94A3B8] uppercase tracking-widest mb-4">
                If You Are Defrauded — Act Immediately
              </h4>
              <div className="space-y-4">
                {responseSteps.map((s) => (
                  <div key={s.step} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${s.color}20`, border: `1.5px solid ${s.color}40` }}
                    >
                      <span className="font-mono text-[10px] font-bold" style={{ color: s.color }}>
                        {s.step}
                      </span>
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-white leading-snug">
                        {s.action}
                      </p>
                      <p className="font-body text-xs text-[#94A3B8] mt-0.5 leading-relaxed">
                        {s.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
