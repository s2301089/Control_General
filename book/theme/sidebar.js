(function () {
  const active = document.querySelector('.sidebar .active');
  if (!active) return;

  const headers = document.querySelectorAll('main h2, main h3');
  if (!headers.length) return;

  const ul = document.createElement('ul');
  ul.className = 'innerLink';

  headers.forEach(h => {
    if (!h.id) return;

    const li = document.createElement('li');
    li.className = h.tagName.toLowerCase();

    const a = document.createElement('a');
    a.href = `#${h.id}`;
    a.textContent = h.textContent;

    li.appendChild(a);
    ul.appendChild(li);
  });

  active.appendChild(ul);
})();

(function () {
  const headers = Array.from(
    document.querySelectorAll('main h2, main h3')
  );

  const tocLinks = Array.from(
    document.querySelectorAll('.sidebar a[href^="#"]')
  );

  if (!headers.length || !tocLinks.length) return;

  const triggerRatio = 0.5;

  function onScroll() {
    const triggerY = window.innerHeight * triggerRatio;
    let current = null;

    for (const h of headers) {
      const top = h.getBoundingClientRect().top;
      if (top <= triggerY) {
        current = h;
      } else {
        break;
      }
    }

    if (!current) return;

    tocLinks.forEach(a => a.classList.remove('active'));

    const active = tocLinks.find(
      a => a.getAttribute('href') === `#${current.id}`
    );

    if (active) {
      active.classList.add('active');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // 初期表示
})();
