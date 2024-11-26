// Exercicio 1 Tipagem Básica
// Crie uma função que recebe dois números e retorna a soma deles. Defina os tipos explicitamente para os parâmetros e o retorno da função.
console.log("----Exercicio 1----");

const num1: number = 1;
const num2: number = 1;
const soma = num1 + num2;
console.log(soma);

// Exercicio 2 Interfaces
// Defina uma interface Pessoa com as seguintes propriedades:

//     nome (string)
//     idade (number)
//     email (string)

// Crie uma função que recebe um objeto do tipo Pessoa e imprime uma mensagem com o nome e a idade.


// Exercicio 3 Tipos Opcionais
// Expanda a interface Pessoa do exercício anterior para incluir uma propriedade opcional telefone (string). Atualize a função para lidar com a ausência dessa propriedade.


// 4. Union Types
// Crie uma função que recebe um parâmetro que pode ser um número ou uma string. Se for um número, retorne o dobro; se for uma string, retorne a string com letras maiúsculas.


// 5. Type Aliases
// Defina um type chamado ID que pode ser um número ou uma string. Crie uma função que recebe um parâmetro do tipo ID e imprime se é um número ou uma string.


// 6. Enums
// Defina um enum chamado StatusPedido com os valores:
//     Pendente
//     EmAndamento
//     Concluido
// Crie uma função que recebe um StatusPedido e imprime uma mensagem correspondente.


// 7. Generics
// Crie uma função genérica chamada reverter que aceita um array de qualquer tipo e retorna o array em ordem inversa.


// 8. Tuplas
// Crie uma tupla chamada Coordenadas que contém dois números representando a latitude e a longitude. Em seguida, crie uma função que recebe essa tupla e retorna uma string formatada com os valores.


// 9. Classes
// Crie uma classe Carro com as propriedades:
//     marca (string)
//     modelo (string)
//     ano (number)
// Adicione um método chamado descrever que retorna uma string com as informações do carro.


// 10. Mapeamento de Tipos
// Dado o tipo Pessoa do exercício anterior, crie um tipo chamado PessoaParcial que torne todas as propriedades opcionais. Use o tipo Partial<T>.


// 11. Manipulação de Promises
// Crie uma função assíncrona que simula buscar um usuário pelo ID. Use uma Promise que resolve com um objeto contendo id, nome, e email após 2 segundos.


// 12. Decorators
// Implemente um decorator de método que imprime no console o nome do método e os argumentos recebidos toda vez que ele for chamado.
