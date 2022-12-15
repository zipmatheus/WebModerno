// par nome/valor
const saudacao = 'Opa'; // Contexto Lexico 1

function exec(){
    const saudacao = 'Falaaa'; // Contexto Lexico 2
    return saudacao;
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro', idade: 32, peso: 90, endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);