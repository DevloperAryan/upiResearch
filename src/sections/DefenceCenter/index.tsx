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
    detail: 'Your UPI PIN is an exclusive personal secret. Legitimate banks, government agencies, and payment platforms never ask for it.',
    color: '#DC4545',
  },
  {
    id: '2',
    icon: Eye,
    text: 'Verify payment recipient and amount before every transaction',
    detail: 'Confirm the registered name displayed by the UPI app before authorising any payment. A single digit error can redirect funds irreversibly.',
    color: '#0891B2',
  },
  {
    id: '3',
    icon: AlertTriangle,
    text: 'Never approve unexpected collect requests',
    detail: 'Unsolicited collect requests are the primary fraud vector. You never need to approve one to receive a refund, prize, or any incoming payment.',
    color: '#D97706',
  },
  {
    id: '4',
    icon: Smartphone,
    text: 'Avoid unknown APKs and remote-access tools',
    detail: 'Install apps exclusively from official stores. No legitimate financial institution requests AnyDesk, TeamViewer, or screen-sharing tools.',
    color: '#593ACB',
  },
  {
    id: '5',
    icon: FileText,
    text: 'Use official customer support channels only',
    detail: 'Find customer care numbers from your bank’s official verified app or statement. Never trust contact numbers indexed on public search engines or social media.',
    color: '#0891B2',
  },
  {
    id: '6',
    icon: Lock,
    text: 'Secure your mobile device with strong authentication',
    detail: 'Enable device lock with biometrics or a strong alphanumeric PIN. Keep your operating system updated and avoid rooting or jailbreaking.',
    color: '#16865D',
  },
  {
    id: '7',
    icon: Bell,
    text: 'Monitor all transaction alerts immediately',
    detail: 'Enable instantaneous SMS and push notifications for all banking activities. Check debits periodically against personal accounting.',
    color: '#593ACB',
  },
  {
    id: '8',
    icon: Shield,
    text: 'Report suspected fraud immediately without delay',
    detail: 'Time is critical. Freeze your bank account immediately, dial 1930 within the golden hour, and lodge a complaint at cybercrime.gov.in.',
    color: '#DC4545',
  },
];

const responseSteps = [
  { step: 1, action: 'Contact your bank or payment provider immediately', detail: 'Request an immediate freeze on your account or transaction reversal where possible.', color: '#DC4545' },
  { step: 2, action: 'Call the National Cybercrime Helpline: 1930', detail: 'Available 24×7 across India. Immediate reporting enables inter-bank lien freezing.', color: '#D97706' },
  { step: 3, action: 'File a formal report on cybercrime.gov.in', detail: 'Submit transaction references, SMS logs, caller IDs, and relevant forensic proof.', color: '#0891B2' },
  { step: 4, action: 'Preserve all transaction receipts and screenshots', detail: 'Maintain complete digital evidence trails for police investigation and ombudsman review.', color: '#16865D' },
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
    <section id="defence" className="site-section bg-[#F7F8FC]" aria-labelledby="defence-heading">
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 08 — SECURITY DEFENCE CENTER"
            title="Protect Yourself: Interactive Security Checklist"
            subtitle="A practical, actionable guide to protect yourself from UPI fraud — and immediate steps if you encounter an incident."
            accentColor="#16865D"
          />
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] gap-8">
          {/* Checklist */}
          <div>
            {/* Accessible Progress Bar */}
            <div className="flex items-center justify-between mb-3">
              <span className="font-body text-xs font-semibold text-[#334155]" id="checklist-progress-label">
                Security score: {checked.size} of {checklistItems.length} verified
              </span>
              <span
                className="font-mono text-xs font-bold"
                style={{ color: progress === 100 ? '#16865D' : '#593ACB' }}
                aria-live="polite"
              >
                {progress}% complete
              </span>
            </div>
            <div
              role="progressbar"
              aria-labelledby="checklist-progress-label"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              className="h-2.5 bg-[#E5E7EB] rounded-full overflow-hidden mb-8"
            >
              <motion.div
                className="h-full rounded-full transition-all"
                style={{ backgroundColor: progress === 100 ? '#16865D' : '#593ACB' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <div className="space-y-3" role="group" aria-label="Security defence checklist items">
              {checklistItems.map((item, i) => {
                const Icon = item.icon;
                const isChecked = checked.has(item.id);
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    role="checkbox"
                    aria-checked={isChecked}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => toggle(item.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-[#593ACB] ${
                      isChecked
                        ? 'bg-[#F0FFF8] border-[#16865D]/30 shadow-sm'
                        : 'bg-white border-[#E5E7EB] hover:border-[#593ACB]/30 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="shrink-0 mt-0.5" aria-hidden="true">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-[#16865D]" />
                        ) : (
                          <Square className="w-5 h-5 text-[#94A3B8] group-hover:text-[#593ACB] transition-colors" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-2">
                          <Icon className="w-5 h-5 shrink-0 mt-0.5" style={{ color: item.color }} aria-hidden="true" />
                          <h4
                            className={`font-heading text-sm sm:text-base font-bold leading-snug ${
                              isChecked ? 'text-[#16865D]' : 'text-[#0F172A]'
                            }`}
                          >
                            {item.text}
                          </h4>
                        </div>
                        <p className="font-body text-xs sm:text-sm text-[#334155] leading-relaxed mt-1.5 ml-7 font-normal">
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
                role="status"
                aria-live="polite"
                className="mt-6 p-6 bg-[#F0FFF8] border border-[#16865D]/30 rounded-2xl text-center shadow-sm"
              >
                <Shield className="w-9 h-9 text-[#16865D] mx-auto mb-2" aria-hidden="true" />
                <h4 className="font-heading text-lg font-bold text-[#16865D]">
                  Security Protocol Complete!
                </h4>
                <p className="font-body text-sm text-[#334155] mt-1 font-medium">
                  You are equipped with essential verification habits to protect your financial accounts.
                </p>
              </motion.div>
            )}
          </div>

          {/* Emergency response panel */}
          <div className="space-y-5">
            {/* Emergency Hotline card */}
            <div className="bg-white border border-[#DC4545]/20 rounded-2xl overflow-hidden shadow-sm" role="region" aria-label="Emergency cybercrime reporting">
              <div className="bg-[#FFF5F5] border-b border-[#DC4545]/20 p-4 sm:p-5 flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-[#DC4545]" aria-hidden="true" />
                <span className="font-body text-xs sm:text-sm text-[#DC4545] uppercase tracking-wider font-extrabold">
                  Emergency Incident Hotline
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="font-body text-xs text-[#475569] uppercase tracking-wider mb-1 font-bold">
                    National Cybercrime Helpline
                  </p>
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-[#DC4545]" aria-hidden="true" />
                    <a
                      href="tel:1930"
                      aria-label="Call National Cybercrime Helpline 1930"
                      className="font-heading text-4xl font-black text-[#DC4545] hover:underline focus-visible:outline-2 focus-visible:outline-[#DC4545]"
                    >
                      1930
                    </a>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[#334155] mt-1.5 font-semibold">
                    Toll-free · 24 × 7 Operational across all Indian states
                  </p>
                </div>

                <div className="border-t border-[#F3F4F6] pt-4">
                  <p className="font-body text-xs text-[#475569] uppercase tracking-wider mb-2 font-bold">
                    Official Central Portal
                  </p>
                  <a
                    href="https://cybercrime.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-bold text-[#593ACB] hover:text-[#4F33B7] hover:underline focus-visible:outline-2 focus-visible:outline-[#593ACB]"
                  >
                    <span>cybercrime.gov.in</span>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <p className="font-body text-xs text-[#475569] mt-1 font-medium">
                    Ministry of Home Affairs (MHA), Government of India
                  </p>
                </div>
              </div>
            </div>

            {/* Action sequence */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm" role="region" aria-label="Immediate fraud response protocol">
              <h4 className="font-body text-xs sm:text-sm text-[#0F172A] uppercase tracking-wider mb-4 font-bold">
                Golden Hour Action Protocol
              </h4>
              <div className="space-y-4">
                {responseSteps.map((s) => (
                  <div key={s.step} className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: `${s.color}15`, border: `1.5px solid ${s.color}35` }}
                      aria-hidden="true"
                    >
                      <span className="font-mono text-xs font-bold" style={{ color: s.color }}>
                        {s.step}
                      </span>
                    </div>
                    <div>
                      <h5 className="font-heading text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                        {s.action}
                      </h5>
                      <p className="font-body text-xs sm:text-sm text-[#475569] mt-0.5 leading-relaxed">
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
