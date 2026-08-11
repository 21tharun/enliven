import React from 'react';

const instaImages = [
  "assets/hero_luxury_villa.png",
  "assets/luxury_living_room.png",
  "assets/modern_villa_exterior.png",
  "assets/after_room.png",
  "assets/material_teak.png"
];

export default function InstagramGrid() {
  return (
    <section class="section-padding" id="instagram" style={{ background: 'var(--bg-surface)' }}>
      <div class="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div class="editorial-tag">Live Feed</div>
            <h2 class="section-title">Ongoing <span>On-Site Craft</span></h2>
          </div>
          <a href="https://www.instagram.com/enliven_elite/" target="_blank" rel="noopener noreferrer" class="btn-luxury">
            <i data-lucide="instagram"></i>
            <span>Follow @enliven_elite</span>
          </a>
        </div>

        <div class="insta-grid">
          {instaImages.map((img, idx) => (
            <a key={idx} href="https://www.instagram.com/enliven_elite/" target="_blank" rel="noopener noreferrer" class="insta-item">
              <img src={img} alt={`Site Progress ${idx + 1}`} />
              <div class="insta-overlay"><i data-lucide="instagram"></i></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
