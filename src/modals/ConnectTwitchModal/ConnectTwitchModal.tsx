"use client";

import axios from "axios";
import { useState } from "react";
import Button from "@/components/Button/Button";

export default function ConnectTwitchModal() {
	const BASE_URL = process.env.NEXT_PUBLIC_TWITCH_REDIRECT_URI;
	const SCOPE_CONFIG = "channel%3Amanage%3Apolls+channel%3Aread%3Apolls+openid";

	const [clientId, setClientId] = useState("");
	const [channelID, setChannelID] = useState("");

	const handleInputChange = async () => {
		localStorage.setItem("twitchClientId", clientId);
		localStorage.setItem("twitchChannelId", channelID);
	};

	return (
		<>
			<h3 className="modal-title">Channel Info</h3>
			<div className="modal-body">
				<input
					type="text"
					name="channel_id"
					placeholder="Channel ID"
					onChange={(e) => setChannelID(e.target.value)}
					value={channelID}
				/>

				<input
					type="text"
					name="client_id"
					placeholder="Twitch Client ID"
					onChange={(e) => setClientId(e.target.value)}
					value={clientId}
				/>

				{clientId && (
					<a
						href={`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${clientId}&redirect_uri=${BASE_URL}&scope=${SCOPE_CONFIG}&force_verify=true`}
					>
						<Button content="Connect with Twitch" onClick={handleInputChange} />
					</a>
				)}
			</div>
		</>
	);
}
