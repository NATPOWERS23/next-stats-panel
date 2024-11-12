import { ObjectId } from 'mongodb';
import User from '@/db/models/user.model'
import { connect } from '@/db/mongo-db-config'


export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch(error) {
    console.log('Create Actions Error: ', error)
  }
}

export async function updateUser(userId: string, updatedUser: any) {
  try {
    await connect();
    const user = await User.findByIdAndUpdate(userId, updatedUser, { new: true });
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log('Update User Error:', error);
  }
}

export async function getUserById(userId: string) {
  try {
    await connect();

    const user = await User.findOne({ _id: new ObjectId(userId) });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  } catch (error) {
    console.error('Get User Error:', error);
  }
}