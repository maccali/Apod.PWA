// api/notifications.js
import webpush from "web-push";

webpush.setVapidDetails(
  "mailto:guimaccali@gmail.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { subscription, title, body, icon } = req.body;

    if (!subscription || !subscription.endpoint) {
      res.status(400).json({ error: "Invalid subscription" });
      return;
    }

    const notificationPayload = JSON.stringify({
      title,
      body,
      icon,
    });

    try {
      await webpush.sendNotification(subscription, notificationPayload);
      console.log("certo");
      res.status(200).json({ message: "Notification sent successfully" });
    } catch (error) {
      console.log("errado", error);
      console.error("Error sending notification:", error);
      res.status(500).json({ error: "Failed to send notification" });
    }
  } else {
    console.log("not");
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
