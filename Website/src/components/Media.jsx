import React from 'react';

const mediaArticles = [
  {
    badge: "Architectural Digest",
    title: "Defining Modern Luxury: The Bengaluru Villa Revolution",
    desc: "ENLIVEN ELITE featured for groundbreaking spatial proportions, natural teak wood integration, and continuous indoor-outdoor harmony in Sadashivnagar.",
    img: "assets/modern_villa_exterior.png"
  },
  {
    badge: "Press & Publications",
    title: "Turnkey Precision in Bespoke Interior Crafting",
    desc: "How ENLIVEN ELITE delivers seamless end-to-end execution combining master artisans and cutting-edge architectural engineering across Karnataka.",
    img: "assets/hero_luxury_villa.png"
  },
  {
    badge: "Design Excellence Award",
    title: "Best Luxury Architecture & Interior Studio Bengaluru",
    desc: "Recognized as South India's premier bespoke residential & commercial interior design studio for 800+ completed landmark projects.",
    img: "assets/after_room.png"
  }
];

export default function Media() {
  return (
    <section class="section-padding" id="media">
      <div class="container">
        <div style={{ marginBottom: '60px' }}>
          <div class="editorial-tag">Press & Recognition</div>
          <h2 class="section-title">Media & <span>Publications</span></h2>
        </div>

        <div class="media-grid">
          {mediaArticles.map((m, idx) => (
            <div key={idx} class="media-card">
              <div class="media-thumb">
                <img src={m.img} alt={m.title} />
                <span class="media-badge">{m.badge}</span>
              </div>
              <div class="media-body">
                <h3 class="media-title">{m.title}</h3>
                <p class="media-desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
