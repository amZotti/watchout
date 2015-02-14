

function initializeSVGRender(asteroids) {
  d3.select('.gameboard')
      .selectAll('svg')
      .data(asteroids)
      .enter()
      .append('svg');
}

function updateSVGRender(asteroids) {
  d3.select('.gameboard')
    .selectAll('svg')
    .data(asteroids)
    .style({
      'position' : 'absolute',
      'height' : function(d) { return d.height },
      'width' : function(d) { return d.width },
      'top' : function(d) { return d.top },
      'left' : function(d) { return d.left }
      })
      .append('circle')
        .attr('cx', function(d) {
          return d.width / 2;
        })
        .attr('cy', function(d) {
          return d.height / 2;
        })
        .attr('fill', function(d) {
          return d.color;
        })
        .attr('r', function(d) {
          return d.radius;
        });
}


function generateSVG(num) {
  var asteroids = createAsteroids(num);
  initializeSVGRender(asteroids);
  setInterval(function() {
    updateSVGRender.call(updateSVGRender, asteroids);
  }, 3000);
}

