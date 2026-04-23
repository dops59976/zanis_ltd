export default function Hero() {
  return (
    <section className="min-h-screen bg-white pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-black text-black mb-6 tracking-tight leading-tight">
            Build and deploy the best <span className="accent">infrastructure</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Enterprise-grade infrastructure platform designed for teams that move fast. Deploy, scale, and manage with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition text-lg">
              Get Started Free
            </button>
            <button className="px-8 py-4 border-2 border-black text-black font-bold rounded-lg hover:bg-gray-50 transition text-lg">
              Watch Demo
            </button>
          </div>

          {/* Feature Grid - Quick Stats */}
          <div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-12">
            <div>
              <div className="text-3xl font-black text-black mb-2">10K+</div>
              <p className="text-gray-600 text-sm">Teams deployed</p>
            </div>
            <div>
              <div className="text-3xl font-black text-black mb-2">99.9%</div>
              <p className="text-gray-600 text-sm">Uptime SLA</p>
            </div>
            <div>
              <div className="text-3xl font-black text-black mb-2">&lt;10ms</div>
              <p className="text-gray-600 text-sm">Response time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
