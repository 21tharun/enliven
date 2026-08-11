import React from 'react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div class="modal-backdrop active" onClick={onClose}>
      <div class="modal-container" style={{ maxWidth: '840px' }} onClick={e => e.stopPropagation()}>
        <button class="modal-close" onClick={onClose}>
          <i data-lucide="x"></i>
        </button>

        <div style={{ marginBottom: '24px' }}>
          <span class="project-category">{project.catName}</span>
          <h2 class="editorial-serif" style={{ fontSize: '2.6rem', color: 'var(--text-main)' }}>{project.title}</h2>
        </div>

        <div style={{ height: '400px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '24px' }}>
          <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px', background: 'var(--bg-dark)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
          <div>
            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-teak)' }}>Location</div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>Sadashivnagar, Bengaluru</div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-teak)' }}>Specifications</div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>{project.meta}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-teak)' }}>Primary Materials</div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>Burma Teak & Nero Marquina</div>
          </div>
        </div>
      </div>
    </div>
  );
}
