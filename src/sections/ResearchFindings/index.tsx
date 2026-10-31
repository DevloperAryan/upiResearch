// src/sections/ResearchFindings/index.tsx
import { motion } from 'framer-motion';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from 'recharts';
import SectionHeader from '../../components/layout/SectionHeader';

const fraudCategoryData = [
  { name: 'Collect Request Fraud', value: 35, color: '#F87171' },
  { name: 'Fake Customer Care', value: 28, color: '#FBBF24' },
  { name: 'Screen Sharing / RAT', value: 18, color: '#C084FC' },
  { name: 'QR Code Scams', value: 12, color: '#38BDF8' },
  { name: 'SIM Swap', value: 7, color: '#34D399' },
];

const securityMechanismData = [
  { mechanism: 'PIN', effectiveness: 85, adoption: 99 },
  { mechanism: 'Device', effectiveness: 78, adoption: 99 },
  { mechanism: 'OTP', effectiveness: 65, adoption: 95 },
  { mechanism: 'Alerts', effectiveness: 72, adoption: 88 },
  { mechanism: 'Detection', effectiveness: 60, adoption: 75 },
];

const upiGrowthData = [
  { year: 'FY21', volume: 22, value: 41 },
  { year: 'FY22', volume: 46, value: 84 },
  { year: 'FY23', volume: 84, value: 139 },
  { year: 'FY24', volume: 131, value: 200 },
  { year: 'FY25', volume: 185, value: 246 },
];

const tooltipStyle = {
  contentStyle: {
    backgroundColor: '#11243A',
    border: '1px solid #24364D',
    borderRadius: '8px',
    fontFamily: 'JetBrains Mono',
    fontSize: '11px',
    color: '#F8FAFC',
  },
};

export default function ResearchFindings() {
  return (
    <section id="findings" className="site-section bg-[#0B192B]">
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 07 — DATA VISUALISATION & FINDINGS"
            title="Research Data Dashboard"
            subtitle="Visualisations based on official NPCI, RBI, and cybercrime data. All statistics include source attribution."
            accentColor="#60A5FA"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Fraud category breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#071426] border border-[#24364D] rounded-xl p-6 overflow-hidden"
          >
            <div className="mb-4">
              <h3 className="font-heading text-base font-semibold text-white mb-1">
                UPI Fraud — Category Distribution
              </h3>
              <p className="font-mono text-[10px] text-[#94A3B8]">
                Source: NPCI / MHA cybercrime reports · Illustrative distribution based on documented patterns
              </p>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={fraudCategoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {fraudCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  {...tooltipStyle}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={(value: any) => [`${value}%`, 'Share']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {fraudCategoryData.map((d) => (
                <div key={d.name} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: d.color }} />
                  <span className="font-mono text-[9px] text-[#94A3B8]">
                    {d.name} ({d.value}%)
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* UPI Growth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#071426] border border-[#24364D] rounded-xl p-6 overflow-hidden"
          >
            <div className="mb-4">
              <h3 className="font-heading text-base font-semibold text-white mb-1">
                UPI Transaction Volume Growth (Billions)
              </h3>
              <p className="font-mono text-[10px] text-[#94A3B8]">
                Source: NPCI Annual Reports FY21–FY25
              </p>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={upiGrowthData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <XAxis
                  dataKey="year"
                  tick={{ fill: '#94A3B8', fontFamily: 'JetBrains Mono', fontSize: 10 }}
                  axisLine={{ stroke: '#24364D' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#94A3B8', fontFamily: 'JetBrains Mono', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  {...tooltipStyle}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={(value: any, name: any) => [
                    `${value}B`,
                    name === 'volume' ? 'Transaction Volume' : 'Value (₹L Cr)',
                  ]}
                />
                <Bar dataKey="volume" fill="#38BDF8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Security mechanism radar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#071426] border border-[#24364D] rounded-xl p-6 overflow-hidden"
        >
          <div className="mb-6">
            <h3 className="font-heading text-base font-semibold text-white mb-1">
              Security Mechanism: Effectiveness vs. Adoption
            </h3>
            <p className="font-mono text-[10px] text-[#94A3B8]">
              Indicative scores based on security research · Not official NPCI ratings
            </p>
          </div>
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="min-w-0">
              <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={securityMechanismData} margin={{ top: 20, right: 24, bottom: 20, left: 24 }}>
                <PolarGrid stroke="#24364D" />
                <PolarAngleAxis
                  dataKey="mechanism"
                  tick={{ fill: '#94A3B8', fontFamily: 'JetBrains Mono', fontSize: 10 }}
                />
                <Radar
                  name="Effectiveness"
                  dataKey="effectiveness"
                  stroke="#38BDF8"
                  fill="#38BDF8"
                  fillOpacity={0.2}
                />
                <Radar
                  name="Adoption"
                  dataKey="adoption"
                  stroke="#34D399"
                  fill="#34D399"
                  fillOpacity={0.15}
                />
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <Tooltip {...tooltipStyle} formatter={(v: any) => [`${v}%`]} />
              </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-sm bg-[#38BDF8]" />
                <p className="font-mono text-xs text-[#94A3B8]">
                  Effectiveness against fraud
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-sm bg-[#34D399]" />
                <p className="font-mono text-xs text-[#94A3B8]">User adoption rate</p>
              </div>
              <p className="font-body text-sm text-[#94A3B8] leading-relaxed mt-4">
                UPI PIN authentication and device binding remain the most universally deployed
                mechanisms. However, their effectiveness depends critically on users not sharing
                credentials — the primary failure point exploited by social engineering attacks.
              </p>
              <div className="p-3 bg-[#F87171]/5 border border-[#F87171]/20 rounded-lg">
                <p className="font-mono text-[10px] text-[#F87171] uppercase tracking-widest mb-1">
                  Key Finding
                </p>
                <p className="font-body text-xs text-[#94A3B8]">
                  Technical security mechanisms are rendered ineffective when users are socially
                  engineered into voluntarily sharing credentials or authorising fraudulent transactions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
