import HeroIllustration from '../assets/hero-illustration.svg'

export default function Hero() {
  return (
    <section className="min-h-screen bg-primary pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-20 left-0 w-96 h-96 opacity-10 rounded-full filter blur-3xl" style={{background: 'linear-gradient(135deg, #1d4ed8, #9333ea)'}}></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 opacity-10 rounded-full filter blur-3xl" style={{background: 'linear-gradient(135deg, #9333ea, #1d4ed8)'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold">
                ✨ Next Generation Infrastructure
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Enterprise-Grade
              <span className="text-gradient"> Solutions</span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-xl">
              Build, secure, and manage your infrastructure with confidence. Modern tools for modern teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 bg-accent text-primary font-bold text-lg rounded-lg hover:bg-accent/90 transition transform hover:scale-105 active:scale-95">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-accent text-accent font-bold text-lg rounded-lg hover:bg-accent/10 transition">
                Watch Demo
              </button>
            </div>

            <p className="text-gray-500 text-sm">
              No credit card required • Free for 14 days • Enterprise support included
            </p>
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:block">
            <img 
              src={HeroIllustration} 
              alt="Infrastructure Dashboard"
              className="w-full h-auto drop-shadow-2xl"
              style={{filter: 'drop-shadow(0 0 40px rgba(0, 212, 255, 0.2))'}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
