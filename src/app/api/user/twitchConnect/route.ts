import { type NextRequest, NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { connect } from '@/db/mongo-db-config';
import User from '@/db/models/user.model';

connect();

export async function GET(request: NextRequest) {
  try {
    let isConnected = false;
    const clerkCurrentUser = await currentUser();

    if (!clerkCurrentUser) {
      return NextResponse.json({ message: 'Clerk user not found' }, { status: 404 });
    }

    const dbUserId = clerkCurrentUser.publicMetadata.userId;
    const user = await User.findOne({ _id: dbUserId });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    if (user.twitchAccessToken) {
      isConnected = true;
    }

    return NextResponse.json({
      isConnected,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } 
}


export async function PATCH(request: NextRequest) {
  try {  
    const clerkCurrentUser = await currentUser();
    const req = await request.json();
    const { twitchAccessToken, twitchClientId } = req;

    if (!clerkCurrentUser) {
      return NextResponse.json({ message: 'Clerk user not found' }, { status: 404 });
    }
    
    if (!twitchAccessToken || !twitchClientId) {
      return NextResponse.json({ message: 'Twitch access not found' }, { status: 404 });
    }
    
    const dbUserId = clerkCurrentUser.publicMetadata.userId;
    const user = await User.findOne({ _id: dbUserId });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Check if the twitchAccessToken is already set and matches the provided one
    if (user.twitchAccessToken === twitchAccessToken) {
      return NextResponse.json({
							message:
								"Twitch access token is already set and matches the provided one.",
						})
    }

    // Update the user with the new twitchAccessToken
    user.twitchAccessToken = twitchAccessToken;
    user.twitchClientId = twitchClientId;

    const userSaveRes = await user.save();

    if (!userSaveRes) {
      return NextResponse.json({ message: 'Twitch account connection failed' }, { status: 500 });
    }   

    return NextResponse.json({ message: 'Twitch account connection success' }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: 'Twitch account connection failed with 500', error }, { status: 500 });
  }
}