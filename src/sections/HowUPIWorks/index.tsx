// src/sections/HowUPIWorks/index.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../../components/layout/SectionHeader';
import { ChevronRight, Shield, Smartphone, Server, Building, CheckCircle2 } from 'lucide-react';

const flowSteps = [
  {
    id: 0,
    label: 'Payer',
    icon: Smartphone,
    color: '#593ACB',
    title: 'Payment Initiation',
    detail:
      "The payer opens a UPI-enabled app (PhonePe, Google Pay, BHIM, etc.) and initiates a transaction by entering the recipient's VPA (Virtual Payment Address), phone number, or scanning a QR code. The payer sets the amount and note.",
  },
  {
    id: 1,
    label: 'PSP / UPI App',
    icon: Shield,
    color: '#0891B2',
    title: 'Authentication',
    detail:
      "The Payment Service Provider (PSP) app on the user's device verifies the device binding and mobile number. The payer then enters their UPI PIN — a 4–6 digit secret known only to them — to authorise the transaction.",
  },
  {
    id: 2,
    label: 'NPCI UPI Switch',
    icon: Server,
    color: '#D97706',
    title: 'Transaction Routing',
    detail:
      "NPCI's UPI infrastructure (the switch) receives the authenticated payment request, validates the VPA, routes to the relevant banks, and coordinates real-time interoperability between different bank systems.",
  },
  {
    id: 3,
    label: 'Banks',
    icon: Building,
    color: '#16865D',
    title: 'Bank Processing',
    detail:
      "Both the payer's bank (remitter) and beneficiary's bank (receiver) process the fund transfer. The remitter bank debits the payer's account; the beneficiary bank credits the receiver's account in real time.",
  },
  {
    id: 4,
    label: 'Beneficiary',
    icon: CheckCircle2,
    color: '#16865D',
    title: 'Confirmation',
    detail:
      'Both parties receive instant transaction status notifications. The full process — from PIN entry to fund credit — typically completes in under 3 seconds. Transaction references are logged for dispute resolution.',
  },
];

const securityMechanisms = [
  {
    title: 'UPI PIN Authentication',
    detail:
      'A user-set 4–6 digit PIN known exclusively to the account holder. Required for every debit transaction. Never required to receive money. PSPs enforce attempt limits and lockout policies.',
    color: '#593ACB',
    icon: '🔐',
  },
  {
    title: 'Device & Mobile Binding',
    detail:
      'UPI apps bind to a specific device and SIM card. Initial registration requires an OTP sent to the registered mobile number, ensuring only the legitimate device can initiate transactions.',
    color: '#0891B2',
    icon: '📱',
  },
  {
    title: 'Bank-Side Monitoring',
    detail:
      'Banks employ real-time fraud detection systems that analyse transaction patterns, flag anomalies, and can intervene on suspicious transactions before settlement.',
    color: '#16865D',
    icon: '🏦',
  },
  {
    title: 'Transaction Notifications',
    detail:
      'Every UPI transaction triggers instant SMS and push notifications to the registered mobile number, enabling immediate detection of unauthorised activity.',
    color: '#D97706',
    icon: '🔔',
  },
  {
    title: 'NPCI & RBI Frameworks',
    detail:
      'NPCI maintains the technical interoperability standards, circular-based rules, and dispute resolution mechanisms. The RBI provides regulatory oversight and consumer protection guidelines.',
    color: '#DC4545',
    icon: '⚖️',
  },
];

export default function HowUPIWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  return (
    <section id="how-upi-works" className="site-section bg-white">
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 02 — UNDERSTANDING UPI"
            title="How a UPI Transaction Works"
            subtitle="UPI is a real-time payment protocol built on the Immediate Payment Service (IMPS) infrastructure, enabling 24×7 interbank transfers via mobile devices."
            accentColor="#0891B2"
          />
        </div>

        {/* Flow diagram */}
        <div className="mb-6">
          <p className="font-body text-xs text-[#475569] mb-6 uppercase tracking-widest font-semibold" id="flow-diagram-caption">
            Interactive payment flow — select any stage to inspect cryptographic and network events
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-stretch gap-3 lg:gap-0"
            role="tablist"
            aria-labelledby="flow-diagram-caption"
          >
            {flowSteps.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <div key={step.id} className="flex lg:flex-col items-center min-w-0">
                  <button
                    type="button"
                    role="tab"
                    id={`flow-tab-${step.id}`}
                    aria-selected={isActive}
                    aria-controls={`flow-panel-${step.id}`}
                    onClick={() => setActiveStep(isActive ? null : step.id)}
                    className={`w-full relative p-4 border rounded-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#593ACB] ${
                      isActive
                        ? 'bg-[#F0EEFA] border-[#593ACB]/50 shadow-sm ring-1 ring-[#593ACB]/20'
                        : 'bg-white border-[#CBD5E1] hover:border-[#593ACB]/40 hover:bg-[#F9FAFB]'
                    }`}
                  >
                    <div
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-3 mx-auto"
                      style={{ backgroundColor: `${step.color}15`, border: `1.5px solid ${step.color}35` }}
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                    </div>
                    <p className="font-body text-[10px] uppercase tracking-widest mb-1 font-bold" style={{ color: step.color }}>
                      Step {i + 1}
                    </p>
                    <p className="font-heading text-sm font-bold text-[#172033] text-center">
                      {step.label}
                    </p>
                  </button>

                  {i < flowSteps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center w-6 shrink-0" aria-hidden="true">
                      <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Step detail */}
          <div aria-live="polite">
            <AnimatePresence mode="wait">
              {activeStep !== null && (
                <motion.div
                  key={activeStep}
                  id={`flow-panel-${activeStep}`}
                  role="tabpanel"
                  aria-labelledby={`flow-tab-${activeStep}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 bg-white border rounded-xl p-6 shadow-sm"
                  style={{ borderColor: `${flowSteps[activeStep].color}35` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-body text-xs uppercase tracking-widest font-bold"
                      style={{ color: flowSteps[activeStep].color }}
                    >
                      {flowSteps[activeStep].label}
                    </span>
                    <div className="h-px flex-1" style={{ backgroundColor: `${flowSteps[activeStep].color}25` }} aria-hidden="true" />
                    <h4 className="font-heading text-sm sm:text-base font-bold text-[#172033]">
                      {flowSteps[activeStep].title}
                    </h4>
                  </div>
                  <p className="font-body text-sm text-[#334155] leading-relaxed">
                    {flowSteps[activeStep].detail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {!activeStep && activeStep !== 0 && (
            <p className="text-center font-body text-xs text-[#64748B] mt-4">
              ↑ Click or press Enter on any stage above to explore architectural details
            </p>
          )}
        </div>

        {/* Security mechanisms */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-5 h-5 text-[#593ACB]" aria-hidden="true" />
            <h3 className="font-heading text-xl font-bold text-[#172033]">
              Built-in Technical Security Mechanisms
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {securityMechanisms.map((mech, i) => (
              <motion.div
                key={mech.title}
                role="listitem"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-[#E5E7EB] rounded-xl p-5 hover:border-[#593ACB]/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl" role="img" aria-hidden="true">{mech.icon}</span>
                  <h4 className="font-heading text-sm font-bold text-[#172033]">{mech.title}</h4>
                </div>
                <p className="font-body text-xs text-[#475569] leading-relaxed">
                  {mech.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
