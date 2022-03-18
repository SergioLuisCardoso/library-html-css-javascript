/*  

FOR EACH

*/

const students = [
    { name: "Rodolfo", age: 25 },
    { name: "Maria", age: 43 },
    { name: "João", age: 21 },
    { name: "Bruno", age: 43 },
    { name: "Carla", age: 13 },
    { name: "Ana", age: 20 },
    { name: "Júlio", age: 26 }

];

let allStudentsAge = 0

students.forEach((student, index) => {
    console.log(`Nome do aluno: ${student.name}, tem ${student.age} anos de idade, e está na posição ${index} do array.`)
})