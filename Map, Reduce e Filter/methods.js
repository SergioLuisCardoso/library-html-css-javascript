/*
    ARRAY - MÉTODOS

    // push - Adicionar novos itens ao "final" do array
    // length - informa o número de itens do 'array'
    // sort - Organiza nosso 'array' por ordem alfabética
    // delete - deleta itens específicos do nosso 'array'

    // splice (unir / ligar) - Insere e retira itens específicos do nosso array.
    // slice (fatiar) - Retira itens específicos de uma variável (cópia) do array original.
    // pop - Retira o último item do array
    // shift
*/

//const students = ["João", "Maria", "Pedro", "Carla", "Bia", "Maurício"]

// push - Adicionar novos itens ao "final" do array
//students.push("Sergio")
//console.log(students)


// length - informa o número de itens do 'array'
//console.log(students.length)

// sort - Organiza nosso 'array' por ordem alfabética
//console.log(students.sort())

// delete - deleta itens específicos do nosso 'array'
//delete students[0]




/*splice (unir / ligar) - Insere e retira itens específicos do nosso array.


const students = ["João", "Maria", "Pedro", "Carla", "Bia", "Maurício"]
console.log(students)
students.splice(1, 3, "Sergio")
console.log(students)

*/

/*
const students = ["João", "Maria", "Pedro", "Carla", "Bia", "Maurício"]

const newStudents = students.slice(1, 3)
console.log(newStudents)

*/


/*
// Pop - Elimina o último item do array
const students = ["João", "Maria", "Pedro", "Carla", "Bia", "Maurício"]
console.log(students)
students.pop()
console.log(students)

*/

// Shift - Elimina o último item do array
const students = ["João", "Maria", "Pedro", "Carla", "Bia", "Maurício"]
console.log(students)
students.shift()
console.log(students)