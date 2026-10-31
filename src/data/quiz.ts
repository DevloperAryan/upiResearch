// src/data/quiz.ts
import type { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Do you need to enter your UPI PIN to receive money?',
    options: [
      'Yes, always',
      'No, UPI PIN is only required to send money',
      'Sometimes, depending on the amount',
      'Yes, for amounts above ₹10,000',
    ],
    correctIndex: 1,
    explanation:
      'UPI PIN is exclusively required to authorise outgoing payments (debit transactions). You never need to enter your PIN to receive money. Anyone asking you to enter your PIN to receive a refund or prize is attempting fraud.',
    category: 'UPI Basics',
  },
  {
    id: 2,
    question: 'You receive a collect request on your UPI app showing "Approve ₹5,000 refund from FlipMart". What should you do?',
    options: [
      'Approve it immediately — it is a refund',
      'Decline it and verify with FlipMart through their official app or website',
      'Enter your PIN quickly to secure the refund',
      'Share your account details with the sender to confirm',
    ],
    correctIndex: 1,
    explanation:
      'A collect request always requests money FROM you, not TO you. Approving sends ₹5,000 from your account to the requester. Legitimate companies never send money through UPI collect requests. Always verify through official channels.',
    category: 'Collect Request Fraud',
  },
  {
    id: 3,
    question: 'A customer says they will send payment by sharing a QR code with you. What is the risk?',
    options: [
      'No risk — QR codes are always safe to scan',
      'The QR may be linked to a collect request that deducts money from you',
      'Your phone may get a virus from scanning',
      'The payment may take longer to arrive',
    ],
    correctIndex: 1,
    explanation:
      'As a seller, you should display your own QR code for buyers to scan. If a buyer sends you a QR to scan, it may link to a UPI collect request — scanning it would deduct money from your account, not credit it.',
    category: 'QR Code Fraud',
  },
  {
    id: 4,
    question: 'You search for "bank customer care number" on Google and find a number. Is it safe to call?',
    options: [
      'Yes, Google always shows official results',
      'Yes, if it appears at the top of search results',
      'Not necessarily — fraudsters list fake numbers in search results and ads',
      'Yes, if the website looks professional',
    ],
    correctIndex: 2,
    explanation:
      'Fraudsters pay for advertisements and manipulate search results to display fake customer care numbers. Always find contact information exclusively from your bank\'s official website, mobile app, or your bank card or passbook.',
    category: 'Fake Customer Care',
  },
  {
    id: 5,
    question: 'A caller claiming to be from your bank asks you to install AnyDesk to resolve an account issue. What should you do?',
    options: [
      'Install it — bank support needs remote access',
      'Install it only if they send an official email first',
      'Refuse immediately and hang up — banks never request remote access',
      'Install it but do not open any banking apps',
    ],
    correctIndex: 2,
    explanation:
      'Legitimate banks and financial institutions never ask customers to install remote access or screen-sharing software. This is a definitive indicator of fraud. End the call immediately and report the number.',
    category: 'Remote Access Scams',
  },
  {
    id: 6,
    question: 'Your phone suddenly shows no network for several hours. What might be happening?',
    options: [
      'Routine network maintenance — nothing to worry about',
      'Your phone battery is failing',
      'A SIM swap may have occurred — contact your telecom operator immediately',
      'You need to restart your phone',
    ],
    correctIndex: 2,
    explanation:
      'Sudden and prolonged loss of mobile network is a classic early sign of SIM swap fraud. If you cannot make calls or receive SMS, contact your telecom operator immediately from another phone and notify your bank.',
    category: 'SIM Swap Fraud',
  },
  {
    id: 7,
    question: 'Which of these is a legitimate reason to share your UPI PIN?',
    options: [
      'When calling bank customer support to verify your account',
      'When asked by a trusted family member for an emergency transfer',
      'There is no legitimate reason to share your UPI PIN with anyone',
      'When a merchant requires PIN confirmation for a large purchase',
    ],
    correctIndex: 2,
    explanation:
      'Your UPI PIN must never be shared with anyone — not bank staff, family members, customer support agents or merchants. It is a personal authentication secret. Sharing it with anyone constitutes a security breach.',
    category: 'UPI Security',
  },
  {
    id: 8,
    question: 'You are offered ₹50 cashback if you scan a QR code and enter your PIN. What should you do?',
    options: [
      'Proceed — ₹50 cashback is a common legitimate offer',
      'Proceed only if the QR is from a known brand',
      'Refuse — entering your PIN is payment authorisation, not receipt',
      'Proceed but limit it to once per day',
    ],
    correctIndex: 2,
    explanation:
      'Entering your UPI PIN always authorises an outgoing payment. No legitimate cashback scheme requires you to enter your PIN to receive money. This is a common variant of the collect request or fake QR scam.',
    category: 'QR Code Fraud',
  },
  {
    id: 9,
    question: 'You discover a fraudulent transaction in your account. What is the FIRST step?',
    options: [
      'Post about it on social media',
      'Wait for the bank to detect it automatically',
      'Immediately contact your bank, then call the Cybercrime Helpline 1930',
      'Change your UPI PIN and wait',
    ],
    correctIndex: 2,
    explanation:
      'Speed is critical. Contact your bank or payment provider immediately to report and freeze suspicious activity, then call 1930 (National Cybercrime Helpline). Also file a complaint at cybercrime.gov.in. Preserve all transaction references as evidence.',
    category: 'Incident Response',
  },
  {
    id: 10,
    question: 'Which official resource should you consult to report cybercrime in India?',
    options: [
      'Local police station website',
      'cybercrime.gov.in and National Helpline 1930',
      'Social media platform help centers',
      'Your payment app\'s chat support',
    ],
    correctIndex: 1,
    explanation:
      'The National Cybercrime Reporting Portal (cybercrime.gov.in) operated by the Ministry of Home Affairs is the official platform for reporting cybercrimes in India. The dedicated helpline number is 1930. These are the authoritative first points of contact.',
    category: 'Incident Response',
  },
];

