const readline = require("readline-sync");

let usuarioCorreto = "admin";
let senhaCorreta = "@admin";
let produtos = ["teclado", "monitor", "mouse"];

console.log("digite o usuario:");
let usuarioDigitado = readline.question();
console.log("digite a senha:");
let SenhaDigitada = readline.question();

console.log(usuarioDigitado);

if (usuarioDigitado === usuarioCorreto && SenhaDigitada === senhaCorreta) {
    console.log("acesso liberado");

    console.log("ESCOLHA A OPÇÃO:");
    console.log("1 - LISTAR");
    console.log("2 - CADASTRAR");
    console.log("3 - EDITAR");
    console.log("4 - EXCLUIR");
    console.log("0 - SAIR");
    let opcao = readline.question();

    while (opcao != "0") {
        if (opcao === "1") {
            console.log(produtos);
        }
        else if (opcao === "2") {
            console.log("cadastrar produto");
        }
        else if (opcao === "3") {
            console.log("editar produto");
        }
        else if (opcao === "4") {
            console.log("excluir produto");
        }
        else {
            console.log("opção invalida");
        }
        console.log("escolha sua opção");

        opcao = readline.question();


    }


}
else {
    console.log("acesso não liberado");

}