//Disallow access to scoreboard by using IIFE
g.reset = (function(){
  var score = 0;
  var highScore = 0;

  function setScore() {
    score++;
    if (score > highScore) {
      highScore = score;
      updateHighScore();
    }
    updateScore();
  }

  function updateScore() {
    d3.select('.current')
      .select('span')
      .text(score);
  }

  function updateHighScore() {
    d3.select('.high')
      .select('span')
      .text(highScore);
  }
  setInterval(setScore, 87.5);

  return function() {
    score = 0;
  }
})();
