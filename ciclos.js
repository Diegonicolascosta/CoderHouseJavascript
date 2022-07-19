let name = prompt("Ingrese su nombre", "nombre");
let lastName = prompt("Ingrese su apellido", "apellido");
let num1 = parseInt(prompt("dime tu numero", "numero"));
let numOculto = 56;

while (!isNaN(num1)) {

    if (num1 == numOculto){
        alert(name+" "+lastName+" "+"adivinaste");

    } else if (num1 < 56) {
        alert(name+" "+lastName+" "+"estas a " + (numOculto - num1) +" "+"del numero");
    }else {
        alert(name+" "+lastName+" "+"estas a " + (num1 - numOculto) +" "+"del numero");
    } 
            
    num1 = parseInt(prompt("dime tu numero", "numero"));

}
    