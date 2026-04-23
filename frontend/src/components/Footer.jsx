export default function Footer() {
  return (
    <footer className="bg-primary/50 border-t border-accent/10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">Z</span>
              </div>
              <div>
                <div className="text-white font-black">Zanis Ltd</div>
                <div className="text-accent text-xs font-bold">Infrastructure Platform</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Enterprise-grade infrastructure platform designed for teams that demand reliability, security, and scale.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: 'f', label: 'Facebook' },
                { icon: 'X', label: 'Twitter' },
                { icon: 'in', label: 'LinkedIn' },
                { icon: '⚙', label: 'GitHub' }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-accent/20 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/50 transition"
                  title={social.label}
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Security', 'Roadmap', 'Status'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-accent transition text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Press', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-accent transition text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-3">
              {['Privacy', 'Terms', 'Cookies', 'Compliance', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-accent transition text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2026 Zanis Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                System Status: All Systems Operational
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom banner */}
      <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 border-t border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-accent font-semibold">Ready to transform your infrastructure?</p>
            <button className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
