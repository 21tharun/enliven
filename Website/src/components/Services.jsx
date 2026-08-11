import React from 'react';

const servicesData = [
  { num: "01", icon: "home", title: "Bespoke Interior Design", desc: "Tailored furniture design, custom warm lighting choreography, spatial flow optimization, and rich wood panelling for luxury apartments & villas." },
  { num: "02", icon: "compass", title: "Architectural Design", desc: "Full-scale residential villa & commercial architectural conceptualization, structural engineering, cantilevered geometry, and modern facade planning." },
  { num: "03", icon: "layers", title: "Exterior & Facade Crafting", desc: "Statement exterior architecture blending teak eaves, board-formed concrete, ambient linear illumination, and tropical landscape harmony." },
  { num: "04", icon: "refresh-cw", title: "Luxury Structural Renovation", desc: "Complete spatial reconfiguration of existing ancestral homes and penthouses into contemporary luxury sanctuaries with modern amenities." },
  { num: "05", icon: "building", title: "Commercial & Office Architecture", desc: "High-profile corporate headquarters, boutique tech hubs, and executive suites engineered for brand distinction, acoustic comfort, and elegance." },
  { num: "06", icon: "coffee", title: "Hospitality & Restaurants", desc: "Immersive atmosphere creation for luxury dining venues, boutique cafes, and fine dining lounges across Indiranagar, EGL, and Lavelle Road." },
  { num: "07", icon: "eye", title: "Photorealistic 3D Visualization", desc: "Hyper-accurate 8K architectural render walkthroughs, sunlight trajectory analysis, and virtual material touchpoint previews before ground breaking." },
  { num: "08", icon: "shield-check", title: "Turnkey Project Execution", desc: "Single-point responsibility encompassing material sourcing, artisan metalwork, carpentry oversight, quality auditing, and on-time handover." }
];

export default function Services({ onOpenBooking }) {
  return (
    <section class="section-padding" id="services" style={{ background: 'var(--bg-surface)' }}>
      <div class="container">
        <div class="services-header">
          <div class="editorial-tag" style={{ marginBottom: '16px' }}>Our Expertise</div>
          <h2 class="section-title">Bespoke Architectural & <span>Interior Offerings</span></h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '16px' }}>Every service is executed with surgical precision, bespoke craftsmanship, and turnkey project accountability.</p>
        </div>

        <div class="services-grid">
          {servicesData.map((s, idx) => (
            <div key={idx} class="service-card">
              <div>
                <div class="service-number">{s.num}</div>
                <div class="service-icon-box"><i data-lucide={s.icon}></i></div>
                <h3 class="service-title">{s.title}</h3>
                <p class="service-desc">{s.desc}</p>
              </div>
              <button onClick={onOpenBooking} class="service-link" style={{ background: 'none', border: 'none', padding: 0 }}>
                <span>Inquire Service</span>
                <i data-lucide="arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
