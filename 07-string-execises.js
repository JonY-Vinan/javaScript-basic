// 1. Concatena dos cadenas de texto
 let saludar = 'hola'
 console.log(saludar + " amigo")

// 2. Muestra la longitud de una cadena de texto

let longitudCaracteres = "Cuantos caracteres hay en esta linea de texto"
console.log(longitudCaracteres.length)

// 3. Muestra el primer y último carácter de un string

console.log('Primer caracter: ' + longitudCaracteres[0])
console.log('Ultimo caracter:  ' + longitudCaracteres[44])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(longitudCaracteres.toLocaleUpperCase()) //Mayusculas
console.log(longitudCaracteres.toLocaleLowerCase()) //Minusculas

// 5. Crea una cadena de texto en varias líneas

let variasLineas = `Este texto 
esta escrito por 
varias lineas`

// 6. Interpola el valor de una variable en un string
let nombre  = "Nerea"
let saludo = `Buenos días ¿que tal como estas`
console.log(`${saludo} ${nombre}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(saludo.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(saludo.includes("tal"))

// 9. Comprueba si dos strings son iguales
console.log(saludo.includes("días"))
let texto = "esto es igual"
let mismoTexto = "esto es igual"
let correcto = 
console.log(texto == mismoTexto)
// 10. Comprueba si dos strings tienen la misma longitud

console.log(texto.length == mismoTexto.length)



