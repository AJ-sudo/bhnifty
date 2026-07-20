const cards = [
  {
    title: 'What We Offer',
    desc: 'Bhnifty brings together everything a trader needs to track the Nifty ecosystem — live prices, interactive candlestick charts, and sector heat maps — all from a single, clutter-free dashboard. Track 14+ major constituent stocks in real time, apply professional indicators like RSI, MACD, EMA, and Bollinger Bands, and instantly spot which stocks are leading or lagging with our color-coded Market Movers and Heat Map views.',
  },
  {
    title: 'Our Technology',
    desc: 'Built on a modern, high-performance stack, Bhnifty delivers real-time data with minimal lag. Live prices and historical candles are powered by trusted market data providers, while our interface stays fast and responsive across desktop, tablet, and mobile — so you never miss a move.',
  },
  {
    title: "Where We're Headed",
    desc: "We're just getting started. Upcoming features include smart price and trendline alerts delivered straight to your phone, AI-assisted market summaries, pattern recognition, and expanded support for multiple indices — giving traders an even sharper edge.",
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-10 px-6 md:px-12 bg-bg-card border-t border-border-default/40 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <span className="text-sm text-[#D43B0C] dark:text-orange-400 font-extrabold uppercase tracking-widest bg-orange-50 dark:bg-orange-500/10 px-3.5 py-1.5 border border-orange-100 dark:border-orange-500/20 rounded-full">
          About Us
        </span>
        <h3 className="text-4xl md:text-5xl font-extrabold text-text-primary leading-tight">Our Vision</h3>
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto font-medium">
          Bhnifty was built by traders, for traders. We realized that sector rotations in Nifty indices
          are the primary drivers of index moves, yet visual analytics for these constituents were
          spread across different services. Bhnifty binds this statistical data into a single, cohesive,
          high-performance console.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-bg-secondary p-5 rounded-2xl border border-border-default/40 space-y-1.5 transition-colors duration-300"
            >
              <h4 className="text-lg font-bold text-text-primary">{c.title}</h4>
              <p className="text-xs text-text-secondary leading-relaxed font-medium">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
