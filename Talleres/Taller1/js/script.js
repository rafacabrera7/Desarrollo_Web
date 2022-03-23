var box = "Inserte un número"

function updateBox(t){
    let sumState = document.getElementById("summing").innerText;

    let typingState = document.getElementById("typing").innerText;

    if (sumState == "0"){
        let x = document.getElementById("box").innerText;
        if (x==box){
            document.getElementById("box").textContent = t;
        }
        else{
            document.getElementById("box").textContent = x + t;
        }    
    }

    else if (sumState == "1" && typingState== "0"){
        document.getElementById("box").textContent = "";
        document.getElementById("box").textContent = t;  
        document.getElementById("typing").textContent = 1;    
    }

    else if (sumState == "1" && typingState== "1"){
        let x = document.getElementById("box").innerText;
        document.getElementById("box").textContent = x + t;
    }
}


function addPoint(){
    let x = document.getElementById("box").innerText;
    x = x+"."
    document.getElementById("box").textContent = x;
}

function sum(){
    document.getElementById("summing").textContent = 1;
    document.getElementById("subtracting").textContent = 0;

    // document.getElementById("typing").textContent = 1;

    let t = document.getElementById("sumFirstItem").innerText;

    let x = document.getElementById("box").innerText;

    if (t == "--"){
        document.getElementById("sumFirstItem").textContent = x;
        document.getElementById("box").textContent = "";
    }
    else{
        t = parseFloat(t);
        x = parseFloat(x);

        let r = t + x;

        document.getElementById("sumFirstItem").textContent = r;

        document.getElementById("box").textContent = r;
    }
}

function sub(){
    document.getElementById("subtracting").textContent = 1;
    document.getElementById("summing").textContent = 0;

    // document.getElementById("typing").textContent = 1;

    let t = document.getElementById("subtrFirstItem").innerText;

    let x = document.getElementById("box").innerText;

    if (t == "--"){
        document.getElementById("subtrFirstItem").textContent = x;
        document.getElementById("box").textContent = "";
    }
    else{
        t = parseFloat(t);
        x = parseFloat(x);

        let r = t - x;

        document.getElementById("subtrFirstItem").textContent = r;

        document.getElementById("box").textContent = r;
    }
}

function equal(){
    let s = document.getElementById("summing").innerText;
    let p = document.getElementById("subtracting").innerText;
    if (s=="1"){
        sum();
        // document.getElementById("box").textContent = document.getElementById("sumFirstItem").innerText;
    }
    else if (p=="1"){
        sub();
        // document.getElementById("box").textContent = document.getElementById("subtrFirstItem").innerText;
    }
}