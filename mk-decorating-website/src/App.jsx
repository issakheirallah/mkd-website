import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import WhatsAppButton from './components/WhatsAppButton'  // disabled until business phone is set up
import CookieBanner from './components/CookieBanner'
import ScrollToTop from './components/ScrollToTop'
import MobileCTA from './components/MobileCTA'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <a href="#main" className="mk-skip-link">Skip to main content</a>
      <Navbar />
      <main className="main-content" id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileCTA />
      {/* <WhatsAppButton /> */}
      <CookieBanner />
    </div>
  )
}
