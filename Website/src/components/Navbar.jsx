import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenBooking, gridActive, onToggleGrid }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header>
        <nav class={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div class="brand-logo">
            <img src="assets/logo1-removebg-preview.png" alt="ENLIVEN ELITE Logo" class="brand-logo-img" />
            <div class="brand-text">
              <span class="brand-title">ENLIVEN ELITE</span>
              <span class="brand-sub">Bengaluru</span>
            </div>
          </div>

          <ul class="nav-links">
            <li><a href="#hero" class="nav-link">Home</a></li>
            <li><a href="#our-story" class="nav-link">Our Story</a></li>
            <li><a href="#projects" class="nav-link">Projects</a></li>
            <li><a href="#gallery" class="nav-link">Gallery</a></li>
            <li><a href="#services" class="nav-link">Services</a></li>
            <li><a href="#media" class="nav-link">Media</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
          </ul>

          <div class="nav-actions">
            <button 
              onClick={onOpenBooking}
              class="btn-luxury btn-luxury-solid"
            >
              <span>Book a Consultation</span>
            </button>

            <div 
              class="mobile-nav-toggle" 
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Nav Drawer */}
      <div class={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`}>
        <a href="#hero" onClick={() => setMobileOpen(false)}>Home</a>
        <a href="#our-story" onClick={() => setMobileOpen(false)}>Our Story</a>
        <a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a>
        <a href="#gallery" onClick={() => setMobileOpen(false)}>Gallery</a>
        <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
        <a href="#media" onClick={() => setMobileOpen(false)}>Media</a>
        <a href="#contact" onClick={() => { setMobileOpen(false); onOpenBooking(); }}>Contact</a>
      </div>
    </>
  );
}
