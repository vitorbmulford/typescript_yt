"use strict";
function logar(user, pass) {
    console.log(`User..: ${user}`);
    console.log(`Password..: ${pass}`);
}
logar("vitor", "1234");
console.log("------");
logar("teste", "0000");
function soma2(n1, n2) {
    let r = n1 + n2;
    return r;
}
const res = soma2(1, 2);
console.log(res);
