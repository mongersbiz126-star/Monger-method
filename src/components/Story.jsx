import { useEffect, useRef } from 'react'

export default function Story() {
  const contentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    if (contentRef.current) observer.observe(contentRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="story" className="py-24 md:py-40 px-5vw bg-monger-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-20">
          <div className="md:col-span-1 md:sticky md:top-24 h-fit">
            <div className="font-display text-9xl md:text-8xl opacity-10 leading-none select-none">
              19
            </div>
          </div>
          <div ref={contentRef} className="reveal md:col-span-2 space-y-6">
            <div className="section-label">My Story</div>
            <h2 className="section-title">How the Method Came to Be</h2>

            <p className="text-monger-cream opacity-80 text-lg leading-relaxed">
              Fitness has been the one constant thread in my life—not as a before-and-after project, but as a way of thinking, living, and coming home to myself.
            </p>

            <p className="text-monger-cream opacity-80 text-lg leading-relaxed">
              I started young. <strong className="text-monger-orange">Track taught me honesty</strong>—run hard and your lungs tell the truth. Pickup sports taught me rhythm, competition, and joy without polish. Weightlifting taught me humility, focus, and the difference between ego and effort.
            </p>

            <p className="text-monger-cream opacity-80 text-lg leading-relaxed">
              In my mid-20s, I made a decision that wasn't just about training—it was about freedom. I became a coach right before the pandemic. When the world shut down, most routines collapsed. Most people didn't quit because they didn't care—they quit because motivation isn't a plan.
            </p>

            <div className="border-l-4 border-monger-gold bg-monger-gold/10 p-6 my-8">
              <p className="text-monger-gold italic text-lg leading-relaxed">
                One client stayed. A friend with recurring knee injuries who trusted me to help him rebuild. Day by day, rep by rep, we solved real problems in a real body. That's when it clicked: training isn't about workouts. It's about confidence. Capability. Learning to move again without fear.
              </p>
            </div>

            <p className="text-monger-cream opacity-80 text-lg leading-relaxed">
              Now in my mid-30s, I move as well—if not better—than I did in my 20s. Not because I'm special. <strong className="text-monger-orange">Because I stayed in conversation with my body.</strong>
            </p>

            <p className="text-monger-cream opacity-80 text-lg leading-relaxed">
              My approach blends strength, performance, recovery, and awareness. Joint-respecting training. Athletic movement. Breath and recovery used strategically. The mind involved in every rep.
            </p>

            <p className="text-monger-cream opacity-80 text-lg leading-relaxed">
              I'm here for people who want more than aesthetics. People who want to trust their bodies again.
            </p>

            <p className="text-monger-cream opacity-80 text-lg leading-relaxed">
              <strong className="text-monger-orange">Because the real flex isn't a six-pack.</strong>
            </p>

            <p className="text-monger-cream opacity-80 text-lg leading-relaxed">
              It's moving through your life strong, capable, and unafraid.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
