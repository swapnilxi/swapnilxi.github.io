(function () {
  'use strict';

  var signalContent = {
    cash: {
      title: 'Cash Health • Example',
      headline: 'Cash Health 🟢 — Runway: 11 months',
      body: 'Under current cash balance and monthly burn, you have 11 months of runway. Discount intensity is the main sensitivity: a 5% discount increase cuts runway by ~1.2 months, while a modest cost reset in low-ROI channels recovers most of it.',
      qa: '"Where should we reduce cost without killing growth?" → "Marketing in Zone West and low-ROI influencer spend account for 40% of waste; trimming 15% here preserves ~90% of growth while extending runway by ~0.9 months."'
    },
    flow: {
      title: 'Fulfillment Flow • Example',
      headline: 'Fulfillment Flow 🟡 — Congestion in East zone',
      body: 'Computer vision on dark store cameras shows repeated queue build-up between 7–9 PM in East zone. SLA risk is creeping up even though average metrics look fine at day-level aggregation.',
      qa: '"Why are SLAs slipping in the East?" → "Picking station congestion and packing delays at Store E-03 drive 60% of late orders; adding one flex picker at peak and re-slotting top 20 SKUs removes most of the risk."'
    },
    unit: {
      title: 'Unit Economics Quality • Example',
      headline: 'Unit Economics 🔵 — Margins stable, discounts rising',
      body: 'Contribution margin is stable, but effective discount rate has risen 3% over the last 6 weeks, mostly in long-distance orders. Delivery cost per order is also creeping up in two zones.',
      qa: '"Which stores are hurting unit economics?" → "Store N-07 and E-03 drive most negative contribution; their mix of small baskets + high-distance orders + aggressive discounting is eroding overall margin by ~1.4%."'
    }
  };

  function initFadeObserver() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-6');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade').forEach(function (el) { observer.observe(el); });
  }

  var signalTabsBound = false;

  function initSignalTabs() {
    if (signalTabsBound) return;
    signalTabsBound = true;
    // Single delegation listener so it works after htmx injects partials
    document.body.addEventListener('click', function (e) {
      var tab = e.target.closest('.signal-tab');
      if (!tab) return;
      var key = tab.dataset.signal;
      if (!signalContent[key]) return;
      var panelTitle = document.getElementById('signal-title');
      var panelHeadline = document.getElementById('signal-headline');
      var panelBody = document.getElementById('signal-body');
      var panelQA = document.getElementById('signal-qa');
      if (!panelTitle || !panelHeadline || !panelBody || !panelQA) return;
      document.querySelectorAll('.signal-tab').forEach(function (t) { t.setAttribute('aria-selected', 'false'); });
      tab.setAttribute('aria-selected', 'true');
      var data = signalContent[key];
      panelTitle.textContent = data.title;
      panelHeadline.textContent = data.headline;
      panelBody.textContent = data.body;
      panelQA.textContent = data.qa;
    }, true);
  }

  function init() {
    initFadeObserver();
    initSignalTabs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  document.body.addEventListener('htmx:afterSettle', function () {
    initFadeObserver();
  });
})();
