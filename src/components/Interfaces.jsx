import Icon from './Icon'

const rates = [
  { sym: 'HDFCBANK', name: 'HDFC Bank', price: '1,642.50', change: '+1.45%', up: true },
  { sym: 'ICICIBANK', name: 'ICICI Bank', price: '1,120.30', change: '-0.35%', up: false },
  { sym: 'SBIN', name: 'SBI Bank', price: '842.15', change: '+2.10%', up: true },
  { sym: 'AXISBANK', name: 'Axis Bank', price: '1,075.80', change: '+0.80%', up: true },
]

const heat = [
  { sym: 'HDFCBANK', v: '+1.45%', cls: 'bg-emerald-500 text-white shadow-md shadow-emerald-500/10' },
  { sym: 'SBIN', v: '+2.10%', cls: 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10' },
  { sym: 'KOTAKBANK', v: '-1.15%', cls: 'bg-red-500 text-white shadow-md shadow-red-500/10' },
  {
    sym: 'PNB',
    v: '0.00%',
    cls: 'bg-bg-secondary/40 border border-border-default text-text-primary transition-colors duration-300',
  },
  { sym: 'AXISBANK', v: '+0.80%', cls: 'bg-emerald-400 text-white' },
  { sym: 'ICICIBANK', v: '-0.35%', cls: 'bg-red-400 text-white' },
]

export default function Interfaces() {
  return (
    <section className="py-10 px-6 md:px-12 max-w-7xl mx-auto text-center transition-colors duration-300">
      <div className="max-w-3xl mx-auto space-y-4 mb-8">
        <span className="text-sm text-[#D43B0C] dark:text-orange-400 font-extrabold uppercase tracking-widest bg-orange-50 dark:bg-orange-500/10 px-3.5 py-1.5 border border-orange-100 dark:border-orange-500/20 rounded-full">
          Interfaces
        </span>
        <h3 className="text-4xl md:text-5xl font-extrabold text-text-primary leading-tight">
          Professional Interface Preview
        </h3>
        <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed">
          Take a look at the actual dashboards and modules built directly into the Bhnifty core
          framework.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Live Constituent Rates Ledger */}
        <div className="bg-bg-card rounded-2xl border border-border-default/40 shadow-md p-5 text-left space-y-4 transition-colors duration-300">
          <div>
            <span className="text-sm text-[#D43B0C] font-bold uppercase tracking-wider block">
              Live Constituent Rates Ledger
            </span>
            <p className="text-sm text-text-muted font-medium mt-1">Live changes across 14 sector Niftys</p>
          </div>
          <div className="border border-border-default/40 rounded-xl overflow-hidden divide-y divide-border-default/30 text-sm">
            <div className="bg-bg-secondary px-4 py-3 font-bold flex justify-between text-text-muted text-sm uppercase transition-colors duration-300">
              <span>Nifty Ticker</span>
              <span className="text-right">Price / Change</span>
            </div>
            {rates.map((r) => (
              <div key={r.sym} className="px-4 py-3 flex justify-between items-center">
                <div>
                  <span className="font-bold block text-text-primary">{r.sym}</span>
                  <span className="text-xs text-text-muted">{r.name}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold block text-text-primary">{r.price}</span>
                  <span
                    className={`text-sm font-bold flex items-center justify-end ${
                      r.up ? 'text-emerald-600' : 'text-red-500'
                    }`}
                  >
                    <Icon
                      name={r.up ? 'arrow-up-right' : 'arrow-down-right'}
                      className="w-3 h-3 mr-0.5"
                    />
                    {r.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Relative Sector Heatmap */}
        <div className="bg-bg-card rounded-2xl border border-border-default/40 shadow-md p-5 text-left flex flex-col justify-between transition-colors duration-300">
          <div>
            <span className="text-sm text-[#D43B0C] font-bold uppercase tracking-wider block">
              Relative Sector Heatmap
            </span>
            <p className="text-sm text-text-muted font-medium mt-1">
              Visualize capital density distributions instantly
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 my-6">
            {heat.map((t) => (
              <div key={t.sym} className={`p-4 rounded-xl text-center space-y-1 ${t.cls}`}>
                <span className="text-sm font-bold block">{t.sym}</span>
                <span className="text-base font-extrabold block">{t.v}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border-default/30 pt-4 flex justify-between items-center text-sm text-text-muted font-bold transition-colors duration-300">
            <span>Updated: Real-time ticks</span>
            <span className="text-[#D43B0C] font-extrabold">14 stocks active</span>
          </div>
        </div>
      </div>
    </section>
  )
}
