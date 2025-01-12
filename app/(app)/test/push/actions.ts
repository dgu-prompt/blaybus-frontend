"use server";

import webpush from "web-push";

webpush.setVapidDetails(
  "mailto:dgu.prompt@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!,
);

// Mock 데이터베이스
const subscriptions: Record<string, PushSubscription[]> = {};

// 사용자 구독 추가
export async function subscribeUser(userId: string, sub: PushSubscription) {
  if (!subscriptions[userId]) {
    subscriptions[userId] = [];
  }

  // 중복 구독 방지
  const isExisting = subscriptions[userId].some(
    (savedSub) => savedSub.endpoint === sub.endpoint,
  );

  if (!isExisting) {
    subscriptions[userId].push(sub);
    console.log(`Subscribed user ${userId}`, subscriptions[userId]);
  }

  return { success: true };
}

// 사용자 구독 제거
export async function unsubscribeUser(userId: string, endpoint: string) {
  if (!subscriptions[userId])
    return { success: false, error: "User not found" };

  subscriptions[userId] = subscriptions[userId].filter(
    (sub) => sub.endpoint !== endpoint,
  );

  console.log(`Unsubscribed user ${userId}`, subscriptions[userId]);
  return { success: true };
}

// 알림 보내기
export async function sendNotification(userId: string, message: string) {
  if (!subscriptions[userId] || subscriptions[userId].length === 0) {
    return {
      success: false,
      error: "No subscriptions available for this user",
    };
  }

  const payload = JSON.stringify({
    title: "Test Notification",
    body: message,
    icon: "/icon.png",
  });

  try {
    const results = await Promise.all(
      subscriptions[userId].map((sub) =>
        webpush
          .sendNotification(sub, payload)
          .then(() => ({ success: true, endpoint: sub.endpoint }))
          .catch((error) => ({
            success: false,
            endpoint: sub.endpoint,
            error: error.message,
          })),
      ),
    );

    console.log(`Notification results for ${userId}`, results);

    return { success: true, results };
  } catch (error) {
    console.error("Error sending push notification:", error);
    return { success: false, error: "Failed to send notification" };
  }
}
