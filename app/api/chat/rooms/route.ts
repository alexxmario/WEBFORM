import { NextResponse } from "next/server";
import { supabaseServerAdmin } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const supabase = supabaseServerAdmin();

  // Get the authenticated user from the Authorization header
  const authHeader = request.headers.get("Authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.replace("Bearer ", "");
  const { data: { user }, error: authError } = await supabase.auth.getUser(token);

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Check if user is admin
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "admin") {
    return NextResponse.json({ error: "Forbidden - Admin access required" }, { status: 403 });
  }

  // Get all rooms with their latest message and creator info
  const { data: rooms, error } = await supabase
    .from("rooms")
    .select(`
      id,
      name,
      slug,
      created_at,
      created_by,
      profiles:created_by (
        email,
        name
      )
    `)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Get latest message for each room
  const roomsWithMessages = await Promise.all(
    (rooms || []).map(async (room) => {
      const { data: latestMessage } = await supabase
        .from("messages")
        .select("content, created_at")
        .eq("room_id", room.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      return {
        ...room,
        latestMessage: latestMessage?.content || null,
        latestMessageTime: latestMessage?.created_at || null,
      };
    })
  );

  return NextResponse.json({ rooms: roomsWithMessages });
}
