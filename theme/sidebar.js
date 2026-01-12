(function () {
  const active = document.querySelector('.sidebar .active');
  if (!active) return;

  const headers = document.querySelectorAll('main a.header');
  if (headers.length === 0) return;

  const rootUl = document.createElement('ul');
  rootUl.className = 'innerLink';

  let currentDetails = null;

  headers.forEach((a, i) => {
    if (i === 0) return; // skip h1

    if (a.closest('h2')) {
      // ## 見出し
      const li = document.createElement('li');
      const details = document.createElement('details');
      details.open = false; // デフォルトで展開（必要なら false）

      const summary = document.createElement('summary');
      const link = document.createElement('a');
      link.href = a.getAttribute('href');
      link.textContent = a.textContent;

      summary.appendChild(link);
      details.appendChild(summary);

      const ul = document.createElement('ul');
      details.appendChild(ul);

      li.appendChild(details);
      rootUl.appendChild(li);

      currentDetails = ul;
    } else if (a.closest('h3') && currentDetails) {
      // ### 見出し
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = a.getAttribute('href');
      link.textContent = a.textContent;

      li.appendChild(link);
      currentDetails.appendChild(li);
    }
  });

  active.appendChild(rootUl);
})();
