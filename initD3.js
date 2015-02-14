
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

function init() {
  documentSetup();
  boardSetup();
  scoreBoardSetup();
  generateSVG(10);

}

init();
