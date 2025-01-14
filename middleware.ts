import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token");

  const isLoginPage = request.nextUrl.pathname.startsWith("/login");

  // 이미 로그인된 상태에서 `/login` 페이지 접근 시 홈으로 리디렉션
  if (token && isLoginPage) {
    const homeUrl = new URL("/home", request.url);
    return NextResponse.redirect(homeUrl);
  }

  // 로그인되지 않은 상태에서 보호된 페이지 접근 시 `/login`으로 리디렉션
  const protectedPaths = ["/home", "/notifications", "/you"];
  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path),
  );

  if (!token && isProtectedPath) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// 미들웨어가 적용될 경로 설정
export const config = {
  matcher: ["/login", "/home/:path*", "/notifications/:path*", "/you/:path*"],
};
