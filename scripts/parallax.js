'use strict';

import simpleParallax 

export function initSimpleParallax() {
    const image = document.getElementsByClassName('parallax');
  new simpleParallax(image, { scale: 1.5, delay: 0.3 });

}