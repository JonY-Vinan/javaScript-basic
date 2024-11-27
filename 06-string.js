//String

let miNombre = "ecua"
let greeting  = "hola " + miNombre + "!"

console.log(greeting)
console.log(typeof greeting)

//Longuitud
console.log(greeting.length)

//Acceso a carracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[9])
console.log(greeting[10])

//Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLocaleLowerCase())
console.log(greeting.indexOf("ecua"))
console.log(greeting.indexOf("hola"))
console.log(greeting.indexOf("lunes"))
console.log(greeting.includes("ecua"))
console.log(greeting.includes("lunes"))
console.log(greeting.slice(0, 7))
console.log(greeting.replace("ecua", "maria"))

//Template literals (plantillas literales)
let message = `Hola
                como estas?`

console.log(message)


console.log(`hola, ${miNombre}`)
let email = "emai@email.com"
console.log(`Hola, ${miNombre} y tu ${email}.`)