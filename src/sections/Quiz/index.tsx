// src/sections/Quiz/index.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions } from '../../data/quiz';
import SectionHeader from '../../components/layout/SectionHeader';
import {
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  ChevronRight,
  BookOpen,
} from 'lucide-react';

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);

  const q = quizQuestions[current];
  const score = answers.filter(Boolean).length;

  function handleSelect(idx: number) {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
  }

  function handleNext() {
    if (selected === null) return;
    const isCorrect = selected === q.correctIndex;
    const newAnswers = [...answers, isCorrect];

    if (current === quizQuestions.length - 1) {
      setAnswers(newAnswers);
      setDone(true);
    } else {
      setAnswers(newAnswers);
      setCurrent(current + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setRevealed(false);
    setDone(false);
  }

  function getScoreLabel() {
    const pct = (score / quizQuestions.length) * 100;
    if (pct === 100) return { label: 'Perfect Score — Cyber Defender', color: '#16865D' };
    if (pct >= 80) return { label: 'Excellent Security Awareness', color: '#16865D' };
    if (pct >= 60) return { label: 'Good — Minor Awareness Gaps', color: '#0891B2' };
    if (pct >= 40) return { label: 'Moderate Risk — Review Threats', color: '#D97706' };
    return { label: 'High Risk — Review Security Guidelines', color: '#DC4545' };
  }

  return (
    <section id="quiz" className="site-section bg-white" aria-labelledby="quiz-heading">
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 09 — INTERACTIVE KNOWLEDGE QUIZ"
            title="Test Your UPI Security Knowledge"
            subtitle="A 10-question cybersecurity assessment covering UPI fundamentals, fraud recognition, and incident response. No personal information is collected."
            accentColor="#593ACB"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {/* Progress bar with ARIA */}
                <div className="flex items-center justify-between mb-3 text-xs sm:text-sm font-bold text-[#1E293B]">
                  <span id="quiz-progress-text">
                    Question {current + 1} of {quizQuestions.length}
                  </span>
                  <span className="font-body text-[#593ACB] px-3 py-1 rounded-full bg-[#F0EEFA] font-bold">
                    {q.category}
                  </span>
                </div>
                <div
                  role="progressbar"
                  aria-labelledby="quiz-progress-text"
                  aria-valuenow={current + 1}
                  aria-valuemin={1}
                  aria-valuemax={quizQuestions.length}
                  className="h-2.5 bg-[#E5E7EB] rounded-full overflow-hidden mb-8"
                >
                  <div
                    className="h-full bg-[#593ACB] rounded-full transition-all duration-400"
                    style={{
                      width: `${((current + (revealed ? 1 : 0)) / quizQuestions.length) * 100}%`,
                    }}
                  />
                </div>

                {/* Question */}
                <div className="bg-[#F7F8FC] border border-[#CBD5E1] rounded-2xl p-6 sm:p-7 mb-5 shadow-sm">
                  <h3 className="font-heading text-lg sm:text-2xl font-extrabold text-[#0F172A] leading-snug" id="current-question-text">
                    {q.question}
                  </h3>
                </div>

                {/* Options (Radio Group for a11y) */}
                <div
                  role="radiogroup"
                  aria-labelledby="current-question-text"
                  className="space-y-3 mb-5"
                >
                  {q.options.map((opt, idx) => {
                    let cls =
                      'w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#593ACB] ';
                    if (!revealed) {
                      cls +=
                        selected === idx
                          ? 'bg-[#F0EEFA] border-[#593ACB] shadow-sm'
                          : 'bg-white border-[#E2E8F0] hover:border-[#593ACB]/50 hover:bg-[#F8FAFC] cursor-pointer';
                    } else {
                      if (idx === q.correctIndex) {
                        cls += 'bg-[#F0FFF8] border-[#16865D] text-[#16865D] font-bold';
                      } else if (idx === selected) {
                        cls += 'bg-[#FFF5F5] border-[#DC4545] text-[#DC4545] font-bold';
                      } else {
                        cls += 'bg-white border-[#E2E8F0] opacity-50';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        type="button"
                        role="radio"
                        aria-checked={selected === idx}
                        disabled={revealed}
                        onClick={() => handleSelect(idx)}
                        className={cls}
                      >
                        <div className="flex items-start gap-3.5">
                          <div className="shrink-0 mt-0.5" aria-hidden="true">
                            {revealed && idx === q.correctIndex ? (
                              <CheckCircle2 className="w-5 h-5 text-[#16865D]" />
                            ) : revealed && idx === selected ? (
                              <XCircle className="w-5 h-5 text-[#DC4545]" />
                            ) : (
                              <div
                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-body text-xs font-bold ${
                                  selected === idx
                                    ? 'border-[#593ACB] bg-[#593ACB] text-white'
                                    : 'border-[#94A3B8] text-[#475569]'
                                }`}
                              >
                                {String.fromCharCode(65 + idx)}
                              </div>
                            )}
                          </div>
                          <span className="font-body text-sm sm:text-base text-[#0F172A] leading-relaxed font-semibold">
                            {opt}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Feedback with aria-live */}
                <div aria-live="polite">
                  <AnimatePresence>
                    {revealed && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-5 sm:p-6 rounded-2xl border-2 mb-5 ${
                          selected === q.correctIndex
                            ? 'bg-[#F0FFF8] border-[#16865D]/30'
                            : 'bg-[#FFF5F5] border-[#DC4545]/30'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2 font-body font-bold text-xs sm:text-sm uppercase tracking-wider">
                          {selected === q.correctIndex ? (
                            <>
                              <CheckCircle2 className="w-5 h-5 text-[#16865D]" aria-hidden="true" />
                              <span className="text-[#16865D]">Correct Answer!</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-5 h-5 text-[#DC4545]" aria-hidden="true" />
                              <span className="text-[#DC4545]">Incorrect</span>
                            </>
                          )}
                        </div>
                        <div className="flex items-start gap-3">
                          <BookOpen className="w-5 h-5 text-[#475569] shrink-0 mt-0.5" aria-hidden="true" />
                          <p className="font-body text-sm sm:text-base text-[#334155] leading-relaxed font-medium">
                            {q.explanation}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Next button */}
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!revealed}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-heading text-sm sm:text-base font-bold transition-all focus-visible:outline-2 focus-visible:outline-[#593ACB] ${
                    revealed
                      ? 'bg-[#593ACB] text-white hover:bg-[#4F33B7] shadow-md shadow-[#593ACB]/20'
                      : 'bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed'
                  }`}
                >
                  <span>{current === quizQuestions.length - 1 ? 'See Full Assessment Results' : 'Next Question'}</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                role="status"
                aria-live="polite"
                className="text-center bg-[#F7F8FC] border border-[#E5E7EB] rounded-2xl p-8 shadow-sm"
              >
                <Trophy
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ color: getScoreLabel().color }}
                  aria-hidden="true"
                />
                <h3 className="font-heading text-4xl font-extrabold text-[#172033] mb-2">
                  {score} / {quizQuestions.length}
                </h3>
                <p
                  className="font-body text-base font-bold mb-3"
                  style={{ color: getScoreLabel().color }}
                >
                  {getScoreLabel().label}
                </p>
                <p className="font-body text-sm text-[#475569] mb-8 max-w-md mx-auto leading-relaxed">
                  {score === quizQuestions.length
                    ? 'Outstanding! You demonstrated mastery of UPI architecture and fraud recognition principles.'
                    : score >= 7
                    ? 'Strong knowledge base! You are well prepared to spot and avert common digital payment scams.'
                    : 'We strongly recommend reviewing the Threat Intelligence Center and Golden Hour response procedures.'}
                </p>

                {/* Score breakdown */}
                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-8">
                  <div className="bg-[#F0FFF8] border border-[#16865D]/25 rounded-xl p-4">
                    <p className="font-heading text-3xl font-bold text-[#16865D]">{score}</p>
                    <p className="font-body text-xs text-[#16865D] uppercase tracking-wider font-semibold">Correct</p>
                  </div>
                  <div className="bg-[#FFF5F5] border border-[#DC4545]/25 rounded-xl p-4">
                    <p className="font-heading text-3xl font-bold text-[#DC4545]">{quizQuestions.length - score}</p>
                    <p className="font-body text-xs text-[#DC4545] uppercase tracking-wider font-semibold">Incorrect</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#E5E7EB] text-[#593ACB] font-body text-sm font-semibold rounded-xl hover:bg-[#F0EEFA] hover:border-[#593ACB]/40 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#593ACB]"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  <span>Retake Assessment</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
