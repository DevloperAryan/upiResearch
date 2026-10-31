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

const COLORS = { yes: '#16865D', no: '#DC4545' };

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
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 sm:p-6 shadow-sm">
      <p className="font-heading text-sm text-[#172033] mb-4 leading-relaxed font-bold">
        Q{row.id}: {row.question}
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`yes-input-${row.id}`} className="font-body text-xs text-[#16865D] uppercase tracking-wider font-bold">
            Yes responses
          </label>
          <input
            id={`yes-input-${row.id}`}
            type="number"
            min="0"
            aria-label={`Question ${row.id} Yes responses count`}
            value={row.yesCount || ''}
            onChange={(e) =>
              onChange(row.id, 'yesCount', Math.max(0, parseInt(e.target.value) || 0))
            }
            className="bg-[#F7F8FC] border border-[#CBD5E1] rounded-xl px-3 py-2 font-mono text-sm font-semibold text-[#172033] focus:border-[#16865D] focus:outline-none focus:ring-2 focus:ring-[#16865D]/15 transition-all"
            placeholder="0"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`no-input-${row.id}`} className="font-body text-xs text-[#DC4545] uppercase tracking-wider font-bold">
            No responses
          </label>
          <input
            id={`no-input-${row.id}`}
            type="number"
            min="0"
            aria-label={`Question ${row.id} No responses count`}
            value={row.noCount || ''}
            onChange={(e) =>
              onChange(row.id, 'noCount', Math.max(0, parseInt(e.target.value) || 0))
            }
            className="bg-[#F7F8FC] border border-[#CBD5E1] rounded-xl px-3 py-2 font-mono text-sm font-semibold text-[#172033] focus:border-[#DC4545] focus:outline-none focus:ring-2 focus:ring-[#DC4545]/15 transition-all"
            placeholder="0"
          />
        </div>
      </div>

      {total > 0 && (
        <div className="space-y-2 pt-2 border-t border-[#F3F4F6]" aria-live="polite">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-[#F3F4F6] rounded-full overflow-hidden" role="progressbar" aria-valuenow={yPct} aria-valuemin={0} aria-valuemax={100} aria-label={`Question ${row.id} Yes ratio`}>
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${yPct}%`,
                  backgroundColor: COLORS.yes,
                }}
              />
            </div>
            <span className="font-mono text-xs text-[#16865D] w-12 text-right font-bold">{yPct}%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-[#F3F4F6] rounded-full overflow-hidden" role="progressbar" aria-valuenow={nPct} aria-valuemin={0} aria-valuemax={100} aria-label={`Question ${row.id} No ratio`}>
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${nPct}%`,
                  backgroundColor: COLORS.no,
                }}
              />
            </div>
            <span className="font-mono text-xs text-[#DC4545] w-12 text-right font-bold">{nPct}%</span>
          </div>
          <p className="font-body text-xs text-[#475569] font-medium">
            Total responses: <strong className="text-[#172033]">{total}</strong> respondents
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
    <section id="survey" className="site-section bg-white">
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 06 — STUDENT AWARENESS SURVEY"
            title="Primary Research: Awareness Data"
            subtitle="Enter actual survey results to visualise real findings. This module does not contain fabricated data — all entries are made by the research team."
            accentColor="#16865D"
          />
        </div>

        {/* Research integrity notice */}
        <div className="flex items-start gap-3 bg-[#FFFBEB] border border-[#D97706]/20 rounded-xl p-4 mb-8">
          <AlertCircle className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
          <div>
            <p className="font-body text-xs text-[#D97706] uppercase tracking-widest mb-1 font-semibold">
              Research Integrity Notice
            </p>
            <p className="font-body text-sm text-[#64748B]">
              This data visualisation module displays only actual survey responses entered by the
              research team. No placeholder or fabricated responses are pre-loaded. Enter your
              genuine survey data below.
            </p>
          </div>
        </div>

        {/* Sample size info */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#593ACB]" />
            <span className="font-body text-sm text-[#172033] font-medium">
              Total Respondents:{' '}
              <span className="text-[#593ACB] font-bold">
                {totalRespondents > 0 ? totalRespondents : '—'}
              </span>
            </span>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-3 py-1.5 border border-[#E5E7EB] rounded-lg font-body text-xs font-medium text-[#64748B] hover:text-[#593ACB] hover:border-[#593ACB]/30 transition-colors bg-white"
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
            <BarChart2 className="w-12 h-12 text-[#D1D5DB] mx-auto mb-4" />
            <p className="font-heading text-lg font-semibold text-[#94A3B8] mb-2">
              No Survey Data Yet
            </p>
            <p className="font-body text-sm text-[#94A3B8] mb-6">
              Enter actual survey responses to generate charts.
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="px-5 py-2.5 bg-[#593ACB]/10 border border-[#593ACB]/25 rounded-lg font-body text-sm text-[#593ACB] font-medium hover:bg-[#593ACB]/15 transition-colors"
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
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <BarChart2 className="w-5 h-5 text-[#593ACB]" />
                <h3 className="font-heading text-base font-semibold text-[#172033]">
                  Survey Results — Yes / No Breakdown (%)
                </h3>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#94A3B8', fontFamily: 'Inter', fontSize: 11 }}
                    axisLine={{ stroke: '#E5E7EB' }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: '#94A3B8', fontFamily: 'Inter', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 100]}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      color: '#172033',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
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
                  <span className="font-body text-xs text-[#64748B]">Yes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLORS.no }} />
                  <span className="font-body text-xs text-[#64748B]">No</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
