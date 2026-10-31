// src/sections/ResearchMethodology/index.tsx
import { motion } from 'framer-motion';
import SectionHeader from '../../components/layout/SectionHeader';
import { BookOpen, Search, BarChart3, Users, FileText, Lightbulb } from 'lucide-react';

const objectives = [
  'Identify common UPI fraud techniques targeting Indian users.',
  'Understand social engineering methods employed by fraudsters.',
  'Examine authentication and security mechanisms in UPI.',
  'Evaluate digital payment security awareness among college students.',
  'Recommend practical, evidence-based prevention measures.',
];

const methodSteps = [
  {
    id: 1,
    icon: Search,
    title: 'Secondary Research',
    description:
      'Systematic review of official NPCI publications, RBI circulars, CERT-In advisories, government reports, and peer-reviewed academic literature on UPI security.',
    color: '#593ACB',
    sources: ['NPCI Annual Reports', 'RBI Guidelines', 'CERT-In Advisories'],
  },
  {
    id: 2,
    icon: BookOpen,
    title: 'Regulatory Analysis',
    description:
      'Analysis of RBI Payment System regulations, NPCI operational circulars, and Ministry of Home Affairs cybercrime statistics and frameworks.',
    color: '#0891B2',
    sources: ['RBI Payment Vision', 'MHA Cybercrime Data', 'PIB Reports'],
  },
  {
    id: 3,
    icon: Users,
    title: 'Student Awareness Survey',
    description:
      'Primary data collection through a structured survey measuring digital payment security awareness among college students — a key at-risk demographic.',
    color: '#D97706',
    sources: ['VSIT Student Sample', 'Structured Questionnaire'],
  },
  {
    id: 4,
    icon: BarChart3,
    title: 'Comparative Analysis',
    description:
      'Cross-referencing fraud patterns identified in official reports with survey findings to identify awareness gaps and high-priority intervention areas.',
    color: '#16865D',
    sources: ['Survey Results', 'NPCI Fraud Data', 'RBI Statistics'],
  },
  {
    id: 5,
    icon: FileText,
    title: 'Case Documentation',
    description:
      'Analysis of documented UPI fraud case patterns based on official advisories and cybercrime reports to create representative educational scenarios.',
    color: '#DC4545',
    sources: ['CERT-In Alerts', 'Cybercrime Reports', 'NPCI Awareness Bulletins'],
  },
  {
    id: 6,
    icon: Lightbulb,
    title: 'Recommendations',
    description:
      'Evidence-based prevention strategies synthesised from research findings, security frameworks, and identified awareness gaps in the student population.',
    color: '#7C5CE8',
    sources: ['Research Synthesis', 'Expert Guidelines'],
  },
];

const limitations = [
  'Survey sample limited to VSIT student population — may not represent broader demographic.',
  'Self-reported awareness may differ from actual behaviour in real fraud scenarios.',
  'UPI fraud statistics are continuously evolving; figures reflect most recent available data.',
  'Secondary sources depend on completeness of official reporting mechanisms.',
];

export default function ResearchMethodology() {
  return (
    <section id="research" className="site-section" style={{ backgroundColor: '#F7F8FC' }}>
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 05 — RESEARCH OBJECTIVES & METHODOLOGY"
            title="Academic Research Framework"
            subtitle="This research follows a structured methodology combining secondary literature review, regulatory analysis, and primary survey data to produce evidence-based findings."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Objectives */}
          <div>
            <h3 className="font-heading text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
              <span className="font-body text-xs sm:text-sm text-[#593ACB] uppercase tracking-wider font-bold">Research Objectives</span>
            </h3>
            <ol className="space-y-4">
              {objectives.map((obj, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded-full bg-[#593ACB]/15 border border-[#593ACB]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-body text-xs text-[#593ACB] font-bold">{i + 1}</span>
                  </div>
                  <p className="font-body text-sm sm:text-base text-[#334155] leading-relaxed font-medium">{obj}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Limitations */}
          <div>
            <h3 className="font-heading text-xl font-bold text-[#0F172A] mb-6">
              <span className="font-body text-xs sm:text-sm text-[#D97706] uppercase tracking-wider font-bold">Methodology Limitations</span>
            </h3>
            <div className="bg-white border border-[#D97706]/20 rounded-2xl p-6 sm:p-7 shadow-sm">
              <p className="font-body text-sm sm:text-base text-[#334155] mb-4 leading-relaxed font-medium">
                Academic integrity requires transparent disclosure of research constraints. The following boundaries apply to this empirical evaluation:
              </p>
              <ul className="space-y-3">
                {limitations.map((lim, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#D97706] font-bold shrink-0 mt-0.5 text-base">›</span>
                    <span className="font-body text-xs sm:text-sm text-[#475569] leading-relaxed">{lim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Methodology steps */}
        <div>
          <h3 className="font-heading text-lg font-bold text-[#0F172A] uppercase tracking-wider mb-6">
            Sequential Research Protocol
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {methodSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:border-[#593ACB]/30 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3.5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${step.color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: step.color }} />
                      </div>
                      <div>
                        <span className="font-body text-xs uppercase tracking-wider font-bold" style={{ color: step.color }}>
                          Phase {step.id}
                        </span>
                        <h4 className="font-heading text-base font-bold text-[#0F172A]">{step.title}</h4>
                      </div>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#F1F5F9]">
                    {step.sources.map((src) => (
                      <span
                        key={src}
                        className="font-body text-xs px-2.5 py-1 rounded-lg border font-semibold"
                        style={{
                          color: step.color,
                          borderColor: `${step.color}25`,
                          backgroundColor: `${step.color}08`,
                        }}
                      >
                        {src}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
