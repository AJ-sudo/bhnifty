import { Link } from 'react-router-dom'
import Icon from './Icon'

const statCards = [
  { icon: 'monitor', title: '14 Bank Stocks', sub: 'Live Monitoring' },
  { icon: 'chart-line', title: 'Advanced Charts', sub: '& Indicators' },
  { icon: 'sparkles', title: 'Real-time Alerts', sub: '& Movers' },
  { icon: 'grid-3x3', title: 'Heatmap &', sub: 'Market Insights' },
]

const trust = [
  { icon: 'activity', title: 'Real-time Data', sub: 'Live & Fast' },
  { icon: 'shield-check', title: 'Secure & Reliable', sub: 'Bank-grade Security' },
  { icon: 'trending-up', title: '99.9% Uptime', sub: 'Always On' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-4 pb-14 md:pt-6 md:pb-16 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
    >
      <div className="lg:col-span-6 space-y-6 text-left z-10">
        <div className="inline-flex items-center space-x-2 bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-full px-3.5 py-1.5 text-sm text-[#D43B0C] dark:text-orange-400 font-bold">
          <span className="w-1.5 h-1.5 bg-[#D43B0C] rounded-full animate-ping"></span>
          <span>Real-time constituent monitoring for traders</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary leading-[1.1] tracking-tight">
          Monitor the Entire <br className="hidden md:inline" />
          Nifty Sector <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D43B0C] to-[#D9A441]">
            from One Dashboard
          </span>
        </h2>

        <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium max-w-2xl">
          Bhnifty gives traders a powerful edge by bringing all BankNifty constituents, live prices,
          interactive charts, market movers, heat maps, and technical indicators together in one
          professional dashboard.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {statCards.map((c) => (
            <div
              key={c.title}
              className="bg-bg-card border border-border-default/60 rounded-xl p-3.5 space-y-1.5 transition-colors duration-300"
            >
              <div className="bg-orange-50 dark:bg-orange-500/10 text-[#D43B0C] dark:text-orange-400 p-1.5 rounded-lg inline-block">
                <Icon name={c.icon} className="w-4 h-4" />
              </div>
              <p className="text-sm font-extrabold text-text-primary leading-tight">{c.title}</p>
              <p className="text-xs text-text-muted font-semibold">{c.sub}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            className="bg-[#D43B0C] hover:bg-[#D43B0C]/90 text-white font-bold py-3.5 px-7 rounded-xl shadow-lg shadow-[#D43B0C]/20 flex items-center justify-center space-x-2 hover-scale text-base"
            to="/login"
          >
            <span>Sign In to Dashboard</span>
            <Icon name="arrow-up-right" className="w-4 h-4" />
          </Link>
          <Link
            className="bg-bg-card border border-border-default hover:bg-bg-secondary text-text-primary font-bold py-3.5 px-7 rounded-xl shadow-sm flex items-center justify-center space-x-2 hover-scale text-base transition-colors duration-300"
            to="/login"
          >
            <span>Explore Platform</span>
          </Link>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-border-default/40">
          {trust.map((t) => (
            <div key={t.title} className="flex items-center space-x-2">
              <div className="text-[#D43B0C]">
                <Icon name={t.icon} className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-text-primary">{t.title}</p>
                <p className="text-xs text-text-muted font-semibold">{t.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-6 z-10 flex items-center justify-center lg:justify-end relative">
        <img
          alt="Bhnifty Dashboard Preview"
          className="w-full lg:w-[115%] max-w-none h-auto object-contain drop-shadow-2xl lg:-mr-10"
          src="/hero-dashboard.svg"
        />
      </div>
    </section>
  )
}
