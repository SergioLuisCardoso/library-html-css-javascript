/*
this em inglés signfica este,esta,isto ....
No Javascript,o this faz referência:

Node ==> nodule.exports
Web => window

Escopo:
    → Global → Quando começamos a escrever nossa aplicação.
        No contexto global, o this faz referência ao objeto global,
        que é o objeto window no navegador de internet ou ao objeto global no Node.js.

    → Local → Por exemplo, dentro de una função!
*/

console.log(global)

const person = {

    name: "Rodolfo",
    age: 25,
    talk: function () {

        console.log("0lá")
    }
}