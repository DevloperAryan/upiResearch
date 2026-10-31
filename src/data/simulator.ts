// src/data/simulator.ts
import type { SimulatorScenario } from '../types';

export const simulatorScenarios: SimulatorScenario[] = [
  {
    id: 'refund-scam',
    title: 'The Fake Refund',
    message:
      'Congratulations! Your ₹2,500 refund for order #FLP-8829 is ready. Approve this UPI request and enter your PIN to receive the money.',
    senderName: 'FlipMart Refunds',
    senderHandle: 'refunds@flipmart-support.upi',
    amount: 2500,
    type: 'collect',
    choices: [
      {
        id: 'approve',
        label: 'Approve & Enter PIN',
        outcome: 'unsafe',
        explanation: 'Dangerous! You approved an outgoing payment.',
        consequence:
          'You just sent ₹2,500 to a fraudster. UPI collect requests always deduct money from your account — they never credit it. Entering your PIN authorised the transfer.',
      },
      {
        id: 'decline',
        label: 'Decline',
        outcome: 'safe',
        explanation: 'Correct! You declined a fraudulent collect request.',
        consequence:
          'Great decision. Legitimate companies never send money via UPI collect requests. The message was a social engineering attempt to trick you into authorising a payment.',
      },
      {
        id: 'verify',
        label: 'Verify Sender',
        outcome: 'neutral',
        explanation: 'Smart move — you chose to verify before acting.',
        consequence:
          'The UPI handle "refunds@flipmart-support.upi" is not an official domain. Check your actual order status in the FlipMart app. Never act on unsolicited payment notifications.',
      },
    ],
    redFlags: [
      'You never need to enter your PIN to receive money',
      'Unofficial UPI handle — not a verified business address',
      'Unsolicited message about a refund',
      'Urgency implied in the wording',
    ],
  },
  {
    id: 'prize-scam',
    title: 'The Lucky Winner',
    message:
      'Dear User, you have won ₹10,000 in our Diwali Lucky Draw! To claim your prize, accept the UPI request below and verify with your secure PIN within 10 minutes.',
    senderName: 'PRIZE WINNER - NPCI Rewards',
    senderHandle: 'npci.rewards.2025@okaxis',
    amount: 10000,
    type: 'collect',
    choices: [
      {
        id: 'approve',
        label: 'Accept Prize — Enter PIN',
        outcome: 'unsafe',
        explanation: 'Dangerous! This is a classic prize scam.',
        consequence:
          'You sent ₹10,000 to a fraudster. NPCI does not run prize draws. The urgent 10-minute window was designed to stop you from thinking critically.',
      },
      {
        id: 'decline',
        label: 'Decline & Ignore',
        outcome: 'safe',
        explanation: 'Correct! Unsolicited prizes are almost always scams.',
        consequence:
          'Smart choice. NPCI never conducts random prize draws. The "verify with PIN" instruction is the definitive red flag — entering your PIN authorises a payment, not a receipt.',
      },
      {
        id: 'verify',
        label: 'Check NPCI Website',
        outcome: 'neutral',
        explanation: 'Good instinct to verify through official channels.',
        consequence:
          'Visiting npci.org.in would show no such prize draw exists. This UPI handle is not associated with NPCI. Always verify prize claims through official websites, not message links.',
      },
    ],
    redFlags: [
      'NPCI does not conduct prize draws',
      'Fake UPI handle impersonating NPCI',
      '10-minute urgency creates panic',
      'Prize without any prior participation',
      'PIN entry falsely described as "verification"',
    ],
  },
  {
    id: 'customer-care-scam',
    title: 'The Support Agent',
    message:
      'Hi, this is Rahul from Google Pay customer care. We detected unusual activity on your account. Please approve ₹1 verification request to confirm your identity and we will reverse it immediately.',
    senderName: 'GPay Support — Rahul',
    senderHandle: 'gpay.support.india@okicici',
    amount: 1,
    type: 'customer-care',
    choices: [
      {
        id: 'approve',
        label: 'Approve ₹1 Verification',
        outcome: 'unsafe',
        explanation: 'Dangerous! The ₹1 is just the test before the real fraud.',
        consequence:
          'The "₹1 verification" technique captures your PIN entry behaviour and establishes trust. Once you approve, the attacker either immediately sends a large collect request, or has already captured enough to proceed.',
      },
      {
        id: 'decline',
        label: 'Decline & End Contact',
        outcome: 'safe',
        explanation: 'Correct! Legitimate support never sends collect requests.',
        consequence:
          'Right decision. Google Pay customer care never sends UPI collect requests, not even for "₹1 verification". Block this contact and report through the official Google Pay app.',
      },
      {
        id: 'verify',
        label: 'Ask for Employee ID',
        outcome: 'neutral',
        explanation: 'Good scepticism, but be careful.',
        consequence:
          'Fraudsters can provide fake employee IDs. The safest action is to hang up, then contact Google Pay support directly through the official in-app help section. Never rely on contact initiated by a caller.',
      },
    ],
    redFlags: [
      'No legitimate support agent sends collect requests',
      'UPI handle is not an official Google Pay domain',
      '"We will reverse it" is a false promise',
      'Initiated contact without you requesting support',
      'Account problem used to create urgency',
    ],
  },
];

