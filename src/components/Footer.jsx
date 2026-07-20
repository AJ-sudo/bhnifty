const navLinks = [
  { label: 'Home Overview', href: '#' },
  { label: 'Features List', href: '#features' },
  { label: 'Why Bhnifty', href: '#why-bhnifty' },
  { label: 'Frequently Asked', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-sidebar text-white py-10 px-6 md:px-12 border-t border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center">
              <img className="w-10 h-10 object-contain" alt="Bhnifty Logo" src="/logo.svg" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white flex items-center">
                Bh<span className="text-[#D43B0C]">nifty</span>
              </h1>
              <p className="text-xs text-[#D9A441] tracking-widest uppercase font-semibold">
                Financial Clarity
              </p>
            </div>
          </div>
          <p className="text-sm text-white/55 leading-relaxed font-medium">
            The premium unified analytics console built for Nifty constituent traders and rotation
            investors.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#D9A441] tracking-wider uppercase">Quick Navigation</h4>
          <ul className="space-y-3 text-sm font-medium text-white/70">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-orange-400 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#D9A441] tracking-wider uppercase">Contact Details</h4>
          <ul className="space-y-3 text-sm font-medium text-white/70">
            <li>Email: info@pacizon.in</li>
            <li>Support Desk: Active (Mon-Fri)</li>
            <li>Location: Financial District, India</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#D9A441] tracking-wider uppercase">Stay Connected</h4>
          <div className="flex space-x-3 pt-1">
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 bg-white/5 rounded-xl border border-white/5 hover:bg-[#D43B0C] transition-all text-white/85 hover:text-white flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 bg-white/5 rounded-xl border border-white/5 hover:bg-[#D43B0C] transition-all text-white/85 hover:text-white flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="p-2 bg-white/5 rounded-xl border border-white/5 hover:bg-[#D43B0C] transition-all text-white/85 hover:text-white flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm font-medium text-white/45">
        <div>© 2026 Bhnifty Inc. Intraday index monitoring dashboards.</div>
        <div className="mt-2 md:mt-0 flex space-x-4">
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
