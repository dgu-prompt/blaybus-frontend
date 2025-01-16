"use server";

import { cookies } from "next/headers";

export async function setFCMTokenCookie(fcmToken: string) {
  const cookieStore = await cookies();
  cookieStore.set("fcm_token", fcmToken);
  cookieStore.set("notifications_enabled", "true");
}
