// Diferenças entre NULL, UNDEFINED e UNKNOWN
// NULL - Nulo
// UNDEFINED - Indefinido
// UNKNOW- Desconhecido
let tnome: string | null;
tnome = null;
console.log(tnome);

let tnome2: any;
console.log(tnome2);

let tnome3: unknown = 10; // so pode ser atribuido em unknown ou any
// let num: number = vnome3;
console.log(tnome3);
