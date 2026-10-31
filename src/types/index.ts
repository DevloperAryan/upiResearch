// src/types/index.ts

export interface Threat {
  id: string;
  title: string;
  category: string;
  riskLevel: 'critical' | 'high' | 'medium';
  description: string;
  howItWorks: string[];
  psychologicalTactics: string[];
  warningsigns: string[];
  consequences: string[];
  prevention: string[];
  attackFlow: AttackStep[];
}

export interface AttackStep {
  id: number;
  actor: string;
  action: string;
  detail: string;
  type: 'attacker' | 'victim' | 'system';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

export interface SurveyQuestion {
  id: number;
  question: string;
  yesCount: number;
  noCount: number;
  totalResponses: number;
}

export interface Reference {
  id: string;
  title: string;
  organization: string;
  date?: string;
  description: string;
  category: ReferenceCategory;
  url: string;
  type: 'primary' | 'government' | 'academic' | 'news';
  accessDate: string;
}

export type ReferenceCategory =
  | 'upi-architecture'
  | 'digital-fraud'
  | 'social-engineering'
  | 'qr-fraud'
  | 'sim-swapping'
  | 'mobile-banking'
  | 'cybersecurity-awareness'
  | 'regulations';

export interface Statistic {
  id: string;
  value: number;
  unit: string;
  label: string;
  period: string;
  source: string;
  prefix?: string;
  suffix?: string;
}

export interface SimulatorScenario {
  id: string;
  title: string;
  message: string;
  senderName: string;
  senderHandle: string;
  amount: number;
  type: 'collect' | 'qr' | 'customer-care';
  choices: SimulatorChoice[];
  redFlags: string[];
}

export interface SimulatorChoice {
  id: string;
  label: string;
  outcome: 'safe' | 'unsafe' | 'neutral';
  explanation: string;
  consequence: string;
}

