// src/sections/Survey/index.tsx
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import SectionHeader from '../../components/layout/SectionHeader';
import { Users, Edit3, AlertCircle, BarChart2 } from 'lucide-react';

interface SurveyRow {
  id: number;
  question: string;
  yesCount: number;
  noCount: number;
}

const initialData: SurveyRow[] = [
  {
    id: 1,
    question: 'Do you know that a UPI PIN is not required to receive money?',
    yesCount: 0,
    noCount: 0,
  },
  {
    id: 2,
    question: 'Have you encountered a suspicious UPI message or call?',
    yesCount: 0,
    noCount: 0,
  },
  {
    id: 3,
    question: 'Can you identify a fake collect request?',
    yesCount: 0,
    noCount: 0,
  },
  {
    id: 4,
    question: 'Do you verify the recipient before approving a payment?',
    yesCount: 0,
    noCount: 0,
  },
];

const COLORS = { yes: '#34D399', no: '#F87171' };

function SurveyInput({
  row,
  onChange,
}: {
  row: SurveyRow;
  onChange: (id: number, field: 'yesCount' | 'noCount', val: number) => void;
}) {
  const total = row.yesCount + row.noCount;
  const yPct = total > 0 ? Math.round((row.yesCount / total) * 100) : 0;
  const nPct = total > 0 ? 100 - yPct : 0;

  return (
    <div className="bg-[#0B192B] border border-[#24364D] rounded-xl p-5">
      <p className="font-body text-sm text-white mb-4 leading-relaxed">
        Q{row.id}: {row.question}
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] text-[#34D399] uppercase tracking-widest">
            Yes responses
          </span>
          <input
            type="number"
            min="0"
            value={row.yesCount || ''}
            onChange={(e) =>
              onChange(row.id, 'yesCount', Math.max(0, parseInt(e.target.value) || 0))
            }
            className="bg-[#11243A] border border-[#24364D] rounded-lg px-3 py-2 font-mono text-sm text-white focus:border-[#34D399]/50 focus:outline-none"
            placeholder="0"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono text-[10px] text-[#F87171] uppercase tracking-widest">
            No responses
          </span>
          <input
            type="number"
            min="0"
            value={row.noCount || ''}
            onChange={(e) =>
              onChange(row.id, 'noCount', Math.max(0, parseInt(e.target.value) || 0))
            }
            className="bg-[#11243A] border border-[#24364D] rounded-lg px-3 py-2 font-mono text-sm text-white focus:border-[#F87171]/50 focus:outline-none"
            placeholder="0"
          />
        </label>
      </div>

      {total > 0 && (
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-[#24364D] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${yPct}%`,
                  backgroundColor: COLORS.yes,
                }}
              />
            </div>
            <span className="font-mono text-xs text-[#34D399] w-10 text-right">{yPct}%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-[#24364D] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${nPct}%`,
                  backgroundColor: COLORS.no,
                }}
              />
            </div>
            <span className="font-mono text-xs text-[#F87171] w-10 text-right">{nPct}%</span>
          </div>
          <p className="font-mono text-[10px] text-[#94A3B8]">
            Total: {total} respondents
          </p>
        </div>
      )}
    </div>
  );
}

export default function Survey() {
  const [data, setData] = useState<SurveyRow[]>(initialData);
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(id: number, field: 'yesCount' | 'noCount', val: number) {
    setData((d) => d.map((r) => (r.id === id ? { ...r, [field]: val } : r)));
  }

  const totalRespondents = useMemo(() => {
    if (data.length === 0) return 0;
    const totals = data.map((r) => r.yesCount + r.noCount);
    return Math.max(...totals);
  }, [data]);

  const hasData = data.some((r) => r.yesCount + r.noCount > 0);

  const chartData = data.map((r) => {
    const total = r.yesCount + r.noCount;
    return {
      name: `Q${r.id}`,
      yes: total > 0 ? Math.round((r.yesCount / total) * 100) : 0,
      no: total > 0 ? Math.round((r.noCount / total) * 100) : 0,
      total,
    };
  });

  return (
    <section id="survey" className="site-section bg-[#071426]">
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 06 — STUDENT AWARENESS SURVEY"
            title="Primary Research: Awareness Data"
            subtitle="Enter actual survey results to visualise real findings. This module does not contain fabricated data — all entries are made by the research team."
            accentColor="#34D399"
          />
        </div>

        {/* Research integrity notice */}
        <div className="flex items-start gap-3 bg-[#FBBF24]/5 border border-[#FBBF24]/20 rounded-xl p-4 mb-8">
          <AlertCircle className="w-5 h-5 text-[#FBBF24] shrink-0 mt-0.5" />
          <div>
            <p className="font-mono text-xs text-[#FBBF24] uppercase tracking-widest mb-1">
              Research Integrity Notice
            </p>
            <p className="font-body text-sm text-[#94A3B8]">
              This data visualisation module displays only actual survey responses entered by the
              research team. No placeholder or fabricated responses are pre-loaded. Enter your
              genuine survey data below.
            </p>
          </div>
        </div>

        {/* Sample size info */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#38BDF8]" />
            <span className="font-mono text-sm text-white">
              Total Respondents:{' '}
              <span className="text-[#38BDF8] font-bold">
                {totalRespondents > 0 ? totalRespondents : '—'}
              </span>
            </span>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-3 py-1.5 border border-[#24364D] rounded-lg font-mono text-xs text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/30 transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            {isEditing ? 'View Charts' : 'Edit Data'}
          </button>
        </div>

        {isEditing ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.map((row) => (
              <SurveyInput key={row.id} row={row} onChange={handleChange} />
            ))}
          </div>
        ) : !hasData ? (
          <div className="py-20 text-center">
            <BarChart2 className="w-12 h-12 text-[#24364D] mx-auto mb-4" />
            <p className="font-heading text-lg font-semibold text-[#94A3B8] mb-2">
              No Survey Data Yet
            </p>
            <p className="font-body text-sm text-[#94A3B8]/60 mb-6">
              Enter actual survey responses to generate charts.
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="px-5 py-2.5 bg-[#38BDF8]/10 border border-[#38BDF8]/30 rounded-lg font-mono text-sm text-[#38BDF8] hover:bg-[#38BDF8]/15 transition-colors"
            >
              Enter Survey Data
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-[#0B192B] border border-[#24364D] rounded-xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <BarChart2 className="w-5 h-5 text-[#38BDF8]" />
                <h3 className="font-heading text-base font-semibold text-white">
                  Survey Results — Yes / No Breakdown (%)
                </h3>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#94A3B8', fontFamily: 'JetBrains Mono', fontSize: 11 }}
                    axisLine={{ stroke: '#24364D' }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: '#94A3B8', fontFamily: 'JetBrains Mono', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 100]}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#11243A',
                      border: '1px solid #24364D',
                      borderRadius: '8px',
                      fontFamily: 'JetBrains Mono',
                      fontSize: '12px',
                      color: '#F8FAFC',
                    }}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    formatter={(value: any, name: any) => [`${value}%`, name === 'yes' ? 'Yes' : 'No']}
                  />
                  <Bar dataKey="yes" name="yes" radius={[4, 4, 0, 0]} fill={COLORS.yes} />
                  <Bar dataKey="no" name="no" radius={[4, 4, 0, 0]} fill={COLORS.no} />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLORS.yes }} />
                  <span className="font-mono text-xs text-[#94A3B8]">Yes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLORS.no }} />
                  <span className="font-mono text-xs text-[#94A3B8]">No</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
