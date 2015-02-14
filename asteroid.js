function createAsteroid(num) {
  num = num || 1;
  function Asteroid() {
    var randomFactor = g.random(100);
    this.width = (100 + randomFactor);
    this.height = (100 + randomFactor);
    this.radius = (100 + randomFactor) / 2;
    this.top = null;
    this.left = null;
    this.setPosition();
  }

  Asteroid.prototype.setPosition = function() {
    this.top = g.random(window.innerHeight);
    this.left = g.random(window.innerWidth);
  };

  var asteroids = [];
  for (var i = 0;i < num;i++) {
    asteroids.push(new Asteroid());
  }
  return asteroids;
}
