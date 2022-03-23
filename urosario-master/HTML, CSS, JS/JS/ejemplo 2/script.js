function calcularMayor(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    if (n1 > n2) {
        alert('El nùmero mayor es:' + n1);
    } else {
        alert('El nùmero mayor es:' + n2);
    }
}