"use strict";
const teste = (txt) => {
    console.log(txt);
};
const fsoma2 = (...n) => {
    let soma = 0;
    for (let i = 0; i < 1000; i++) {
        n.push(i);
    }
    const double = n.map((item) => item * 2);
    n.forEach((item) => {
        soma += item;
    });
    console.log(soma);
    console.log(`Double ${double}`);
};
fsoma2();
