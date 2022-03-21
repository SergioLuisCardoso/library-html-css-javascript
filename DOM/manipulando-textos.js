/*
innerText -> Retorna somente o texto, sem formatações ou elementos html.

innerHtml -> Retorna o texto, COM formatações e COM elementos html.

textContent -> Retorna o text COM formatações, mas sem os elementos html.
*/


// O comando ".textContent" altera o texto original do HTML.
// Retorna o text COM formatações, mas sem os elementos html.

// O comando ".innerText" altera o texto original do HTML.
// Retorna somente o texto, sem formatações ou elementos html.


/*
const element = document.querySelector('h1');
element.textContent = "Hello Word"
*/

const element = document.querySelector('h1');
element.innerHTML = "Hello Word <p>My paragraph</p>"
element.style.color = "red"
element.style.backgroundColor = "blue"

// Alerando o body (fundo da tela)
const element = document.querySelector('body');
element.style.backgroundColor = "blue"