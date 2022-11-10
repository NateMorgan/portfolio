// Adapted from https://codepen.io/tmrDevelops/pen/vOPZBv

var c = document.getElementById('cw');
var context = c.getContext('2d');

var col = function(x, y, r, g, b) {
  context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  context.fillRect(x, y, 1,1);
}
var R = function(x, y, t) {
  return( Math.floor(222 + 34*Math.cos( (x*x-y*y)/300 + t )) );
}

var G = function(x, y, t) {
  return(255);
}

var B = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}

var t = 0;
let x, y

var run = function() {
  for(x=0;x<=35;x++) {
    for(y=0;y<=35;y++) {
      col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
    }
  }
  t = t + .025;
  window.requestAnimationFrame(run);
}

run();
