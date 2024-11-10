import { ROLE } from "@/constants/roles";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: [true, "clerkId is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  username: {
    type: String,
    default: '',
  },
  photo: {
    type: String,
    required: [true, "Please provide photo"],
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  role: {
    type: String,
    default: ROLE.member,
  },
  twitchUserId: {
    type: String,
    index: {
      unique: true,
      partialFilterExpression: { twitchUserId: { $exists: true, $ne: null } }
    }
  },
  twitchAccessToken: {
    type: String,
    index: {
      unique: true,
      partialFilterExpression: { twitchUserId: { $exists: true, $ne: null } }
    }
  },
  twitchClientId: {
    type: String,
    index: {
      unique: true,
      partialFilterExpression: { twitchUserId: { $exists: true, $ne: null } }
    }
  }
})

const User = models?.User || model("User", UserSchema);

export default User;