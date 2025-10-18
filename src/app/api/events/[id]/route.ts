import type { NextRequest } from "next/server";
import { updateEvent, deleteEvent } from "@/db/actions/event.action";

// Update an existing event
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const payload = await req.json();
    const resolvedParams = await params;
    const eventId = resolvedParams.id;

    if (!eventId || !payload) {
      return new Response(JSON.stringify({ error: 'Event ID or sent data is empty' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    const updatedEvent = await updateEvent(eventId, payload);

    return new Response(JSON.stringify(updatedEvent), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error updating event:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to update event' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Delete an event
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const eventId = resolvedParams.id;

    if (!eventId) {
      return new Response(JSON.stringify({ error: 'Event ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    const deletedEvent = await deleteEvent(eventId);

    return new Response(JSON.stringify(deletedEvent), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error deleting event:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to delete event' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}