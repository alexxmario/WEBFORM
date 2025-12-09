import { NextResponse } from "next/server";

type WaitlistEntry = {
  name: string;
  email: string;
  businessType: string;
  tier: string;
};

const waitlistStore: WaitlistEntry[] = [];

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<WaitlistEntry>;

  if (!body.email || !body.name) {
    return NextResponse.json({ ok: false, message: "Missing fields" }, { status: 400 });
  }

  waitlistStore.push({
    name: body.name,
    email: body.email,
    businessType: body.businessType || "",
    tier: body.tier || "Starter",
  });

  return NextResponse.json({ ok: true, received: waitlistStore.length });
}

export async function GET() {
  return NextResponse.json({ ok: true, total: waitlistStore.length });
}
