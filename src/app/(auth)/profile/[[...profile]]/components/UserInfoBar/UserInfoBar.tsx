import React from "react";
import axios from "axios";
import { currentUser } from "@clerk/nextjs/server";

import User from "@/db/models/user.model";
import Avatar from "@/components/Avatar/Avatar";
import LinkButton from "@/components/LinkButton/LinkButton";
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
				<div className="card max-w-full sm:max-w-96">
					<div className="bg-twitch width-full text-center m-0 py-2">
						CHANNEL OWNER DATA
					</div>
					<div className="flex justify-between items-center gap-2 p-2">
						<div>
							<p>{channel.display_name || "No display name"}</p>
						</div>

						<div className="gap-2 flex items-center justify-center flex-col">
							<Avatar src={channel.profile_image_url} sizes={100} />
							<LinkButton content="Change Profile Avatar" href={twichLink} />
						</div>
					</div>
					<hr />
					<div className="p-2">
						<p>{channel.description || "No description"}</p>
					</div>
					<hr />
				</div>
			)}
		</>
	);
}
