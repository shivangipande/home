setTimeout(fade_out, 7000);

function fade_out() {
  $("#mydiv").fadeOut().empty();
}
var pathEls = document.querySelectorAll('.anim path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: 4000,
    delay: 40,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}
$("body").mousemove(function(event) {
  var eye = $(".eye");
  var x = eye.offset().left + eye.width() / 2;
  var y = eye.offset().top + eye.height() / 2;
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = rad * (180 / Math.PI) * -1 + 90;
  eye.css({
    "-webkit-transform": "rotate(" + rot + "deg)",
    "-moz-transform": "rotate(" + rot + "deg)",
    "-ms-transform": "rotate(" + rot + "deg)",
    transform: "rotate(" + rot + "deg)"
  });
});


