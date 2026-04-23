export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-black mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition">Features</a></li>
              <li><a href="#" className="hover:text-black transition">Pricing</a></li>
              <li><a href="#" className="hover:text-black transition">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition">About</a></li>
              <li><a href="#" className="hover:text-black transition">Blog</a></li>
              <li><a href="#" className="hover:text-black transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black mb-4">Developers</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition">Documentation</a></li>
              <li><a href="#" className="hover:text-black transition">API Reference</a></li>
              <li><a href="#" className="hover:text-black transition">SDK</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition">Privacy</a></li>
              <li><a href="#" className="hover:text-black transition">Terms</a></li>
              <li><a href="#" className="hover:text-black transition">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="font-bold text-black">Zanis</span>
          </div>
          <p className="text-gray-600 text-sm">&copy; 2026 Zanis Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-black transition">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-black transition">GitHub</a>
            <a href="#" className="text-gray-600 hover:text-black transition">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
