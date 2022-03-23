
var score = 0;
var posMole = -1;
var timeShowMole = 1000;

function updateScore(score){
  document.getElementById("score").textContent = score;
}

function showGame(){
  $(".loading").hide();
  $(".game").show();
}

function showMole(){
  posMole = getRandomArbitrary(0, 19);

  $( ".cuadro" ).each(function( index ) {
    if ( index ==  posMole) {
      $(this).addClass("castor");
    } else {
      $(this).removeClass("castor");
    }
  });

}

function getRandomArbitrary(min, max) {   
  return Math.round(Math.random() * (max - min) + min); 
}

function capturarClick(){
  $(".cuadro").click(function (){
    alert('Se debe calcular el score ....')
  });
}

function startGame() {
    updateScore(score);
    showGame();
    const myTimeout = setInterval(showMole, timeShowMole);
    capturarClick();
}

window.onload = startGame;