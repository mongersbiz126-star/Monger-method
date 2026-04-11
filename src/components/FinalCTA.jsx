export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-32 md:py-48 px-5vw bg-monger-orange text-monger-black text-center">
      <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
        Ready to Build<br/>the Right Way?
      </h2>

      <p className="text-lg max-w-2xl mx-auto mb-12 opacity-75">
        Start your foundation today. Choose a program, book a coaching call, or join thousands who've already rebuilt.
      </p>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
        <a href="#programs" className="btn-dark">
          Explore Programs
        </a>
        <a href="#coaching" className="btn-dark">
          Book a Coaching Call
        </a>
      </div>
    </section>
  )
}
