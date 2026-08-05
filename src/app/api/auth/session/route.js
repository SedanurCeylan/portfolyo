import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getFirebaseUser } from "@/lib/firebaseRest";
export async function GET() {
  const user = await getFirebaseUser((await cookies()).get("portfolio-admin-token")?.value);
  return user ? NextResponse.json({ authenticated: true, email: user.email }) : NextResponse.json({ authenticated: false }, { status: 401 });
}
