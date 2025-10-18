"use client";

import { type ReactNode } from "react";
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

const TwitchContext = createContext({
	twitchChannelConnected: false,
});

const TwitchProvider = ({
	children,
}: { children: ReactNode }) => {
	const [twitchChannelConnected, setTwitchChannelConnected] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const { user } = useUser();

	const saveTwitchAccessKeys = async () => {
		if (!isMounted || typeof window === 'undefined') return;
		
		const userId = user?.publicMetadata.userId;
		const channelId = localStorage.getItem("twitchChannelId");
		const twitchClientId = localStorage.getItem("twitchClientId");
		const twitchAccessToken = localStorage.getItem("twitchAccessToken");

		if (!userId || !channelId || !twitchClientId || !twitchAccessToken) {
			console.log("Missing db user id or twitch access data");
			return; // Early exit if data is missing
		}

		const updatedUserData = {
			twitchClientId,
			twitchUserId: channelId,
			twitchAccessToken,
		};

		try {
			const response = await axios.put(`/api/users/${userId}`, updatedUserData);
			const {
				twitchAccessToken: updatedAccessToken,
				twitchClientId,
				twitchUserId,
			} = response.data;

			if (updatedAccessToken && twitchClientId && twitchUserId) {
				setTwitchChannelConnected(true);
			}

			console.log("User twitch access data updated successfully");
		} catch (error) {
			console.error("Error updating user:", error);
		}
	};

	const getTwitchAccessKeys = async () => {
		const userId = user?.publicMetadata.userId;

		if (!userId) {
			console.log("Missing user data");
			return; // Early exit if user data is missing
		}

		try {
			const response = await axios.get(`/api/users/${userId}/twitchConnect`);
			if (response.data.hasTwitchAccessData) {
				setTwitchChannelConnected(true);
			}
		} catch (error) {
			console.error("Error fetching user:", error);
		}
	};

	const connectTwitch = async () => {
		if (!isMounted || typeof window === 'undefined') return;
		
		console.log("Connecting to Twitch channel...");
		const url = window.location.href;
		const accessTokenRegex = /access_token=([^&]+)/;
		const accessTokenInUrl = url.match(accessTokenRegex);

		if (accessTokenInUrl) {
			localStorage.setItem("twitchAccessToken", accessTokenInUrl[1]);
			saveTwitchAccessKeys();
		} else {
			getTwitchAccessKeys();
		}
	};

	useEffect(() => {
		setIsMounted(true);
		
		// Only run client-side code after component has mounted
		const timer = setTimeout(() => {
			connectTwitch();
		}, 100);
		
		return () => clearTimeout(timer);
	}, []);

	return (
		<TwitchContext.Provider
			value={{
				twitchChannelConnected,
			}}
		>
			{children}
		</TwitchContext.Provider>
	);
};

export const useTwitch = () => useContext(TwitchContext);

export default TwitchProvider;
