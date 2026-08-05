import { NextResponse } from "next/server";

export function proxy(request) {
  if (request.nextUrl.pathname === "/admin/giris") return NextResponse.next();
  if (!request.cookies.get("portfolio-admin-token")) return NextResponse.redirect(new URL("/admin/giris", request.url));
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
