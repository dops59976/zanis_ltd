export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 projects',
        'Basic monitoring',
        'Community support',
        'API access',
        '99.5% uptime SLA'
      ],
      highlight: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'For growing teams',
      features: [
        'Unlimited projects',
        'Advanced monitoring',
        'Priority email support',
        'Advanced API access',
        '99.9% uptime SLA',
        'Custom domains',
        'Team collaboration'
      ],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        '24/7 phone support',
        'Dedicated account manager',
        'Custom integrations',
        '99.99% uptime SLA',
        'On-premise deployment',
        'Advanced security'
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-primary border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold mb-4">
            💰 SIMPLE PRICING
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Plans for Every Budget
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl transition-all duration-300 ${
                plan.highlight
                  ? 'border-2 border-accent bg-gradient-to-br from-accent/10 to-purple-500/10 transform md:scale-105'
                  : 'border border-accent/20 bg-primary/50 hover:border-accent/50'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-accent to-purple-500 text-primary px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-accent">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-bold mb-8 transition ${
                    plan.highlight
                      ? 'bg-accent text-primary hover:bg-accent/90'
                      : 'border-2 border-accent text-accent hover:bg-accent/10'
                  }`}
                >
                  Get Started
                </button>

                <ul className="space-y-4">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center text-gray-300">
                      <span className="text-accent mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
