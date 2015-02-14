// start slingin' some d3 here.

function generateSVG(num) {
  var array = [];
  array.length = num;
  var string = 'test';

  function asteroid(prop){
    var randomFactor = Math.random() * 40 + 1;
    var asteroid = {
      width: 100,
      height: 100,
      radius: randomFactor,
      color: 'brown'
    }

    return asteroid[prop];
  }

  d3.select('.gameboard')
    .selectAll('svg')
    .data(array)
    //new
    .enter()
    .append('svg')
      .append('circle')
        .attr('cx', function() {
          return asteroid("width") / 2;
        })
        .attr('cy', function() {
          return asteroid("height") / 2;
        })
        .attr('fill', function() {
          return asteroid("color");
        })
        .attr('r', function() {
          return asteroid("radius");
        });

}
generateSVG(10);
