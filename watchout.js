
var player = {
  size: '10',
  top: 0,
  left: 0
};

d3.select('main')
  .data([player])
  .append('svg')
  .attr('id', 'player')
  .style({
    'position' : 'absolute',
    'height' : function(d) { return d.size * 2 + 'px' },
    'width' : function(d) { return d.size * 2 + 'px' },
    'top' : '300px',
    'left' : '300px'
  })
    .append('circle')
      .attr('cx', function(d) { return d.size})
      .attr('cy', function(d) { return d.size})
      .attr('fill', 'yellow')
      .attr('r', function(d) { return d.size});

d3.select('main').on('mousemove', function () {
   player.left = d3.mouse(this)[0];
   player.top = d3.mouse(this)[1];
   d3.select('#player')
     .style({
      'top' : player.top,
      'left' : player.left
     });
});


d3.timer(function() {
  var top = player.top;
  var left = player.left;

  asteroids.each(function(asteroid) {

    if (Math.abs(asteroid.top - top) < 50 && Math.abs(asteroid.left - left) < 50) {
      g.reset();
      d3.select('.collisions')
        .select('span')
        .text(g.collisions++);
      d3.select('main')
        .style('background-color', 'red');
      setTimeout(function() {
         d3.select('main').style('background-color', 'black');
      }, 50);
        // .transition()
        // .duraction(1000)
        // .style('background-color', 'black');
    }
    asteroid.setPosition();
  });
});
