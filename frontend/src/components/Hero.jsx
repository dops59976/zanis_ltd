export default function Hero() {
  return (
    <section className="relative min-h-screen bg-primary pt-32 pb-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
              <span className="text-accent text-sm font-semibold flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                Next-gen Infrastructure Platform
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              Deploy with
              <span className="text-gradient"> Confidence</span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
              Enterprise-grade infrastructure platform that scales with your team. Trusted by Fortune 500 companies for critical deployments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group relative px-8 py-4 bg-accent text-primary font-bold text-lg rounded-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-accent/50">
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                <span className="relative flex items-center justify-center">
                  Start Free Trial
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-accent text-accent font-bold text-lg rounded-lg hover:bg-accent/10 transition">
                View Docs
              </button>
            </div>

            {/* Social proof */}
            <div className="space-y-4 border-t border-accent/10 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-purple-500 border-2 border-primary"
                    ></div>
                  ))}
                </div>
                <span className="text-gray-400">Join 10,000+ teams worldwide</span>
              </div>
              <div className="flex gap-4 text-sm text-gray-500">
                <span>✓ No credit card</span>
                <span>✓ 14-day free trial</span>
                <span>✓ 99.9% SLA</span>
              </div>
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="relative hidden lg:block">
            <div className="bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-2xl border border-accent/20 p-8 backdrop-blur-sm">
              {/* Mock Dashboard */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="h-2 w-32 bg-accent/30 rounded-full"></div>
                    <div className="h-2 w-24 bg-accent/20 rounded-full"></div>
                  </div>
                  <div className="flex gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-accent/30 rounded-full"></div>
                    ))}
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Deployments', value: '1,234' },
                    { label: 'Uptime', value: '99.9%' },
                    { label: 'Response', value: '8.4ms' },
                    { label: 'Users', value: '12.5K' }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-primary/50 rounded-lg p-4 border border-accent/10">
                      <div className="h-2 w-16 bg-accent/30 rounded-full mb-3"></div>
                      <div className="h-3 w-20 bg-accent/50 rounded-full"></div>
                    </div>
                  ))}
                </div>

                {/* Chart mockup */}
                <div className="h-32 bg-primary/50 rounded-lg border border-accent/10 p-4 flex items-end justify-around">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-accent to-accent/30 rounded-t mx-1"
                      style={{height: `${Math.random() * 100}%`, minHeight: '20%'}}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 pointer-events-none"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full filter blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full filter blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
