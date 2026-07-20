import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      e.target.reset()
    }, 2200)
  }

  return (
    <section
      id="contact"
      className="py-10 px-6 md:px-12 bg-bg-card border-t border-border-default/40 text-center transition-colors duration-300"
    >
      <div className="max-w-2xl mx-auto space-y-4">
        <span className="text-sm text-[#D43B0C] dark:text-orange-400 font-extrabold uppercase tracking-widest bg-orange-50 dark:bg-orange-500/10 px-3.5 py-1.5 border border-orange-100 dark:border-orange-500/20 rounded-full">
          Get In Touch
        </span>
        <h3 className="text-4xl md:text-5xl font-extrabold text-text-primary leading-tight">
          Have Questions or Feedback?
        </h3>
        <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed">
          Our engineering team is always improving Bhnifty. Drop us a line if you have feature requests
          or integration feedback.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-bg-secondary p-5 md:p-6 rounded-2xl border border-border-default/40 text-left space-y-4 transition-colors duration-300"
        >
          <div>
            <label className="text-xs font-bold text-text-secondary block mb-1.5">Name</label>
            <input
              required
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full bg-bg-card border border-border-default rounded-xl px-4 py-2 text-sm text-text-primary focus:outline-none focus:border-[#D43B0C] transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-text-secondary block mb-1.5">Email</label>
            <input
              required
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full bg-bg-card border border-border-default rounded-xl px-4 py-2 text-sm text-text-primary focus:outline-none focus:border-[#D43B0C] transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-text-secondary block mb-1.5">Message</label>
            <textarea
              required
              name="message"
              rows="3"
              placeholder="How can we help?"
              className="w-full bg-bg-card border border-border-default rounded-xl px-4 py-2 text-sm text-text-primary focus:outline-none focus:border-[#D43B0C] resize-none transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="w-full bg-[#D43B0C] hover:bg-[#D43B0C]/90 text-white font-bold py-3 rounded-xl shadow-lg shadow-[#D43B0C]/20 text-sm disabled:opacity-60"
          >
            {sent ? 'Message Sent ✓' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
