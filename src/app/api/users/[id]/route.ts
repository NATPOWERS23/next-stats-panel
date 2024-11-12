import type { NextRequest } from 'next/server';
import { getUserById, updateUser } from '@/db/actions/user.action';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const payload = await req.json()
    const userId = params.id;

    if (!userId || !payload) {
      return new Response(JSON.stringify({ error: 'User ID or sent data is empty' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    const updatedUser = await updateUser(userId, payload);

    return new Response(JSON.stringify(updatedUser), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating user:', error);
    return new Response(JSON.stringify({ error: 'Failed to update user' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const userId = params.id;
    const user = await getUserById(userId);

    return new Response(JSON.stringify(user), {
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