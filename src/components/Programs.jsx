import { useEffect, useRef, useState } from 'react'
import { useStripe } from '@stripe/react-stripe-js'

const programs = [
  {
    id: 'foundation-program',
    tag: 'Foundation',
    name: 'The Foundation',
    desc: 'Complete six-week program covering breathing, movement mechanics, and foundational patterns. Everything you need to build a solid base.',
    price: 199,
    featured: false
  },
  {
    id: 'strength-program',
    tag: 'Intermediate',
    name: 'Build to Strength',
    desc: 'Progressive 12-week program integrating power development and strength building on top of your foundation. For serious progression.',
    price: 399,
    featured: true
  },
  {
    id: 'elite-program',
    tag: 'Advanced',
    name: 'Elite Performance',
    desc: 'Complete 16-week transformation. All seven layers with personalized adjustments. Includes direct email support.',
    price: 699,
    featured: false
  }
]

export default function Programs() {
  const gridRef = useRef(null)
  const stripe = useStripe()
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    if (gridRef.current) observer.observe(gridRef.current)

    return () => observer.disconnect()
  }, [])

  const handleCheckout = async (program) => {
    if (!stripe) return
    setLoading(program.id)

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: program.id,
          productName: program.name,
          amount: program.price * 100
        })
      })

      const session = await response.json()
      const { error } = await stripe.redirectToCheckout({ sessionId: session.id })
      if (error) console.error(error)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(null)
    }
  }

  return (
    <section id="programs" className="py-24 md:py-40 px-5vw bg-monger-black">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">Fitness Programs</div>
        <h2 className="section-title mb-16">Choose Your Path</h2>

        <div ref={gridRef} className="reveal grid md:grid-cols-3 gap-0.5 bg-monger-cream/10">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`p-8 flex flex-col ${
                program.featured
                  ? 'bg-monger-orange text-monger-black'
                  : 'bg-monger-charcoal text-monger-cream hover:bg-monger-charcoal/80'
              } transition-colors`}
            >
              <div className={`text-xs uppercase tracking-widest mb-4 ${
                program.featured ? 'text-monger-black/60' : 'text-monger-orange'
              }`}>
                {program.tag}
              </div>

              <h3 className="font-display text-3xl mb-4 leading-tight">
                {program.name}
              </h3>

              <p className={`text-base mb-8 flex-1 leading-relaxed ${
                program.featured ? '' : 'text-monger-dim'
              }`}>
                {program.desc}
              </p>

              <div className="mb-8">
                <span className="font-display text-4xl">${program.price}</span>
              </div>

              <button
                onClick={() => handleCheckout(program)}
                disabled={loading === program.id}
                className={`py-3 px-6 font-medium uppercase text-sm tracking-widest transition-all ${
                  program.featured
                    ? 'bg-monger-black text-monger-cream hover:bg-monger-charcoal'
                    : 'border border-monger-orange bg-transparent text-monger-orange hover:bg-monger-orange hover:text-monger-black'
                } disabled:opacity-50`}
              >
                {loading === program.id ? 'Loading...' : 'Enroll Now'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
