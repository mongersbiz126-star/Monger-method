import { useEffect, useRef } from 'react'

const testimonials = [
  {
    stars: '★★★★★',
    text: 'This method actually fixed my chronic back pain. After three months of the foundation work, I\'m pain-free for the first time in years. Game-changing.',
    author: 'Sarah M.'
  },
  {
    stars: '★★★★★',
    text: 'I\'ve done CrossFit, bodybuilding, all of it. The Monger Method is the most intelligent approach to strength I\'ve experienced. Worth every penny.',
    author: 'Marcus T.'
  },
  {
    stars: '★★★★★',
    text: 'The coaching is incredible. John doesn\'t just give you exercises — he teaches you how to move. That knowledge stays with you forever.',
    author: 'Jennifer L.'
  },
  {
    stars: '★★★★★',
    text: 'I was skeptical about the breathing and foundation focus. Now I understand it was the missing piece. My performance is better than ever.',
    author: 'David R.'
  },
  {
    stars: '★★★★★',
    text: 'Best investment in my health I\'ve made. The progression is real. The results are real. No shortcuts, just actual transformation.',
    author: 'Amanda K.'
  },
  {
    stars: '★★★★★',
    text: 'As a physical therapist, I was impressed. The method is built on sound biomechanical principles. I recommend it to all my patients.',
    author: 'Dr. Michael B.'
  }
]

export default function Testimonials() {
  const gridRef = useRef(null)

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

  return (
    <section id="testimonials" className="py-24 md:py-40 px-5vw bg-monger-black">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">Success Stories</div>
        <h2 className="section-title mb-16">Hear From Our Clients</h2>

        <div ref={gridRef} className="reveal grid md:grid-cols-3 gap-0.5 bg-monger-cream/10">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="bg-monger-charcoal p-8">
              <div className="text-monger-orange text-lg mb-4">{testi.stars}</div>
              <p className="text-monger-cream opacity-80 text-base italic mb-6 leading-relaxed">
                "{testi.text}"
              </p>
              <p className="text-xs uppercase tracking-widest text-monger-orange">
                {testi.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
