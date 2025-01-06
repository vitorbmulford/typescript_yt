"use strict";
class Comptuador2 {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        console.log("novo computado criado");
    }
}
const comp12 = new Comptuador2("rapidao", 16, 4);
const comp22 = new Comptuador2("carao", 8, 2);
const comp32 = new Comptuador2("gamer", 32, 8);
console.log(comp12, comp22, comp32);
