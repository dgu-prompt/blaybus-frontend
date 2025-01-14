"use server";

import { cookies } from "next/headers";

export async function fetchData({
  apiEndpoint,
  apiMethod = "GET",
  errorMessage,
}: {
  apiEndpoint: string;
  apiMethod: "GET" | "POST" | "PUT" | "DEL";
  errorMessage?: string;
}) {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token")?.value;

  if (!authToken) {
    throw new Error("Authorization token is missing. Please log in.");
  }

  const res = await fetch(`${process.env.API_BASE_URL}${apiEndpoint}`, {
    method: apiMethod,
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    cache: "no-store", // 항상 최신 데이터를 가져오기 위해 설정
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("API 요청 실패:", err);
    throw new Error(errorMessage || "Failed to fetch");
  }

  return res.json();
}
