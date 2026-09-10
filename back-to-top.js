// Back-to-top button for chapter pages.
//
// Appears only after the chapter toolbar has relocated to its fixed
// "stuck" position at the top of the screen (same moment the undo /
// redo / reset / theme controls become the floating dock). Pinned to
// the bottom edge of the viewport on every device so it sits beside
// the screen limit, well clear of the FAB.
(function () {
  const BOTTOM_MARGIN = 20; // px from the true bottom edge of the screen
  const RIGHT_MARGIN = 16;  // px from the right edge

  function init() {
    const toolbar = document.getElementById('chapterToolbar');
    // Still useful to know the FAB exists (for layout awareness on mobile),
    // but we no longer anchor position to it on desktop.
    const fabIcon = document.getElementById('fabToggle');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'fab-icon back-to-top-btn';
    btn.id = 'backToTopBtn';
    btn.setAttribute('aria-label', 'Back to top');
    // Proper up-arrow with triangular head + rectangular tail (stem)
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '<path d="M12 4 L5 12 H9.5 V20 H14.5 V12 H19 Z"/>' +
      '</svg>';
    document.body.appendChild(btn);

    // ---- Visibility: show only while the toolbar is stuck ----
    function updateVisibility() {
      const stuck = toolbar && toolbar.classList.contains('is-stuck');
      btn.classList.toggle('is-visible', !!stuck);
    }

    if (toolbar) {
      // React to class changes on the toolbar (is-stuck is toggled by
      // the IntersectionObserver in chapter.html).
      const observer = new MutationObserver(updateVisibility);
      observer.observe(toolbar, {
        attributes: true,
        attributeFilter: ['class'],
      });
      updateVisibility();
    }

    // ---- Position: fixed to the bottom-right edge of the viewport ----
    function updatePosition() {
      btn.style.top = 'auto';
      btn.style.bottom = BOTTOM_MARGIN + 'px';
      btn.style.left = 'auto';
      btn.style.right = RIGHT_MARGIN + 'px';

      // On mobile the FAB already occupies the bottom-right corner.
      // Shift this button left of the FAB so both remain tappable and
      // sit along the bottom screen limit.
      if (fabIcon && window.matchMedia('(max-width: 640px)').matches) {
        const fabRect = fabIcon.getBoundingClientRect();
        const gap = 12;
        // Place just to the left of the FAB, still near the bottom edge.
        btn.style.right = (window.innerWidth - fabRect.left + gap) + 'px';
        // Keep the same bottom margin so it lines up with the FAB row.
        btn.style.bottom = (window.innerHeight - fabRect.bottom) + 'px';
      }
    }

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('orientationchange', function () {
      setTimeout(updatePosition, 200);
    });
    // FAB may re-measure after load / orientation — re-run shortly after.
    setTimeout(updatePosition, 300);

    // ---- Scroll to top (robust click / tap) ----
    function scrollToTop(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      // Prefer smooth scroll; fall back for older browsers.
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (_) {
        window.scrollTo(0, 0);
      }
      // Also reset documentElement / body for stubborn mobile browsers.
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    if (window.addTapListener) {
      window.addTapListener(btn, scrollToTop);
    } else {
      btn.addEventListener('click', scrollToTop);
      btn.addEventListener('touchend', function (e) {
        e.preventDefault();
        scrollToTop(e);
      }, { passive: false });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
