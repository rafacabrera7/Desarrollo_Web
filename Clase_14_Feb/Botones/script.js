function calcularMayor(){
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;
    if (x>y){
        alert(`El número mayor es ${x}`)
    }
    else{
        alert(`El número mayor es ${y}`)
    }
}