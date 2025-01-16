"use server";

import { fetchWithAuth } from "@/lib/fetch-with-auth";

export async function setNotificationReadAll() {
  try {
    const response = await fetchWithAuth(`/api/notifications/read-all`, {
      method: "PUT",
    });

    // 성공 여부 확인
    if (!response.ok) {
      const errorDetails = await response.text(); // 서버에서 반환된 에러 메시지
      console.error(`Failed to set notification as read: ${errorDetails}`);
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    console.log(`All notification set as read successfully.`);
  } catch (error: unknown) {
    // 에러 핸들링
    if (error instanceof Error) {
      console.error(`Error setting notification as read: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
    }

    // 사용자 친화적 메시지 던지기
    throw new Error("Failed to set notification as read. Please try again.");
  }
}
