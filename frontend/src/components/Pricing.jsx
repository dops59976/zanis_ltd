export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: ['Up to 5 projects', 'Basic support', 'API access', '99.5% SLA']
    },
    {
      name: 'Pro',
      price: '$99',
      period: '/month',
      features: ['Unlimited projects', '24/7 support', 'Advanced API', '99.9% SLA', 'Custom domains'],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Everything in Pro', 'Dedicated support', 'On-premise', '99.99% SLA', 'SSO']
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg">14-day free trial. No credit card required.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 transition ${
                plan.highlight
                  ? 'bg-black text-white border-2 border-black'
                  : 'bg-gray-50 border-2 border-gray-200 hover:border-black'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-black'}`}>
                {plan.name}
              </h3>
              <div className="text-4xl font-bold mb-6">
                {plan.price}
                {plan.period && <span className={`text-lg ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>{plan.period}</span>}
              </div>

              <ul className={`space-y-4 mb-8 ${plan.highlight ? 'text-gray-200' : 'text-gray-600'}`}>
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-white text-black' : 'bg-black text-white'}`}>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 font-semibold rounded-full transition ${
                  plan.highlight
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'border-2 border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
