import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-primary/95 backdrop-blur-xl border-b border-accent/20'
        : 'bg-gradient-to-b from-primary via-primary/80 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-purple-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-white font-black text-lg">Z</span>
            </div>
            <div>
              <div className="text-white font-black text-lg">Zanis Ltd</div>
              <div className="text-accent text-xs font-bold">Infrastructure</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-accent transition font-medium">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-accent transition font-medium">Pricing</a>
            <a href="#customers" className="text-gray-300 hover:text-accent transition font-medium">Customers</a>
            <a href="#docs" className="text-gray-300 hover:text-accent transition font-medium">Docs</a>
            <a href="#contact" className="text-gray-300 hover:text-accent transition font-medium">Contact</a>
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-accent hover:text-accent/80 font-semibold transition">
              Sign In
            </button>
            <button className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-accent hover:text-accent/80 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
              } />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-accent/10 pt-4">
            <a href="#features" className="block px-4 py-2 text-gray-300 hover:text-accent rounded-lg hover:bg-accent/10 transition">Features</a>
            <a href="#pricing" className="block px-4 py-2 text-gray-300 hover:text-accent rounded-lg hover:bg-accent/10 transition">Pricing</a>
            <a href="#customers" className="block px-4 py-2 text-gray-300 hover:text-accent rounded-lg hover:bg-accent/10 transition">Customers</a>
            <a href="#docs" className="block px-4 py-2 text-gray-300 hover:text-accent rounded-lg hover:bg-accent/10 transition">Docs</a>
            <a href="#contact" className="block px-4 py-2 text-gray-300 hover:text-accent rounded-lg hover:bg-accent/10 transition">Contact</a>
            <button className="w-full px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:shadow-lg transition mt-2">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
