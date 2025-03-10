"use client";

import { app as firebaseApp } from "@/lib/firebase";
import { getMessaging, getToken } from "firebase/messaging";
import { setFCMTokenCookie } from "../_actions/set-fcm-token-cookie";
import { useEffect, useState } from "react";
import { storeFCMToken } from "../_actions/store-fcm-token";
import { toast } from "sonner";
import { redirect } from "next/navigation";

function isFCMSupported(): boolean {
  return (
    "serviceWorker" in navigator &&
    "PushManager" in window &&
    typeof Notification !== "undefined"
  );
}

async function requestNotificationPermission() {
  if (!isFCMSupported()) {
    alert("푸시 알림은 이 브라우저에서 지원되지 않습니다.");
    return;
  }

  try {
    // 1. 권한 요청
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.warn("Notification permission denied");
      return;
    }

    // 2. FCM 토큰 가져오기
    const messaging = getMessaging(firebaseApp);
    const vapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
    const fcmToken = await getToken(messaging, { vapidKey: vapidKey });

    if (!fcmToken) {
      console.error("Failed to get FCM token");
      return;
    }

    await storeFCMToken(fcmToken);
    await setFCMTokenCookie(fcmToken);
    toast.success("알림이 설정되었습니다.");
  } catch (error) {
    console.error("Failed to request notification permission:", error);
  } finally {
    redirect("/notifications");
  }
}

export function PushNotificationOnboarding() {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      requestNotificationPermission(); // 권한 요청
    }
  }, []);

  if (!isSupported) {
    return null;
  }

  return (
    <div className="pb-2 pt-4 font-medium">
      푸시 알림을 보내려면 권한이 필요합니다.
    </div>
  );
}
