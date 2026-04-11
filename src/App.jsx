import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Method from './components/Method'
import Story from './components/Story'
import Programs from './components/Programs'
import Coaching from './components/Coaching'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_demo')

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Elements stripe={stripePromise}>
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="overflow-x-hidden">
        <Hero />
        <Philosophy />
        <Method />
        <Story />
        <Programs />
        <Coaching />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </Elements>
  )
}

export default App
