export default function Footer() {
  return (
    <footer className="bg-primary/50 border-t border-accent/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Z</span>
              </div>
              <span className="text-white font-bold">Zanis Ltd</span>
            </div>
            <p className="text-gray-400 text-sm">
              Enterprise infrastructure solutions for modern teams
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-accent transition">Features</a></li>
              <li><a href="#" className="hover:text-accent transition">Pricing</a></li>
              <li><a href="#" className="hover:text-accent transition">Security</a></li>
              <li><a href="#" className="hover:text-accent transition">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-accent transition">About</a></li>
              <li><a href="#" className="hover:text-accent transition">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-accent transition">Privacy</a></li>
              <li><a href="#" className="hover:text-accent transition">Terms</a></li>
              <li><a href="#" className="hover:text-accent transition">Cookies</a></li>
              <li><a href="#" className="hover:text-accent transition">Licenses</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-accent/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2026 Zanis Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition">Twitter</a>
            <a href="#" className="hover:text-accent transition">GitHub</a>
            <a href="#" className="hover:text-accent transition">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
