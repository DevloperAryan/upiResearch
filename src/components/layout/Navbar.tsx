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
          ? 'bg-[#071426]/90 backdrop-blur-md border-b border-[#24364D] shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="site-container h-[var(--header-height)] flex items-center justify-between gap-6">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg bg-[#11243A] border border-[#24364D] flex items-center justify-center group-hover:border-[#38BDF8]/50 transition-colors">
            <Shield className="w-5 h-5 text-[#38BDF8] transition-transform group-hover:scale-105" strokeWidth={2} />
            <div className="absolute -inset-0.5 rounded-lg bg-[#38BDF8]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-wide text-white flex items-center gap-1">
              UPI<span className="text-[#38BDF8]">SECURITY</span>LAB
            </span>
            <span className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase">
              VSIT Research Symposium 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1 bg-[#0B192B]/80 px-3 py-1.5 rounded-full border border-[#24364D]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] hover:bg-[#11243A] transition-all rounded-full tracking-wide inline-block"
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
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-[#38BDF8] bg-[#38BDF8]/10 hover:bg-[#38BDF8]/20 border border-[#38BDF8]/30 rounded-lg transition-all"
          >
            <span>Research Library</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-[#94A3B8] hover:text-white rounded-lg border border-[#24364D] bg-[#0B192B]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#071426]/98 backdrop-blur-xl border-b border-[#24364D] px-6 py-4 overflow-hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm font-mono text-[#94A3B8] hover:text-[#38BDF8] hover:bg-[#11243A] rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-[#24364D] mt-2">
                <a
                  href="#references"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-3 py-2 text-sm font-mono text-[#38BDF8] bg-[#38BDF8]/10 rounded-lg"
                >
                  <span>Research Library</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
