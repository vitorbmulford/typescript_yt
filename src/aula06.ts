// array e readonly
let vnumeros: (number | number[])[] = [20, 30, 40, []];
let numeros: Array<number | number[]> = [20, 30, 40, []];
let bnumeros: number[] = [20, 30, 40];
numeros.push(20);
numeros.unshift(10);
console.log(numeros);

let numeros_ro: ReadonlyArray<number> = [1, 2, 3, 4];
