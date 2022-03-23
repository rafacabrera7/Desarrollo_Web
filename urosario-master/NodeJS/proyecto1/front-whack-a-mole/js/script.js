
var score = 0;
var intentos = 0;
var maxIntentos = 5;
var posMole = -1;
var timeShowMole = 2000;

function updateScore(score){
  document.getElementById("score").textContent = score;
}

function updateIntentos(intentos){
  document.getElementById("intentos").textContent = intentos;
}

function updateMaxIntentos(maxIntentos){
  document.getElementById("maxIntentos").textContent = maxIntentos;
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
    var cuadroClick = $(this)
    var indexCuadro = $(this).attr("id");

    intentos++;
    if (indexCuadro == posMole){
      score++;
    } else{
      score--;
      intentos++;
    }

    if (intentos>= maxIntentos){
      alert('Fin del juego...');
    }
    updateScore(score);
  
  });
}

function startGame() {
    updateScore(score);
    updateIntentos(intentos);
    updateMaxIntentos(maxIntentos);
    showGame();
    const myTimeout = setInterval(showMole, timeShowMole);
    capturarClick();
}

window.onload = startGame;