import { useState } from 'react'

const faqItems = [
  {
    q: 'Do I need to have a fitness background to start?',
    a: 'No. The method is designed to meet you where you are. Whether you\'re completely new or returning after years away, we start with your foundation.'
  },
  {
    q: 'How long until I see results?',
    a: 'You\'ll feel better (less pain, better movement) in 2-3 weeks. Visible strength gains come around 6-8 weeks. Real transformation takes 12-16 weeks.'
  },
  {
    q: 'Can I do this remotely?',
    a: 'Yes. Our online programs are completely video-based and include form check support via email. However, 1:1 coaching is more effective with in-person work.'
  },
  {
    q: 'What if I get injured during the program?',
    a: 'The method is designed to prevent injury, but life happens. We scale the program to your current capacity and adjust as you heal. Your coach guides the modifications.'
  },
  {
    q: 'How much equipment do I need?',
    a: 'The foundation work is bodyweight. As you progress, a kettlebell and pull-up bar are helpful but not required. Most of the work is about movement quality, not load.'
  },
  {
    q: 'Is there a refund policy?',
    a: 'We offer a 14-day money-back guarantee on all programs. If it\'s not for you, we\'ll refund you fully. No questions asked.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 md:py-40 px-5vw bg-monger-charcoal">
      <div className="max-w-4xl mx-auto">
        <div className="section-label">Common Questions</div>
        <h2 className="section-title mb-16">FAQ</h2>

        <div className="space-y-0 border-t border-monger-cream/8">
          {faqItems.map((item, idx) => (
            <div key={idx} className="border-b border-monger-cream/8">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full py-6 flex justify-between items-start text-left hover:text-monger-orange transition-colors"
              >
                <h3 className="font-display text-lg md:text-xl text-monger-cream">
                  {item.q}
                </h3>
                <span className={`text-2xl text-monger-orange flex-shrink-0 transition-transform ${
                  openIndex === idx ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>

              {openIndex === idx && (
                <div className="pb-6 pr-8">
                  <p className="text-monger-dim text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
