// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma(2, 5);

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 8));

// retorno implicito
const subitracao = (a, b) => a - b;

console.log(subitracao(10, 1));