/* Service Worker fuer Benachrichtigungen.
   Laeuft getrennt von der Seite und braucht die Konfiguration deshalb erneut. */
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCl8XDtT2QZvdnM_ftA9KDjPAR-BXEj8Co",
  authDomain: "tinycraft-app.firebaseapp.com",
  projectId: "tinycraft-app",
  databaseURL: "https://tinycraft-app-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "tinycraft-app.firebasestorage.app",
  messagingSenderId: "344441290954",
  appId: "1:344441290954:web:c3130621596c2583de3433"
});

firebase.messaging().onBackgroundMessage(function (payload) {
  var d = (payload && payload.notification) || {};
  self.registration.showNotification(d.title || "Tinycraft", {
    body: d.body || "",
    icon: "icon-192.png",
    badge: "icon-192.png"
  });
});
