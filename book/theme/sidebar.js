(function () {
  const active = document.querySelector('.sidebar .active');
  if (!active) return;

  const headers = document.querySelectorAll('main a.header');
  if (headers.length === 0) return;

  const ul = document.createElement('ul');
  ul.className = 'innerLink';

  headers.forEach((a, i) => {
    if (i === 0) return; // skip h1
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = a.getAttribute('href');
    link.textContent = a.textContent;
    li.appendChild(link);
    ul.appendChild(li);
  });

  active.appendChild(ul);
})();
