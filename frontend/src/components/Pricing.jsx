export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'For small teams',
      features: ['Up to 5 projects', 'Basic monitoring', 'Community support', 'API access']
    },
    {
      name: 'Pro',
      price: '$99',
      period: '/month',
      description: 'For growing teams',
      features: ['Unlimited projects', '24/7 priority support', 'Advanced monitoring', 'Custom domains', 'Webhooks'],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: ['Everything in Pro', 'Dedicated support', 'SLA guarantee', 'Custom integrations', 'On-premise option']
    }
  ];

  return (
    <section id="pricing" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-600">14-day free trial. No credit card required.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-8 transition-all hover-lift ${
                plan.highlight
                  ? 'border-2 border-black bg-black text-white md:scale-105 md:-mt-4'
                  : 'border border-gray-200 bg-white'
              }`}
            >
              {plan.highlight && (
                <div className="mb-4 inline-block px-3 py-1 bg-white text-black text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-black'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-gray-200' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-8">
                <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-black'}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={plan.highlight ? 'text-gray-300' : 'text-gray-600'}>
                    {plan.period}
                  </span>
                )}
              </div>

              <button
                className={`w-full py-3 px-4 rounded-lg font-bold mb-8 transition ${
                  plan.highlight
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'border-2 border-black text-black hover:bg-gray-50'
                }`}
              >
                Get Started
              </button>

              <ul className={`space-y-3 text-sm ${plan.highlight ? 'text-gray-200' : 'text-gray-700'}`}>
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3">
                    <span className={plan.highlight ? 'text-white' : 'text-black'}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
