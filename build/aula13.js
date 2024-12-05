"use strict";
function soma2(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma2());
function novoUser(user, pass, nome) {
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
    if (typeof nome === undefined) {
        return console.log("usuario nao definiu nome");
    }
}
novoUser("vit", "1234");
