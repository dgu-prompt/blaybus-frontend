"use server";

import { cookies } from "next/headers";
import { mutateWithAuth } from "@/lib/fetch";
import { redirect } from "next/navigation";

export async function handleLogoutAction() {
  const cookieStore = await cookies();

  try {
    await mutateWithAuth("/api/auth/logout", "POST");
    cookieStore.delete("auth_token");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("로그아웃 에러:", error);
      throw new Error(error.message || "서버 요청 중 문제가 발생했습니다.");
    } else {
      console.error("알 수 없는 에러:", error);
      throw new Error("서버 요청 중 문제가 발생했습니다.");
    }
  } finally {
    redirect("/login");
  }
}
