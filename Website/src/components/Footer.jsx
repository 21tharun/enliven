import React from 'react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer class="footer" id="contact">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <h2 class="footer-title">Your dream space deserves <span>extraordinary design.</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '480px' }}>
              Ready to transform your home, villa, or commercial venue into an architectural sanctuary? Commission your project with ENLIVEN ELITE today.
            </p>
            <div>
              <button 
                onClick={onOpenBooking} 
                class="btn-luxury btn-luxury-solid" 
                style={{ padding: '16px 36px', fontSize: '0.9rem' }}
              >
                <span>Book a Private Consultation</span>
                <i data-lucide="arrow-right"></i>
              </button>
            </div>
          </div>

          <div>
            <div class="footer-col-title">Studio Location</div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              ENLIVEN ELITE Architecture Studio<br />
              #482, 100 Feet Road, Indiranagar<br />
              Bengaluru, Karnataka 560038
            </p>
          </div>

          <div>
            <div class="footer-col-title">Direct Contact</div>
            <ul class="footer-links">
              <li><a href="tel:+918049208800">+91 80 4920 8800</a></li>
              <li><a href="tel:+919880012345">+91 98800 12345</a></li>
              <li><a href="mailto:inquiries@enlivenelite.com">inquiries@enlivenelite.com</a></li>
              <li><a href="mailto:careers@enlivenelite.com">careers@enlivenelite.com</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-col-title">Navigation</div>
            <ul class="footer-links">
              <li><a href="#who-we-are">Heritage</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Portfolio</a></li>
              <li><a href="#before-after">Transformations</a></li>
              <li><a href="#materials">Materials Explorer</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div>© 2018–2026 ENLIVEN ELITE Studio. All Rights Reserved. Bengaluru, Karnataka.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'var(--text-subtle)' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-subtle)' }}>Terms of Commission</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
