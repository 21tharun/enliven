import React, { useState } from 'react';

const steps = [
  { num: "01 / DISCOVERY", title: "Spatial Auditing & Visioning", desc: "Deep consultation assessing lifestyle, sunlight orientation, structural parameters, and personal luxury aesthetic preferences." },
  { num: "02 / CONCEPT", title: "3D Renderings & Moodboards", desc: "Creating photorealistic CGI walkthroughs, material swatches, and spatial flow diagrams before physical intervention." },
  { num: "03 / PLANNING", title: "Structural & Electrical Schematics", desc: "Precision architectural drawings detailing HVAC integration, cove lighting channels, plumbing, and bespoke joinery blueprints." },
  { num: "04 / EXECUTION", title: "Artisanal On-Site Crafting", desc: "Master carpenters, stonemasons, and engineers executing on-site with 100% turnkey supervision and material auditing." },
  { num: "05 / DELIVERY", title: "Turnkey Handover & Styling", desc: "Final white-glove cleaning, furniture placement, accent lighting calibration, and handover of your bespoke sanctuary." }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section class="section-padding" id="process">
      <div class="container">
        <div style={{ marginBottom: '60px' }}>
          <div class="editorial-tag">Methodology</div>
          <h2 class="section-title">Architectural <span>Blueprint Journey</span></h2>
        </div>

        <div class="process-grid">
          <div class="blueprint-canvas-box">
            <svg class="blueprint-svg" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="460" height="360" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="6 6"/>
              <path class="blueprint-path" d="M 60,60 L 440,60 L 440,340 L 60,340 Z" stroke="#C18A53" strokeWidth="2"/>
              <path class="blueprint-path" d="M 60,200 L 440,200" stroke="#C18A53" strokeWidth="1.5"/>
              <path class="blueprint-path" d="M 250,60 L 250,340" stroke="#C18A53" strokeWidth="1.5"/>
              <circle cx="150" cy="130" r="40" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 4"/>
              <rect x="290" y="90" width="110" height="80" stroke="#D4AF37" strokeWidth="1.5"/>
              <path class="blueprint-path" d="M 100,250 Q 150,220 200,250 T 300,250" stroke="#F7F5F0" strokeWidth="1.5"/>
            </svg>
            <div id="blueprint-stage-title" style={{ position: 'absolute', bottom: '20px', left: '30px', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-teak)' }}>
              Stage 0{activeStep + 1}: {steps[activeStep].title}
            </div>
          </div>

          <div class="process-steps">
            {steps.map((s, idx) => (
              <div 
                key={idx} 
                class={`process-step-item ${activeStep === idx ? 'active' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <div class="process-step-num">{s.num}</div>
                <h3 class="process-step-title">{s.title}</h3>
                <p class="process-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
