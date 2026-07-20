import { Link } from 'react-router-dom'
import Icon from './Icon'

const steps = [
  { emoji: '👤', title: 'Obtain Access', desc: 'Receive your pre-seeded account email and password from the system administrator.' },
  { emoji: '🔐', title: 'Login', desc: 'Access your personalized trading workspace instantly.' },
  { emoji: '📊', title: 'Open Dashboard', desc: 'View live market data, charts and all widgets together.' },
  { emoji: '📈', title: 'Monitor Stocks', desc: 'Track all major Bank Nifty constituent stocks in real time.' },
  { emoji: '📉', title: 'Analyze Charts', desc: 'Study trends, heatmaps and technical indicators effortlessly.' },
  { emoji: '🎯', title: 'Make Better Decisions', desc: 'Execute trades faster with complete market confidence.' },
]

export default function SetupGuide() {
  return (
    <section className="bg-bg-sidebar text-white py-10 px-6 md:px-12 relative overflow-hidden transition-colors duration-300">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#D43B0C]/10 blur-[120px]"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#D9A441]/10 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#D9A441]">
            Setup Guide
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight">
            Start Trading in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D43B0C] to-[#D9A441]">
              {' '}6 Simple Steps
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed">
            Everything you need to go from signup to live market monitoring in just a few minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute -inset-5 rounded-[32px] bg-gradient-to-r from-[#D43B0C]/20 to-[#D9A441]/20 blur-2xl"></div>
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 max-h-[420px]">
              <img alt="How It Works" className="w-full h-full object-cover" src="/how-it-works.svg" />
            </div>
          </div>

          <div>
            <div className="space-y-3">
              {steps.map((s) => (
                <div
                  key={s.title}
                  className="flex items-start gap-3 pb-3 border-b border-white/10 last:border-none last:pb-0"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#D43B0C] to-[#D9A441] flex items-center justify-center text-sm flex-shrink-0 shadow-lg shadow-[#D43B0C]/20">
                    {s.emoji}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white">{s.title}</h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-white/60">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <Link
                className="inline-flex items-center gap-2 bg-[#D43B0C] hover:bg-[#C4370B] transition-all text-white font-bold px-6 py-2.5 rounded-xl shadow-lg shadow-[#D43B0C]/20 text-sm"
                to="/login"
              >
                Start Monitoring
                <Icon name="arrow-up-right" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
