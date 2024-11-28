"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
console.log(dias.domingo);
console.log(dias["domingo"]);
console.log(dias[1]);
const d = new Date();
console.log(dias[d.getDay()]);
var cores;
(function (cores) {
    cores["branco"] = "#ffff";
    cores["preto"] = "#0000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "a0f0";
    cores["azul"] = "00f";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores["branco"]);
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["USER"] = 0] = "USER";
    tipoUsuario[tipoUsuario["ADMIN"] = 1] = "ADMIN";
    tipoUsuario[tipoUsuario["SUPER"] = 2] = "SUPER";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.SUPER);
const tp = 1;
console.log(tp);
