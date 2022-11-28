const {suma, resta, multiplicacion, division} = require('../calc'); //Llama a las funciones que quiero probar




describe("Prueba de Sumas", () => {

   test("Suma de dos numeros", () => { // sele coloca un nombre de descripcion.
     expect(suma(1, 2)).toBe(3);
   })

   test ("Suma de cero y cero", () => {
     expect(suma(0 , 0)).toBe(0);
   })

   test("suma de nulos", () => {
     const resultado = suma(null , null);
     expect(resultado).toBe(0);
   })

   test("null y un numero", () => {
     expect(suma(null, 2)).toBe(2);
   })

})

describe("Pruebas tesat Resta", () =>{

  test("test resta un numero de otro", () =>{
    expect(resta(5, 3)).toBe(2);
  })

  test("restar un valor bajo un valor alto", () => {
    expect(resta(3,5)).toBe(-2);
  })

})// fin test resta
