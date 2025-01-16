"use server";

import { cookies } from "next/headers";

export async function fetchWithAuth(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> {
  // 쿠키에서 auth_token 가져오기
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token")?.value;

  if (!authToken) {
    throw new Error("Authorization token is missing. Please log in.");
  }

  // 기본 API Base URL
  const baseUrl = process.env.API_BASE_URL || "";
  const url = typeof input === "string" ? `${baseUrl}${input}` : input;

  // 기본 헤더와 사용자가 전달한 헤더 병합
  const headers = {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json",
    ...(init?.headers || {}),
  };

  // 수정된 init 객체 생성
  const modifiedInit: RequestInit = {
    ...init,
    headers,
  };

  // fetch 호출
  return fetch(url, modifiedInit);
}
