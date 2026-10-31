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
    if (pct === 100) return { label: 'Perfect Score', color: '#34D399' };
    if (pct >= 80) return { label: 'Excellent', color: '#34D399' };
    if (pct >= 60) return { label: 'Good — review weak areas', color: '#38BDF8' };
    if (pct >= 40) return { label: 'Fair — significant gaps', color: '#FBBF24' };
    return { label: 'Needs improvement', color: '#F87171' };
  }

  return (
    <section id="quiz" className="site-section bg-[#0B192B]">
      <div className="site-container">
        <div className="mb-12">
          <SectionHeader
            label="§ 09 — INTERACTIVE KNOWLEDGE QUIZ"
            title="Test Your UPI Security Knowledge"
            subtitle="A 10-question cybersecurity assessment covering UPI fundamentals, fraud recognition, and incident response. No personal information is collected."
            accentColor="#60A5FA"
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
                {/* Progress */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#94A3B8]">
                    Question {current + 1} of {quizQuestions.length}
                  </span>
                  <span className="font-mono text-xs text-[#38BDF8]">{q.category}</span>
                </div>
                <div className="h-1.5 bg-[#11243A] rounded-full overflow-hidden mb-8">
                  <div
                    className="h-full bg-[#38BDF8] rounded-full transition-all duration-500"
                    style={{
                      width: `${((current + (revealed ? 1 : 0)) / quizQuestions.length) * 100}%`,
                    }}
                  />
                </div>

                {/* Question */}
                <div className="bg-[#071426] border border-[#24364D] rounded-xl p-6 mb-5">
                  <p className="font-heading text-lg font-semibold text-white leading-snug">
                    {q.question}
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-5">
                  {q.options.map((opt, idx) => {
                    let cls =
                      'w-full text-left p-4 rounded-xl border transition-all duration-200 ';
                    if (!revealed) {
                      cls +=
                        selected === idx
                          ? 'bg-[#38BDF8]/10 border-[#38BDF8]/50'
                          : 'bg-[#071426] border-[#24364D] hover:border-[#38BDF8]/30 cursor-pointer';
                    } else {
                      if (idx === q.correctIndex) {
                        cls += 'bg-[#34D399]/10 border-[#34D399]/40';
                      } else if (idx === selected) {
                        cls += 'bg-[#F87171]/10 border-[#F87171]/40';
                      } else {
                        cls += 'bg-[#071426] border-[#24364D] opacity-50';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        disabled={revealed}
                        className={cls}
                      >
                        <div className="flex items-start gap-3">
                          <div className="shrink-0 mt-0.5">
                            {revealed && idx === q.correctIndex ? (
                              <CheckCircle2 className="w-5 h-5 text-[#34D399]" />
                            ) : revealed && idx === selected ? (
                              <XCircle className="w-5 h-5 text-[#F87171]" />
                            ) : (
                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  selected === idx
                                    ? 'border-[#38BDF8] bg-[#38BDF8]/20'
                                    : 'border-[#24364D]'
                                }`}
                              >
                                <span className="font-mono text-[10px] text-[#94A3B8]">
                                  {String.fromCharCode(65 + idx)}
                                </span>
                              </div>
                            )}
                          </div>
                          <p className="font-body text-sm text-white leading-relaxed">{opt}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {revealed && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-5 rounded-xl border mb-5 ${
                        selected === q.correctIndex
                          ? 'bg-[#34D399]/5 border-[#34D399]/25'
                          : 'bg-[#F87171]/5 border-[#F87171]/25'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {selected === q.correctIndex ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                            <span className="font-mono text-xs text-[#34D399] uppercase tracking-widest">Correct</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-[#F87171]" />
                            <span className="font-mono text-xs text-[#F87171] uppercase tracking-widest">Incorrect</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-[#94A3B8] shrink-0 mt-0.5" />
                        <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
                          {q.explanation}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <button
                  onClick={handleNext}
                  disabled={!revealed}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-heading text-sm font-semibold transition-all ${
                    revealed
                      ? 'bg-[#38BDF8] text-[#071426] hover:bg-[#67E8F9]'
                      : 'bg-[#11243A] text-[#94A3B8] cursor-not-allowed'
                  }`}
                >
                  {current === quizQuestions.length - 1 ? 'See Results' : 'Next Question'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <Trophy
                  className="w-16 h-16 mx-auto mb-5"
                  style={{ color: getScoreLabel().color }}
                />
                <h3 className="font-heading text-3xl font-bold text-white mb-2">
                  {score} / {quizQuestions.length}
                </h3>
                <p
                  className="font-mono text-sm uppercase tracking-widest mb-2"
                  style={{ color: getScoreLabel().color }}
                >
                  {getScoreLabel().label}
                </p>
                <p className="font-body text-[#94A3B8] mb-8 max-w-md mx-auto">
                  {score === quizQuestions.length
                    ? 'Excellent! You have a strong understanding of UPI security principles.'
                    : score >= 7
                    ? 'Good knowledge — revisit the sections on any incorrect questions.'
                    : 'We recommend reviewing the Threat Intelligence Center and Defence Center sections.'}
                </p>

                {/* Score breakdown */}
                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-8">
                  <div className="bg-[#34D399]/10 border border-[#34D399]/20 rounded-xl p-4">
                    <p className="font-mono text-2xl font-bold text-[#34D399]">{score}</p>
                    <p className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest">Correct</p>
                  </div>
                  <div className="bg-[#F87171]/10 border border-[#F87171]/20 rounded-xl p-4">
                    <p className="font-mono text-2xl font-bold text-[#F87171]">{quizQuestions.length - score}</p>
                    <p className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest">Incorrect</p>
                  </div>
                </div>

                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#38BDF8]/30 text-[#38BDF8] rounded-xl font-mono text-sm hover:bg-[#38BDF8]/10 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
