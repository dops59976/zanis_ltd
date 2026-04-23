export default function Features() {
  const features = [
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with all major standards. AES-256, SSL/TLS, SOC 2 Type II certified.'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance for mission-critical workloads. Sub-10ms response times, 99.9% uptime SLA.'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Comprehensive insights with detailed reporting. Custom dashboards, metrics, and performance tracking.'
    },
    {
      icon: '🔄',
      title: 'Seamless Integration',
      description: 'Connect with your existing tools and workflows. REST API, webhooks, and 50+ integrations.'
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Built-in tools for effective team management. Role-based access, audit logs, and real-time updates.'
    },
    {
      icon: '🚀',
      title: 'Auto-scaling',
      description: 'Automatically handles traffic spikes and growth. Horizontal & vertical scaling, load balancing.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-primary border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold mb-4">
            💡 KEY FEATURES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features for Every Team
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build, deploy, and manage infrastructure at scale. Enterprise-grade features with developer-friendly simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-xl border border-accent/20 bg-primary/50 hover:border-accent/50 hover:bg-primary/70 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Border glow effect */}
              <div className="absolute inset-0 border border-accent/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Ready to get started? Try Zanis Ltd today.
          </p>
          <button className="px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition transform hover:scale-105">
            View All Features →
          </button>
        </div>
      </div>
    </section>
  );
}
