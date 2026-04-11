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
              I started like everyone else — following programs, pushing hard, getting injured. <strong className="text-monger-orange">The pattern was always the same:</strong> months of pain, missed workouts, and then a reset.
            </p>

            <p className="text-monger-cream opacity-80 text-lg leading-relaxed">
              The turning point came when I stopped asking "How strong can I get?" and started asking "Why do I keep breaking?" The answer wasn't complicated: I was building on broken foundations.
            </p>

            <div className="border-l-4 border-monger-gold bg-monger-gold/10 p-6 my-8">
              <p className="text-monger-gold italic text-lg leading-relaxed">
                "Everything you build without a foundation is temporary. The pain, the injuries, the constant resets — they weren't failures. They were feedback that I was doing the sequence wrong."
              </p>
            </div>

            <p className="text-monger-cream opacity-80 text-lg leading-relaxed">
              That's when I flipped the script. I spent three years researching nervous system development, breath mechanics, and movement patterns. I tested every variable. I found what worked.
            </p>

            <p className="text-monger-cream opacity-80 text-lg leading-relaxed">
              The result is seven sequences, built in order. Not theory. Not trend. <strong className="text-monger-orange">Tested on myself and on hundreds of clients</strong> who've gone from chronic pain to athletic performance.
            </p>

            <p className="text-monger-cream opacity-80 text-lg leading-relaxed">
              This is The Monger Method. It's not the fastest way to get strong. It's the way that actually works.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
