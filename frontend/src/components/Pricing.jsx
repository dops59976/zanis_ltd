export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for getting started',
      cta: 'Start Free Trial',
      highlight: false,
      features: [
        'Up to 5 projects',
        'Basic monitoring',
        'Community support',
        'REST API access',
        '99.5% uptime SLA',
        'Monthly reports'
      ]
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'For growing teams',
      cta: 'Start Free Trial',
      highlight: true,
      features: [
        'Unlimited projects',
        'Advanced monitoring',
        'Priority support (24h)',
        'Advanced API access',
        '99.9% uptime SLA',
        'Custom domains',
        'Team collaboration (5)',
        'Audit logs',
        'Webhooks & integrations'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      cta: 'Contact Sales',
      highlight: false,
      features: [
        'Everything in Pro',
        '24/7 phone support',
        'Dedicated account manager',
        'Custom integrations',
        '99.99% uptime SLA',
        'On-premise deployment',
        'Advanced security',
        'Unlimited team members',
        'SSO & SAML'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-primary relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <span className="text-accent text-sm font-semibold">💰 TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Plans for Every Scale
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No hidden fees. No surprises. All plans include 14-day free trial and email support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl transition-all duration-300 overflow-hidden group ${
                plan.highlight
                  ? 'border-2 border-accent bg-gradient-to-br from-accent/10 to-purple-500/10 md:scale-105 md:-mt-4'
                  : 'border border-accent/20 bg-primary/50 hover:border-accent/50'
              }`}
            >
              {/* Card Header */}
              {plan.highlight && (
                <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-purple-500"></div>
              )}

              {plan.highlight && (
                <div className="relative bg-gradient-to-r from-accent to-purple-500 text-primary px-6 py-2 text-center font-bold text-sm">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-black text-accent">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 text-lg">{plan.period}</span>}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-bold mb-8 transition-all ${
                    plan.highlight
                      ? 'bg-accent text-primary hover:shadow-2xl hover:shadow-accent/50 hover:scale-105'
                      : 'border-2 border-accent text-accent hover:bg-accent/10'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start text-gray-300">
                      <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Border glow */}
              {plan.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              {
                q: 'Can I change plans anytime?',
                a: 'Yes, upgrade or downgrade anytime. Changes take effect on your next billing cycle.'
              },
              {
                q: 'Do you offer discounts for annual plans?',
                a: 'Yes, annual plans come with 20% discount. Contact sales for details.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, wire transfer, and ACH for enterprise plans.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-accent/20 bg-primary/50 hover:bg-primary/70 transition">
                <h4 className="text-white font-bold mb-2">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
