"use server";

import { cookies } from "next/headers";

export async function handleLoginAction({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  console.log("서버에서 처리 중:", { username, password });

  const baseUrl = process.env.API_BASE_URL; // 환경 변수에서 BASE URL 가져오기
  const loginEndpoint = "/api/auth/login"; // 로그인 엔드포인트
  const apiUrl = `${baseUrl}${loginEndpoint}`; // 최종 API URL

  if (!baseUrl) {
    throw new Error("API BASE URL이 설정되지 않았습니다.");
  }

  try {
    // 실제 API 호출
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    // API 응답 처리
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "로그인 실패");
    }

    const data = await response.json();
    console.log(data);
    const { token } = data;
    // const { token, expires_in } = data;

    // 쿠키 저장
    const cookieStore = await cookies();
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // API에서 제공한 만료 시간 (초 단위)
    });

    return { token };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error login: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
    }
  }
}
