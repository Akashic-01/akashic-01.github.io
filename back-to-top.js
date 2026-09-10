// Back-to-top button for chapter pages.
//
// Appears only after the chapter toolbar has relocated to its fixed
// "stuck" position at the top of the screen (same moment the undo /
// redo / reset / theme controls become the floating dock).
//
// Position: same horizontal column as the FAB (same left edge),
// pinned near the bottom edge of the screen. Only when the FAB itself
// is already near the bottom (mobile) does this button sit just above
// the FAB so the two never overlap.
(function () {
  const BOTTOM_MARGIN = 20; // px from the true bottom edge of the screen
  const GAP_ABOVE_FAB = 12; // px gap when we must sit above the FAB

  function init() {
    const toolbar = document.getElementById('chapterToolbar');
    const fabIcon = document.getElementById('fabToggle');
    if (!fabIcon) return;

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
      const observer = new MutationObserver(updateVisibility);
      observer.observe(toolbar, {
        attributes: true,
        attributeFilter: ['class'],
      });
      updateVisibility();
    }

    // ---- Position: same column as FAB, near bottom of screen ----
    let ticking = false;

    function updatePosition() {
      ticking = false;

      const fabRect = fabIcon.getBoundingClientRect();
      const btnH = btn.offsetHeight || fabRect.height;
      const btnW = btn.offsetWidth || fabRect.width;

      btn.style.width = fabRect.width + 'px';
      btn.style.height = fabRect.height + 'px';

      // Same horizontal column as the FAB (aligned under it)
      btn.style.left = fabRect.left + 'px';
      btn.style.right = 'auto';

      // Preferred spot: near the bottom edge of the viewport
      const idealTop = window.innerHeight - btnH - BOTTOM_MARGIN;
      const idealBottom = idealTop + btnH;

      // True overlap only if the two vertical ranges intersect
      // (with a small gap). FAB in the middle of the screen does NOT
      // count as overlap with a button at the bottom.
      const overlaps =
        idealTop < fabRect.bottom + GAP_ABOVE_FAB &&
        idealBottom > fabRect.top - GAP_ABOVE_FAB;

      if (overlaps) {
        // FAB is near the bottom (typical on mobile) — sit just above it
        btn.style.top = (fabRect.top - GAP_ABOVE_FAB - btnH) + 'px';
      } else {
        // Plenty of room — pin to the bottom of the screen
        btn.style.top = idealTop + 'px';
      }
      btn.style.bottom = 'auto';
    }

    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updatePosition);
    }

    updatePosition();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    window.addEventListener('orientationchange', function () {
      setTimeout(requestUpdate, 200);
    });
    setTimeout(requestUpdate, 300);

    // ---- Scroll to top ----
    function scrollToTop(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (_) {
        window.scrollTo(0, 0);
      }
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
