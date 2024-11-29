
// if, else if, else 

//if (si)

let edad = 30
if(edad == 30){
    console.log("la edad es 30");
}

//else (sino)

if(edad == 30){
    console.log("la edad es 30");

}else{
    console.log("la edad no es 30");
}

//else if (si no, si)
edad = 10
if(edad == 37){
    console.log("la edad es 30");
}else if( edad <= 18){
    console.log("la edad es menor a 18");
}else{
    console.log("la edad es  "+ edad);
}

//Operador tenernario
let mensaje =  edad >= 18 ? "la edad es mayor" : "edad es menor"
console.log(mensaje)

//swchit

let dia = 3

switch (dia) {
    case 0:
        mensaje = "Lunes"
        break;
    case 1:
        mensaje = "Martes"
        break;
    case 2:
        mensaje = "Miercoles"
        break;
    case 3:
        mensaje = "Jueves"
        break;
    case 4:
        mensaje = "Viernes"
        break;
    case 5:
        mensaje = "Sabado"
        break;
    case 6:
        mensaje = "Domingo"
        break; 
    default:
        dia = "Numero de dias incorrecto"       
}
console.log(mensaje)