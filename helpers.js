window.g = {};

g.random = function(min, max) {
  if (max === undefined) {
    max = min;
    min = 0
  }
  return Math.floor(Math.random() * (max-min)) + min;
}

g.collisions = 0;
