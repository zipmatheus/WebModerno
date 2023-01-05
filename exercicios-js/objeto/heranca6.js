function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123);
const aula2 = new Aula('Ate breve', 456);
console.log(aula1, aula2);

// Simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.___proto___ = f.___proto___
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123);
const aula4 = novo(Aula, 'Ate breve', 456);
console.log(aula3, aula4);