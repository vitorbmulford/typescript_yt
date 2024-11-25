"use strict";
class Curso {
    canal;
    curso;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso("CFB", "typsecript");
console.log(c1.canal);
console.log(c1.curso);
