"use server"

import User from '@/db/models/user.model'
import { connect } from '@/db/mongo-db-config'


export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch(error) {
    console.log(error)
  }
}