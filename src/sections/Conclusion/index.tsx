// src/sections/Conclusion/index.tsx
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';

const pillars = [
  {
    title: 'Technology',
    color: '#38BDF8',
    description:
      'UPI\'s layered security — PIN authentication, device binding, real-time alerts — provides robust protection when used correctly.',
  },
  {
    title: 'Awareness',
    color: '#34D399',
    description:
      'Informed users who understand how UPI works are significantly more resistant to social engineering and deception tactics.',
  },
  {
    title: 'Behaviour',
    color: '#FBBF24',
    description:
      'Responsible digital behaviour — verifying recipients, declining unknown requests, reporting suspicious activity — protects everyone.',
  },
  {
    title: 'Reporting',
    color: '#F87171',
    description:
      'Timely fraud reporting via 1930 and cybercrime.gov.in is essential to protect others and enable law enforcement response.',
  },
];

export default function Conclusion() {
  return (
    <section id="conclusion" className="site-section bg-[#071426]">
      <div className="site-container">
        {/* Central conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-[#38BDF8]/30" />
            <Shield className="w-8 h-8 text-[#38BDF8]" strokeWidth={1.5} />
            <div className="h-px w-16 bg-[#38BDF8]/30" />
          </div>

          <span className="font-mono text-xs text-[#38BDF8] uppercase tracking-[0.2em] mb-6 block">
            § 10 — Research Conclusion
          </span>

          <blockquote className="font-heading text-2xl md:text-3xl font-semibold text-white leading-relaxed mb-8">
            "UPI security is not only a{' '}
            <span className="text-[#38BDF8]">technological responsibility.</span>
            <br />
            It also depends on{' '}
            <span className="text-[#34D399]">informed users,</span>{' '}
            <span className="text-[#FBBF24]">responsible digital behaviour</span>{' '}
            and{' '}
            <span className="text-[#F87171]">timely fraud reporting.</span>"
          </blockquote>

          <p className="font-body text-[#94A3B8] text-base leading-relaxed max-w-2xl mx-auto">
            This research demonstrates that the most sophisticated fraud techniques in India's digital
            payment ecosystem succeed not by defeating cryptographic systems, but by exploiting human
            psychology. Education and awareness are, therefore, the most powerful countermeasures.
          </p>
        </motion.div>

        {/* Four pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0B192B] border border-[#24364D] rounded-xl p-6 hover:border-[#38BDF8]/20 transition-colors"
            >
              <div
                className="w-1 h-8 rounded-full mb-4"
                style={{ backgroundColor: pillar.color }}
              />
              <h3 className="font-heading text-lg font-semibold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0B192B] border border-[#24364D] rounded-xl p-8 text-center"
        >
          <h3 className="font-heading text-xl font-semibold text-white mb-4">
            The Single Most Important Rule
          </h3>
          <div className="inline-block bg-[#F87171]/10 border border-[#F87171]/30 rounded-xl px-8 py-5 mb-6">
            <p className="font-mono text-lg font-bold text-[#F87171]">
              UPI PIN is ONLY for SENDING money.
            </p>
            <p className="font-mono text-sm text-[#94A3B8] mt-2">
              You never need your PIN to receive a refund, prize, or any payment.
            </p>
          </div>
          <p className="font-body text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            If you remember one thing from this research:{' '}
            <strong className="text-white">entering your UPI PIN always authorises an outgoing payment.</strong>{' '}
            Anyone who asks you to enter your PIN to receive money is attempting fraud.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#defence"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#38BDF8] text-[#071426] font-heading font-semibold text-sm rounded-lg hover:bg-[#67E8F9] transition-colors"
            >
              Security Checklist
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://cybercrime.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#24364D] text-[#94A3B8] font-heading text-sm rounded-lg hover:text-[#38BDF8] hover:border-[#38BDF8]/30 transition-colors"
            >
              Report Cybercrime
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Academic context */}
        <div className="mt-8 text-center">
          <p className="font-mono text-xs text-[#94A3B8]/50">
            Presented at VSIT Student Research Symposium 2026 ·
            Topic: Digital Payments and UPI: Security Challenges
          </p>
        </div>
      </div>
    </section>
  );
}
