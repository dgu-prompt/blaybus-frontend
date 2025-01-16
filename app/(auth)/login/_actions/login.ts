"use server";

import { cookies } from "next/headers";

const JWT_EXPIRATION_MILLISECONDS = 36000000;

export async function handleLoginAction({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
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
    const { token } = data;

    // 쿠키 저장
    const cookieStore = await cookies();
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: JWT_EXPIRATION_MILLISECONDS, // API에서 제공한 만료 시간 (초 단위)
    });
    cookieStore.delete("fcm_token");

    return { token };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error login: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
    }
  }
}
