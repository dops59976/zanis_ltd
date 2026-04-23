export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Deploy in seconds, scale instantly. Sub-10ms latency across all regions.'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'SOC 2 certified. AES-256 encryption. Your data, your control.'
    },
    {
      icon: '🌍',
      title: 'Global Scale',
      description: 'Deploy anywhere. 99.9% uptime SLA. Always available.'
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
