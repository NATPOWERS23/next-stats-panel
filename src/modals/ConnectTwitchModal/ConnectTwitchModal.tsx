"use client";

import { type ChangeEvent, useState } from "react";

export default function ConnectTwitchModal() {
	const BASE_URL = process.env.NEXT_PUBLIC_TWITCH_REDIRECT_URI;
	const SCOPE_CONFIG = "channel%3Amanage%3Apolls+channel%3Aread%3Apolls+openid";

	const [clientId, setClientId] = useState("");

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setClientId(e.target.value);
		localStorage.setItem("twitchClientId", e.target.value);
	};

	return (
		<>
			<h3 className="modal-title">Channel Info</h3>
			<div className="modal-body">
				<input
					type="text"
					name="client_id"
					placeholder="Client ID"
					onChange={(e) => handleInputChange(e)}
					value={clientId}
				/>

				{clientId && (
					<a
						href={`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${clientId}&redirect_uri=${BASE_URL}&scope=${SCOPE_CONFIG}&force_verify=true`}
					>
						Connect with Twitch
					</a>
				)}
			</div>
		</>
	);
}
