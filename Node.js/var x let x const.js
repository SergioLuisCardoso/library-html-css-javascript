// VAR x LET x CONST
// Devemos evitar usar o 'VAR'
// Variáveis criadas dentro do 'escopo filho (escopo global)' podem ser acessadas pelo 'escopo pai', 
// mas nunca o contrário - com excessão do 'var' que permite o acesso de 'qualquer escopo', 
// por isso deve ser evitado.
// CONST -> O valor desta variável jamais poderá ser trocada, por isso a definimos apenas uma vez.


if (true) {

    let myLet = "Olá";
    const myConstr = "Hei";
    var myVar = "Hello";

    console.log(myLet)
    console.log(myConstr)
  
}

console.log(myVar)