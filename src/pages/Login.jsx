import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Auth wiring comes with the dashboard stage.
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-bg-primary font-sans transition-colors duration-300">
      {/* Branding panel */}
      <div className="hidden lg:flex lg:col-span-5 bg-bg-sidebar relative overflow-hidden flex-col justify-between p-12 text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D43B0C]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D9A441]/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <Link className="flex items-center space-x-3 z-10" to="/">
          <img className="h-10 w-auto object-contain" alt="Bhnifty Logo" src="/logo.svg" />
          <span className="text-xl font-black tracking-tight text-white select-none">BHNifty</span>
        </Link>

        <div className="z-10 my-auto space-y-6">
          <h2 className="text-4xl font-extrabold leading-tight text-white">
            Focus on your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D43B0C] to-[#D9A441]">
              Financial Future
            </span>
          </h2>
          <p className="text-[#F8F8F8]/70 text-sm leading-relaxed max-w-sm">
            Track transactions, set budgets, and gain absolute clarity over your personal cashflow with
            Bhnifty' analytical precision.
          </p>
          <div className="space-y-4 pt-6">
            <div className="flex items-center space-x-3">
              <div className="bg-[#F8F8F8]/10 p-2 rounded-lg">
                <Icon name="trending-up" className="w-5 h-5 text-[#D9A441]" />
              </div>
              <span className="text-sm font-medium text-[#F8F8F8]/90">Dynamic Spending Analytics</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-[#F8F8F8]/10 p-2 rounded-lg">
                <Icon name="shield-check" className="w-5 h-5 text-[#D43B0C]" />
              </div>
              <span className="text-sm font-medium text-[#F8F8F8]/90">Secure, Session-based API</span>
            </div>
          </div>
        </div>

        <div className="z-10 text-xs text-[#F8F8F8]/40 font-medium">
          © 2026 Bhnifty Inc. All rights reserved.
        </div>
      </div>

      {/* Sign In card */}
      <div className="lg:col-span-7 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md bg-bg-card rounded-[16px] shadow-soft border border-border-default p-8 md:p-10 relative transition-colors duration-300">
          <div className="flex lg:hidden items-center justify-center mb-8">
            <Link className="flex items-center space-x-3" to="/">
              <img className="h-10 w-auto object-contain" alt="Bhnifty Logo" src="/logo.svg" />
              <span className="text-xl font-black tracking-tight text-text-primary select-none">
                BHNifty
              </span>
            </Link>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary">Sign In</h2>
              <p className="text-xs md:text-sm text-text-muted font-semibold mt-1.5">
                Enter your credentials to access your financial dashboard
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-text-secondary tracking-wider uppercase mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted">
                    <Icon name="mail" className="w-5 h-5" />
                  </div>
                  <input
                    required
                    type="email"
                    placeholder="name@example.com"
                    className="block w-full pl-11 pr-4 py-3 bg-bg-secondary border border-border-default rounded-xl text-sm placeholder-text-disabled text-text-primary focus:outline-none focus:border-[#D43B0C] transition-colors"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-text-secondary tracking-wider uppercase">
                    Password
                  </label>
                  <a className="text-[11px] text-[#D43B0C] font-bold hover:underline" href="#">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted">
                    <Icon name="lock" className="w-5 h-5" />
                  </div>
                  <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="block w-full pl-11 pr-12 py-3 bg-bg-secondary border border-border-default rounded-xl text-sm placeholder-text-disabled text-text-primary focus:outline-none focus:border-[#D43B0C] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-muted hover:text-text-primary transition-colors"
                  >
                    <Icon name={showPassword ? 'eye-off' : 'eye'} className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D43B0C] hover:bg-[#D43B0C]/90 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-[#D43B0C]/20 flex items-center justify-center space-x-2 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none disabled:transform-none text-sm"
              >
                <span>Sign In to Account</span>
                <Icon name="arrow-right" className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
