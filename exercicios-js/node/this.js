console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

// this dentro de uma funcao acessa o global
function logThis() {
    console.log('Dentro de uma funcao...')
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);
}

logThis();