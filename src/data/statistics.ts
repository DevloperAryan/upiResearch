// src/data/statistics.ts
import type { Statistic } from '../types';

export const upiStatistics: Statistic[] = [
  {
    id: 'vol-fy25',
    value: 185,
    unit: 'Billion',
    label: 'UPI Transactions',
    period: 'FY 2024–25',
    source: 'NPCI Annual Report 2024–25',
    suffix: 'B+',
  },
  {
    id: 'val-fy25',
    value: 246,
    unit: 'Lakh Crore',
    label: 'Transaction Value',
    period: 'FY 2024–25',
    source: 'NPCI / RBI Data',
    prefix: '₹',
  },
  {
    id: 'daily-fy25',
    value: 596,
    unit: 'Million',
    label: 'Daily Transactions (Peak)',
    period: 'March 2025',
    source: 'NPCI Monthly Data',
    suffix: 'M+',
  },
  {
    id: 'banks',
    value: 650,
    unit: 'Banks',
    label: 'Live UPI Member Banks',
    period: 'As of 2025',
    source: 'NPCI',
    suffix: '+',
  },
];

