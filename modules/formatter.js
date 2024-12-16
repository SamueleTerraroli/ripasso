function fullUppercase (stringa){
    return stringa.toUpperCase();
}

function fullLowercase (stringa){
    return stringa.toLowerCase();
}

function capitalize (stringa){
    return stringa.charAt(0).toUpperCase() + stringa.slice(1).toLowerCase();
}

function capitalizeAllWords (stringa){ 
    
    return stringa.split(' ').map(parola => capitalize(parola)).join(' ') 
    //return stringa.split(' ')
}

module.exports = {
    fullUppercase,
    fullLowercase,
    capitalize,
    capitalizeAllWords
};


