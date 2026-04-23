export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-32 pb-20 overflow-hidden relative">
      <div className="absolute top-20 -left-40 w-80 h-80 bg-gray-200/20 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-gray-300/20 rounded-full filter blur-3xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 rounded-3xl flex items-center justify-center shadow-lg transform hover:scale-110 transition">
              <span className="text-white font-bold text-3xl">Z</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-black mb-6 tracking-tight leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-800">Zanis LTD</span>
          </h1>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
            Enterprise infrastructure platform for teams that move fast and want to deploy with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-900 transition-all text-lg transform hover:scale-105 active:scale-95 hover:shadow-xl shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition-all text-lg transform hover:scale-105 active:scale-95">
              Sign In
            </button>
          </div>
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="group">
                <div className="text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition">10K+</div>
                <div className="text-gray-600 text-sm font-medium">Teams Worldwide</div>
              </div>
              <div className="group">
                <div className="text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition">99.9%</div>
                <div className="text-gray-600 text-sm font-medium">Uptime SLA</div>
              </div>
              <div className="group">
                <div className="text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition">24/7</div>
                <div className="text-gray-600 text-sm font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
