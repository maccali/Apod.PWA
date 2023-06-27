// self.addEventListener("message", function (event) {
//   // Recebe a mensagem enviada pelo thread principal
//   const message = event.data;

//   // Realiza a lógica desejada
//   const result = message * 2;

//   // Envia o resultado de volta para o thread principal
//   self.postMessage(result);

//   function exec() {
//     self.postMessage(result * 2);
//   }

//   setInterval(exec, 5000);
// });
