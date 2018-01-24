var makeSquareDancer = function(top, left, timeBetweenSteps) {

  makeRainbowDancer.call(this, top, left, timeBetweenSteps);
  this.$node.css({'border-radius': 0});
  var random = Math.floor(Math.random() * 1000);
  var random2 = Math.floor(Math.random() * 1000);
  var speed = Math.floor(Math.random() * 5000);
  this.$node.animate({top: random, left: random2}, 2000);
};

makeSquareDancer.prototype = Object.create(makeRainbowDancer.prototype);
makeSquareDancer.prototype.constructor = makeRainbowDancer;
