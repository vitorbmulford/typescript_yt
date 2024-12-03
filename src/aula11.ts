let nvalor: number;
let svalor: string;
let uvalor: unknown;

uvalor = 10;
console.log(typeof uvalor);

nvalor = uvalor as number;
svalor = uvalor as string;

svalor += 10;

console.log(uvalor);
console.log(svalor);
