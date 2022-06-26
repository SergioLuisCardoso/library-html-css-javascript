/*
CLASSES
*/

// O nome das classes precisam iniciar com letra maiúscula.
// Método Construtor:

class Person{
    // O método construtor será acionado logo após nós instanciarmos a nossa classe
    constructor(name, age){
        console.log(`Hello, I'm ${name}.`)
        this.name = name 
        this.age = age

    }
    

    talk(){
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`)
    }
}

// Depois de criada a classe, devemos instanciá-la para podermos usá-la.

// Instanciando a classe:

const newPerson = new Person("Sergio", 53);
const newPerson1 = new Person("Anelise", 42);
const newPerson2 = new Person("Gilberto", 73);
const newPerson3 = new Person("Neusa", 72);


newPerson.talk()
newPerson1.talk()
newPerson2.talk()
newPerson3.talk()

