// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyCB1xMxjjbnGZlXE1Bt3qBAJ3p5r1TqMog",
  authDomain: "blaybus-be1bd.firebaseapp.com",
  projectId: "blaybus-be1bd",
  storageBucket: "blaybus-be1bd.firebasestorage.app",
  messagingSenderId: "489607528178",
  appId: "1:489607528178:web:99b4a5b9a0c95301411a6b",
  measurementId: "G-KW3KTEJGLS",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload?.notification?.body,
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(
    notificationTitle,
    notificationOptions,
  );
});

