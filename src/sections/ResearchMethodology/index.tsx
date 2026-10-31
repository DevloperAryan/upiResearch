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
    color: '#38BDF8',
    sources: ['NPCI Annual Reports', 'RBI Guidelines', 'CERT-In Advisories'],
  },
  {
    id: 2,
    icon: BookOpen,
    title: 'Regulatory Analysis',
    description:
      'Analysis of RBI Payment System regulations, NPCI operational circulars, and Ministry of Home Affairs cybercrime statistics and frameworks.',
    color: '#60A5FA',
    sources: ['RBI Payment Vision', 'MHA Cybercrime Data', 'PIB Reports'],
  },
  {
    id: 3,
    icon: Users,
    title: 'Student Awareness Survey',
    description:
      'Primary data collection through a structured survey measuring digital payment security awareness among college students — a key at-risk demographic.',
    color: '#FBBF24',
    sources: ['VSIT Student Sample', 'Structured Questionnaire'],
  },
  {
    id: 4,
    icon: BarChart3,
    title: 'Comparative Analysis',
    description:
      'Cross-referencing fraud patterns identified in official reports with survey findings to identify awareness gaps and high-priority intervention areas.',
    color: '#34D399',
    sources: ['Survey Results', 'NPCI Fraud Data', 'RBI Statistics'],
  },
  {
    id: 5,
    icon: FileText,
    title: 'Case Documentation',
    description:
      'Analysis of documented UPI fraud case patterns based on official advisories and cybercrime reports to create representative educational scenarios.',
    color: '#F87171',
    sources: ['CERT-In Alerts', 'Cybercrime Reports', 'NPCI Awareness Bulletins'],
  },
  {
    id: 6,
    icon: Lightbulb,
    title: 'Recommendations',
    description:
      'Evidence-based prevention strategies synthesised from research findings, security frameworks, and identified awareness gaps in the student population.',
    color: '#C084FC',
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
    <section id="research" className="site-section bg-[#0B192B]">
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
            <h3 className="font-heading text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="font-mono text-xs text-[#38BDF8] uppercase tracking-widest">Research Objectives</span>
            </h3>
            <ol className="space-y-4">
              {objectives.map((obj, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-[10px] text-[#38BDF8] font-bold">{i + 1}</span>
                  </div>
                  <p className="font-body text-sm text-[#94A3B8] leading-relaxed">{obj}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Limitations */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6">
              <span className="font-mono text-xs text-[#FBBF24] uppercase tracking-widest">Methodology Limitations</span>
            </h3>
            <div className="bg-[#11243A] border border-[#FBBF24]/20 rounded-xl p-6">
              <p className="font-body text-sm text-[#94A3B8] mb-4 leading-relaxed">
                Academic integrity requires transparent disclosure of research limitations. The following constraints apply to this study:
              </p>
              <ul className="space-y-3">
                {limitations.map((lim, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#FBBF24] shrink-0 mt-1">›</span>
                    <span className="font-body text-xs text-[#94A3B8] leading-relaxed">{lim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Methodology steps */}
        <div>
          <h3 className="font-mono text-xs text-[#94A3B8] uppercase tracking-widest mb-8">
            Research Process
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
                  className="bg-[#071426] border border-[#24364D] rounded-xl p-6 hover:border-[#38BDF8]/20 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <Icon className="w-4.5 h-4.5" style={{ color: step.color }} />
                    </div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-[#94A3B8]">
                        Phase {step.id}
                      </p>
                      <p className="font-heading text-sm font-semibold text-white">{step.title}</p>
                    </div>
                  </div>
                  <p className="font-body text-xs text-[#94A3B8] leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.sources.map((src) => (
                      <span
                        key={src}
                        className="font-mono text-[9px] px-2 py-0.5 rounded border"
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
