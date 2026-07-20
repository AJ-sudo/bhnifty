import { useState } from 'react'
import Icon from './Icon'

const faqs = [
  {
    q: 'What is Bhnifty exactly?',
    a: 'Bhnifty is a professional-grade fintech tracking dashboard designed specifically for active traders, analysts, and investors looking to monitor Nifty sector tickers (such as BankNifty constituents) from a unified, clutter-free console.',
  },
  {
    q: 'How does the Live Market Overview work?',
    a: 'The live market system queries real-time ticks for registered Nifty, calculating category indicators, high/low distributions, and overall cashflow indexes so you can spot capital flows instantly.',
  },
  {
    q: 'Can I set custom spending alerts and budgets?',
    a: 'Yes! While Bhnifty is optimized as a market constituent monitor, it also includes personal ledger entries and category-specific budget limits to track and limit your capital draws and operating costs.',
  },
  {
    q: 'Is there a fee to use Bhnifty?',
    a: 'Currently, the core analytical dashboard, transactions ledger, and budget configurations are free to use. Premium automated alerts and integrations are coming soon.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. Bhnifty uses JWT session signatures stored locally in your browser. All database storage is bound to your account and hashed using industry-standard bcrypt cryptographies.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <section
      id="faq"
      className="py-10 px-6 md:px-12 max-w-5xl mx-auto border-t border-border-default/40 transition-colors duration-300"
    >
      <div className="text-center space-y-4 mb-8">
        <span className="text-sm text-[#D43B0C] dark:text-orange-400 font-extrabold uppercase tracking-widest bg-orange-50 dark:bg-orange-500/10 px-3.5 py-1.5 border border-orange-100 dark:border-orange-500/20 rounded-full">
          FAQ
        </span>
        <h3 className="text-4xl md:text-5xl font-extrabold text-text-primary leading-tight">
          Frequently Asked Questions
        </h3>
        <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed">
          Common inquiries regarding our analytical utilities
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div
              key={f.q}
              className="bg-bg-card border border-border-default/40 rounded-xl overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left py-3 px-5 font-bold text-base md:text-lg text-text-primary flex justify-between items-center hover:bg-bg-secondary/40 transition-colors cursor-pointer"
              >
                <span>{f.q}</span>
                <Icon
                  name={isOpen ? 'chevron-up' : 'chevron-down'}
                  className={`w-5 h-5 ${isOpen ? 'text-[#D43B0C]' : 'text-text-muted'}`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-4 pt-2 text-[15px] md:text-base text-text-secondary leading-7 font-medium border-t border-border-default/20 bg-bg-secondary/10 transition-colors">
                  {f.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
