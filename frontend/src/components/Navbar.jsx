import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-primary/95 backdrop-blur-md border-b border-accent/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-lg">Zanis Ltd</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-accent transition">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-accent transition">Pricing</a>
            <a href="#about" className="text-gray-300 hover:text-accent transition">About</a>
            <a href="#contact" className="text-gray-300 hover:text-accent transition">Contact</a>
            <button className="px-6 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block text-gray-300 hover:text-accent py-2">Features</a>
            <a href="#pricing" className="block text-gray-300 hover:text-accent py-2">Pricing</a>
            <a href="#about" className="block text-gray-300 hover:text-accent py-2">About</a>
            <a href="#contact" className="block text-gray-300 hover:text-accent py-2">Contact</a>
            <button className="w-full px-6 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
