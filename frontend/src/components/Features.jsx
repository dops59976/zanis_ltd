export default function Features() {
  const features = [
    {
      icon: '🔐',
      title: 'Bank-Grade Security',
      description: 'AES-256 encryption, SOC 2 Type II certified, HIPAA & GDPR compliant. Your data is fortress-protected.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '⚡',
      title: 'Sub-10ms Response',
      description: 'Globally distributed infrastructure ensures lightning-fast performance. 99.9% uptime SLA guaranteed.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: '📊',
      title: 'Real-time Monitoring',
      description: 'Comprehensive dashboards with custom metrics, alerts, and historical analysis. Full observability.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🔌',
      title: '500+ Integrations',
      description: 'Seamlessly integrate with Kubernetes, Docker, Terraform, GitHub, GitLab, and your favorite tools.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Role-based access control, audit logs, activity tracking, and real-time notifications for your team.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: '📈',
      title: 'Auto-scaling',
      description: 'Intelligent scaling based on demand. Horizontal & vertical scaling with zero downtime.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="features" className="py-24 bg-primary relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <span className="text-accent text-sm font-semibold">✨ CAPABILITIES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Everything You Need to Scale
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Purpose-built for teams that demand production-grade infrastructure. No compromises.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-xl border border-accent/20 bg-primary/50 hover:bg-primary/70 transition-all duration-300 overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-purple-500/0 group-hover:from-accent/10 group-hover:to-purple-500/10 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Accent line */}
                  <div className="mt-6 h-1 w-0 bg-accent group-hover:w-12 transition-all duration-300"></div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 border border-accent/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg mb-6">
            Ready to experience the difference?
          </p>
          <button className="px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:shadow-2xl hover:shadow-accent/50 transition-all group">
            Explore All Features
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
