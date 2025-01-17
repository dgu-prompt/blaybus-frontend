"use server";

import { fetchWithAuth } from "@/lib/fetch-with-auth";

interface Post {
  postId: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

export async function getPosts(page: number) {
  try {
    const response = await fetchWithAuth(`/api/posts/${page}`);

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

export async function fetchAllPosts() {
  let allPosts: Post[] = []; // 전체 post를 저장할 배열
  let currentPage = 1; // 시작 페이지
  let totalPages = 1; // 전체 페이지 (초기값 설정)

  try {
    do {
      const response = await getPosts(currentPage);

      // posts를 전체 배열에 추가
      allPosts = [...allPosts, ...response.posts];

      // 페이지네이션 정보 업데이트
      currentPage = response.pagination.currentPage + 1;
      totalPages = response.pagination.totalPages;
    } while (currentPage <= totalPages);

    return allPosts;
  } catch (error) {
    console.error("Error fetching all posts:", error);
    throw error;
  }
}
