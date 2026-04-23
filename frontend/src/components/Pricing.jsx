export default function Pricing() {
  const plans = [
    { name: 'Starter', price: '$29', period: '/month', features: ['Up to 5 projects', 'Basic support', 'API access', '99.5% SLA'] },
    { name: 'Pro', price: '$99', period: '/month', features: ['Unlimited projects', '24/7 support', 'Advanced API', '99.9% SLA', 'Custom domains'], highlight: true },
    { name: 'Enterprise', price: 'Custom', period: '', features: ['Everything in Pro', 'Dedicated support', 'On-premise', '99.99% SLA', 'SSO'] }
  ];
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-100/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg">14-day free trial. No credit card required.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-lg relative overflow-hidden ${plan.highlight ? 'bg-black text-white border-2 border-black md:scale-105 md:-mt-4 shadow-2xl' : 'bg-white border-2 border-gray-200 hover:border-gray-400'}`}>
              {plan.highlight && <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50 -z-10"></div>}
              {plan.highlight && <div className="mb-6 inline-block px-4 py-1 bg-white text-black font-bold text-sm rounded-full">Most Popular</div>}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-black'}`}>{plan.name}</h3>
              <div className="mb-8">
                <span className={`text-5xl font-black ${plan.highlight ? 'text-white' : 'text-black'}`}>{plan.price}</span>
                {plan.period && <span className={plan.highlight ? 'text-gray-300' : 'text-gray-600'}>{plan.period}</span>}
              </div>
              <button className={`w-full py-3 px-4 rounded-xl font-bold mb-8 transition-all transform hover:scale-105 active:scale-95 ${plan.highlight ? 'bg-white text-black hover:shadow-lg' : 'border-2 border-black text-black hover:bg-black hover:text-white'}`}>Get Started</button>
              <ul className={`space-y-4 ${plan.highlight ? 'text-gray-100' : 'text-gray-700'}`}>
                {plan.features.map((feature, fidx) => <li key={fidx} className="flex items-center gap-3 group"><svg className={`w-5 h-5 flex-shrink-0 transform group-hover:scale-125 transition ${plan.highlight ? 'text-white' : 'text-black'}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg><span className="text-sm font-medium group-hover:translate-x-1 transition">{feature}</span></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
