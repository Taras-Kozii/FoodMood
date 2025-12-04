'use strict';

import { initNavigation } from './menu.js';
import { initHeader } from './header.js';
import SimpleParallax from './effects/simpleParallax/index.js';
// import { watcherAnim, watcherToggle, countAnimate } from './animation.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeader();
  // watcherToggle('.hero .scroll-anim', 0.3);
  // watcherAnim('[data-counter]', 0.2, countAnimate, false);
  const images = document.querySelectorAll('.parallax-img');
  new SimpleParallax(images, {
    delay: 1,
    orientation: 'down left',
    scale: 1.3,
    overflow: false,
});
});
