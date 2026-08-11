import React, { useState } from 'react';

const projectsList = [
  { id: 1, title: "The Sadashivnagar Sanctuary", category: "villas", catName: "Residential Architecture • Sadashivnagar", img: "assets/modern_villa_exterior.png", meta: "12,500 sq.ft • Teak & Monolithic Concrete" },
  { id: 2, title: "The Indiranagar Pavilion", category: "living", catName: "Bespoke Interior • Indiranagar 100ft Rd", img: "assets/luxury_living_room.png", meta: "6,800 sq.ft • Nero Marquina & Brass" },
  { id: 3, title: "The Whitefield Residence", category: "villas", catName: "Modern Luxury Villa • Whitefield", img: "assets/after_room.png", meta: "15,000 sq.ft • Cantilevered Architecture" },
  { id: 4, title: "EGL Financial Headquarters", category: "commercial", catName: "Commercial Architecture • Embassy Golf Links", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", meta: "24,000 sq.ft • Smoked Glass & Walnut" },
  { id: 5, title: "AURA Fine Dining Lounge", category: "dining", catName: "Hospitality Design • Lavelle Road", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", meta: "8,500 sq.ft • Ambient Lighting" },
  { id: 6, title: "The Koramangala Courtyard", category: "living", catName: "Luxury Living • Koramangala 3rd Block", img: "assets/hero_luxury_villa.png", meta: "9,200 sq.ft • Natural Sunlight Glasshouse" }
];

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsList 
    : projectsList.filter(p => p.category === filter);

  return (
    <section class="section-padding" id="projects">
      <div class="container">
        <div class="projects-controls">
          <div>
            <div class="editorial-tag">Selected Works</div>
            <h2 class="section-title">Architectural <span>Portfolio</span></h2>
          </div>

          <div class="project-filters">
            {['all', 'villas', 'living', 'commercial', 'dining'].map(f => (
              <button 
                key={f}
                class={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)} Works
              </button>
            ))}
          </div>
        </div>

        <div class="projects-grid">
          {filteredProjects.map(p => (
            <div 
              key={p.id} 
              class="project-card" 
              onClick={() => onSelectProject(p)}
            >
              <div class="project-image-container">
                <img src={p.img} alt={p.title} />
              </div>
              <div class="project-info-overlay">
                <span class="project-category">{p.catName}</span>
                <h3 class="project-title">{p.title}</h3>
                <div class="project-meta">
                  <span>{p.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
