export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Browser Automation for E-Commerce
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Optimize checkout flows{' '}
          <span className="text-[#58a6ff]">automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Drop a JS snippet into your store. We record checkout behavior, detect where shoppers abandon, and surface UX fixes that lift conversions — no analyst needed.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start for $49 / mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. 7-day free trial.</p>

        {/* Feature pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3 text-sm">
          {['Funnel Analytics','Abandonment Heatmaps','AI UX Suggestions','Real-time Events','One-line Install','GDPR Ready'].map(f => (
            <span key={f} className="px-4 py-2 rounded-full bg-[#161b22] border border-[#30363d] text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$49</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited checkout sessions tracked',
              'Funnel drop-off analysis',
              'Heatmaps for every checkout step',
              'Weekly AI improvement report',
              'Slack & email alerts',
              'Up to 3 stores'
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How do I install the tracker?</h3>
            <p className="text-[#8b949e] text-sm">After subscribing you get a one-line JavaScript snippet. Paste it into your store's <code className="text-[#58a6ff]">&lt;head&gt;</code> and data starts flowing within seconds — no backend changes required.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What platforms are supported?</h3>
            <p className="text-[#8b949e] text-sm">Any e-commerce platform that lets you add custom JavaScript: Shopify, WooCommerce, BigCommerce, Magento, custom builds, and more.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Is customer data stored securely?</h3>
            <p className="text-[#8b949e] text-sm">We capture interaction events only — no PII, no payment data. All data is encrypted in transit and at rest, and you can delete your data at any time from the dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} CheckoutOptimizer. All rights reserved.
      </footer>
    </main>
  )
}
