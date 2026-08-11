/**
 * ENLIVEN ELITE — Luxury Architectural & Interior Design Studio
 * Core Interactive Application Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroCanvas();
  initArchitecturalGrid();
  initBeforeAfterSlider();
  initBlueprintProcess();
  initMaterialsExplorer();
  initProjectsFilterAndModal();
  initBookingModal();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   04. Architectural Grid Overlay Toggle
   -------------------------------------------------------------------------- */
function initArchitecturalGrid() {
  const gridBtn = document.getElementById('grid-toggle-btn');
  const gridOverlay = document.querySelector('.architectural-grid');

  if (!gridBtn || !gridOverlay) return;

  gridBtn.addEventListener('click', () => {
    gridOverlay.classList.toggle('active');
    gridBtn.classList.toggle('active');
  });
}

/* --------------------------------------------------------------------------
   05. Before → After Transformation Slider
   -------------------------------------------------------------------------- */
function initBeforeAfterSlider() {
  const wrapper = document.querySelector('.before-after-wrapper');
  const afterLayer = document.querySelector('.ba-layer-after');
  const handle = document.querySelector('.ba-handle');

  if (!wrapper || !afterLayer || !handle) return;

  let isDragging = false;

  function updateSlider(x) {
    const rect = wrapper.getBoundingClientRect();
    let position = x - rect.left;

    if (position < 0) position = 0;
    if (position > rect.width) position = rect.width;

    const percentage = (position / rect.width) * 100;
    afterLayer.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  wrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch support for mobile devices
  wrapper.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

/* --------------------------------------------------------------------------
   06. Animated SVG Blueprint Process
   -------------------------------------------------------------------------- */
function initBlueprintProcess() {
  const stepItems = document.querySelectorAll('.process-step-item');
  const blueprintPaths = document.querySelectorAll('.blueprint-path');
  const stageTitle = document.getElementById('blueprint-stage-title');

  if (!stepItems.length) return;

  const stageTitles = [
    "Stage 01: Spatial & Client Discovery",
    "Stage 02: Architectural Concept & 3D Visuals",
    "Stage 03: Precision Structural Planning",
    "Stage 04: Bespoke On-Site Execution",
    "Stage 05: Handover & Turnkey Delivery"
  ];

  stepItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      stepItems.forEach(s => s.classList.remove('active'));
      item.classList.add('active');

      if (stageTitle) stageTitle.textContent = stageTitles[index] || stageTitles[0];

      // Re-trigger SVG path animations
      blueprintPaths.forEach(path => {
        path.style.animation = 'none';
        path.offsetHeight; // trigger reflow
        path.style.animation = 'drawBlueprint 3s ease-in-out forwards';
      });
    });
  });
}

/* --------------------------------------------------------------------------
   07. Macro Materials & Craftsmanship Explorer
   -------------------------------------------------------------------------- */
function initMaterialsExplorer() {
  const tabs = document.querySelectorAll('.material-tab');
  const previewBg = document.getElementById('material-bg');
  const titleEl = document.getElementById('material-title');
  const descEl = document.getElementById('material-desc');
  const originEl = document.getElementById('material-origin');

  if (!tabs.length || !previewBg) return;

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

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const matKey = tab.getAttribute('data-material');
      const data = materialData[matKey];

      if (data) {
        previewBg.style.opacity = '0.3';
        setTimeout(() => {
          previewBg.src = data.img;
          titleEl.textContent = data.title;
          descEl.textContent = data.desc;
          originEl.textContent = data.origin;
          previewBg.style.opacity = '1';
        }, 250);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   08. Projects Filter & Project Spec Modal Drawer
   -------------------------------------------------------------------------- */
function initProjectsFilterAndModal() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const projectModal = document.getElementById('project-detail-modal');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'block';
          card.style.opacity = '0';
          setTimeout(() => card.style.opacity = '1', 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Project Spec Drawer Modal Trigger
  const modalClose = document.getElementById('project-modal-close');
  
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.project-title')?.textContent;
      const category = card.querySelector('.project-category')?.textContent;
      const imageSrc = card.querySelector('img')?.src;

      if (projectModal) {
        document.getElementById('pm-title').textContent = title || 'Bespoke Luxury Project';
        document.getElementById('pm-category').textContent = category || 'Residential Architecture';
        document.getElementById('pm-image').src = imageSrc;
        projectModal.classList.add('active');
      }
    });
  });

  if (modalClose && projectModal) {
    modalClose.addEventListener('click', () => projectModal.classList.remove('active'));
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) projectModal.classList.remove('active');
    });
  }
}

/* --------------------------------------------------------------------------
   09. Interactive Consultation Booking Modal
   -------------------------------------------------------------------------- */
function initBookingModal() {
  const modalBackdrop = document.getElementById('booking-modal');
  const openBtns = document.querySelectorAll('.trigger-booking-modal');
  const closeBtn = document.getElementById('booking-modal-close');
  const bookingForm = document.getElementById('booking-form');

  if (!modalBackdrop) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalBackdrop.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modalBackdrop.classList.remove('active'));
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) modalBackdrop.classList.remove('active');
  });

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const container = bookingForm.parentElement;
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
          <div style="width: 64px; height: 64px; border-radius: 50%; border: 1px solid var(--color-teak); display: flex; align-items: center; justify-content: center; margin: 0 auto 24px auto; color: var(--color-teak);">
            <i data-lucide="check" style="width: 32px; height: 32px;"></i>
          </div>
          <h3 class="editorial-serif" style="font-size: 2.2rem; margin-bottom: 12px;">Consultation Confirmed</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 440px; margin: 0 auto 24px auto;">
            Thank you for reaching out to ENLIVEN ELITE. Senior Design Partner will contact you within 24 hours to review your spatial vision.
          </p>
          <button class="btn-luxury btn-luxury-solid" onclick="document.getElementById('booking-modal').classList.remove('active')">
            <span>Close Window</span>
          </button>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
    });
  }
}

/* --------------------------------------------------------------------------
   10. Scroll Animations & Navbar Scroll State
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Mobile menu drawer
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileDrawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileDrawer.classList.remove('open'));
    });
  }
}
