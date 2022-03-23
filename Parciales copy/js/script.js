const frutas = ['BANANA', 'MANZANA', 'MANGO', 'FRESA', 'MORA'];

var randomElement = frutas[Math.floor(Math.random() * frutas.length)];

function createUser(){
    // alert(db);
}

function pickWord(){

    let word = '';

    let t = '';
    for (let i = 0; i<randomElement.length; i++){
        t = randomElement[i];
        if (i%2==0){
            t = '_';
        }
        word += t;
    }
    console.log(word);

    document.getElementById('inputword').textContent = word;
}

function checkLetter(l){
    var letters_ls = randomElement.split('');

    if (letters_ls.includes(l)){
        alert('Esta');
        updateWord(l);
    }
    else{
        alert('No esta');
        loseLife();
    }
    
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
    let s = document.getElementById('vidas').innerText;

    let s_number = parseFloat(s);

    s_number-=1;

    document.getElementById('vidas').textContent = s_number;
    
    document.getElementById('game-image').src = `images/${s_number}.png`;

    if (s_number == 0){
        gameOver('Rafa', 10);
    }

}

function gameOver(nickname, score){
    document.getElementById('gameover').style.display = "block";
}

function showIndex(){
    document.getElementById('indexpage').style.display = "block";
    document.getElementById('gamepage').style.display = "none";
}

function showGame(){
    document.getElementById('indexpage').style.display = "none";
    document.getElementById('gamepage').style.display = "block";
}

window.onload = pickWord;