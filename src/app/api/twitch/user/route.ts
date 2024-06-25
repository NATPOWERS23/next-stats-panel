import axios from 'axios';
import moment from 'moment';
import { NextRequest, NextResponse } from 'next/server';

import User from '@/models/userModel';
import TwitchAccess from '@/models/twitchAccessModel';
import { getDataFromToken } from '@/app/(server)/helpers/getDataFromToken';
import { TwitchAccessData } from '@/app/(pages)/profile/User';
import { connect } from '@/dbConfig/dbConfig';

connect();

const clientId = process.env.TWITCH_CLIENT_ID;
const secretId = process.env.TWITCH_CLIENT_SECRET;

export async function GET(request: NextRequest) {
  try {
    const twitchUserId = request.nextUrl.searchParams.get('id');

    if (!twitchUserId) {
      return NextResponse.json({ message: 'Twitch user id not found' }, { status: 404 });
    }

    const userId = await getDataFromToken(request);
    if (!userId) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const user = await User.findOne({ _id: userId }).select('-password');

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const twitchId = user.twitchId;

    let twitchAccess = await TwitchAccess.findOne({ _id: twitchId });

    if (!twitchAccess) {
      return NextResponse.json({ message: 'Twitch access not found' }, { status: 404 });
    }

    const accessDataOnRefreshToken = await refreshTwitchTokenCheck(twitchAccess);

    if (accessDataOnRefreshToken) {
      twitchAccess = await TwitchAccess.findOneAndUpdate(
        { _id: twitchId },
        { ...accessDataOnRefreshToken, expires_in: moment().add(1, 'hours').valueOf() },
        { new: true },
      );
    }

    const userResponse = await axios.get(`https://api.twitch.tv/helix/users?id=${twitchUserId}`, {
      headers: {
        Authorization: `Bearer ${twitchAccess.access_token}`,
        'Client-Id': clientId as string,
      },
    });

    return NextResponse.json({
      message: 'Twitch user found',
      data: userResponse.data.data,
    });
  } catch (error: any) {
    if (error.response.data.status === 401) {
      return NextResponse.json({ message: 'Twitch API unauthorized' }, { status: 401 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

const refreshTwitchTokenCheck = async (accessData: TwitchAccessData) => {
  if (accessData.expires_in < Date.now()) {
    console.log('Start refreshing token...');

    const refreshResponse = await axios.post('https://id.twitch.tv/oauth2/token', {
      grant_type: 'refresh_token',
      refresh_token: accessData.refresh_token,
      client_id: clientId,
      client_secret: secretId,
    });

    if (refreshResponse?.status === 200) {
      console.log('Refreshing token successful.');
      return refreshResponse?.data;
    }
  }
  return null;
};
