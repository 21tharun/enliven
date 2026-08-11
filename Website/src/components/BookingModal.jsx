import React, { useState } from 'react';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div class="modal-backdrop active" onClick={onClose}>
      <div class="modal-container" onClick={e => e.stopPropagation()}>
        <button class="modal-close" onClick={onClose}>
          <i data-lucide="x"></i>
        </button>

        {!submitted ? (
          <>
            <div style={{ marginBottom: '28px' }}>
              <div class="editorial-tag" style={{ marginBottom: '8px' }}>Private Consultation</div>
              <h2 class="editorial-serif" style={{ fontSize: '2.2rem', color: 'var(--text-main)' }}>Commission Your Space</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Fill out the details below to schedule an in-person or virtual consultation with our Senior Architectural Partners.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-input" placeholder="e.g. Vikramaditya Rao" required />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div class="form-group">
                  <label class="form-label">Phone Number</label>
                  <input type="tel" class="form-input" placeholder="+91 98765 43210" required />
                </div>

                <div class="form-group">
                  <label class="form-label">Email Address</label>
                  <input type="email" class="form-input" placeholder="name@domain.com" required />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div class="form-group">
                  <label class="form-label">Project Scope</label>
                  <select class="form-select" required defaultValue="villa">
                    <option value="villa">Luxury Villa Interior & Architecture</option>
                    <option value="apartment">Bespoke Apartment / Penthouse</option>
                    <option value="commercial">Commercial / Executive Office</option>
                    <option value="hospitality">Restaurant / Fine Dining Lounge</option>
                    <option value="renovation">Complete Structural Renovation</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">Estimated Budget Tier</label>
                  <select class="form-select" required defaultValue="1Cr-3Cr">
                    <option value="50L-1Cr">₹50 Lakhs – ₹1 Crore</option>
                    <option value="1Cr-3Cr">₹1 Crore – ₹3 Crores</option>
                    <option value="3Cr+">₹3 Crores+ (Ultra Bespoke)</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Project Location in Karnataka</label>
                <input type="text" class="form-input" placeholder="e.g. Sadashivnagar, Bengaluru / Coorg Villa" required />
              </div>

              <div class="form-group">
                <label class="form-label">Tell Us About Your Vision</label>
                <textarea class="form-textarea" rows="3" placeholder="Share square footage, architectural preferences, or key design aspirations..."></textarea>
              </div>

              <button type="submit" class="btn-luxury btn-luxury-solid" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                <span>Request Private Consultation</span>
                <i data-lucide="arrow-right"></i>
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1px solid var(--color-teak)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', color: 'var(--color-teak)' }}>
              <i data-lucide="check" style={{ width: '32px', height: '32px' }}></i>
            </div>
            <h3 class="editorial-serif" style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Consultation Confirmed</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto 24px auto' }}>
              Thank you for reaching out to ENLIVEN ELITE. Senior Design Partner will contact you within 24 hours to review your spatial vision.
            </p>
            <button class="btn-luxury btn-luxury-solid" onClick={onClose}>
              <span>Close Window</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
