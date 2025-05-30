// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// Replace 10.13.2 with latest version of the Firebase JS SDK.
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyAtmpgL2QbTTBDRsvr9l5zizj-HJllmKoI",
  authDomain: "dora-b1147.firebaseapp.com",
  projectId: "dora-b1147",
  storageBucket: "dora-b1147.firebasestorage.app",
  messagingSenderId: "423228021824",
  appId: "1:423228021824:web:472201daca8ca436ad13a5",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
    // actions: payload.notification.actions || [],
  };

  self.registration.showNotification(notificationTitle, notificationOptions);

  // self.addEventListener("notificationclick", function (event) {
  //   const clickAction = event.notification.data?.click_action;

  //   console.log(event.notification);

  //   event.notification.close();

  //   if (clickAction) {
  //     event.waitUntil(
  //       clients.matchAll({ type: "window" }).then(function (clientList) {
  //         for (const client of clientList) {
  //           if (client.url === clickAction && "focus" in client) {
  //             return client.focus();
  //           }
  //         }
  //         if (clients.openWindow) {
  //           return clients.openWindow(clickAction);
  //         }
  //       })
  //     );
  //   }
  // });
});
