import React, { useEffect, useRef } from 'react';

export default function Hero({ onOpenBooking }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.3 - 0.1
      });
    }

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(243, 229, 171, ${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section class="hero-section" id="hero">
      <div class="hero-background">
        <img src="assets/hero_luxury_villa.png" alt="ENLIVEN ELITE Luxury Villa Architecture Bengaluru" />
      </div>

      <canvas ref={canvasRef} class="hero-canvas"></canvas>
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <div class="editorial-tag hero-badge">Bengaluru Architectural & Interior Studio</div>
        <h1 class="hero-headline">
          We turn your house<br />into an <span>abode.</span>
        </h1>
        <p class="hero-subtitle">
          Crafting bespoke interiors, architecture and exterior spaces that blend timeless elegance with modern functionality across 800+ luxury residences and commercial developments.
        </p>

        <div class="hero-actions">
          <button onClick={onOpenBooking} class="btn-luxury btn-luxury-solid">
            <span>Book a Consultation</span>
            <i data-lucide="arrow-right"></i>
          </button>
          <a href="#projects" class="btn-luxury">
            <span>View Our Work</span>
          </a>
        </div>
      </div>

      <div class="scroll-indicator">
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Explore</span>
      </div>
    </section>
  );
}
