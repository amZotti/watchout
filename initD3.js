
function scoreBoardSetup() {
  var sexyBlue = '#6ABEDB';
  var color = '#F0F0F0';
  d3.select('.scoreboard')
    .selectAll('div')
    .style('background-color', function() {
      return sexyBlue;
    })
    .style('color', function() {
      return color;
    })
    .style('font-family', function() {
      return 'sans-serif';
    })
    .style('font-weight', function() {
      return 'bold';
    });
}

function boardSetup() {
  var height = "calc(" + window.innerHeight + 'px - 5em)';
  var width = '100%';
  var BGcolor = 'black';
  d3.select('.gameboard')
    .style('width', function() {
      return width;
    })
    .style('height', function() {
      return height;
    })
    .style('background', function() {
      return BGcolor;
    });
}

function documentSetup() {
  var BGcolor = '#757571';
  d3.select('body').style('margin', function() {
    return '0px';
  })
  .style('color', function() {
    return 'white';
  })
  .style('padding', function() {
    return '0px';
  });

  d3.select('main').style('background-color', function() {
    return BGcolor;
  })
  .style('padding', function() {
    return '1em';
  });
}

function init() {
  documentSetup();
  boardSetup();
  scoreBoardSetup();

}

init();
