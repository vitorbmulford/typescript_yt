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
    info() {
        console.log(`Nome...: ${this.nome}`);
        console.log(`Ram....: ${this.ram}`);
        console.log(`Cpu....: ${this.cpu}`);
        console.log(`Ligado.: ${this.ligado ? "Sim" : "Não"}`);
        console.log("-------------------------");
    }
}
const comp12 = new Comptuador2("rapidao", 16, 4);
const comp22 = new Comptuador2("carao", 8, 2);
const comp32 = new Comptuador2("gamer", 32, 8);
comp12.ligado = true;
comp12.info();
comp22.info();
comp32.info();
