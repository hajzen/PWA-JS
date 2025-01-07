importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDtlwrBLqTav12LWVSzZWV5g-3IycsWf8E",
  authDomain: "cat-memes-notifications.firebaseapp.com",
  projectId: "cat-memes-notifications",
  storageBucket: "cat-memes-notifications.firebasestorage.app",
  messagingSenderId: "981812104221",
  appId: "1:981812104221:web:8a514ad015d4a5dbe0caf4",
  measurementId: "G-JB895G6LR6"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Otrzymano wiadomość w tle:', payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon
    });
});
