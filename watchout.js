// start slingin' some d3 here.

function generateElement(num) {
  var array = [];
  array.length = num;
  var string = 'test';
  d3.select('.gameboard')
    .selectAll('p')
    .data(array)
    .text(function(d){
      return string + d;
    })
    .enter()
    .append('p')
    .text(function(d){
      return string + d;
    });
}
generateSVG(10);
