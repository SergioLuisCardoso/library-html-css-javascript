/*  

Recriar o array:
- Se o estudante obteve nota 7 ou superior : approved
- Se o estudante obteve nota abaixo de 7 : disapproved

*/

const students = [
    { name: "Rodolfo", testGrade: 7 },
    { name: "Maria", testGrade: 5 },
    { name: "João", testGrade: 8 },
    { name: "Bruno", testGrade: 9 },
    { name: "Carla", testGrade: 3 },
    { name: "Ana", testGrade: 2 },
    { name: "Júlio", testGrade: 10 }

];

//const black = confirm =>

const newStudent = students.map(result => {
    let testingResult

    if (result.testGrade >= 7) {
        testingResult = "Aproved"
    } else {
        testingResult = "Reproved"
    }

    const newestStudent = {

        name: result.name,
        //testGrade: result.testGrade,
        finalResult: testingResult

    }
    return newestStudent
})

console.log(newStudent)