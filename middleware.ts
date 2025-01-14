import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  request.headers.set("Cache-Control", "no-store");
  const token = request.cookies.get("auth_token");

  if (!token && !request.nextUrl.pathname.startsWith("/login")) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home/:path*", "/you/:path*", "/notifications/:path*"],
};
