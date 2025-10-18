import React from "react";
import axios from "axios";
import { currentUser } from "@clerk/nextjs/server";

import User from "@/db/models/user.model";
import { connect } from "@/db/mongo-db-config";
import styles from "./UserInfoBar.module.css";
import Avatar from "@/components/Avatar/Avatar";
import LinkButton from "@/components/LinkButton/LinkButton";
import type { TwitchUserInfo } from "@/types/user-info-bar.interfaces";

const getTwitchUser = async () => {
  try {
    await connect();
    
    const clerkUser = await currentUser();
    const twitchUserId = clerkUser?.publicMetadata?.twitchUserId;
    const dbUserId = clerkUser?.publicMetadata.userId;
    
    if (!dbUserId) {
      console.log('No database user ID found');
      return null;
    }
    
    const user = await User.findOne({ _id: dbUserId });
    
    if (!user || !twitchUserId) {
      console.log('No user found in database or no Twitch user ID');
      return null;
    }

    return await axios
      .get(`https://api.twitch.tv/helix/users?id=${twitchUserId}`, {
        headers: {
          "Client-Id": user.twitchClientId as string,
          Authorization: `Bearer ${user.twitchAccessToken}`,
        },
      })
      .then((response) => {
        return response.data.data[0];
      })
      .catch((err) => {
        console.log(`Error with getting channel owner data: ${err}`);
        return null;
      });
  } catch (error) {
    console.error('Error in getTwitchUser:', error);
    return null;
  }
};

export default async function UserInfoBar() {
  let twitchLink = "#";
  let channel: TwitchUserInfo | null = null;
  
  try {
    channel = await getTwitchUser();
  } catch (error) {
    console.error('Failed to load Twitch user data:', error);
  }

  if (channel) {
    twitchLink = `https://dashboard.twitch.tv/u/${channel.display_name}/settings/channel/brand`;
  }

  return (
    <>
      {channel ? (
        <div className={`card ${styles.card}`}>
          <div className={styles.line}>CHANNEL OWNER DATA</div>
          <div className={styles.channelInfo}>
            <div>
              <p>{channel.display_name || "No display name"}</p>
            </div>

            <div className={styles.avatarWrapper}>
              <Avatar src={channel.profile_image_url} sizes={100} />
              <LinkButton content="Change Profile Avatar" href={twitchLink} />
            </div>
          </div>
          <hr />
          <div>
            <p>{channel.description || "No description"}</p>
          </div>
          <hr />
        </div>
      ) : (
        <div className={`card ${styles.card}`}>
          <div className={styles.line}>CHANNEL OWNER DATA</div>
          <p>Unable to load Twitch channel data. Please ensure MongoDB is connected and Twitch integration is configured.</p>
        </div>
      )}
    </>
  );
}
