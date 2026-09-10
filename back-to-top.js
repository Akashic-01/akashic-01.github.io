// Back-to-top button for chapter pages.
//
// Sits in the same right-hand column as the FAB (widget.js), directly
// below it, so a reader who has scrolled far down a chapter can jump
// back to the top in one tap. Its position is measured off the FAB's
// own icon (#fabToggle) rather than a hardcoded offset, so it lines up
// correctly whether the FAB is vertically centered (desktop) or pinned
// to the bottom-right corner (mobile) — both are handled by widget.js
// already, this just reads wherever that ends up.
//
// If sitting directly below the FAB would push it past the bottom of
// the screen (this happens on mobile, where the FAB already sits close
// to the bottom edge), it's clamped to stay a small fixed gap above
// the screen's true bottom edge instead of running off it.
(function () {
  const GAP_BELOW_FAB = 16; // px, gap kept between the FAB and this button
  const BOTTOM_SAFE_MARGIN = 20; // px, min gap this button keeps from the screen's bottom edge
  const SHOW_AFTER_PX = 480; // px scrolled down before the button fades in

  function init() {
    const fabIcon = document.getElementById('fabToggle');
    if (!fabIcon) return; // no FAB on this page — nothing to anchor to, so skip

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'fab-icon back-to-top-btn';
    btn.id = 'backToTopBtn';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    document.body.appendChild(btn);

    let ticking = false;

    function update() {
      ticking = false;

      const fabRect = fabIcon.getBoundingClientRect();
      const btnHeight = btn.offsetHeight || fabRect.height;
      const idealTop = fabRect.bottom + GAP_BELOW_FAB;
      const maxTop = window.innerHeight - btnHeight - BOTTOM_SAFE_MARGIN;

      btn.style.top = `${Math.min(idealTop, maxTop)}px`;
      btn.style.left = `${fabRect.left}px`;
      btn.style.width = `${fabRect.width}px`;
      btn.style.height = `${fabRect.height}px`;

      const scrolled = window.scrollY || document.documentElement.scrollTop || 0;
      btn.classList.toggle('is-visible', scrolled > SHOW_AFTER_PX);
    }

    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    // widget.js re-measures the FAB's own position shortly after an
    // orientation change (once the browser has settled) — do the same
    // here so this stays lined up with it.
    window.addEventListener('orientationchange', () => setTimeout(requestUpdate, 200));

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.addTapListener) {
      window.addTapListener(btn, scrollToTop);
    } else {
      btn.addEventListener('click', scrollToTop);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
