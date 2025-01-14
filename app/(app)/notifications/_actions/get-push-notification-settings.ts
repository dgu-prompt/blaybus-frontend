import { cookies } from "next/headers";

export async function getPushNotificationSettings() {
  const cookieStore = await cookies();
  const notificationsEnabled = cookieStore.get("notifications_enabled")?.value;
  const fcmToken = cookieStore.get("fcm_token")?.value;
  return { notificationsEnabled, fcmToken };
}
