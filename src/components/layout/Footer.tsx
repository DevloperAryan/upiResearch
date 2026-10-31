// src/components/layout/Footer.tsx
import { Shield, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#071426] border-t border-[#24364D] pt-16 pb-8">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-[#38BDF8]" strokeWidth={1.5} />
              <span className="font-heading font-semibold text-white">UPI SECURITY LAB</span>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
              An interactive research experience on digital payment security challenges. 
              VSIT Student Research Symposium 2026.
            </p>
            <p className="font-mono text-xs text-[#94A3B8]/60">
              For educational purposes only.
            </p>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="font-mono text-xs text-[#F87171] uppercase tracking-widest mb-4">
              Emergency Contacts
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="font-mono text-lg font-bold text-[#F87171]">1930</span>
                <div>
                  <p className="text-sm text-white font-medium">National Cybercrime Helpline</p>
                  <p className="text-xs text-[#94A3B8]">24×7 fraud reporting</p>
                </div>
              </div>
              <a
                href="https://cybercrime.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#38BDF8] hover:text-[#67E8F9] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                cybercrime.gov.in
              </a>
            </div>
          </div>

          {/* Sources */}
          <div>
            <h4 className="font-mono text-xs text-[#94A3B8] uppercase tracking-widest mb-4">
              Official Sources
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'NPCI', url: 'https://www.npci.org.in/' },
                { label: 'Reserve Bank of India', url: 'https://www.rbi.org.in/' },
                { label: 'CERT-In', url: 'https://www.cert-in.org.in/' },
                { label: 'Cyber Crime Portal', url: 'https://cybercrime.gov.in/' },
              ].map((src) => (
                <li key={src.url}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {src.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#24364D] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[#94A3B8]/60">
            © 2026 UPI Security Lab — VSIT Research Symposium. Educational use only.
          </p>
          <p className="font-mono text-xs text-[#94A3B8]/40">
            No real financial data collected or stored.
          </p>
        </div>
      </div>
    </footer>
  );
}
