// Apenas números pares e divisíveis por 5

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];


const newFilter = list.filter(item => {
    return (item % 2 == 0 && item % 5 == 0)
})

console.log(newFilter)


// Criar novo array, separar apenas as que foram criadas a partir de 1975
// Mais de de u$ 2.000.000 de valor de mercado

const companies = [

    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }

];

const newCompanies = companies.filter(comparison => {
    return (comparison.foundedOn > 1975 && comparison.marketValue > 200)
})

console.log(newCompanies)