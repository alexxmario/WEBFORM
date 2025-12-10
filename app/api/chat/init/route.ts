import { NextResponse } from "next/server";

import { supabaseServerAdmin } from "@/lib/supabase/server";

type InitRequest = {
  userId: string;
  email: string;
  name?: string;
  businessName?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InitRequest;
    if (!body?.userId || !body?.email) {
      return NextResponse.json({ error: "Missing userId or email" }, { status: 400 });
    }

    const supabase = supabaseServerAdmin();
  const adminEmails = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  const isAdmin = adminEmails.includes(body.email.toLowerCase());

  // Ensure profile with role
  const { error: profileError } = await supabase
    .from("profiles")
    .upsert(
      {
        id: body.userId,
        email: body.email,
        name: body.name,
        business_name: body.businessName,
        role: isAdmin ? "admin" : "client",
      },
      { onConflict: "id" },
    );
  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status: 500 });
  }

  // Ensure the user has a personal room
  const roomName = `Support — ${body.email}`;
  const { data: roomData, error: roomError } = await supabase
    .from("rooms")
    .upsert(
      {
        name: roomName,
        created_by: body.userId,
        slug: body.userId,
      },
      { onConflict: "slug" },
    )
    .select("id")
    .single();
  if (roomError || !roomData) {
    return NextResponse.json({ error: roomError?.message || "Room error" }, { status: 500 });
  }

  const roomId = roomData.id;

  // Ensure membership for this user
  await supabase
    .from("room_members")
    .upsert({ room_id: roomId, profile_id: body.userId, role: isAdmin ? "admin" : "client" });

  // Ensure memberships for admins (if their profiles exist)
  if (adminEmails.length) {
    const { data: adminProfiles } = await supabase
      .from("profiles")
      .select("id, email")
      .in("email", adminEmails);

    if (adminProfiles?.length) {
      const adminMembers = adminProfiles.map((profile) => ({
        room_id: roomId,
        profile_id: profile.id,
        role: "admin",
      }));
      await supabase.from("room_members").upsert(adminMembers, { onConflict: "room_id,profile_id" });
    }
  }

    return NextResponse.json({ roomId });
  } catch (error) {
    console.error("Chat init error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
