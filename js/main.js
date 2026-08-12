document.getElementById('year').textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));

  // Google Ads stat ticker — cycles through headline numbers with a count-up "spin"
  (function(){
    const stats = [
      { label: 'Clicks', value: 952000 },
      { label: 'Ad Impressions', value: 25710316 },
      { label: 'Industry Partnerships', value: 160, suffix: '+' }
    ];
    const el = document.getElementById('adsTicker');
    const labelEl = document.getElementById('tickerLabel');
    const valueEl = document.getElementById('tickerValue');
    if (!el) return;
    let idx = 0;

    function countUp(target, suffix, duration) {
      const start = performance.now();
      function frame(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.round(target * eased);
        valueEl.textContent = current.toLocaleString('en-AU') + (suffix || '');
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    function show(i) {
      const s = stats[i];
      labelEl.textContent = s.label;
      countUp(s.value, s.suffix, 1000);
    }

    show(0);

    setInterval(() => {
      el.classList.add('swap');
      setTimeout(() => {
        idx = (idx + 1) % stats.length;
        show(idx);
        el.classList.remove('swap');
      }, 300);
    }, 3400);
  })();
