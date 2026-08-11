import React, { useState, useRef, useEffect } from 'react';

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const wrapperRef = useRef(null);

  const updateSlider = (clientX) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  };

  useEffect(() => {
    const handleMove = (e) => {
      if (!isDragging.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updateSlider(clientX);
    };

    const handleEnd = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, []);

  return (
    <section class="section-padding" id="before-after" style={{ background: 'var(--bg-surface)' }}>
      <div class="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px auto' }}>
          <div class="editorial-tag">Interactive Transformation</div>
          <h2 class="section-title">Raw Space to <span>Luxury Sanctuary</span></h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '14px' }}>Drag the brass slider handle to experience how our architectural intervention turns bare concrete into warm teak craftsmanship.</p>
        </div>

        <div 
          ref={wrapperRef} 
          class="before-after-wrapper"
          onMouseDown={(e) => { isDragging.current = true; updateSlider(e.clientX); }}
          onTouchStart={(e) => { isDragging.current = true; updateSlider(e.touches[0].clientX); }}
        >
          <div class="ba-layer ba-layer-before">
            <img src="assets/before_room.png" alt="Raw Unfinished Concrete Room Before Renovation" />
            <span class="ba-label ba-label-before">Before Transformation</span>
          </div>

          <div class="ba-layer ba-layer-after" style={{ width: `${sliderPos}%` }}>
            <img src="assets/after_room.png" alt="Transformed Luxury Teak & Marble Lounge After ENLIVEN ELITE Design" />
            <span class="ba-label ba-label-after">After ENLIVEN ELITE</span>
          </div>

          <div class="ba-handle" style={{ left: `${sliderPos}%` }}>
            <div class="ba-handle-button">
              <i data-lucide="chevrons-left-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
