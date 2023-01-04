// Closure é o escopo criado quando a funcao é declarada
// Esse escopo permite a funcao acessar e manupular variaveis externas a funcao

// Contexto Lexico em acao!

const x = 'Global';

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao());