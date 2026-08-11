import React from 'react';

export default function Philosophy() {
  return (
    <section class="philosophy-section" id="philosophy" style={{ backgroundImage: "url('assets/hero_luxury_villa.png')" }}>
      <div class="philosophy-overlay"></div>
      <div class="philosophy-content">
        <div class="editorial-tag" style={{ marginBottom: '24px' }}>Our Core Philosophy</div>
        <h2 class="philosophy-quote-large">
          "We believe great design <span>changes how people feel.</span><br />
          Space is not empty volume; it is an emotional sanctuary."
        </h2>
        <div class="philosophy-author">— ENLIVEN ELITE DESIGN DIRECTORate • BENGALURU</div>
      </div>
    </section>
  );
}
