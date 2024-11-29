//array

//Declarar array
var myArray = []
var myArray2 = new Array();

console.log(myArray)
console.log(myArray2)

//Incializacion
var myArray = [1]
var myArray2 = new Array(3);

console.log(myArray)
console.log(myArray2)

var myArray = [1,2,3,4]
var myArray2 = new Array(1,2,3,4);

console.log(myArray)
console.log(myArray2)


var myArray = ["Ana", "Alex", "Marta"]
var myArray2 = new Array("Ana", "Alex", "Marta");

console.log(myArray)
console.log(myArray2)


var myArray = ["Ana", "Alex", "Marta", 3, true]
var myArray2 = new Array("Ana", "Alex", "Marta" , 3, true);

console.log(myArray)
console.log(myArray2)


var myArray2 = new Array(3);
myArray2[0] = "Jony"
myArray2[1] = "Ana"
myArray2[2] = "Paul"
myArray2[3] = "Maira"

console.log(myArray2)

myArray = []
myArray[0] = "Jony"
myArray[2] = "Paul"
myArray[3] = "Maira"
console.log(myArray)

//Métodos comunes
myArray.push("Hola")
myArray.push("Adios")
myArray.push("Hasta luego")
 
console.log(myArray)
console.log(myArray.pop()) // Elimina el último elemento y lo devuelve

myArray.pop()
console.log(myArray)

//shift u unshift
myArray.shift();
console.log(myArray)
myArray.unshift("hola", "todos");
console.log(myArray)

//length
console.log(myArray.length)

//clear
myArray = []
myArray.length = 0 //Altenativo
console.log(myArray)

//slice
 myArray = ["Ana", "Alex", "Marta" , 3, true]
let otherArray = myArray.slice(1,3)
console.log(myArray)
console.log(otherArray)

//splice

myArray.splice(1, 3)
console.log(myArray)
 myArray = ["Ana", "Alex", "Marta" , 3, true]
 myArray.splice(1, 3, "animales")
console.log(myArray)