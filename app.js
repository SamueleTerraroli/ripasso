console.log('hello!');
const beers = require('./data/beers');
//const formatter = require('./modules/formatter');
const {fullUppercase, fullLowercase, capitalize, capitalizeAllWords} = require('./modules/formatter');
const {searchId , searchCheaperPrices, searchExpensivePrices, searchByMaterial } = require('./modules/searcher');
const toys = require('./data/toys');


const axios = require('axios');
axios.get(beers.ale)
    .then((res) =>{

        
    })

const string = 'Ciao coMe stai';
//console.log(capitalizeAllWords(string));
//console.log(searchId(toys , 6));
//console.log(searchExpensivePrices(toys, 10));
console.log(searchByMaterial(toys,'legno'));






