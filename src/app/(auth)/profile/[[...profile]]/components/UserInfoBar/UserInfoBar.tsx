import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

import User from "@/db/models/user.model";
import type { TwitchUserInfo } from "./UserInfoBar.interfaces";
import styles from "./UserInfoBar.module.css";

const getTwitchUser = async () => {
	//set middleware to allow only for channel owner role
	const clerkUser = await currentUser(); // move to client axios interceptor
	const twitchUserId = clerkUser?.publicMetadata?.twitchUserId;
	const dbUserId = clerkUser?.publicMetadata.userId;
	const user = await User.findOne({ _id: dbUserId });

	if (!user || !twitchUserId) return;

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
		.catch((err) =>
			console.log(`Error with getting channel owner data: ${err}`),
		);
};

export default async function UserInfoBar() {
	let twichLink = "#";
	const channel: TwitchUserInfo = await getTwitchUser();

	if (channel) {
		twichLink = `https://dashboard.twitch.tv/u/${channel.display_name}/settings/channel/brand`;
	}

	return (
		<>
			{channel && (
				<div className={`card ${styles.card}`}>
					<div className={styles.line}>CHANNEL OWNER DATA</div>
					<div className={styles.channelInfo}>
						<div>
							<p>{channel.display_name || "No display name"}</p>
							<p>{`Followers: ${channel.followers || 0}`}</p>
							<p>{`Status: ${channel.status || "No status"}`}</p>
						</div>

						<div className={styles.avatarWrapper}>
							<div className={styles.avatar}>
								{channel.profile_image_url && (
									<Image
										className={styles.image}
										src={channel.profile_image_url}
										alt="channel avatar"
										width={100}
										height={100}
									/>
								)}
							</div>
							<Link href={twichLink} passHref={true}>
								<button type="button">Change Profile Avatar</button>
							</Link>
						</div>
					</div>
					<hr />
					<div>
						<p>{channel.description || "No description"}</p>
					</div>
					<hr />
				</div>
			)}
		</>
	);
}
