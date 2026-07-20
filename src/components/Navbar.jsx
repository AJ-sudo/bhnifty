import Icon from './Icon'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Why Bhnifty', href: '#why-bhnifty' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar({ isDark, onToggleTheme }) {
  return (
    <nav className="sticky top-0 bg-bg-navbar/95 backdrop-blur-md border-b border-border-default/40 h-20 flex items-center justify-between px-6 md:px-12 z-50 transition-colors duration-300">
      <a className="flex items-center space-x-3" href="/">
        <img
          className="h-10 w-auto object-contain animate-[fadeIn_0.2s_ease-out]"
          alt="Bhnifty Logo"
          src="/logo.svg"
        />
        <span className="text-xl font-black tracking-tight text-text-primary select-none animate-[fadeIn_0.2s_ease-out]">
          BHNifty
        </span>
      </a>

      <div className="hidden lg:flex items-center space-x-8 text-sm font-bold text-text-secondary">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="hover:text-[#D43B0C] transition-colors">
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={onToggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="p-2 rounded-xl text-text-muted hover:text-text-primary hover:bg-bg-secondary/80 focus:outline-none transition-all cursor-pointer mr-1.5"
        >
          {isDark ? (
            <Icon name="sun" className="w-5 h-5 text-amber-400 transition-transform duration-300 hover:rotate-12" />
          ) : (
            <Icon name="moon" className="w-5 h-5 text-slate-600 transition-transform duration-300 hover:-rotate-12" />
          )}
        </button>
        <a
          className="bg-[#D43B0C] hover:bg-[#D43B0C]/90 text-white font-bold py-2.5 px-5 rounded-xl shadow-lg shadow-[#D43B0C]/20 hover-scale text-sm"
          href="/login"
        >
          Sign In
        </a>
      </div>
    </nav>
  )
}
