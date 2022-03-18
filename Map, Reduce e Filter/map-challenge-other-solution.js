/*  

Recriar o array:
- Se a pessoa for 'true' na nova lista, recebe o setor 'black' - , sector: "Black"
- Se a pessoa for 'false' na nova lista, recebe o setor 'green' - , sector: "Green"

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

//const black = confirm =>

const newList = list.map(guest => {
    const newestList = {
        name: guest.name,
        vip: guest.vip,
        sector: guest.vip ? "Green" : "Blue"
    }
    return newestList
})

console.log(newList)