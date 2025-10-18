import { getUserById } from "@/db/actions/user.action";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const userId = resolvedParams.id;
    const user = await getUserById(userId);

    return new Response(JSON.stringify({ hasTwitchAccessData: !!(user?.twitchAccessToken && user.twitchClientId) }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch user' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}