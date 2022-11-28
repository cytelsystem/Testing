function suma(a,b){
    return a+b;
    // if(isNaN(a) || isNaN(b)){
    //     console.log("el valor debe ser numerico");
    // }else {
    //     return a+b;
    // }
}

console.log("suma" + suma("hola", null));

function resta(a,b){
    return a-b;
}

console.log(resta(3, 5));

function multiplicacion(a,b){
    return a*b;
}

function division(a,b){
    return a*b;
}

module.exports = {suma, resta, multiplicacion, division};
