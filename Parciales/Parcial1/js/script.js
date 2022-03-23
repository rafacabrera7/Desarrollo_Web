const frutas = ['BANANA', 'MANZANA', 'MANGO', 'FRESA', 'MORA'];

var randomElement = frutas[Math.floor(Math.random() * frutas.length)];

function createUser(){
    alert('Agarra');
}

function pickWord(){

    let word = '';

    let t = '';
    for (let i = 0; i<randomElement.length; i++){
        t = randomElement[i];
        // if (i%2==0){
            t = '_';
        // }
        word += t;
    }
    console.log(word);

    document.getElementById('inputword').textContent = word;
}

function checkLetter(l){
    var letters_ls = randomElement.split('');
    if (letters_ls.includes(l)){
        // alert('Esta');
        updateWord(l);
        var game_letters = document.getElementById('inputword').innerText.split('');
        if (!(game_letters.includes('_'))){
            setTimeout(newWord, 3000);
        }    
    }
    else{
        // alert('No esta');
        loseLife();
    }


}

function newWord(){
    var prev = randomElement;

    var new_w = frutas[Math.floor(Math.random() * frutas.length)]

    while (new_w == prev){
        new_w = frutas[Math.floor(Math.random() * frutas.length)]
    }
    randomElement = new_w;

    pickWord();
}

function updateWord(l){
    let t = document.getElementById('inputword').innerText;

    let t_ls = t.split('');

    let addPoints = false;
    if (!(t_ls.includes(l))){
        addPoints = true;
    }

    for (let i = 0; i<randomElement.length; i++){
        if (randomElement[i]==l && t_ls!=l){
            t_ls[i] = l;
            let s = document.getElementById('puntos').innerText;

            let s_number = parseFloat(s);
    
            s_number+=1;
    
            document.getElementById('puntos').textContent = s_number;    
        }
    }

    let r = t_ls.join('');

    document.getElementById('inputword').textContent = r;
}

function loseLife(){
    document.getElementById('audio_f').play();

    let s = document.getElementById('vidas').innerText;

    let s_number = parseFloat(s);

    s_number-=1;

    document.getElementById('vidas').textContent = s_number;
    
    document.getElementById('game-image').src = `images/${s_number}.png`;

    if (s_number == 0){
        gameOver();
    }

}

function gameOver(){
    // var audio = new Audio('js/lose_audio.wav');
    // audio.play();
    let score = document.getElementById('puntos').innerText;

    document.getElementById('gameover').style.display = "block";    
    document.getElementById('nm-result').textContent = score;
    document.getElementById('sendscoreid').value = score;
    document.getElementById('nckname').textContent = getNickname();
    document.getElementById('sendnckid').value = getNickname();

}

function aceptar(){
    let t = document.getElementById('nm-result').innerText;
    window.location.href = "../Parciales/index.html";
}

function getNickname(){
    let t = window.location.href;
    let t_sp = t.split('=')[1]
    return t_sp;
}

function getNicknameInIndex(){
    let t = window.location.href;
    let t_sp_1 = t.split('?')[1];
    let nck_sp = t_sp_1.split('&')[0].split('=')[1];
    return nck_sp;    
}

function getScoreInIndex(){
    let t = window.location.href;
    let t_sp_1 = t.split('?')[1];
    let score_sp = t_sp_1.split('&')[1].split('=')[1];
    return score_sp;    
}


function add2Table(){
    var table = document.getElementById('ScoreTable');

    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = getNicknameInIndex();
    cell2.innerHTML = getScoreInIndex();
}


window.onload = pickWord;


