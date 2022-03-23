alert('Bienvenido');
var nombre = prompt('¿nombre?');
alert(`Su nombre es: ${nombre}`);

var num = prompt('¿Nùmero?');
var result;

if(num % 2 == 0){
 result = false;
} else {
  result = true;
}

alert(`¿El nùmero es impar?: ${result}`);

alert('Factorial!!');

var num2 = prompt('¿Nùmero?');


const fact = function(n){
  let result = n;
  for (let i = (n -1); i > 0; i--) {
      result = result * i;
  }

  return result;
} 

var factorial = fact(num2);

alert(`El factorial de ${num2} es ${factorial}`);


