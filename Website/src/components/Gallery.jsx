import React, { useState } from 'react';

const galleryItems = [
  { id: 1, title: "Sadashivnagar Villa Living Lounge", category: "Villas", img: "assets/hero_luxury_villa.png" },
  { id: 2, title: "Modern Teak Master Bedroom", category: "Interiors", img: "assets/luxury_living_room.png" },
  { id: 3, title: "Cantilevered Exterior Facade", category: "Architecture", img: "assets/modern_villa_exterior.png" },
  { id: 4, title: "Nero Marquina Dining Lounge", category: "Dining", img: "assets/after_room.png" },
  { id: 5, title: "Golden Teak Wood Material Swatch", category: "Materials", img: "assets/material_teak.png" },
  { id: 6, title: "EGL Executive Suite Architecture", category: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Villas', 'Interiors', 'Architecture', 'Dining', 'Commercial'];

  const filtered = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section class="section-padding" id="gallery" style={{ background: 'var(--bg-surface)' }}>
      <div class="container">
        <div class="projects-controls">
          <div>
            <div class="editorial-tag">Visual Archives</div>
            <h2 class="section-title">Design <span>Gallery</span></h2>
          </div>

          <div class="project-filters">
            {categories.map(cat => (
              <button 
                key={cat}
                class={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div class="gallery-grid">
          {filtered.map(item => (
            <div key={item.id} class="gallery-item">
              <img src={item.img} alt={item.title} />
              <div class="gallery-overlay">
                <span class="project-category">{item.category}</span>
                <h3 class="editorial-serif" style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
