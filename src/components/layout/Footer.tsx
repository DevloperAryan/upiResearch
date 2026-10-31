// src/components/layout/Footer.tsx
import { Shield, ExternalLink, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#172033] text-white border-t border-[#24364D] pt-16 pb-10" aria-label="Site footer">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#593ACB] flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" strokeWidth={2} aria-hidden="true" />
              </div>
              <span className="font-heading font-bold text-base tracking-wide text-white">
                UPI SECURITY LAB
              </span>
            </div>
            <p className="font-body text-sm text-[#94A3B8] leading-relaxed mb-4">
              An interactive research initiative exploring digital payment attack surfaces, social engineering tactics, and cyber defense mechanisms.
            </p>
            <p className="font-body text-xs text-[#CBD5E1]">
              Presented at VSIT Student Research Symposium 2026. For academic and educational demonstration purposes only.
            </p>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h3 className="font-body text-xs text-[#F87171] uppercase tracking-widest font-bold mb-4">
              Emergency Reporting Hotline
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-[#11243A] p-4 rounded-xl border border-[#24364D]">
                <Phone className="w-6 h-6 text-[#F87171] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <a
                    href="tel:1930"
                    aria-label="Call National Cybercrime Helpline 1930"
                    className="font-heading text-2xl font-black text-[#F87171] hover:underline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    1930
                  </a>
                  <p className="font-body text-xs text-white font-medium">National Cybercrime Helpline</p>
                  <p className="font-body text-[11px] text-[#94A3B8]">Toll-free 24×7 immediate financial fraud reporting</p>
                </div>
              </div>

              <div>
                <a
                  href="https://cybercrime.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#38BDF8] hover:text-[#67E8F9] hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-white"
                >
                  <span>cybercrime.gov.in</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <p className="font-body text-[11px] text-[#94A3B8] mt-0.5">
                  Ministry of Home Affairs, Government of India
                </p>
              </div>
            </div>
          </div>

          {/* Regulatory & Institutional Sources */}
          <div>
            <h3 className="font-body text-xs text-[#CBD5E1] uppercase tracking-widest font-bold mb-4">
              Statutory Authorities & Data
            </h3>
            <ul className="space-y-2.5 font-body text-sm text-[#94A3B8]" role="list">
              {[
                { label: 'National Payments Corporation of India (NPCI)', url: 'https://www.npci.org.in/' },
                { label: 'Reserve Bank of India (RBI)', url: 'https://www.rbi.org.in/' },
                { label: 'Indian Computer Emergency Response Team (CERT-In)', url: 'https://www.cert-in.org.in/' },
                { label: 'National Cyber Crime Reporting Portal', url: 'https://cybercrime.gov.in/' },
              ].map((src) => (
                <li key={src.url}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <span>{src.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 text-[#64748B]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#24364D] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-[#94A3B8]">
          <p>
            © 2026 UPI Security Lab — VSIT Research Symposium. Educational publication.
          </p>
          <p className="text-[#64748B]">
            Zero credentials collected. No banking infrastructure compromised.
          </p>
        </div>
      </div>
    </footer>
  );
}
