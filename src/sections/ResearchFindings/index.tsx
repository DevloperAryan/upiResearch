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
  { name: 'Collect Request Fraud', value: 35, color: '#DC4545' },
  { name: 'Fake Customer Care', value: 28, color: '#D97706' },
  { name: 'Screen Sharing / RAT', value: 18, color: '#593ACB' },
  { name: 'QR Code Scams', value: 12, color: '#0891B2' },
  { name: 'SIM Swap', value: 7, color: '#16865D' },
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
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: '10px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Inter, sans-serif',
    fontSize: '12px',
    color: '#172033',
    padding: '8px 12px',
  },
};

export default function ResearchFindings() {
  return (
    <section id="findings" className="site-section bg-white" aria-labelledby="findings-heading">
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 07 — DATA VISUALISATION & FINDINGS"
            title="Research Data Dashboard"
            subtitle="Visualisations based on official NPCI, RBI, and cybercrime data. All statistics include source attribution."
            accentColor="#593ACB"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Fraud category breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F7F8FC] border border-[#E5E7EB] rounded-2xl p-6 overflow-hidden shadow-sm"
          >
            <div className="mb-4">
              <h3 className="font-heading text-lg font-bold text-[#0F172A] mb-1">
                UPI Fraud — Category Distribution
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#475569] font-medium">
                Source: NPCI / MHA cybercrime reports · Documented pattern distribution
              </p>
            </div>
            <div role="img" aria-label="Donut chart showing UPI fraud distribution: Collect Request Fraud 35%, Fake Customer Care 28%, Screen Sharing 18%, QR Code Scams 12%, SIM Swap 7%">
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
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2 pt-2 border-t border-[#E5E7EB]">
              {fraudCategoryData.map((d) => (
                <div key={d.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: d.color }} aria-hidden="true" />
                  <span className="font-body text-xs sm:text-sm text-[#1E293B] font-medium">
                    {d.name} <strong className="text-[#0F172A]">({d.value}%)</strong>
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
            className="bg-[#F7F8FC] border border-[#E5E7EB] rounded-2xl p-6 overflow-hidden shadow-sm"
          >
            <div className="mb-4">
              <h3 className="font-heading text-lg font-bold text-[#0F172A] mb-1">
                UPI Transaction Volume Growth (Billions)
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#475569] font-medium">
                Source: NPCI Annual Reports FY21–FY25
              </p>
            </div>
            <div role="img" aria-label="Bar chart showing UPI transaction volume growing from 22B in FY21 to 185B in FY25">
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={upiGrowthData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <XAxis
                    dataKey="year"
                    tick={{ fill: '#334155', fontFamily: 'Inter', fontSize: 12, fontWeight: 600 }}
                    axisLine={{ stroke: '#CBD5E1' }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: '#334155', fontFamily: 'Inter', fontSize: 12, fontWeight: 600 }}
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
                  <Bar dataKey="volume" fill="#593ACB" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 pt-2 border-t border-[#E5E7EB] flex items-center justify-between text-xs sm:text-sm text-[#334155] font-semibold">
              <span>FY21: 22 Billion</span>
              <span className="text-[#593ACB] font-bold">8.4× Volume Surge</span>
              <span className="text-[#0F172A] font-extrabold">FY25: 185+ Billion</span>
            </div>
          </motion.div>
        </div>

        {/* Security mechanism radar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#F7F8FC] border border-[#E5E7EB] rounded-2xl p-6 sm:p-7 overflow-hidden shadow-sm"
        >
          <div className="mb-6">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0F172A] mb-1">
              Security Mechanism: Effectiveness vs. Adoption
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#475569] font-medium">
              Comparative analysis based on technical benchmarks and empirical security literature
            </p>
          </div>
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="min-w-0" role="img" aria-label="Radar chart mapping security mechanism effectiveness versus user adoption">
              <ResponsiveContainer width="100%" height={280}>
                <RadarChart data={securityMechanismData} margin={{ top: 20, right: 24, bottom: 20, left: 24 }}>
                  <PolarGrid stroke="#CBD5E1" />
                  <PolarAngleAxis
                    dataKey="mechanism"
                    tick={{ fill: '#0F172A', fontFamily: 'Inter', fontSize: 12, fontWeight: 700 }}
                  />
                  <Radar
                    name="Effectiveness"
                    dataKey="effectiveness"
                    stroke="#593ACB"
                    fill="#593ACB"
                    fillOpacity={0.25}
                  />
                  <Radar
                    name="Adoption"
                    dataKey="adoption"
                    stroke="#16865D"
                    fill="#16865D"
                    fillOpacity={0.2}
                  />
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <Tooltip {...tooltipStyle} formatter={(v: any) => [`${v}%`]} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-sm bg-[#593ACB]" aria-hidden="true" />
                <p className="font-body text-sm font-bold text-[#0F172A]">
                  Effectiveness against technical breach (Average: 72%)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-sm bg-[#16865D]" aria-hidden="true" />
                <p className="font-body text-sm font-bold text-[#0F172A]">
                  User adoption & implementation rate (Average: 91%)
                </p>
              </div>
              <p className="font-body text-sm sm:text-base text-[#334155] leading-relaxed mt-4 font-normal">
                UPI PIN authentication and device binding remain universally deployed protocols with strong cryptographic guarantees. However, social engineering vectors bypass these mechanisms entirely by manipulating the account holder into authorising unauthorized transactions voluntarily.
              </p>
              <div className="p-4 bg-[#FFF5F5] border border-[#DC4545]/20 rounded-xl" role="note" aria-label="Key finding note">
                <p className="font-body text-xs text-[#DC4545] uppercase tracking-widest mb-1 font-bold">
                  Key Empirical Finding
                </p>
                <p className="font-body text-xs sm:text-sm text-[#1E293B] font-semibold leading-relaxed">
                  Cryptographic protocols succeed at the network layer, but fail at the human layer when deception tactics bypass technical validation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
