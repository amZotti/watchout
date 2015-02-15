function createAsteroids(num) {
  num = num || 1;
  function Asteroid() {
    var randomFactor = g.random(100);
    this.width = (100 + randomFactor);
    this.height = (100 + randomFactor);
    this.radius = (100 + randomFactor) / 2;
    this.top = null;
    this.left = null;
    this.setPosition();
    this.color = this.randomColor();
    this.setInterval();
    this.transitionSpeed = g.random(250, 1250);
    this.ticker = 0;
    this.duration = 100;
  }

  Asteroid.prototype.randomColor = function() {
    var arr = ['brown', 'red', 'gray'];
    return arr[g.random(arr.length)];
  }

  Asteroid.prototype.setPosition = function() {
    this.ticker++;
    if (this.ticker > this.duration) {
      this.ticker = 0;
      this.top = g.random(-100, window.innerHeight);
      this.left = g.random(-100, window.innerWidth);
    }
  };

  Asteroid.prototype.setInterval = function() {
    var context = this;
    function exec() {
      context.setPosition();
      setTimeout(exec, g.random(500,1000));
    }
    exec();
  };


  var asteroids = [];
  for (var i = 0;i < num;i++) {
    asteroids.push(new Asteroid());
  }
  return asteroids;
}
