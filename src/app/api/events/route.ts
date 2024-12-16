import type { NextRequest } from "next/server";
import { createEvent, getUserEvents } from "@/db/actions/event.action";

// Create a new event
export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    if (!payload) {
      return new Response(JSON.stringify({ error: 'Event data is empty' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    const newEvent = await createEvent(payload);

    return new Response(JSON.stringify(newEvent), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error creating event:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to create event' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Get events for a user
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return new Response(JSON.stringify({ error: 'User ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    const events = await getUserEvents(userId);

    return new Response(JSON.stringify(events), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error fetching events:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to fetch events' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}