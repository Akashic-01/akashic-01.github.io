// Back-to-top button for chapter pages.
//
// Appears only after the chapter toolbar has relocated to its fixed
// "stuck" position at the top of the screen (same moment the undo /
// redo / reset / theme controls become the floating dock).
// Positioned to the LEFT of the FAB, sharing the same vertical center
// so the two buttons sit on one horizontal line.
(function () {
  const GAP_LEFT_OF_FAB = 12; // px gap between this button and the FAB

  function init() {
    const toolbar = document.getElementById('chapterToolbar');
    const fabIcon = document.getElementById('fabToggle');
    if (!fabIcon) return; // no FAB on this page — nothing to align with

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

    // ---- Position: same vertical level as FAB, to its left ----
    let ticking = false;

    function updatePosition() {
      ticking = false;

      const fabRect = fabIcon.getBoundingClientRect();
      const btnWidth = btn.offsetWidth || fabRect.width;
      const btnHeight = btn.offsetHeight || fabRect.height;

      // Match FAB size so they look like a pair
      btn.style.width = fabRect.width + 'px';
      btn.style.height = fabRect.height + 'px';

      // Same vertical center as the FAB
      const top = fabRect.top + (fabRect.height - btnHeight) / 2;
      btn.style.top = top + 'px';
      btn.style.bottom = 'auto';

      // Place to the LEFT of the FAB with a small gap
      const left = fabRect.left - GAP_LEFT_OF_FAB - btnWidth;
      btn.style.left = left + 'px';
      btn.style.right = 'auto';
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
    // FAB may re-measure after load / orientation
    setTimeout(requestUpdate, 300);

    // ---- Scroll to top (robust click / tap) ----
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
