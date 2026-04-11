import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Breathing',
    desc: 'The operating system. Everything runs through breath — posture, power, recovery, stress response.'
  },
  {
    num: '02',
    title: 'Foundational Movements',
    desc: 'Seven movement patterns that form the architecture of every athletic action you\'ll ever take.'
  },
  {
    num: '03',
    title: 'Movement Mechanics',
    desc: 'Proper alignment and positioning. Fixing the joints before you add load prevents pain and injury.'
  },
  {
    num: '04',
    title: 'Movement Integration',
    desc: 'Combining patterns into sequences. Single movements become flowing movement solutions.'
  },
  {
    num: '05',
    title: 'Power Development',
    desc: 'Adding speed and force while maintaining quality. Never at the cost of foundation.'
  },
  {
    num: '06',
    title: 'Strength Building',
    desc: 'Progressive resistance training built on a solid base. This is where you get strong.'
  },
  {
    num: '07',
    title: 'Explosive Performance',
    desc: 'The reward for building right. Power, speed, athleticism — built to last.'
  }
]

export default function Method() {
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
    <section id="method" className="py-24 md:py-40 px-5vw bg-monger-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16 md:gap-20 items-end">
          <div className="reveal">
            <div className="section-label">The System</div>
            <h2 className="section-title">Seven Layers.<br/>One Direction.</h2>
          </div>
          <div className="reveal">
            <p className="text-monger-cream opacity-75 text-lg leading-relaxed max-w-xl">
              Every section builds on the one before it. Skip a layer and the cracks show up later — in your joints, your performance, your longevity. This is the sequence that changes everything.
            </p>
          </div>
        </div>

        <div ref={gridRef} className="reveal grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-0.5 bg-monger-cream/10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-monger-charcoal p-6 md:p-4 hover:bg-monger-charcoal/80 transition-colors relative group cursor-default"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-monger-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>
              <div className="font-display text-5xl md:text-4xl opacity-10 group-hover:opacity-20 transition-opacity mb-2 leading-none">
                {step.num}
              </div>
              <h3 className="font-display text-sm md:text-base mb-2 text-monger-cream">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-monger-dim leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
