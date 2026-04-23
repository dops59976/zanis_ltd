import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signin');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Features', icon: '⚡', href: '#features' },
    { label: 'Pricing', icon: '💰', href: '#pricing' },
    { label: 'About', icon: 'ℹ️', href: '#about' },
    { label: 'Contact', icon: '📧', href: '#contact' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100'
          : 'bg-gradient-to-b from-white via-white/95 to-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition">
              <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-800 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition">
                <span className="text-white font-black text-lg">Z</span>
              </div>
              <span className="font-bold text-black text-lg hidden sm:inline">Zanis</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-100 transition-all flex items-center gap-2 group"
                >
                  <span className="text-lg group-hover:scale-125 transition-transform">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </div>

            {/* Right CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleAuthClick('signin')}
                className="hidden sm:block px-4 py-2 text-black hover:text-gray-600 font-semibold transition link-underline"
              >
                Sign In
              </button>
              <button
                onClick={() => handleAuthClick('signup')}
                className="px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-all hover:shadow-lg transform hover:scale-105 active:scale-95"
              >
                Sign Up
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-black hover:text-gray-600 transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                    mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  } />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu - Card Style */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-gray-200 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-black font-medium transition-all flex items-center gap-3 group"
                >
                  <span className="text-xl group-hover:scale-125 transition-transform">{item.icon}</span>
                  <span>{item.label}</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition">→</span>
                </a>
              ))}
              <button
                onClick={() => handleAuthClick('signin')}
                className="w-full px-4 py-3 rounded-xl border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all"
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          mode={authMode}
          setMode={setAuthMode}
          onClose={() => setShowAuthModal(false)}
        />
      )}
    </>
  );
}

function AuthModal({ mode, setMode, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleGoogleAuth = () => {
    window.location.href = '/api/auth/google';
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition transform hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-2">
            {mode === 'signin' ? 'Welcome Back' : 'Get Started'}
          </h2>
          <p className="text-gray-600">
            {mode === 'signin'
              ? 'Access your infrastructure dashboard'
              : 'Join thousands of teams using Zanis'}
          </p>
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleAuth}
          className="w-full mb-6 px-4 py-3 border-2 border-gray-200 text-black font-semibold rounded-2xl hover:border-black hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="group-hover:translate-x-1 transition-transform">Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {mode === 'signup' && (
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 transition"
              />
            </div>
          )}

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 transition"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-all hover:shadow-lg active:scale-95 mt-6"
          >
            {mode === 'signin' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {/* Toggle Mode */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          {mode === 'signin' ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => setMode('signup')}
                className="text-black font-semibold link-underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setMode('signin')}
                className="text-black font-semibold link-underline"
              >
                Sign In
              </button>
            </>
          )}
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-500 text-center mt-6">
          By signing in, you agree to our{' '}
          <a href="#" className="text-black link-underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-black link-underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
