function logar(user: string, pass: string): void {
  console.log(`User..: ${user}`);
  console.log(`Password..: ${pass}`);
}
logar("vitor", "1234");

console.log("------");

logar("teste", "0000");

function soma2(n1: number, n2: number): number {
  let r = n1 + n2;
  return r;
}
const res = soma2(1, 2);
console.log(res);
