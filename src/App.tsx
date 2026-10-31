// src/App.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import UPIOverview from './sections/UPIOverview';
import HowUPIWorks from './sections/HowUPIWorks';
import ThreatExplorer from './sections/ThreatExplorer';
import ScamSimulator from './sections/ScamSimulator';
import ResearchMethodology from './sections/ResearchMethodology';
import Survey from './sections/Survey';
import ResearchFindings from './sections/ResearchFindings';
import DefenceCenter from './sections/DefenceCenter';
import Quiz from './sections/Quiz';
import Conclusion from './sections/Conclusion';
import ResearchLibrary from './sections/ResearchLibrary';
import './styles/globals.css';

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
      <motion.div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #38BDF8, #67E8F9)',
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#071426] box-border-box">
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <UPIOverview />
        <HowUPIWorks />
        <ThreatExplorer />
        <ScamSimulator />
        <ResearchMethodology />
        <Survey />
        <ResearchFindings />
        <DefenceCenter />
        <Quiz />
        <Conclusion />
        <ResearchLibrary />
      </main>
      <Footer />
    </div>
  );
}
