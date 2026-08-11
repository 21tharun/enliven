import React from 'react';

const testimonials = [
  { quote: "ENLIVEN ELITE transformed our 12,000 sq.ft Sadashivnagar villa into an international architectural masterpiece. Their attention to teak joinery and ambient cove lighting is unparalleled in South India.", name: "Rajesh & Ananya Reddy", loc: "Villa Owners • Sadashivnagar, Bengaluru" },
  { quote: "Working with ENLIVEN ELITE on our Indiranagar lounge was flawless. They completed the entire turnkey design 2 weeks ahead of schedule with uncompromising material quality.", name: "Vikramaditya Rao", loc: "Founder, Hospitality Group • Lavelle Road" },
  { quote: "As a commercial developer, I look for precision, zero layout shifts, and bold architectural statements. ENLIVEN ELITE delivers world-class execution every single time.", name: "Siddharth Mehta", loc: "Managing Director, Prestige Commercial Space" }
];

export default function Testimonials() {
  return (
    <section class="section-padding" id="testimonials">
      <div class="container">
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 60px auto' }}>
          <div class="editorial-tag">Client Voices</div>
          <h2 class="section-title">Client <span>Testimonials</span></h2>
        </div>

        <div class="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} class="testimonial-card">
              <p class="testimonial-quote">"{t.quote}"</p>
              <div class="testimonial-client">
                <span class="client-name">{t.name}</span>
                <span class="client-loc">{t.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
