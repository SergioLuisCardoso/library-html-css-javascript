/*
1- Adicionar 10% ao valor de mercado de cada companhia
2- Filtrar empresas fundadas antes do ano 2000
3- Somar o valor de mercado das empresas mais antigas
            Map, Reduce e Filter
*/

const companies = [

    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }

];


const marketValue = companies.map(upValue => {
    const newValue = {
        name: upValue.name,
        marketValue: upValue.marketValue * 0.100 + upValue.marketValue,
        CEO: upValue.CEO,
        foundedOn: upValue.foundedOn
    }
    return newValue

})

console.log("*****************************************************")
console.log("*** Added 10% to the market value of each company ***")
console.log("*****************************************************")
console.log(marketValue)

const olderCompanies = marketValue.filter(choice => {
    return choice.foundedOn < 2000
})

console.log("**********************************************")
console.log("*** Companies founded before the year 2000 ***")
console.log("**********************************************")
console.log(olderCompanies)

const sumMarketValue = olderCompanies.reduce((acc, sumValues) => {
    return (acc + sumValues.marketValue)
}, 0)


console.log("***************************************")
console.log("*** Market value of older companies ***")
console.log("***************************************")
console.log(`The sum of the market value of the oldest companies is U$ ${sumMarketValue.toFixed(2)}`)
    //console.log(sumMarketValue)