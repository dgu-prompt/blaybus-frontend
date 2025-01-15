"use server";

import { fetchWithAuth } from "@/lib/fetch";

export async function setUser(
  id: string,
  formData: { department: string; level: string },
) {
  console.log(formData);
  try {
    const response = await fetchWithAuth(`/api/admin/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
    });

    // 성공 여부 확인
    if (!response.ok) {
      const errorDetails = await response.text(); // 서버에서 반환된 에러 메시지
      console.error(`Failed to fetch notifications: ${errorDetails}`);
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.text();
  } catch (error: unknown) {
    // 에러 핸들링
    if (error instanceof Error) {
      console.error(`Error fetching notifications: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
    }

    // 사용자 친화적 메시지 던지기
    throw new Error("Failed to fetch notifications. Please try again.");
  }
}
