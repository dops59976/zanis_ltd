import { GoogleOAuthProvider } from '@react-oauth/google'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Auth from './auth/auth'
import './index.css'

function App() {
  return (
    <GoogleOAuthProvider clientId="<INSERT_YOUR_GOOGLE_CLIENT_ID_HERE>">
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <Navbar />
        <div className="absolute top-4 right-4">
          <Auth />
        </div>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
