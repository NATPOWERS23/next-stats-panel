import { connect } from '@/dbConfig/dbConfig';
import { getDataFromToken } from '@/app/(server)/helpers/getDataFromToken';
import User from '../../../../models/userModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request: NextRequest) {
  try {
    // Extract user ID from the authentication token
    const userId = await getDataFromToken(request);

    if (!userId) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Find the user in the database based on the user ID
    const user = await User.findOne({ _id: userId }).select('-password');

    const response = NextResponse.json({
      message: 'User found',
      data: user,
    });

    response.cookies.set('role', user.role, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
