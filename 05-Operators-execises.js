// 1. Crea una variable para cada operación aritmética
let suma = 2 + 2
let resta = 6 - 4
let multiplicar = 9 * 2
let dividir = 4 / 2
let modulo = 6 % 3
let exponente = 4 ** 7

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let numero1
let numero2
let numero3
let numero4
let numero5
let numero6

numero1 = suma
numero2 = resta
numero3 = multiplicar
numero4 = dividir
numero5 = modulo
numero6 = exponente

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(numero1 > numero2)
console.log(numero2 < numero3)
console.log(numero3 != modulo)
console.log(numero4 == numero4)
console.log(numero5 != numero3 && numero1 != numero2)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(numero1 < numero2)
console.log(numero2 > numero3)
console.log(numero3 == modulo)
console.log(numero4 == numero1)
console.log(numero5 == numero3 && numero1 > numero2)

// 5. Utiliza el operador lógico and
console.log(numero5 != numero3 && numero1 != numero2)

// 6. Utiliza el operador lógico or
console.log(numero5 != numero3 || numero1 != numero4)

// 7. Combina ambos operadores lógicos
console.log(numero5 != numero3 && numero1 != numero4 || numero1 > numero3 && numero5 > numero6 )

// 8. Añade alguna negación
console.log(!(numero1 > numero2))

// 9. Utiliza el operador ternario
suma ==  4 ? console.log("Correcto") : console.log("error") 
// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(suma == resta)
multiplicar == 11 || suma == 4 &&  resta ==2 ? console.log("verdadero") : console.log("falso")