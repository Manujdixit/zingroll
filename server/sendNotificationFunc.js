import admin from "./utils/firebase-admin.js";

const sendNotificationFunc = async (id, token = null) => {
  console.log({ id, token });

  try {
    const title = `You clicked on title ${id}`,
      body = "Hello buddy";

    // If token is provided, also send push notification
    if (token) {
      const message = {
        notification: {
          title,
          body,
        },
        token,
      };

      const response = await admin.messaging().send(message);
      console.log("Push notification sent successfully:", response);
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending notification:", error);
    return { success: false, error: error.message };
  }
};

export default sendNotificationFunc;
