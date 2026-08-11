import React, { useState } from 'react';

const materialData = {
  teak: {
    title: "Rich Golden Teak Wood",
    desc: "Sustainably harvested ancient teak wood with rich warm grain. Hand-rubbed organic oil finish providing natural luster and tactile warmth.",
    origin: "Burma Grade-A Teak / Local Karnataka Sustainable Timber",
    img: "assets/material_teak.png"
  },
  marble: {
    title: "Nero Marquina & Italian Calacatta",
    desc: "Deep crystalline black marble accented by sharp golden veining. Monolithic slabs honed to a silky velvet sheen for bespoke counters & accent walls.",
    origin: "Carrara & Northern Italy Quarries",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  brass: {
    title: "Hand-Burnished Vintage Brass",
    desc: "Custom architectural brass hardware patinated by hand. Develops a living, timeless luster over time, offering warm tactile luxury.",
    origin: "Bespoke Metal Artificers, Bengaluru",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
  },
  concrete: {
    title: "Tactile Architectural Concrete",
    desc: "Ultra-smooth micro-cement and board-formed tactile concrete panels. Perfectly balances raw monolithic power with refined minimalist warmth.",
    origin: "Architectural Micro-Cement Formulation",
    img: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80"
  },
  glass: {
    title: "Smoked Architectural Fluted Glass",
    desc: "Precision low-iron fluted glass partitions and ambient smoked mirrors. Creates ethereal light diffusion and privacy without sacrificing spatial openness.",
    origin: "German Precision Architectural Glassworks",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
  }
};

export default function Materials() {
  const [activeKey, setActiveKey] = useState('teak');
  const current = materialData[activeKey];

  return (
    <section class="section-padding" id="materials" style={{ background: 'var(--bg-surface)' }}>
      <div class="container">
        <div style={{ marginBottom: '50px' }}>
          <div class="editorial-tag">Tactile Palette</div>
          <h2 class="section-title">Raw Materials & <span>Craftsmanship</span></h2>
        </div>

        <div class="materials-wrapper">
          <div class="materials-list">
            {Object.keys(materialData).map((key, idx) => (
              <button 
                key={key} 
                class={`material-tab ${activeKey === key ? 'active' : ''}`}
                onClick={() => setActiveKey(key)}
              >
                <span class="material-tab-sub">Material 0{idx + 1}</span>
                <div class="material-tab-title">{materialData[key].title.split(' & ')[0]}</div>
              </button>
            ))}
          </div>

          <div class="material-preview-area">
            <img 
              id="material-bg" 
              class="material-preview-bg" 
              src={current.img} 
              alt={current.title} 
            />
            
            <div class="material-details">
              <div class="editorial-tag" style={{ marginBottom: '8px' }}>Specifications</div>
              <h3 class="editorial-serif" style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '12px' }}>{current.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '16px' }}>{current.desc}</p>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-brass)' }}>
                Origin: <span style={{ color: 'var(--text-main)' }}>{current.origin}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
