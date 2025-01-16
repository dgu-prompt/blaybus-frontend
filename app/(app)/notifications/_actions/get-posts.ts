"use server";

import { fetchWithAuth } from "@/lib/fetch-with-auth";

// interface Post {
//   id: string;
//   postTitle: string;
//   content: string;
// }

export async function getPosts() {
  try {
    const response = await fetchWithAuth("/api/posts/1");

    // 성공 여부 확인
    if (!response.ok) {
      const errorDetails = await response.text(); // 서버에서 반환된 에러 메시지
      console.error(`Failed to fetch posts: ${errorDetails}`);
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error: unknown) {
    // 에러 핸들링
    if (error instanceof Error) {
      console.error(`Error fetching posts: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
    }

    // 사용자 친화적 메시지 던지기
    throw new Error("Failed to fetch posts. Please try again.");
  }
}
