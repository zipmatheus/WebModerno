let a = 7;
let b = 94;
let temp;

temp = a; a = b; b = temp;

//[a,b] = [b,a]; Recurso do javaScript para troca.
//Depois da troca... a = 94 e b = 7.

console.log(a);
console.log(b);
