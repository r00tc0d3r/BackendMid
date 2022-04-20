const EventEmmiter = require("events");

class Payment extends EventEmmiter {
  pay(callback) {
    console.log("Iniciando pago");
    this.emit("inicio");

    callback();
  }
}

const payment = new Payment();

// Escuchando eventos
payment.on("inicio", () => {
  console.log("Realizando pago, espere...");
});

payment.on("completado", () => {
  console.log("Pago realizado, gracias...");
  console.log("Finalizando pago...");
});

payment.pay(() => {
  return setTimeout(() => {
    console.log("Listo!");
    payment.emit("completado");
  }, 500);
});
