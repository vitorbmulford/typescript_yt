"use strict";
let dados = {
    nome: "DuglesTildes",
    idade: 25,
    statu: "A",
    ola: () => {
        console.log("oi");
    },
};
dados.nome = "vitor";
const nome_2 = dados.nome;
console.log(typeof dados);
console.log(dados);
console.log(dados.nome);
dados.ola();
console.log(nome_2);
