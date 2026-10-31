// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'How UPI Works', href: '#how-upi-works' },
  { label: 'Threat Intel', href: '#threats' },
  { label: 'Simulator', href: '#simulator' },
  { label: 'Research', href: '#research' },
  { label: 'Findings', href: '#findings' },
  { label: 'Defence', href: '#defence' },
  { label: 'Quiz', href: '#quiz' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-[#E5E7EB]/70'
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="site-container h-[var(--header-height)] flex items-center justify-between gap-6"
      >
        {/* Brand / Logo */}
        <a
          href="#"
          aria-label="UPI Security Lab, VSIT Research Symposium 2026 homepage"
          className="flex items-center gap-3 group shrink-0 focus-visible:outline-2 focus-visible:outline-[#593ACB]"
        >
          <div className="relative w-9 h-9 rounded-xl bg-[#593ACB] flex items-center justify-center shadow-md shadow-[#593ACB]/20 group-hover:shadow-lg group-hover:shadow-[#593ACB]/30 transition-all">
            <Shield className="w-5 h-5 text-white transition-transform group-hover:scale-105" strokeWidth={2} aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-wide text-[#172033] flex items-center gap-0.5">
              UPI<span className="text-[#593ACB]">SECURITY</span>LAB
            </span>
            <span className="font-mono text-[9px] text-[#475569] tracking-widest uppercase">
              VSIT Research Symposium 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-0.5 bg-[#F7F8FC] px-2 py-1.5 rounded-full border border-[#E5E7EB]" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-body font-semibold text-[#334155] hover:text-[#593ACB] hover:bg-white transition-all rounded-full inline-block focus-visible:outline-2 focus-visible:outline-[#593ACB]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#references"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-body font-semibold text-white bg-[#593ACB] hover:bg-[#4F33B7] rounded-lg transition-all shadow-sm shadow-[#593ACB]/20 focus-visible:outline-2 focus-visible:outline-[#593ACB]"
          >
            <span>Research Library</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="lg:hidden p-2 text-[#334155] hover:text-[#593ACB] hover:bg-[#F0EEFA] rounded-lg border border-[#E5E7EB] bg-white transition-colors focus-visible:outline-2 focus-visible:outline-[#593ACB]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="region"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[#E5E7EB] px-6 py-4 overflow-hidden"
          >
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm font-body font-semibold text-[#334155] hover:text-[#593ACB] hover:bg-[#F0EEFA] rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#593ACB]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-[#E5E7EB] mt-2">
                <a
                  href="#references"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-body font-semibold text-white bg-[#593ACB] rounded-lg focus-visible:outline-2 focus-visible:outline-[#593ACB]"
                >
                  <span>Research Library</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
