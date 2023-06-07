// Función para calcular el monto de cada pago mensual
function calcularPagoMensual(montoPrestamo, tasaInteres, numPagos) {
    let tasaMensual = tasaInteres / 100 / 12;
    let pagoMensual = montoPrestamo * tasaMensual / (1 - Math.pow(1 + tasaMensual, -numPagos));
    return pagoMensual.toFixed(2);
}
  // Función principal del simulador de créditos
function simularCredito() {
    let montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:"));
    let tasaInteres = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
    let numPagos = parseInt(prompt("Ingrese el número de pagos mensuales:"));
    if (isNaN(montoPrestamo) || montoPrestamo <= 0) {
        alert("El monto del préstamo debe ser un número mayor que cero. Por favor, inténtelo nuevamente.");
        return;
    }
    if (isNaN(tasaInteres) || tasaInteres <= 0) {
        alert("La tasa de interés anual debe ser un número mayor que cero. Por favor, inténtelo nuevamente.");
        return;
    }
    if (isNaN(numPagos) || numPagos <= 0) {
        alert("El número de pagos mensuales debe ser un número mayor que cero. Por favor, inténtelo nuevamente.");
        return;
    }
    let pagoMensual = calcularPagoMensual(montoPrestamo, tasaInteres, numPagos);
    let totalPagar = pagoMensual * numPagos;
    let saldoRestante = montoPrestamo;
    alert("Pago mensual: $" + pagoMensual);

    // ciclo for para que muestre los pagos mensuales y el saldo restante 
    for (let i = 1; i <= numPagos; i++) {
    let interesPago = saldoRestante * tasaInteres / 100 / 12;
    let capitalPago = pagoMensual - interesPago;
    saldoRestante -= capitalPago;
    alert("Pago #" + i + ": Interés $" + interesPago.toFixed(2) + " - Capital $" + capitalPago.toFixed(2) + " - Saldo Restante $" + saldoRestante.toFixed(2));
    }

    alert("Total pagado: $" + totalPagar.toFixed(2));
    alert("Saldo final: $" + saldoRestante.toFixed(2));
}

simularCredito();
