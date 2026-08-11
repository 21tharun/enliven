import React from 'react';

export default function WhoWeAre() {
  return (
    <section class="section-padding" id="our-story">
      <div class="container">
        <div class="heritage-grid">
          <div class="heritage-image-wrapper">
            <img src="assets/modern_villa_exterior.png" alt="Modern Tropical Luxury Villa Karnataka" />
            <div class="heritage-badge">
              <span class="heritage-badge-number">800+</span>
              <span class="heritage-badge-label">Luxury Projects Completed</span>
            </div>
          </div>

          <div class="heritage-text-content">
            <div class="editorial-tag">Our Story</div>
            <h2 class="section-title">
              We don't decorate spaces.<br />
              We create experiences people <span>love living inside.</span>
            </h2>
            <p class="heritage-description">
              Based in Bengaluru, ENLIVEN ELITE has redefined luxury living across Karnataka. Guided by passion for bespoke craftsmanship, we operate at the intersection of architecture, interior design, and turnkey engineering.
            </p>

            <blockquote class="heritage-quote">
              "Luxury is not about catalog furniture. Luxury is about spatial proportion, natural light, tactile materiality, and emotional resonance."
            </blockquote>

            <div class="heritage-stats">
              <div class="stat-item">
                <span class="stat-number">150+</span>
                <span class="stat-label">Master Craftsmen</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">800+</span>
                <span class="stat-label">Residences</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">100%</span>
                <span class="stat-label">Turnkey Precision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
