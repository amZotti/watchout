
function generateSVG(num) {
  var asteroids = createAsteroids(num);

  d3.select('.gameboard')
    .selectAll('svg')
    .data(asteroids)
    .enter()
    .append('svg')
      .append('circle')
        .attr('cx', function(d) {
          console.log(d);
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
generateSVG(10);
