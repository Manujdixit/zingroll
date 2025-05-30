// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA57kAJ7efVyBjHUc_3erXugiDQwbc0_YM",
  authDomain: "fcma-37de6.firebaseapp.com",
  projectId: "fcma-37de6",
  storageBucket: "fcma-37de6.firebasestorage.app",
  messagingSenderId: "168392288911",
  appId: "1:168392288911:web:dce3f6256160376207defa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Handle foreground messages
onMessage(messaging, (payload) => {
  console.log("Received foreground message:", payload);
  const { title, body } = payload.notification;
  new Notification(title, { body });
});

export { messaging };
export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log({ permission });

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BAkWt-YROjNGAKc8E-KcPlyQOtrTqbcQEJ1hNQgCdKLy98DoIi0P65UVoasEKdsVV9OaMILmzlMwiHgCYZVf4dM",
    });
    // console.log(token);
    return token;
  }
};
