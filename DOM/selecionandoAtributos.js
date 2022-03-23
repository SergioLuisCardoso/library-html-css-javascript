const input = document.querySelector("input")
const select = document.querySelector("select")
const button = document.querySelector("button")

/*
input.onclick = (event) => {
    console.log(event)
}

*/

input.addEventListener("focus", () => {
    console.log("Dei um foco")
})

select.addEventListener('change', () => {
    console.log(select.value)
})

button.addEventListener("click", () => {
    alert("O botão foi clicado!!!!")
})


/*
- Cria-se a função...
const clickButton = () =>{
    alert("O botão foi clicado")
}
...e a inclui no evento
button.addEventListener ('click' , clickButton)


*/