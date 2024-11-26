// exercicio array aula 6

// Exercicio 1 Arrays e Tipos:
// Crie uma variável chamada numerosMisturados que seja um array que possa conter tanto números quanto arrays de números. Adicione ao array 3 números e 2 arrays de números. Por exemplo: [10, 20, [30, 40], 50, [60, 70]].

console.log("------Exercicio 1------");
const numerosMisturados: (number | number[])[] = [
  10,
  20,
  [30, 40],
  50,
  [60, 70],
];
console.log(numerosMisturados);

// Exercicio 2 Modificando um Array:
// Crie uma variável novosNumeros como um array de números e adicione pelo menos 5 números a ele. Em seguida, remova o último número do array usando o método pop().

console.log("------Exercicio 2------");
const novosNumeros = [];
for (let i = 0; i <= 5; i++) {
  novosNumeros.push(i);
}
novosNumeros.pop();
novosNumeros.push(30);
console.log(novosNumeros);

// Exercicio 3 Uso de indexOf() e splice():
// Com o array novosNumeros criado na questão anterior, use o método indexOf() para encontrar o índice do número 30 no array. Em seguida, use o método splice() para remover o número 30 e substituí-lo por dois novos números: 100 e 200.

console.log("------Exercicio 3------");
const index = novosNumeros.indexOf(30);
if (index == -1) {
  console.log("numero nao encontrado");
} else {
  novosNumeros.splice(index, 1, 100, 200);
  console.log(novosNumeros);
}

// Exercicio 4 Arrays de Somente Leitura:
// Crie uma variável readonlyNumeros do tipo readonly array contendo pelo menos 4 números. Tente modificar um dos valores desse array (por exemplo, alterando um número) e observe o que acontece. O que você consegue e o que não consegue fazer com um array readonly?

console.log("------Exercicio 4------");
const readonly: ReadonlyArray<number> = [1, 2, 3, 4];

// Isso vai gerar um erro de compilação:
// readonly.splice(1, 1, 100);  // Erro: 'splice' não pode ser chamado em um ReadonlyArray
console.log(readonly);

// Exercicio 5 Array com Diferentes Tipos:
// Crie uma variável arrayVariado que seja um array capaz de conter números e arrays de números. Adicione um número, um array de números e, em seguida, remova o último item do array. Depois, mostre o conteúdo final de arrayVariado.
console.log("------Exercicio 5------");
const arrayVariado: (number | number[])[] = [1, [2]];
arrayVariado.push(3, [4, 5]);
arrayVariado.pop();
console.log(arrayVariado);
