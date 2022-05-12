const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

const countChars  = cities.map(function(element, index, array) { 
    return element.length; 
    }); 
console.log(countChars)