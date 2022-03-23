// alert("Bienvenido")
// var nombre = prompt('¿Nombre?');
// alert(`Buenos días, ${nombre}`);

// alert('Par o impar');
// var n = prompt('¿Numero?');
// if (n%2 == 0){
//     alert(`${n} es par`)
// }
// else{
//     alert(`${n} es impar`)
// }

alert("Calculemos el factorial")
const n = prompt("¿Número?");

const fact = function(x){
    let result = 1;
    for (let index = 1; index<=n; index++){
        result = result * index 
    }
    return result
}

alert(`El factorial de ${n} es ${fact(n)}`);