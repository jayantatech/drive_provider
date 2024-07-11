// pages/api/auth.ts

import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

export function GET(req: NextRequest) {
  const cookies = req.headers.get("cookie");
  const cookieToken = cookies ? cookie.parse(cookies) : {};

  return new NextResponse(JSON.stringify({ token: cookieToken.token }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
