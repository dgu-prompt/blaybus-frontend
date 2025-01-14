"use client";

import { Button } from "@/components/ui/button";

import { mutateWithAuth } from "@/lib/fetch";
import { app as firebaseApp } from "@/lib/firebase";
import { getMessaging, getToken } from "firebase/messaging";
import { setFCMTokenCookie } from "../_actions/set-fcm-token-cookie";

export async function requestNotificationPermission() {
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

    console.log(fcmToken);

    // 3. 서버로 토큰 전달
    alert(1);
    const requestUrl = `/api/notifications/fcm/token?fcmToken=${fcmToken}`;
    alert(requestUrl);
    const tokenRegisterResponse = await mutateWithAuth(requestUrl, "POST");
    alert(tokenRegisterResponse);
    console.log(tokenRegisterResponse);

    await setFCMTokenCookie(fcmToken);
    alert("알림이 설정되었습니다!");
  } catch (error) {
    console.error("Failed to request notification permission:", error);
  }
}

function PushNotificationOK() {
  return <div>토큰이 등록됨</div>;
}

function PushNotificationPermissionNeeded() {
  return (
    <div>
      <p>푸시 알림을 설정해주세요.</p>
      <Button onClick={requestNotificationPermission}>알림 권한 요청</Button>
    </div>
  );
}

export function PushNotificationOnboarding({ fcmToken }: { fcmToken: string }) {
  return !fcmToken ? (
    <PushNotificationPermissionNeeded />
  ) : (
    <PushNotificationOK />
  );
}
