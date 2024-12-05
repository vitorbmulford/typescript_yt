// paramtreos opcionais ou nao 

function soma2(n1: number = 0, n2: number = 0): number {
  return n1 + n2;
}
console.log(soma2());

function novoUser(user: string, pass: string, nome?: string) {
  console.log(`User: ${user}`);
  console.log(`Pass: ${pass}`);
  if (typeof nome === undefined) {
    return console.log("usuario nao definiu nome");
  }
}
novoUser("vit", "1234");
