import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { OAuth2Client } from "google-auth-library";

const prisma = new PrismaClient();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    if (!payload?.email) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const user = await prisma.user.upsert({
      where: { email: payload.email },
      update: { name: payload.name },
      create: {
        email: payload.email,
        name: payload.name,
        image: payload.picture,
      },
    });

    return NextResponse.json({ user });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}
