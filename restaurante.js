const readline = require("readline-sync");

let cardapio = ["pizza", "hamburguer", "suco", "batata frita", "lasanha", "salada", "pudim", "refrigerante", "agua", "cafe"];
let usuarioCorreto = "admin";
let senhaCorreta = "123";

console.log(cardapio);

console.log("digite o usuario:");
let usuario = readline.question();
console.log("digite a senha:");
let Senha = readline.question();

if (usuario === usuarioCorreto && Senha === senhaCorreta) {
    console.log("acesso liberado");

    console.log("ESCOLHA A OPÇÃO:");
    console.log("1 - CADASTRAR");
    console.log("2 - EDITAR");
    console.log("3 - EXCLUIR");
    console.log("0 - SAIR");

    let escolha = readline.question();

    while (escolha != "0") {

        if (escolha === "1") {
            console.log("Digite o nome do alimento:");
            let alimento = readline.question();

            cardapio.push(alimento);

            console.log("alimento cadastrado com sucesso!");
            console.log(cardapio);
        }

        else if (escolha === "2") {
            console.log(cardapio);

            console.log("Digite o nome do alimento que deseja editar:");
            let alimento = readline.question();

            let indice = cardapio.indexOf(alimento);

            if (indice !== -1) {
                console.log("Digite o novo nome do alimento:");
                let novoalimento = readline.question();

                cardapio[indice] = novoalimento;

                console.log("alimento editado com sucesso!");
                console.log(cardapio);
            }
            else {
                console.log("alimento não encontrado!");
            }
        }

        else if (escolha === "3") {
            console.log(cardapio);

            console.log("Digite o nome do alimento que deseja excluir:");
            let alimento = readline.question();

            let indice = cardapio.indexOf(alimento);

            if (indice !== -1) {
                cardapio.splice(indice, 1);

                console.log("alimento excluído com sucesso!");
                console.log(cardapio);
            }
            else {
                console.log("alimento não encontrado!");
            }
        }

        else {
            console.log("opção invalida");
        }

        console.log("ESCOLHA SUA OPÇÃO:");
        console.log("1 - CADASTRAR");
        console.log("2 - EDITAR");
        console.log("3 - EXCLUIR");
        console.log("0 - SAIR");

        escolha = readline.question();
    }

    console.log("Sistema encerrado!");

}
else {
    console.log("acesso não liberado");
}