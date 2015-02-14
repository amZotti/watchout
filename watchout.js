var x = 0;
var player = {
  size: '10',
};
window.player2 = d3.select('main')
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
   x = d3.mouse(this)[0];
   y = d3.mouse(this)[1];
   d3.select('#player')
     .style({
      'top' : y,
      'left' : x
     });
});
