let monto = parseFloat(prompt("Inserte monto de préstamo"));
alert("Intereses: De 1 a 3 cuotas, 10%. De 4 a 6 cuotas, 20%. De 7 a 9 cuotas, 30%. De 10 a 12 cuotas, 40%")
let cantidadCuotas = parseFloat(prompt("Ingrese cantidad de cuotas (1 a 12)."));
let interes = calcularInteres(cantidadCuotas);
let montoCuota = (monto * (1 + interes)) / cantidadCuotas

for(let i = 1; i <= cantidadCuotas; i++){
    alert(`Su cuota número ${i} será de $${montoCuota.toFixed(2)}`);
}

let montoDevolucion = montoCuota * cantidadCuotas;
alert(`El total de dinero a devolver por el préstamo solicitado será de $${montoDevolucion.toFixed(2)}`);

function calcularInteres(cantidadCuotas){
    let interes = 0;
    if (cantidadCuotas <=3){
        interes = 0.1;
    } else if (cantidadCuotas <=6){
        interes = 0.2;
    } else if (cantidadCuotas <=9){
        interes = 0.3;
    } else{
        interes = 0.4;
    }
    return interes;
}