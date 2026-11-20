// Product page tabs: Details / Size Chart / Care Instructions
(() => {
  'use strict';

  const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
  if (tabs.length === 0) return;

  const showTab = (tab) => {
    tabs.forEach((t) => {
      const selected = t === tab;
      t.setAttribute('aria-selected', selected);
      t.tabIndex = selected ? 0 : -1;
      // same classes the tab buttons already use for their look
      t.classList.toggle('active', selected);
      t.classList.toggle('text-dark', selected);
      t.classList.toggle('fw-semibold', selected);
      t.classList.toggle('border-bottom', selected);
      t.classList.toggle('border-2', selected);
      t.classList.toggle('border-info', selected);
      t.classList.toggle('text-muted', !selected);
      document.getElementById(t.getAttribute('aria-controls')).hidden = !selected;
    });
    tab.focus();
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => showTab(tab));
    tab.addEventListener('keydown', (e) => {
      const last = tabs.length - 1;
      let next = null;
      if (e.key === 'ArrowRight') next = i === last ? 0 : i + 1;
      if (e.key === 'ArrowLeft') next = i === 0 ? last : i - 1;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = last;
      if (next !== null) {
        e.preventDefault();
        showTab(tabs[next]);
      }
    });
  });
})();
