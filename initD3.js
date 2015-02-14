
function scoreBoardSetup() {
  var sexyBlue = '#6ABEDB';
  var color = '#F0F0F0';
  d3.select('.scoreboard')
    .selectAll('div')
    .style({
      "background-color" : sexyBlue,
      "color" : color,
      'font-family' : 'sans-serif',
      'font-weight' : 'bold'
    });
}

function boardSetup() {
  var height = "calc(" + window.innerHeight + 'px - 5em)';
  var width = '100%';
  var BGcolor = 'black';
  d3.select('.gameboard')
    .style({
      'width' : width,
      'height' : height,
      'background' : BGcolor
    });
}

function documentSetup() {
  var BGcolor = '#757571';
  d3.select('body').style({
    'margin': '0px',
    'color': 'white',
    'padding': '0px'
  });

  d3.select('main').style({
    'background-color' : BGcolor,
    'padding' : '1em'
  });
}

function initializeSVGRender(asteroids) {
  d3.select('.gameboard')
      .selectAll('svg')
      .data(asteroids)
      .enter()
      .append('svg');
  updateSVGRender(asteroids);
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
      'left' : function(d) { return d.left },
      'transition': function(d) { return (d.transitionSpeed / 1000) + 's'},
      '-webkit-transition' : function(d) { return (d.transitionSpeed / 1000) + 's' }
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
  }, 1000);
}

function init() {
  documentSetup();
  boardSetup();
  scoreBoardSetup();
  generateSVG(10);

}

init();
