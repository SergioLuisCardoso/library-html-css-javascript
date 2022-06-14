// Adquirindo acesso ao 'person' do arquivo 'sum'
// Crio uma variável e o comando 'require'

//const person = require ('./sum')

//console.log(person)


const sum = require('./sum.js')
const multi = require('./multi.js')

console.log(sum(2,5))
console.log(multi(2,5))