import Icon from './Icon'

const cards = [
  {
    icon: 'monitor',
    title: 'One Dashboard',
    desc: 'No more switching between tabs. Analyze all 14 major constituent stocks in one clean responsive dashboard.',
  },
  {
    icon: 'chart-line',
    title: 'Professional Analytics',
    desc: 'Enjoy clean layouts, transaction stats, dynamic category balances, and real-time ledger records.',
  },
  {
    icon: 'database',
    title: 'Real-Time Data',
    desc: 'Ensure you make calculations based on direct, local and real-time database state synchronization.',
  },
  {
    icon: 'activity',
    title: 'Fast Decision Making',
    desc: 'Spot breakouts, rotative shifts, and outlier flows immediately via color-coded alerts and graphs.',
  },
]

export default function WhyChoose() {
  return (
    <section
      id="why-bhnifty"
      className="py-10 px-6 md:px-12 max-w-7xl mx-auto border-t border-border-default/40 transition-colors duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-sm text-[#D43B0C] dark:text-orange-400 font-extrabold uppercase tracking-widest bg-orange-50 dark:bg-orange-500/10 px-3.5 py-1.5 border border-orange-100 dark:border-orange-500/20 rounded-full">
            Advantage
          </span>
          <h3 className="text-4xl md:text-5xl font-extrabold text-text-primary leading-tight">
            Why Choose Bhnifty?
          </h3>
          <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed">
            Standard trading setups require keeping multiple tabs open, dragging down processing rates
            and delaying timing execution. Bhnifty resolves sector clutter completely.
          </p>
          <div className="border-l-4 border-[#D43B0C] pl-4 py-1 text-sm font-medium text-text-primary italic leading-relaxed">
            "Unified tracking allows sector traders to identify rotation breakouts minutes before they
            appear on standalone tickers."
          </div>
          <img
            alt="Trader using Bhnifty dashboard"
            className="w-full h-40 md:h-48 object-cover rounded-2xl shadow-lg transition-all duration-300"
            src="/why-bhnifty.svg"
          />
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-bg-card p-4.5 rounded-2xl border border-border-default/40 shadow-sm space-y-2.5 hover-scale transition-colors duration-300"
            >
              <div className="text-[#D43B0C] dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 p-2 rounded-xl inline-block border border-orange-100 dark:border-orange-500/10">
                <Icon name={c.icon} className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-text-primary">{c.title}</h4>
              <p className="text-xs text-text-secondary leading-relaxed font-medium">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
