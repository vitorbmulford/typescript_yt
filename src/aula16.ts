class Comptuador {
  nome: string = "comp1";
  ram: number = 0;
  cpu: number = 0;
  ligado: boolean = false;
}

const comp1 = new Comptuador();
const comp2 = new Comptuador();
const comp3 = new Comptuador();

comp1.nome = "Rapidao";
comp2.nome = "Carao";
comp3.nome = "Gamer";

console.log(comp1, comp2, comp3);
