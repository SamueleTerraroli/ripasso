const searchId = (array , id)=>{
    
    return array.find(element => element.id === id);
}

const searchCheaperPrices = (array , price) =>{

    return array.filter(element => element.prezzo <= price);
}

const searchExpensivePrices =(array, price) =>{
    return array.filter(element => element.prezzo >= price);
}

const searchByMaterial = (array, material) =>{ 

    /*    return array.filter(element => {
        const materialiLowerCase = element.materiali.map(materiale => materiale.toLowerCase())
        return materialiLowerCase.includes(material.toLowerCase())

    })
    */
    return array.filter(element => element.materiali.map(materiale => materiale.toLowerCase()).includes(material.toLowerCase()))
}




module.exports = {
    searchId,
    searchCheaperPrices,
    searchExpensivePrices,
    searchByMaterial
} 