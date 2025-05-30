// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtmpgL2QbTTBDRsvr9l5zizj-HJllmKoI",
  authDomain: "dora-b1147.firebaseapp.com",
  projectId: "dora-b1147",
  storageBucket: "dora-b1147.firebasestorage.app",
  messagingSenderId: "423228021824",
  appId: "1:423228021824:web:472201daca8ca436ad13a5",
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
        "BO59GFxG1ujlET0ZfjrX1F-udO_pHmvVUJ6FlH7jri8PDy3Y_IbfhRIfADdU5EXUuAPktXa9PfsPM-z9VvGuB_o",
    });
    // console.log(token);
    return token;
  }
};
