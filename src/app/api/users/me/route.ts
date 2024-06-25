import axios from 'axios';
import moment from 'moment';
import { NextRequest, NextResponse } from 'next/server';
import { ROLE } from '@/constants/ROLES';
import { connect } from '@/dbConfig/dbConfig';
import { getDataFromToken } from '@/app/(server)/helpers/getDataFromToken';
import User from '@/models/userModel';
import TwitchAccess from '@/models/twitchAccessModel';

connect();

export async function GET(request: NextRequest) {
  try {
    // Extract user ID from the authentication token (solve in middleware)
    const userId = await getDataFromToken(request);
    if (!userId) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    let user = await User.findOne({ _id: userId }).select('-password');

    // Check if channel owner has twitch account id
    if (user.role === ROLE.CHANNEL_OWNER && !user.twitchId.length) {
      const code = request.nextUrl.searchParams.get('code');

      if (!code) {
        return NextResponse.json({ message: 'Code not found' }, { status: 404 });
      }

      const twitchAccount = await connectTwitchAccount(code);
      const updateRes = await User.updateOne({ _id: user._id }, { $set: { twitchId: twitchAccount._id } });

      if (updateRes.modifiedCount === 0) {
        return NextResponse.json({ message: 'Twitch account connection failed' }, { status: 500 });
      }

      user = await User.findOne({ _id: userId }).select('-password');
    }

    let response = NextResponse.json({
      message: 'User found',
      data: { user },
    });

    response.cookies.set('role', user.role, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

async function connectTwitchAccount(code: string) {
  try {
    console.log('Starting Twich account connection...');

    const twitchAccessResponse = await axios.post(`https://id.twitch.tv/oauth2/token`, {
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: process.env.TWITCH_REDIRECT_URI,
    });

    if (!twitchAccessResponse?.data) {
      return NextResponse.json({ message: 'Twich account connection error' }, { status: 500 });
    }

    const twitchExpirationTime = moment().add(1, 'hours').valueOf();

    const twitchAccess = new TwitchAccess({
      access_token: twitchAccessResponse.data.access_token,
      refresh_token: twitchAccessResponse.data.refresh_token,
      expires_in: twitchExpirationTime,
    });

    twitchAccess.save();

    console.log('Twich account connection Success.');
    return twitchAccess;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
