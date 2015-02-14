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
    window.test = this;

  }

  Asteroid.prototype.randomColor = function() {
    var arr = ['brown', 'red', 'gray'];
    return arr[g.random(arr.length)];
  }

  Asteroid.prototype.setPosition = function() {
    this.top = g.random(window.innerHeight);
    this.left = g.random(window.innerWidth);
  };

  Asteroid.prototype.setInterval = function() {
    var context = this;
    function exec() {
      context.setPosition();
      setTimeout(exec, 3000);
    }
    exec();
  };


  var asteroids = [];
  for (var i = 0;i < num;i++) {
    asteroids.push(new Asteroid());
  }
  return asteroids;
}
