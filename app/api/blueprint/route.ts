import { NextResponse } from "next/server";

import { blueprintSchema } from "@/lib/zodSchemas";

type BlueprintRecord = {
  id: string;
  data: unknown;
};

const blueprintStore: BlueprintRecord[] = [];

export async function POST(request: Request) {
  const payload = await request.json();
  const parse = blueprintSchema.safeParse(payload);

  if (!parse.success) {
    return NextResponse.json(
      { ok: false, message: "Validation failed", issues: parse.error.flatten() },
      { status: 400 },
    );
  }

  const record = {
    id: `bp-${Date.now()}`,
    data: parse.data,
  };

  blueprintStore.push(record);

  return NextResponse.json({ ok: true, id: record.id });
}

export async function GET() {
  return NextResponse.json({ ok: true, total: blueprintStore.length });
}
