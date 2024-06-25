import mongoose from "mongoose";

const twitchAccessSchema = new mongoose.Schema({
  access_token: {
    type: String,
    required: [true, "Twitch access token is required"],
    unique: true,
  },
  refresh_token: {
    type: String,
    required: [true, "Twitch refresh token is required"],
    unique: true,
  },
  expires_in: {
    type: Number,
    required: [true, "Twitch expires in is required"],
  },
})

const TwitchAccess = mongoose.models.twitch_accesses || mongoose.model("twitch_accesses", twitchAccessSchema);

export default TwitchAccess;