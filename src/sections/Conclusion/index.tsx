// src/sections/Conclusion/index.tsx
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';

const pillars = [
  {
    title: 'Technology',
    color: '#593ACB',
    description:
      'UPI’s layered architecture — dual-factor PIN authentication, strict device binding, and HSM encryption — provides world-class security when untouched by social engineering.',
  },
  {
    title: 'Awareness',
    color: '#16865D',
    description:
      'Informed users who understand the foundational rule (PIN is required strictly for debits, never credits) are virtually immune to collection request and refund fraud.',
  },
  {
    title: 'Behaviour',
    color: '#D97706',
    description:
      'Consistent digital hygiene — verifying beneficiary handles, rejecting remote desktop requests, and refusing unverified helpline contacts — safeguards the payment perimeter.',
  },
  {
    title: 'Reporting',
    color: '#DC4545',
    description:
      'Instant fraud reporting via 1930 within the golden hour enables immediate interbank lien freezes, significantly increasing fund recovery probabilities.',
  },
];

export default function Conclusion() {
  return (
    <section id="conclusion" className="site-section bg-[#F0EEFA]/40" aria-labelledby="conclusion-heading">
      <div className="site-container">
        {/* Central conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
            <div className="h-px w-16 bg-[#593ACB]/20" />
            <div className="w-10 h-10 rounded-full bg-[#593ACB]/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#593ACB]" strokeWidth={2} />
            </div>
            <div className="h-px w-16 bg-[#593ACB]/20" />
          </div>

          <span className="font-body text-xs text-[#593ACB] uppercase tracking-[0.2em] font-bold mb-4 block" id="conclusion-heading">
            § 10 — Research Synthesis & Conclusion
          </span>

          <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#172033] leading-snug mb-8">
            "UPI security is not solely a{' '}
            <span className="text-[#593ACB]">technological challenge</span>.
            <br />
            It relies equally on{' '}
            <span className="text-[#16865D]">user education</span>,{' '}
            <span className="text-[#D97706]">verified habits</span>, and{' '}
            <span className="text-[#DC4545]">rapid institutional response</span>."
          </blockquote>

          <p className="font-body text-[#334155] text-base leading-relaxed max-w-2xl mx-auto font-normal">
            This study confirms that modern digital payment scams in India rarely exploit cryptographic vulnerabilities. Instead, fraudsters weaponise urgency, authority deception, and cognitive friction. Continuous digital literacy is the ultimate firewall.
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
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-8 h-1.5 rounded-full mb-4"
                style={{ backgroundColor: pillar.color }}
                aria-hidden="true"
              />
              <h3 className="font-heading text-lg font-bold text-[#172033] mb-2.5">
                {pillar.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#334155] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Takeaway Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-[#E5E7EB] rounded-2xl p-8 sm:p-10 text-center shadow-sm max-w-3xl mx-auto"
        >
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#172033] mb-4">
            The Fundamental Safety Rule
          </h3>
          <div className="inline-block bg-[#FFF5F5] border border-[#DC4545]/30 rounded-2xl px-6 sm:px-10 py-5 mb-6">
            <p className="font-heading text-lg sm:text-xl font-extrabold text-[#DC4545]">
              UPI PIN is strictly for PAYING out money.
            </p>
            <p className="font-body text-xs sm:text-sm text-[#334155] mt-1 font-semibold">
              Receiving payments, rewards, or refunds NEVER requires PIN entry.
            </p>
          </div>
          <p className="font-body text-sm text-[#475569] max-w-xl mx-auto leading-relaxed">
            Whenever a caller, buyer, or webpage asks you to confirm your 4- or 6-digit PIN to receive money, it is without exception a fraudulent transaction.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#defence"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#593ACB] text-white font-body font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-[#4F33B7] shadow-md shadow-[#593ACB]/20 transition-all focus-visible:outline-2 focus-visible:outline-[#593ACB]"
            >
              <span>Review Checklist</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://cybercrime.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#CBD5E1] text-[#172033] font-body font-semibold text-xs uppercase tracking-wider rounded-xl hover:border-[#593ACB] hover:bg-[#F9FAFB] transition-all focus-visible:outline-2 focus-visible:outline-[#593ACB]"
            >
              <span>National Reporting Portal</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {/* Academic context footer badge */}
        <div className="mt-12 text-center">
          <p className="font-body text-xs text-[#64748B]">
            Presented at VSIT Student Research Symposium 2026 · Faculty of Information Technology
          </p>
        </div>
      </div>
    </section>
  );
}
