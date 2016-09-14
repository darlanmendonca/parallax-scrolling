'use strict';

let parallax = document.querySelector('.parallax-scrolling');
let layers = Array.from(document.querySelectorAll('.parallax-scrolling .layer-background'));
if (layers.length) {
  setZIndexLayer();
}

function getOffsetTop(layer) {
  return layer.offsetTop;
}

function closestNumber(prev, curr) {
  return Math.abs(curr - parallax.scrollTop) < Math.abs(prev - parallax.scrollTop)
    ? curr
    : prev;
}

function setZIndexLayer() {
  let layersOffsetTop = layers.map(getOffsetTop);
  let layerVisible = layers[layersOffsetTop.indexOf(layersOffsetTop.reduce(closestNumber))];

  layers.map(setZIndex);

  function setZIndex(layer) {
    let isLayerVisible = layer === layerVisible;
    layer.style.zIndex = isLayerVisible
      ? 5
      : 0;
  }
  requestAnimationFrame(setZIndexLayer);
}
