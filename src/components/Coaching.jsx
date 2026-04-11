import { useState, useRef, useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const coachingFeatures = [
  {
    icon: '📋',
    title: 'Assessment',
    desc: 'Complete movement analysis and goal alignment. We find your foundation first.'
  },
  {
    icon: '🎯',
    title: 'Custom Programming',
    desc: 'Your workouts are built for your body, not generic. Progressive by design.'
  },
  {
    icon: '📱',
    title: 'Direct Support',
    desc: 'Email coaching between sessions. Form checks. Mindset guidance. Real support.'
  },
  {
    icon: '🔄',
    title: 'Progress Tracking',
    desc: 'We measure what matters. Strength, pain reduction, movement quality.'
  }
]

export default function Coaching() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: 'beginner'
  })
  const leftRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    if (leftRef.current) observer.observe(leftRef.current)

    return () => observer.disconnect()
  }, [])

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // In a real app, this would submit to a backend service
    console.log('Booking request:', { ...formData, date: selectedDate, time: selectedTime })
    alert('Booking request submitted! We\'ll contact you within 24 hours.')
  }

  const availableTimes = ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '5:00 PM']

  return (
    <section id="coaching" className="py-24 md:py-40 px-5vw bg-monger-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div ref={leftRef} className="reveal">
            <div className="section-label">1:1 Coaching</div>
            <h2 className="section-title">Personal Coaching</h2>

            <div className="space-y-4 mb-12">
              {coachingFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-monger-black/60 border-l-2 border-transparent hover:border-monger-orange transition-colors group"
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h4 className="font-display uppercase text-sm mb-1 text-monger-cream">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-monger-dim">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-monger-black/40 p-8 rounded-lg border border-monger-orange/20">
            <h3 className="font-display text-2xl mb-6 text-monger-cream">Book Your Call</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Calendar */}
              <div>
                <label className="block text-sm uppercase tracking-widest text-monger-orange mb-4">
                  Select Date
                </label>
                <div className="calendar-container">
                  <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    minDate={new Date()}
                  />
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm uppercase tracking-widest text-monger-orange mb-4">
                  Select Time
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-3 text-sm transition-colors ${
                        selectedTime === time
                          ? 'bg-monger-orange text-monger-black'
                          : 'bg-monger-charcoal text-monger-cream hover:bg-monger-orange/20'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 bg-monger-charcoal text-monger-cream placeholder-monger-dim border border-monger-orange/30 focus:border-monger-orange outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 bg-monger-charcoal text-monger-cream placeholder-monger-dim border border-monger-orange/30 focus:border-monger-orange outline-none transition-colors"
                />
              </div>

              <div>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 bg-monger-charcoal text-monger-cream border border-monger-orange/30 focus:border-monger-orange outline-none transition-colors"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={!selectedTime || !formData.name || !formData.email}
                className="w-full btn-primary py-3 disabled:opacity-50"
              >
                Schedule Call
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
