'use strict';

let parallax;
let layers;
let layerVisible;

function parallaxScrolling(element) { // eslint-disable-line no-unused-vars
  parallax = parallax || element || document.querySelector('.parallax-scrolling');
  layers = layers || Array.from(parallax.querySelectorAll('.layer-background'));

  if (layers.length) {
    let offsetTop = layers.map(layer => layer.offsetTop);
    layerVisible = layers[offsetTop.indexOf(offsetTop.reduce(closestNumber))];

    layers.map(setZIndex);
    requestAnimationFrame(parallaxScrolling);
  }

  function setZIndex(layer) {
    let isLayerVisible = layer === layerVisible;
    layer.style.zIndex = isLayerVisible
      ? 5
      : 0;
  }

  function closestNumber(prev, curr) {
    return Math.abs(curr - parallax.scrollTop) < Math.abs(prev - parallax.scrollTop)
      ? curr
      : prev;
  }
}
