export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-end px-5vw pb-20 md:pb-40 relative overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-monger-black pointer-events-none"></div>
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(var(--monger-cream) 1px, transparent 1px), linear-gradient(90deg, var(--monger-cream) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>
      <div className="absolute right-0 bottom-0 font-display text-9xl md:text-9xl opacity-5 pointer-events-none select-none">MM</div>

      <div className="relative z-10 max-w-6xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-1 h-20 bg-monger-orange"></div>
        </div>

        <div className="text-xs uppercase tracking-widest text-monger-orange mb-4">Build from the foundation up</div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-8">
          The Body<br/><span className="text-monger-orange">Built Right</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-monger-cream opacity-75 mb-12 leading-relaxed">
          Most programs start with intensity. The Monger Method starts with your foundation — nervous system, breath, movement — because strength is not the first layer. It's the reward.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <a href="#coaching" className="btn-primary">Book a Coaching Call</a>
          <a href="#method" className="btn-ghost">Explore the Method</a>
        </div>

        <div className="text-xs uppercase tracking-widest text-monger-dim">
          Scroll ↓
        </div>
      </div>
    </section>
  )
}
