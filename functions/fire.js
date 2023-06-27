const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.sendNotificationHourly = functions.pubsub
  .schedule("every 1 hours")
  .onRun(async (context) => {
    // Lógica para enviar a notificação push
    // ...

    return null;
  });
