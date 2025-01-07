import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDtlwrBLqTav12LWVSzZWV5g-3IycsWf8E",
    authDomain: "cat-memes-notifications.firebaseapp.com",
    projectId: "cat-memes-notifications",
    storageBucket: "cat-memes-notifications.firebasestorage.app",
    messagingSenderId: "981812104221",
    appId: "1:981812104221:web:8a514ad015d4a5dbe0caf4",
    measurementId: "G-JB895G6LR6"
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);

// Inicjalizacja Messaging
const messaging = getMessaging(app);

// Pobierz token dla klienta
getToken(messaging, { vapidKey: 'your-public-vapid-key' }).then((currentToken) => {
    if (currentToken) {
        console.log('Token uzyskany:', currentToken);
        // Prześlij token na backend
    } else {
        console.error('Brak tokenu. Użytkownik musi zezwolić na powiadomienia.');
    }
}).catch((err) => {
    console.error('Błąd podczas pobierania tokenu:', err);
});

// Obsługa wiadomości przychodzących
onMessage(messaging, (payload) => {
    console.log('Otrzymano wiadomość:', payload);
    // Wyświetl powiadomienie na stronie
});
