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
    unique: true, 
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
  // role: {
  //   type: Number,
  //   default: ROLE.CLIENT,
  // },
})

const User = models?.User || model("User", UserSchema);

export default User;