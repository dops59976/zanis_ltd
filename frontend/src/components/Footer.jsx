export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition link-underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition link-underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition link-underline">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition link-underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition link-underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition link-underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition link-underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition link-underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition link-underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Social</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition link-underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition link-underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition link-underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Zanis Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
