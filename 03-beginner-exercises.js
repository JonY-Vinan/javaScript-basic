// 1. Escribe un comentario en una línea

//Esta linea es un comentario

// 2. Escribe un comentario en varias líneas

/*
 Este comentario 
 esta escrito en 
 varias lineas

*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

//String
let palabra = "hola"

//Number
let numero = 10

//boolean
let isPersona = false
let isCosa = true

//BigInt
let cantidad = 124575462745725n
let cantidad1 = BigInt(2353462645724572)

//undefined
let valorUndefined

//null
let valor = null

//Symbol
let cosa = Symbol("Cosa")

// 4. Imprime por consola el valor de todas las variables
console.log(palabra)
console.log(numero)
console.log(isPersona)
console.log(isCosa)
console.log(cantidad)
console.log(cantidad1)
console.log(valorUndefined)
console.log(valor)
console.log(cosa)


// 5. Imprime por consola el tipo de todas las variables
console.log(typeof palabra)
console.log(typeof numero)
console.log(typeof isPersona)
console.log(typeof isCosa)
console.log(typeof cantidad)
console.log(typeof cantidad1)
console.log(typeof valorUndefined)
console.log(typeof valor)
console.log(typeof cosa)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
palabra = "adios"
numero = 95
isPersona = true
isCosa = false
cantidad = BigInt(236254625462456) 
cantidad1 = 6234562565246n
cosa = Symbol("otraCosa")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
//String
 //palabra = 23

//Number
 //numero = Symbol("numero")

//boolean
 //isPersona = 1234123
 //isCosa = BigInt(16424565662526)

//BigInt
 //cantidad = false
 //cantidad1 = true

//Symbol
 //cosa = "Cosa"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const letras = "letras"
const num = 2352345
const isVerdadero = false
const miSymbol = Symbol("otro")
const muchoNumeros = BigInt(46734567373673657)

// 9. A continuación, modifica los valores de las constantes
/*
 letras = "abecedario"
 num = 43
 isVerdadero = true
 miSymbol = Symbol("Nuevo")
 muchoNumeros = BigInt(135734568467967467846584678456784867)
*/
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse