//OPERADORES

//Operadores Aritmeticos

console.log(10 + 2)

let a = 3
let b = 4

console.log(a + b)//suma
console.log(a - b)//resta
console.log(a * b)//multiplicar
console.log(a / b)//dividir

console.log(a % b)//Módulo
console.log(a ** b)//Exponente

a++ //Incremento
console.log(a)

b-- //Decremento
console.log(b)


//Operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 4
console.log(myVariable)
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//Operadores de comparacion
console.log(a)
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 3)//Igualda por valor
console.log(a == "3")//Igualda por valor
console.log(a == a)
console.log(a === a)//Operdador por identidad( por tipo y valor)
console.log(a === 6)
console.log(a === "6")
console.log(a != 2)
console.log(a !== "2")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

//Truthy values (valores verdaderos)
//Todos los numeros positivos y negativos menos el cero 
//Todos las cadenas de texto menos las vacias
//El boolean es true

//Fasly values (valores falsos)
//0
//0n
//null
//undefined
//NaN
//El boolean false
//Cadenas de texto vacias

//Operadores lógicosS

//and (&&)

console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 > 10 && 15 < 20)
// or ( || )

console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 > 10 || 15 < 20)

console.log(5 > 10 || 15 < 20 && 20 > 30 || 30 < 40)

//not (!)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 < 10 && 15 < 20))

//Operadoradores ternarios
const lluviendo = true
lluviendo ? console.log("llueve") : console.log("no llueve")