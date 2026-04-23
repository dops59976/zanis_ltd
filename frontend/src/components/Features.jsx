export default function Features() {
  const features = [
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with all major standards'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance for mission-critical workloads'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Comprehensive insights with detailed reporting'
    },
    {
      icon: '🔄',
      title: 'Seamless Integration',
      description: 'Connect with your existing tools and workflows'
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Built-in tools for effective team management'
    },
    {
      icon: '🚀',
      title: 'Auto-scaling',
      description: 'Automatically handles traffic spikes and growth'
    }
  ];

  return (
    <section id="features" className="py-20 bg-primary border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build, deploy, and manage infrastructure at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-accent/20 bg-primary/50 hover:border-accent/50 transition group cursor-pointer"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
