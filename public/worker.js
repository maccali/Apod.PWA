// service-worker.js

self.addEventListener("install", (event) => {
  console.log("Service Worker instalado com sucesso!");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker ativado com sucesso!");
});

self.addEventListener("fetch", (event) => {
  // Opcional: Você pode adicionar lógica de manipulação de solicitações aqui, se necessário.
});

self.addEventListener("push", (event) => {
  self.registration.pushManager
    .getSubscription()
    .then((subscription) => {
      if (subscription && subscription.endpoint) {
        // Inscrição ativa
        console.log("A inscrição está ativa.");

        // Exibir a notificação
        if (event.data) {
          const data = event.data.json();
          const title = data.title;
          const options = data.options;
          event.waitUntil(self.registration.showNotification(title, options));
        }
      } else {
        // Inscrição não ativa ou não encontrada
        console.log("A inscrição não está ativa ou não existe.");

        // Aqui você pode adicionar a lógica para lidar com a inscrição não ativa ou não encontrada,
        // como exibir uma mensagem para o usuário ou solicitar que ele faça uma nova inscrição.
      }
    })
    .catch((error) => {
      console.error("Erro ao obter a inscrição:", error);
    });
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  // Adicione a lógica para redirecionar para uma determinada página ou executar outras ações quando a notificação for clicada.
});

self.addEventListener("pushsubscriptionchange", (event) => {
  event.waitUntil(
    self.registration.pushManager.getSubscription().then((subscription) => {
      if (subscription) {
        // Envie as informações da inscrição para o seu servidor
        // para que você possa enviar notificações push mesmo quando o navegador está fechado.
        sendSubscriptionToServer(subscription);
      }
    })
  );
});

function geoFindMe() {
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    let href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    let textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

    console.log("href", href);
    console.log("textContent", textContent);
  }

  function error() {
    console.log("erro");
  }

  if (!navigator.geolocation) {
    console.log("Geolocalização não é suportada pelo seu navegador");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

// Chamar a função para obter e enviar as coordenadas
// getCoordinates();

// setInterval(() => {
//   const currentDate = new Date();
//   // getCoordinates();
//   geoFindMe();
//   console.log("Data e hora atuais:", currentDate);
// }, 5000);
