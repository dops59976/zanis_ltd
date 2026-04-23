export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Content */}
      <div className="max-w-2xl text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-black rounded-3xl flex items-center justify-center">
            <span className="text-white font-bold text-3xl">Z</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
          Welcome to Zanis LTD
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Enterprise infrastructure platform for teams that move fast and want to deploy with confidence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition text-lg">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition text-lg">
            Sign In
          </button>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold text-black">10K+</div>
              <div className="text-gray-600 text-sm mt-2">Teams Worldwide</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">99.9%</div>
              <div className="text-gray-600 text-sm mt-2">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">24/7</div>
              <div className="text-gray-600 text-sm mt-2">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
