// src/data/threats.ts
import type { Threat } from '../types';

export const threats: Threat[] = [
  {
    id: 'collect-request',
    title: 'Collect Request Fraud',
    category: 'Payment Deception',
    riskLevel: 'critical',
    description:
      'Fraudsters send collect requests (money requests) disguised as refunds, cashback or prize money, tricking victims into entering their UPI PIN to authorise a payment to the attacker.',
    howItWorks: [
      'Attacker contacts victim via phone call, SMS or social media claiming a refund/prize.',
      'Victim is told to accept an incoming UPI collect request.',
      'The UPI app displays: "Approve to receive ₹X". Victim is misled — approving sends money OUT.',
      'Victim enters UPI PIN. Money is transferred to attacker instantly.',
    ],
    psychologicalTactics: [
      'False urgency: "Offer expires in 2 minutes."',
      'Authority: Impersonates bank, company or government official.',
      'Reciprocity: Appears to give something (refund/prize).',
      'Confusion: Exploits UI misunderstanding — "Approve" means authorise outgoing payment.',
    ],
    warningsigns: [
      'Unsolicited call claiming refund or cashback.',
      'Collect request from unknown UPI handle.',
      'Asked to enter PIN to "receive" money — never required.',
      'Urgency pressure to act immediately.',
    ],
    consequences: [
      'Immediate and irreversible financial loss.',
      'Repeat targeting as a known victim.',
      'Identity compromise if personal details shared.',
    ],
    prevention: [
      'Remember: UPI PIN is NEVER required to receive money.',
      'Decline all collect requests from unknown sources.',
      'Verify any refund claim directly with the company via official channels.',
      'Never act on unsolicited calls claiming prizes or refunds.',
    ],
    attackFlow: [
      { id: 1, actor: 'Attacker', action: 'Initiates contact', detail: 'Calls victim claiming refund of ₹2,500 from failed order', type: 'attacker' },
      { id: 2, actor: 'Attacker', action: 'Sends collect request', detail: 'UPI collect request sent: "Approve to receive ₹2,500"', type: 'attacker' },
      { id: 3, actor: 'Victim', action: 'Sees misleading UI', detail: 'UPI app shows approval screen — victim thinks they are receiving money', type: 'victim' },
      { id: 4, actor: 'Victim', action: 'Enters UPI PIN', detail: 'Authorises outgoing payment of ₹2,500 to attacker', type: 'victim' },
      { id: 5, actor: 'System', action: 'Transfer completed', detail: 'NPCI routes ₹2,500 from victim account to attacker', type: 'system' },
    ],
  },
  {
    id: 'fake-qr',
    title: 'Fake QR Code Scams',
    category: 'QR Code Manipulation',
    riskLevel: 'high',
    description:
      'Attackers replace or overlay legitimate merchant QR codes with fraudulent ones, or trick sellers into scanning attacker-generated QR codes linked to collect requests instead of payment receipts.',
    howItWorks: [
      'Fraudsters physically replace merchant QR codes at shops, petrol stations or markets.',
      'Alternatively, a buyer sends a QR code to a seller claiming "this will send you the payment."',
      'The QR code is actually a collect request — scanning it triggers a payment from the seller.',
      'Scanning a QR code alone does not steal money; victim must still approve and enter PIN.',
    ],
    psychologicalTactics: [
      'Trust exploitation: QR code appears on known merchant material.',
      'Deception: Buyer presents payment QR as if sending money.',
      'Time pressure: Transaction must complete quickly.',
    ],
    warningsigns: [
      'QR code appears taped over or modified on official surfaces.',
      'Buyer sends you a QR code to "receive payment" — sellers never need to scan a QR to receive.',
      'Payment app shows a "Pay" or "Collect" action after scanning, not a receipt.',
    ],
    consequences: [
      'Financial loss for merchants.',
      'Reputational damage to small businesses.',
      'Difficult to recover as victim authorised the transaction.',
    ],
    prevention: [
      'Verify merchant QR codes are original and unmodified.',
      'As a seller, use your own QR to receive payment — never scan buyer\'s QR.',
      'Check the registered name displayed after scanning.',
      'Confirm payment received via bank notification, not just buyer\'s word.',
    ],
    attackFlow: [
      { id: 1, actor: 'Attacker', action: 'Places fraudulent QR', detail: 'Attacker replaces merchant QR code at a street vendor', type: 'attacker' },
      { id: 2, actor: 'Victim', action: 'Scans QR to pay', detail: 'Customer scans QR believing it belongs to the vendor', type: 'victim' },
      { id: 3, actor: 'System', action: 'QR resolves to attacker', detail: 'Payment directed to attacker\'s UPI address', type: 'system' },
      { id: 4, actor: 'Victim', action: 'Approves and enters PIN', detail: 'Victim confirms payment thinking it goes to vendor', type: 'victim' },
      { id: 5, actor: 'System', action: 'Transfer completed', detail: 'Money transferred to fraudster, vendor receives nothing', type: 'system' },
    ],
  },
  {
    id: 'fake-customer-care',
    title: 'Fake Customer Care Scams',
    category: 'Impersonation',
    riskLevel: 'critical',
    description:
      'Fraudsters create fake customer support numbers or profiles, intercept victims searching for bank/payment app support, and extract UPI PINs, OTPs and account credentials under the guise of resolving issues.',
    howItWorks: [
      'Victim searches "PhonePe customer care number" or similar on Google.',
      'Fraudster\'s fake number appears in search results or sponsored ads.',
      'Victim calls and speaks to convincing "agent" who asks for UPI PIN or OTP to "verify identity".',
      'Attacker uses credentials to access account or authorise fraudulent transactions.',
    ],
    psychologicalTactics: [
      'Authority: Impersonates legitimate bank/app support.',
      'Problem-solution framing: Creates or amplifies a problem, then offers to solve it.',
      'Urgency: "Your account will be blocked unless verified immediately."',
      'Trust: Uses accurate partial information to appear legitimate.',
    ],
    warningsigns: [
      'Customer care number found on Google/social media, not official app.',
      'Agent asks for UPI PIN, OTP or full card number.',
      'Agent requests screen sharing or remote access.',
      'Pressure to act immediately without time to verify.',
    ],
    consequences: [
      'Complete account compromise.',
      'Multiple fraudulent transactions.',
      'Identity theft.',
      'Long recovery process.',
    ],
    prevention: [
      'Find support numbers only from the official app or bank website.',
      'Never share UPI PIN, OTP or passwords with anyone, including "bank staff".',
      'Legitimate bank agents never ask for your PIN.',
      'Hang up and call back using the number from your bank card or statement.',
    ],
    attackFlow: [
      { id: 1, actor: 'Attacker', action: 'Posts fake number', detail: 'Publishes fake customer care number on websites and search ads', type: 'attacker' },
      { id: 2, actor: 'Victim', action: 'Searches for support', detail: 'Finds and calls the fraudulent number', type: 'victim' },
      { id: 3, actor: 'Attacker', action: 'Establishes trust', detail: 'Poses as bank agent, references partial account info', type: 'attacker' },
      { id: 4, actor: 'Victim', action: 'Shares credentials', detail: 'Provides UPI PIN and OTP to "verify account"', type: 'victim' },
      { id: 5, actor: 'Attacker', action: 'Drains account', detail: 'Uses credentials to authorise fraudulent transfers', type: 'attacker' },
    ],
  },
  {
    id: 'screen-sharing',
    title: 'Screen-Sharing & Remote Access Scams',
    category: 'Remote Access',
    riskLevel: 'critical',
    description:
      'Fraudsters convince victims to install screen-sharing applications, gaining visibility of UPI transactions, OTPs, banking credentials and device contents. Risk arises from the permissions granted, not merely from having an app installed.',
    howItWorks: [
      'Attacker poses as bank agent, tech support or government official.',
      'Victim is asked to install a remote-access or screen-sharing app (e.g. AnyDesk, TeamViewer).',
      'Attacker gains live view of victim\'s screen, including UPI sessions and OTP messages.',
      'Attacker guides victim through transactions while observing all sensitive activity.',
    ],
    psychologicalTactics: [
      'Technical authority: Impersonates IT/banking expert.',
      'Manufactured problem: Claims device has security issue or KYC update needed.',
      'Helpfulness: Offers to "solve the problem" remotely.',
      'Distraction: Keeps victim busy while observing sensitive screens.',
    ],
    warningsigns: [
      'Any request to install a screen-sharing app to resolve a banking issue.',
      'Being asked to navigate to banking apps while on a call.',
      'Requests to disable device security settings.',
    ],
    consequences: [
      'Complete account compromise.',
      'Multiple accounts drained simultaneously.',
      'Exposure of sensitive personal documents.',
    ],
    prevention: [
      'Never install remote access apps at the request of anyone claiming to be bank support.',
      'Legitimate banks and government agencies do not use AnyDesk or TeamViewer.',
      'End any call that requests screen sharing immediately.',
      'If installed, revoke all permissions and uninstall immediately.',
    ],
    attackFlow: [
      { id: 1, actor: 'Attacker', action: 'Impersonates support', detail: 'Calls victim claiming "suspicious activity" on account', type: 'attacker' },
      { id: 2, actor: 'Victim', action: 'Installs remote app', detail: 'Installs AnyDesk and shares 9-digit access code', type: 'victim' },
      { id: 3, actor: 'Attacker', action: 'Gains screen access', detail: 'Can see victim\'s entire screen including UPI and messages', type: 'attacker' },
      { id: 4, actor: 'Attacker', action: 'Observes credentials', detail: 'Watches victim navigate UPI app, captures OTP', type: 'attacker' },
      { id: 5, actor: 'Attacker', action: 'Executes transfers', detail: 'Uses captured credentials for unauthorised transactions', type: 'attacker' },
    ],
  },
  {
    id: 'sim-swap',
    title: 'SIM Swap Fraud',
    category: 'Telecom Exploitation',
    riskLevel: 'high',
    description:
      'Fraudsters obtain a duplicate SIM card for the victim\'s mobile number through telecom operators using forged documents or social engineering, gaining control of OTP-based authentication.',
    howItWorks: [
      'Attacker collects victim\'s personal data (name, Aadhaar, date of birth) through phishing or data breaches.',
      'Attacker visits a telecom retailer claiming to be the victim with a lost SIM.',
      'New SIM is issued; victim\'s SIM is deactivated.',
      'Attacker uses new SIM to receive OTPs and reset banking passwords.',
      'Attacker initiates transactions using captured credentials.',
    ],
    psychologicalTactics: [
      'Social engineering of telecom store employees.',
      'Document forgery using stolen personal data.',
      'Timing attack: Often executed during nighttime when victim is less alert.',
    ],
    warningsigns: [
      'Mobile signal suddenly lost for an extended period.',
      'Cannot make or receive calls or SMS.',
      'Receiving unusual network messages.',
      'Bank notifications for unknown transactions.',
    ],
    consequences: [
      'Complete loss of OTP-based authentication.',
      'Multiple accounts compromised simultaneously.',
      'Bank and email account takeover.',
      'Significant financial loss before detection.',
    ],
    prevention: [
      'Register a secondary alert number with your bank.',
      'Set a SIM lock or telecom account password.',
      'Monitor for sudden loss of mobile connectivity.',
      'Contact telecom operator immediately if SIM stops working.',
      'Enable additional authentication methods beyond SMS OTP.',
    ],
    attackFlow: [
      { id: 1, actor: 'Attacker', action: 'Collects victim data', detail: 'Gathers name, Aadhaar, DOB via phishing or data breach', type: 'attacker' },
      { id: 2, actor: 'Attacker', action: 'Contacts telecom retailer', detail: 'Impersonates victim claiming SIM is lost or damaged', type: 'attacker' },
      { id: 3, actor: 'System', action: 'SIM transferred', detail: 'Victim\'s number ported to attacker\'s SIM; victim\'s SIM deactivated', type: 'system' },
      { id: 4, actor: 'Victim', action: 'Loses connectivity', detail: 'Victim\'s phone shows no network — often noticed late', type: 'victim' },
      { id: 5, actor: 'Attacker', action: 'Resets credentials', detail: 'Receives OTPs, resets banking passwords, drains accounts', type: 'attacker' },
    ],
  },
];

