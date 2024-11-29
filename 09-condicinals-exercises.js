
// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let saludo = "hola"
if (saludo == "hola") {
    console.log("Hola")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let contrasenia = "pass"
let usuario = "user"
if (usuario == "user" && contrasenia ==  "pass") {
    console.log("Correcto");
} else {
    console.log("Incorrecto");
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -2

if (numero > 0) {
    console.log("Positivo");
} else if (numero < 0){
    console.log("Negativo");
}else{
    console.log("es Cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let votar = false
let edad = 14
if (edad > 18) {
    votar = true
}
if(votar){
   console.log("Puede votar") 
}else{
    edad = 18 - edad
    console.log("Necesitas "+ edad + ", para votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const persona = edad >= 18 ? "adulto" : "menor"
console.log(persona)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 2
let mensaje
switch (mes) {
    case 0:
        mensaje = "Enero"
        break;
    case 1:
        mensaje = "Febrero"
        break;
    case 2:
        mensaje = "Marzo"
        break;
    case 3:
        mensaje = "Abril"
        break;
    case 4:
        mensaje = "Mayo"
        break;
    case 5:
        mensaje = "Junio"
        break;
    case 6:
        mensaje = "Julio"
        break;

    case 7:
        mensaje = "Agosto"
        break;

    case 8:
        mensaje = "Septiempre"
        break;

    case 9:
        mensaje = "Octubre"
        break;

    case 10:
        mensaje = "Nobiembre"
        break;

    case 11:
        mensaje = "Diciembre"
        break;
    default:
        mensaje = "no es una fecha"
        break;
}
console.log(mensaje)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// switcH
let dias
switch (mensaje) {
    case "Enero":
        dias = 31
        break;
    case "Febrero":
        dias = 29
        break;
    case "Marzo":
        dias = 30
        break;
    case "Abril":
        dias = 31
        break;
    case "Mayo":
        dias = 30
        break;
    case "Junio":
        dias = 31
        break;
    case "Julio":
        dias = 31
        break;
    case "Agosto":
        dias = 31
        break;
    case "Septiempre":
        dias = 30
        break;
    case "Octubre":
        dias = 31
        break;
    case "Nobiembre":
        dias = 30
        break;
    case "Diciembre":
        dias = 31
        break;
    default:
        dias = "no es una fecha"
        break;
}
console.log(dias)
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "español"
switch (idioma) {
    case "español":
        mensaje = "Hola amigo"
        break;
    case "ingles":
        mensaje = "Hello friend"
    case "euskera":
        mensaje = "Egun non"
    default:
        mensaje = "idioma resgistrado"
        break;
}
console.log(mensaje)
// 9. Usa un switch para hacer de nuevo el ejercicio 6
    //resueltos

// 10. Usa un switch para hacer de nuevo el ejercicio 7
    //resueltos