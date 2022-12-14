let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo); //Uma negacao inverte.
console.log(!!isAtivo); //Duas negacao mantem o valor padrao.

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'Texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Para finalizar...");
console.log(!!('' || null || 0 || ' '));

let nome = '';
console.log(nome || 'Desconhecido'); //Se a variavel tiver um valor definico ele imprimiria o valor.