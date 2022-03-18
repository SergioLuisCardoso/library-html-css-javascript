/* 
    FILTER
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array, APENAS com os elementos filtrados
    - Aceita três parâmetros:
        - Item do array
        - Index
        - Array completo 


*/

const list = [
    { name: "Rodolfo", vip: true },
    { name: "Maria", vip: false },
    { name: "João", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Júlio", vip: false }

];


const test = list.filter(importants => {
    return importants.vip
})

console.log(test)

const students = [
    { name: "Rodolfo", testGrade: 7 },
    { name: "Maria", testGrade: 5 },
    { name: "João", testGrade: 8 },
    { name: "Bruno", testGrade: 9 },
    { name: "Carla", testGrade: 3 },
    { name: "Ana", testGrade: 2 },
    { name: "Júlio", testGrade: 10 }

];

const studentSmart = students.filter(student => {
    return student.testGrade >= 7
})

console.log(studentSmart)