/* 
Exercício: Sistema de Cadastro de Usuários
Objetivo:

Criar um sistema simples para cadastrar usuários. Cada usuário terá um nome, um email e uma idade. A função de cadastro deve verificar se os dados são válidos (por exemplo, se a idade é maior ou igual a 18) e se o email é válido.
Requisitos:
    Interface para o usuário: Crie uma interface Usuario que tenha as propriedades nome, email e idade.
    Função de validação de email: Crie uma função validarEmail que valide o formato do email.
    Função de cadastro de usuário: Crie uma função cadastrarUsuario que receba um objeto Usuario e retorne uma mensagem indicando se o cadastro foi bem-sucedido ou se houve algum erro.
*/

// interface User {
//   user_name: string;
//   user_email: string;
//   user_age: number;
// }
// function validarEmail(user_email: string): boolean {
//   const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//   return regex.test(user_email);
// }

// function cadastrarUsuario(user: User): string {
//   if (user.user_age < 18) {
//     return "This user is not old enough";
//   }
//   if (!validarEmail(user.user_email)) {
//     return "Error: invalid email.";
//   }
//   return "registration completed successfully";
// }
// const usuario1: User = {
//   user_name: "João",
//   user_email: "joao@exemplo.com",
//   user_age: 20,
// };
// const usuario2: User = {
//   user_name: "Maria",
//   user_email: "mariaexemplo.com",
//   user_age: 17,
// };

// console.log(cadastrarUsuario(usuario1));
// console.log(cadastrarUsuario(usuario2));

/*Exercício: Sistema de Gerenciamento de Tarefas
Objetivo:

Criar um sistema simples para gerenciar tarefas, onde é possível adicionar, listar e marcar tarefas como concluídas.
Requisitos:

    Interface Tarefa: Crie uma interface Tarefa que deve conter as seguintes propriedades:
        id: um identificador único para a tarefa (número).
        descricao: uma descrição da tarefa (string).
        concluida: um valor booleano indicando se a tarefa foi concluída ou não.

    Classe GerenciadorDeTarefas:
        Crie uma classe GerenciadorDeTarefas que terá as seguintes funcionalidades:
            Um array de Tarefa para armazenar as tarefas.
            Um método adicionarTarefa(descricao: string) para adicionar uma nova tarefa.
            Um método listarTarefas() para listar todas as tarefas.
            Um método marcarComoConcluida(id: number) para marcar uma tarefa como concluída, baseado no id.
            Um método listarTarefasConcluidas() que lista apenas as tarefas que foram concluídas.

    Validação de ID:
        Quando você adicionar uma nova tarefa, o sistema deve gerar automaticamente um ID único para ela, que deve ser incrementado a cada nova tarefa adicionada. */
// Interface Tarefa
