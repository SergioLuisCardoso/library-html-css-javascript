/*
CLASSES
*/

// O nome das classes precisam iniciar com letra maiúscula.
class Person{
    name;
    age;

    talk(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
    }
}

// Depois de criada a classe, devemos instanciá-la para podermos usá-la.

// Instanciando a classe:

const newPerson = new Person();
newPerson.name = "Sergio"
newPerson.age = "53"
newPerson.talk()
