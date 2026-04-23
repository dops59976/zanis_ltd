export default function Features() {
  const features = [
    {
      title: 'Lightning Fast',
      description: 'Deploy in seconds with optimized infrastructure. Sub-10ms latency globally.',
      icon: '⚡'
    },
    {
      title: 'Secure by Default',
      description: 'SOC 2 certified, AES-256 encryption, and compliance built-in.',
      icon: '🔒'
    },
    {
      title: 'Auto-Scaling',
      description: 'Handle any traffic spike. Scales automatically with your demand.',
      icon: '📈'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from infrastructure experts.',
      icon: '🤝'
    },
    {
      title: 'Global CDN',
      description: 'Serve content from 200+ locations worldwide.',
      icon: '🌍'
    },
    {
      title: 'Developer API',
      description: 'Powerful APIs for complete infrastructure automation.',
      icon: '⚙️'
    }
  ];

  return (
    <section id="features" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">Everything you need</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete infrastructure platform with enterprise features and developer simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md hover-lift group">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition">{feature.icon}</div>
              <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
