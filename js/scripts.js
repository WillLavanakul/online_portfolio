function preamble_animation() {
  var preamble = document.getElementById('preamble');
  var preamble_width = 0.45*preamble.offsetWidth;
  var preamble_height = 0.95*preamble.offsetHeight;
  gsap.to('.preamble', {
    duration: 2,
    opacity: 1,
    width: preamble_width,
    height: preamble_height,
    ease: Power1.easeInOut
  })
}

function name_animation() {
  gsap.to('.name', {
    duration: 1,
    opacity: 1,
    y: -40,
    ease: Power3.easeInOut
  })
  gsap.to('.major', {
    duration: 1,
    opacity: 1,
    y: -40,
    ease: Power3.easeInOut
  })
}


setTimeout(preamble_animation, 1000);
setTimeout(name_animation, 3000);
