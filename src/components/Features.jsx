import Icon from './Icon'

const features = [
  {
    icon: 'activity',
    title: 'Live Market Overview',
    desc: 'Get an instantaneous pulse of overall sector volumes, average spreads, and net cashflow trends.',
  },
  {
    icon: 'monitor',
    title: '14 Nifty Live Monitoring',
    desc: 'Keep eyes on every major BankNifty constituent ticker simultaneously with real-time rate tables.',
  },
  {
    icon: 'chart-line',
    title: 'Interactive Charts',
    desc: 'Track historical lines, high-low candlesticks, and moving averages on high-fidelity visual cards.',
  },
  {
    icon: 'sparkles',
    title: 'Technical Indicators',
    desc: 'Analyze core technicals like RSI, MACD crossovers, and support/resistance lines on the fly.',
  },
  {
    icon: 'grid-3x3',
    title: 'Sector Heat Map',
    desc: 'Spot relative strength and weakness instantly through color-coded tiles based on intraday changes.',
  },
  {
    icon: 'flame',
    title: 'Market Movers',
    desc: 'Instantly isolate top gainers, losers, and outliers in volume spikes before they trigger breakouts.',
  },
  {
    icon: 'database',
    title: 'Fast Performance',
    desc: 'Ultra-lightweight React rendering and Mongoose index lookups deliver updates in milliseconds.',
  },
  {
    icon: 'shield-check',
    title: 'Responsive Dashboard',
    desc: 'Seamlessly shift from a dual-monitor desktop console to your tablet or mobile phone without losing tracking resolution.',
  },
  {
    icon: 'flame',
    title: 'Smart Alerts',
    desc: 'Set price, trendline, and breakout alerts, and get notified instantly via Telegram, WhatsApp, Email, or Push notifications.',
  },
  {
    icon: 'activity',
    title: 'Market Scanner',
    desc: 'Automatically scan every constituent stock for pricing anomalies, indicator crossovers, and circuit-level breaches in real time.',
  },
  {
    icon: 'chart-line',
    title: 'Advanced Charting Tools',
    desc: 'Draw trendlines, Fibonacci retracements, and channels directly on professional multi-timeframe charts for deeper technical analysis.',
  },
  {
    icon: 'grid-3x3',
    title: 'Option Chain Analysis',
    desc: 'View live option chain data with open interest, PCR, and strike-wise analytics to gauge market sentiment and positioning.',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="py-12 px-6 md:px-12 max-w-7xl mx-auto text-center border-t border-border-default/40 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto space-y-4 mb-8">
        <span className="text-sm text-[#D43B0C] dark:text-orange-400 font-extrabold uppercase tracking-widest bg-orange-50 dark:bg-orange-500/10 px-3.5 py-1.5 border border-orange-100 dark:border-orange-500/20 rounded-full">
          Features
        </span>
        <h3 className="text-4xl md:text-5xl font-extrabold text-text-primary leading-tight">
          Engineered for Modern Nifty Trading
        </h3>
        <p className="text-lg md:text-xl text-text-secondary font-semibold leading-relaxed">
          Gain an edge over other traders by monitoring the entire Nifty ecosystem with these custom
          indicators and widgets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-bg-card p-5 rounded-[16px] border border-border-default/40 shadow-sm text-left hover-scale flex flex-col transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="bg-orange-50 dark:bg-orange-500/10 text-[#D43B0C] dark:text-orange-400 p-2 rounded-xl inline-block border border-orange-100 dark:border-orange-500/10">
                <Icon name={f.icon} className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-text-primary leading-snug">{f.title}</h4>
              <p className="text-xs text-text-secondary leading-relaxed font-medium">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
