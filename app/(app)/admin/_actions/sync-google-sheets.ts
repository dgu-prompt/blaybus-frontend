"use server";

import { fetchWithAuth } from "@/lib/fetch-with-auth";

export async function syncGoogleSheets() {
  try {
    const response = await fetchWithAuth("/api/sheet-sync", {
      method: "POST",
    });

    // 성공 여부 확인
    if (!response.ok) {
      const errorDetails = await response.text(); // 서버에서 반환된 에러 메시지
      console.error(`Failed to sync google sheets: ${errorDetails}`);
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.text();
    console.log(data);
    return data;
  } catch (error: unknown) {
    // 에러 핸들링
    if (error instanceof Error) {
      console.error(`Error syncing google sheets: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
    }

    // 사용자 친화적 메시지 던지기
    throw new Error("Failed to sync google sheets. Please try again.");
  }
}
