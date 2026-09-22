// Created by Harsh Nair (@harsh-91) | Made in India | SPDX-License-Identifier: Apache-2.0
(() => {
  const button = document.querySelector('.motion-control');
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const sync = () => {
    button.hidden = preference.matches;
  };
  button.addEventListener('click', () => {
    const paused = document.documentElement.classList.toggle('motion-paused');
    button.setAttribute('aria-pressed', String(paused));
    button.textContent = paused ? 'Resume animations' : 'Pause animations';
  });
  preference.addEventListener('change', sync);
  sync();
})();
