Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this )
    }
    return acumulador
}

const soma = (total, valor) => total + valor;
const  nums = [1, 2, 3, 4, 5, 6];
console.log(nums.reduce2(soma));

// com valor iniciar

Array.prototype.reduce3 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this )
    }
    return acumulador
}

const soma1 = (total1, valor1) => total1 + valor1;
const  nums1 = [1, 2, 3, 4, 5, 6];
console.log(nums1.reduce3(soma1, 21));