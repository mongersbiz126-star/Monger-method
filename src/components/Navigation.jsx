import { useState } from 'react'

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5vw h-16 bg-monger-black/92 backdrop-blur-lg border-b border-monger-orange/15">
        <div className="font-display text-2xl tracking-widest">
          MONGER <span className="text-monger-orange">METHOD</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 list-none">
          <li><a href="#method" className="text-xs uppercase tracking-widest text-monger-cream/70 hover:text-monger-orange transition-colors">The Method</a></li>
          <li><a href="#story" className="text-xs uppercase tracking-widest text-monger-cream/70 hover:text-monger-orange transition-colors">My Story</a></li>
          <li><a href="#programs" className="text-xs uppercase tracking-widest text-monger-cream/70 hover:text-monger-orange transition-colors">Programs</a></li>
          <li><a href="#coaching" className="text-xs uppercase tracking-widest text-monger-cream/70 hover:text-monger-orange transition-colors">Coaching</a></li>
        </ul>

        <a href="#coaching" className="hidden md:block btn-primary py-2.5 px-6 text-xs">
          Book a Call
        </a>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-none border-none p-1"
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 bg-monger-cream transition-all"></span>
          <span className="block w-6 h-0.5 bg-monger-cream transition-all"></span>
          <span className="block w-6 h-0.5 bg-monger-cream transition-all"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-monger-black flex flex-col items-center justify-center gap-8 h-screen md:hidden">
          <a href="#method" onClick={closeMenu} className="font-display text-4xl text-monger-cream hover:text-monger-orange">The Method</a>
          <a href="#story" onClick={closeMenu} className="font-display text-4xl text-monger-cream hover:text-monger-orange">My Story</a>
          <a href="#programs" onClick={closeMenu} className="font-display text-4xl text-monger-cream hover:text-monger-orange">Programs</a>
          <a href="#coaching" onClick={closeMenu} className="font-display text-4xl text-monger-cream hover:text-monger-orange">Coaching</a>
          <a href="#coaching" onClick={closeMenu} className="font-display text-4xl text-monger-orange">Book a Call →</a>
        </div>
      )}
    </>
  )
}
