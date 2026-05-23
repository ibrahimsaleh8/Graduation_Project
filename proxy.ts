import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (
    token?.value &&
    (request.nextUrl.pathname.startsWith("/login") ||
      request.nextUrl.pathname.startsWith("/register"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!token?.value && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login/:path*", "/register/:path*", "/dashboard/:path*"],
};
