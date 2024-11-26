"use strict";
console.log("------Exercicio 1------");
const numerosMisturados = [
    10,
    20,
    [30, 40],
    50,
    [60, 70],
];
console.log(numerosMisturados);
console.log("------Exercicio 2------");
const novosNumeros = [];
for (let i = 0; i <= 5; i++) {
    novosNumeros.push(i);
}
novosNumeros.pop();
novosNumeros.push(30);
console.log(novosNumeros);
console.log("------Exercicio 3------");
const index = novosNumeros.indexOf(30);
if (index == -1) {
    console.log("numero nao encontrado");
}
else {
    novosNumeros.splice(index, 1, 100, 200);
    console.log(novosNumeros);
}
console.log("------Exercicio 4------");
const readonly = [1, 2, 3, 4];
console.log(readonly);
console.log("------Exercicio 5------");
const arrayVariado = [1, [2]];
arrayVariado.push(3, [4, 5]);
arrayVariado.pop();
console.log(arrayVariado);
