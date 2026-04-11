export default function Footer() {
  return (
    <>
      <footer className="bg-black/50 py-16 md:py-24 px-5vw">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <div className="font-display text-2xl mb-4">
              MONGER <span className="text-monger-orange">METHOD</span>
            </div>
            <p className="text-sm text-monger-dim leading-relaxed max-w-xs">
              Build from the foundation up. Seven layers. One direction. The system that actually works.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-monger-orange mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-sm text-monger-dim hover:text-monger-cream transition-colors">Foundation</a></li>
              <li><a href="#programs" className="text-sm text-monger-dim hover:text-monger-cream transition-colors">Build to Strength</a></li>
              <li><a href="#programs" className="text-sm text-monger-dim hover:text-monger-cream transition-colors">Elite Performance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-monger-orange mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#coaching" className="text-sm text-monger-dim hover:text-monger-cream transition-colors">1:1 Coaching</a></li>
              <li><a href="#method" className="text-sm text-monger-dim hover:text-monger-cream transition-colors">The Method</a></li>
              <li><a href="#story" className="text-sm text-monger-dim hover:text-monger-cream transition-colors">About</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="bg-black/80 border-t border-monger-cream/8 py-6 px-5vw">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-monger-dim">
            © 2024 The Monger Method. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-monger-dim hover:text-monger-orange transition-colors">Privacy</a>
            <a href="#" className="text-xs text-monger-dim hover:text-monger-orange transition-colors">Terms</a>
            <a href="#" className="text-xs text-monger-dim hover:text-monger-orange transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </>
  )
}
