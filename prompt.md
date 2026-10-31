# PROJECT: UPI SECURITY LAB
## An Immersive Interactive Cybersecurity Research Website

Act as a senior UI/UX designer, creative director, cybersecurity researcher, motion designer, and senior React engineer.

Your task is to design and build a complete, production-quality, highly interactive research website based on:

**Research Topic:** Digital Payments and UPI: Security Challenges  
**Website Title:** UPI SECURITY LAB  
**Main Tagline:** UPI SCAMS: SPOT THEM. STOP THEM.  
**Academic Context:** VSIT Student Research Symposium 2026  
**Purpose:** An educational and research-driven digital experience that explains UPI security challenges, common fraud techniques, cybersecurity mechanisms, research findings, and practical prevention strategies.

This should feel like an independently designed, premium cybersecurity research publication, not a conventional college project website.

---

# 1. CREATIVE DIRECTION AND DESIGN PHILOSOPHY

The most important requirement is visual quality.

I do NOT want:
- Generic AI-generated website aesthetics.
- Repetitive cards everywhere.
- Excessive blue-purple gradients.
- Glowing gradient buttons.
- Random floating circles and decorative blobs.
- Unnecessary glassmorphism.
- Generic SaaS dashboard layouts.
- Oversized headings on every section.
- Repetitive three-column card patterns.
- Stock illustrations that look artificial.
- Excessive animations that compromise usability.

I want a visually sophisticated, cinematic, editorial and technically credible design.

### Design inspiration

Take visual inspiration from:
- Premium cybersecurity research publications.
- Digital forensics and threat intelligence dashboards.
- High-end editorial websites.
- Modern financial technology interfaces.
- Scientific research journals.
- Interactive investigative journalism websites.
- Technical documentation and data visualization platforms.

Use these as design references, not templates to copy.

### Visual personality

The website should communicate:

1. Trust and security.
2. Technical intelligence.
3. Research credibility.
4. Modern financial technology.
5. A subtle sense of urgency around cyber threats.

The visual experience should be immersive without becoming theatrical or distracting.

---

# 2. INTENTIONAL COLOR SYSTEM

Build a consistent design system around a dark cybersecurity research aesthetic.

Use the following palette:

Primary background:
- Deep midnight navy: #071426
- Secondary background: #0B192B
- Elevated surface: #11243A

Primary accent:
- Electric cyan: #38BDF8
- Soft cyan: #67E8F9

Supporting colors:
- White: #F8FAFC
- Muted text: #94A3B8
- Border: #24364D

Semantic colors:
- Danger: #F87171
- Warning: #FBBF24
- Success: #34D399
- Information: #60A5FA

### Color usage rules

- Use dark navy as the main visual foundation.
- Use cyan sparingly for important interactive elements, active states and technical highlights.
- Use red only for suspicious activities, threats and warnings.
- Use green for verified transactions and protective actions.
- Use amber for caution and uncertainty.
- Introduce occasional light-background research sections to create visual contrast.
- Avoid applying gradients to every component.

Every color must have a purpose.

---

# 3. TYPOGRAPHY AND VISUAL HIERARCHY

Use a deliberate typography system.

Suggested fonts:
- Headings: Space Grotesk or Sora.
- Body: Inter.
- Technical labels: JetBrains Mono.

Typography should feel like a technical research publication.

Use:
- Strong editorial headlines.
- Compact uppercase section labels.
- Carefully controlled font weights.
- Comfortable paragraph line lengths.
- Monospaced labels for transaction IDs, data values and technical annotations.

Avoid excessive font sizes and inconsistent typography.

---

# 4. TECHNOLOGY STACK

Build the actual working website using:

Core:
- React
- TypeScript
- Vite

Styling:
- Tailwind CSS
- Custom CSS for complex visual effects
- CSS variables for design tokens

Animation:
- Framer Motion for UI transitions and interactive animations.
- GSAP with ScrollTrigger for selected cinematic scroll experiences.
- CSS animations for lightweight micro-interactions.

Visualization:
- Recharts for charts and research data.
- Custom SVG diagrams for payment flows and security illustrations.

Icons:
- Lucide React.

Additional:
- React Router DOM if routing is necessary.
- React Intersection Observer or native IntersectionObserver.
- React Hook Form for survey forms if needed.

Use current stable, compatible library versions.

Do not install unnecessary dependencies. Use GSAP only where it provides a meaningful advantage over CSS or Framer Motion.

---

# 5. WEBSITE INFORMATION ARCHITECTURE

Build the website as a complete, cohesive research experience.

Create the following sections.

## SECTION 01: CINEMATIC HERO

This is the first impression and should be visually exceptional.

Main title:

UPI SCAMS.
SPOT THEM.
STOP THEM.

Subtitle:

Digital Payments and UPI: Security Challenges

Supporting description:

An interactive investigation into digital payment fraud, social engineering, security mechanisms and user awareness.

Design requirements:

- Full-width cinematic hero.
- Deep navy background.
- Large editorial typography.
- A sophisticated smartphone/payment interface as the main visual object.
- Subtle animated transaction indicators.
- Fine technical grid or circuit-inspired details.
- A moving scanning line or payment verification animation.
- Carefully controlled parallax.
- Small floating threat indicators.
- A clear scroll indicator.

Add two CTA buttons:

1. Explore Threats
2. Explore Research

The hero should look designed by an experienced digital product design studio.

Do not use an ordinary gradient background with a phone mockup placed in the middle.

Create a custom visual composition.

## SECTION 02: UPI AT A GLANCE

Show the importance and scale of India's UPI ecosystem.

Include:
- Total transaction volume.
- Transaction value.
- UPI adoption and growth.
- Relevant financial-year statistics.

Use animated counters and a clean data presentation.

IMPORTANT:
Research actual statistics from official sources before displaying them.

Each statistic must include:
- Value.
- Unit.
- Financial year or reporting date.
- Source.

Never invent statistics or display illustrative numbers as actual findings.

## SECTION 03: UNDERSTANDING UPI

Explain how a UPI transaction works.

Create an interactive animated payment-flow diagram:

Payer → PSP/UPI Application → NPCI UPI Infrastructure → Participating Banks → Beneficiary

Show:
- Payment initiation.
- Authentication.
- Transaction routing.
- Bank processing.
- Confirmation.

Allow visitors to click individual stages to reveal explanations.

Include a separate section explaining security mechanisms:
- UPI PIN authentication.
- Device and mobile-number binding.
- Bank-side monitoring.
- Transaction notifications.
- NPCI and RBI security frameworks.

Ensure technical explanations are accurate. Do not oversimplify the actual architecture.

## SECTION 04: THREAT INTELLIGENCE CENTER

This is one of the most important sections.

Create an immersive interactive threat explorer covering five major UPI fraud categories:

1. Collect Request Fraud.
2. Fake QR Code Scams.
3. Fake Customer Care Scams.
4. Screen-Sharing and Remote Access Scams.
5. SIM Swap Fraud.

Each threat should have a distinct visual identity.

Do not simply place five identical cards on the screen.

Possible interactions:
- Horizontal threat navigation.
- Interactive case-study panels.
- Animated attack-flow diagrams.
- Suspicious message simulations.
- Device mockups.
- Red-flag highlighting.
- Expandable technical explanations.

For each scam, explain:

A. What it is.
B. How the attacker approaches the victim.
C. How the scam works step by step.
D. What psychological manipulation is involved.
E. Warning signs.
F. Potential consequences.
G. Prevention strategies.

Add a visual attack sequence for every category.

Important technical distinction:

Scanning a QR code alone does not automatically steal money. The risk arises when the victim is deceived into authorizing a payment or revealing sensitive information.

Similarly, explain that remote-access applications create risk through granted permissions and exposed activity, rather than claiming that merely installing any such app guarantees a compromise.

## SECTION 05: INTERACTIVE SCAM SIMULATOR

Build a realistic educational simulation.

Visitors should be able to experience simulated fraud scenarios without interacting with any real banking system.

Example scenario:

A user receives a message:

"Congratulations! Your ₹2,500 refund is ready. Approve this UPI request and enter your PIN to receive the money."

Display a simulated payment-app interface.

Allow the visitor to choose:
- Approve.
- Decline.
- Verify sender.

Depending on their choice:
- Show an educational outcome.
- Highlight the warning signs.
- Explain why the action was safe or unsafe.

Build at least three scenarios.

All scenarios must be simulated. Never request actual banking credentials, UPI PINs, OTPs or personal financial details.

## SECTION 06: RESEARCH OBJECTIVES AND METHODOLOGY

Create an academic research section.

Research objectives:

- Identify common UPI fraud techniques.
- Understand social-engineering methods.
- Examine security and authentication mechanisms.
- Evaluate awareness among college students.
- Recommend practical prevention measures.

Methodology:

- Secondary research.
- Official cybersecurity advisories.
- NPCI and RBI publications.
- Government reports.
- Student awareness survey.
- Comparative analysis of fraud patterns.

Display the methodology as an elegant visual research process rather than a generic list of cards.

## SECTION 07: STUDENT AWARENESS SURVEY

Create a fully functional survey visualization module.

Questions:

1. Do you know that a UPI PIN is not required to receive money?
2. Have you encountered a suspicious UPI message or call?
3. Can you identify a fake collect request?
4. Do you verify the recipient before approving a payment?

Requirements:

- Editable survey inputs.
- Respondent count.
- Yes/No response counts.
- Dynamic percentage calculations.
- Interactive charts.
- Responsive chart layout.
- Data validation.
- Clear sample-size indication.

Allow the research team to enter actual survey results.

IMPORTANT:
Never fabricate participant responses or present demo data as genuine research findings.

If no real data exists, show an empty research state or clearly labelled demonstration data.

Include methodology limitations and sample-size information.

## SECTION 08: DATA VISUALIZATION AND FINDINGS

Create a professional research dashboard featuring:

- Survey response charts.
- Scam-category comparisons.
- Awareness-gap visualization.
- Security mechanism comparisons.
- Relevant official UPI statistics.

Use Recharts and custom SVG visualizations.

Charts should have:
- Clear labels.
- Proper units.
- Source attribution.
- Tooltips.
- Responsive sizing.
- Accessible color contrast.

Avoid decorative charts without meaningful data.

Every visualization must communicate a research finding.

## SECTION 09: SECURITY DEFENCE CENTER

Create an interactive security checklist.

Cover:

- Never disclose UPI PIN or OTP.
- Verify payment recipient and amount.
- Never approve unexpected collect requests.
- Avoid unknown APKs and remote-access tools.
- Use official customer-support channels.
- Secure your mobile device.
- Monitor transaction alerts.
- Report suspected fraud immediately.

Use interactive checklist behaviour with completion progress.

Add a special emergency-response panel.

Important Indian reporting information:

Cybercrime Helpline: 1930

Official reporting portal:
https://cybercrime.gov.in/

Explain the immediate steps following a fraudulent transaction:
1. Contact your bank or payment provider.
2. Call 1930 promptly.
3. File a complaint on the official portal.
4. Preserve transaction references and evidence.

## SECTION 10: INTERACTIVE KNOWLEDGE QUIZ

Build a polished quiz with 8-10 questions.

Features:
- One question at a time.
- Multiple-choice answers.
- Progress indicator.
- Immediate feedback.
- Explanations for correct answers.
- Final score.
- Knowledge assessment.
- Restart option.

The quiz should feel like an educational cybersecurity assessment, not a basic HTML form.

Do not store personal information.

## SECTION 11: RESEARCH CONCLUSION

Present the central research conclusion:

"UPI security is not only a technological responsibility. It also depends on informed users, responsible digital behaviour and timely fraud reporting."

Use a strong editorial layout with a concise research summary.

## SECTION 12: REFERENCES AND RESEARCH LIBRARY

This section is essential.

Create a well-organized research resource library containing official sources and relevant publications.

Use these websites as primary starting points:

NPCI:
https://www.npci.org.in/

NPCI Fraud Awareness:
https://www.npci.org.in/fraud-awareness

NPCI UPI FAQs:
https://www.npci.org.in/what-we-do/upi/faqs

Reserve Bank of India:
https://www.rbi.org.in/

RBI Digital Banking Safeguards:
https://rbikehtahai.rbi.org.in/safeguards-for-digital-banking.html

National Cyber Crime Reporting Portal:
https://cybercrime.gov.in/

Ministry of Home Affairs:
https://www.mha.gov.in/

Press Information Bureau:
https://www.pib.gov.in/

CERT-In:
https://www.cert-in.org.in/

RBI Database:
https://dbie.rbi.org.in/

Google Scholar:
https://scholar.google.com/

Include research categories:

- UPI architecture and security.
- Digital payment fraud.
- Social engineering.
- QR code fraud.
- SIM swapping.
- Mobile banking security.
- Cybersecurity awareness.
- Digital payment regulations.

For every research source, show:
- Title.
- Publishing organization.
- Publication date, when available.
- Short description.
- Research category.
- Direct source link.

Add search and filtering by category.

Research integrity requirements:

- Prioritize government, regulatory, NPCI and academic sources.
- Distinguish primary sources from news articles.
- Never invent publication titles, authors, dates, statistics or URLs.
- Verify that links lead to the stated resources.
- Cite claims close to where they appear.
- Record the access date for changing web resources.
- Distinguish research evidence from educational interpretation.

---

# 6. ADVANCED MOTION AND INTERACTION DESIGN

Animations should make the website feel alive without compromising clarity.

Use:

1. Scroll-triggered section entrances.
2. Subtle parallax on the hero composition.
3. Animated transaction-flow paths.
4. SVG line-drawing animations.
5. Smooth tab transitions.
6. Interactive threat highlighting.
7. Animated data counters.
8. Chart transitions.
9. Hover-based micro-interactions.
10. Carefully timed text reveals.
11. Animated quiz feedback.
12. Scroll progress indicator.

### Motion rules

- Avoid animating every element.
- Avoid excessive bounce effects.
- Avoid constant movement in reading areas.
- Prefer subtle movement and meaningful transitions.
- Use reduced-motion accessibility support.
- Keep animations smooth on mid-range mobile devices.
- Never sacrifice readability for cinematic effects.

Use GSAP only for selected scroll sequences where it improves the storytelling.

---

# 7. RESPONSIVE DESIGN

The website must work exceptionally well on:

- Desktop.
- Laptop.
- Tablet.
- Mobile phones.

Mobile should not feel like a compressed desktop layout.

Design separate responsive behaviours for:
- Navigation.
- Hero composition.
- Threat explorer.
- Payment-flow diagrams.
- Charts.
- Research library.
- Quiz.
- Survey module.

Make touch interactions comfortable.

---

# 8. ACCESSIBILITY AND PERFORMANCE

Implement:

- Semantic HTML.
- Keyboard-accessible controls.
- Accessible form labels.
- Appropriate ARIA attributes.
- Visible focus states.
- Reduced-motion support.
- Good color contrast.
- Lazy loading where appropriate.
- Optimized images.
- Code splitting where useful.

Target excellent Lighthouse scores.

Avoid unnecessarily large animation libraries or oversized image assets.

---

# 9. PROJECT ARCHITECTURE

Use a clean, maintainable React + TypeScript architecture.

Suggested structure:

src/
├── app/
│   ├── App.tsx
│   └── router.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── SectionHeader.tsx
│   │
│   ├── visual/
│   │   ├── PaymentFlow.tsx
│   │   ├── ThreatDiagram.tsx
│   │   ├── AnimatedCounter.tsx
│   │   └── DataCharts.tsx
│   │
│   └── ui/
│
├── sections/
│   ├── Hero/
│   ├── UPIOverview/
│   ├── HowUPIWorks/
│   ├── ThreatExplorer/
│   ├── ScamSimulator/
│   ├── ResearchMethodology/
│   ├── Survey/
│   ├── ResearchFindings/
│   ├── DefenceCenter/
│   ├── Quiz/
│   ├── Conclusion/
│   └── ResearchLibrary/
│
├── data/
│   ├── threats.ts
│   ├── quiz.ts
│   ├── references.ts
│   └── statistics.ts
│
├── hooks/
├── utils/
├── styles/
│   ├── globals.css
│   └── animations.css
│
└── types/

public/
├── images/
├── icons/
└── fonts/

docs/
├── research-sources.md
├── research-methodology.md
└── content-verification.md

Adapt this architecture where necessary, but keep components modular and reusable.

---

# 10. IMPLEMENTATION WORKFLOW

Do not immediately generate the entire website using one generic template.

Work in the following stages:

### Phase 1: Research

- Investigate the subject.
- Open the official research websites.
- Collect verified statistics.
- Identify authoritative information about each scam.
- Verify all external URLs.
- Create a research source document.
- Separate verified facts from illustrative examples.

### Phase 2: Design system

- Establish design tokens.
- Define typography.
- Define spacing and layout rules.
- Design the visual hierarchy.
- Create reusable UI components.
- Establish animation guidelines.

### Phase 3: Visual implementation

Build the hero first.

Then develop the website section by section.

Ensure every section has its own visual composition and storytelling approach.

Avoid repetitive layouts.

### Phase 4: Functionality

Implement all interactive elements.

Test:
- Threat navigation.
- Scam simulations.
- Payment-flow interactions.
- Survey calculations.
- Charts.
- Quiz scoring.
- Resource filtering.
- Navigation and scrolling.

No decorative controls that do nothing.

### Phase 5: Quality assurance

- Test the entire website.
- Fix console errors.
- Verify all links.
- Check responsive behaviour.
- Test animations.
- Validate calculations.
- Test keyboard navigation.
- Check reduced-motion mode.
- Optimize performance.

---

# 11. FINAL QUALITY EXPECTATIONS

The final result should feel like a professionally commissioned digital research experience.

It should combine:

- The visual storytelling of a premium editorial publication.
- The clarity of an academic research paper.
- The interactivity of a cybersecurity learning platform.
- The precision of a financial technology interface.
- The cinematic quality of a carefully art-directed digital experience.

The website must have a clear visual identity.

Do not blindly follow common AI website patterns.

Do not fill empty spaces with random decorative elements.

Use whitespace, typography, carefully selected illustrations, data visualization and intentional composition.

Every section must have a reason to exist.

Every animation must serve a purpose.

Every statistic must have a source.

Every interactive component must work.

**MOST IMPORTANT: Build the actual functional React website in the project workspace. Do not stop at a design proposal, wireframe, screenshot or static prototype.**

Start by inspecting the existing project files. Preserve useful existing work, establish the architecture and then implement the complete experience.

Run the project, test it and resolve errors before considering the task complete.

The final website should be ready for deployment on Vercel or Netlify.