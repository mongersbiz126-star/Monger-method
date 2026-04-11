import { useEffect, useRef } from 'react'

export default function Philosophy() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    if (leftRef.current) observer.observe(leftRef.current)
    if (rightRef.current) observer.observe(rightRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="philosophy" className="py-24 md:py-40 px-5vw bg-monger-charcoal">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div ref={leftRef} className="reveal">
          <div className="section-label">Philosophy</div>
          <h2 className="section-title">Why Everything Else Fails You</h2>
          <p className="text-monger-cream opacity-75 text-lg leading-relaxed mb-6">
            The fitness industry sells you load before it sells you literacy. It hands you a barbell before it teaches you to breathe. You've been given a roof before the foundation — and then told you're the problem when the structure cracks.
          </p>
          <p className="text-monger-cream opacity-75 text-lg leading-relaxed">
            The Monger Method is a systematic rebuild. Seven layers, sequenced by design. You don't skip ahead. You earn each level by owning the one beneath it.
          </p>
        </div>

        <div ref={rightRef} className="reveal">
          <div className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-monger-cream border-l-4 border-monger-orange pl-6">
            "Strength is not<br/>the first layer.<br/>
            <span className="text-monger-orange">It is the reward</span><br/>
            for building the body<br/>correctly."
          </div>
        </div>
      </div>
    </section>
  )
}
