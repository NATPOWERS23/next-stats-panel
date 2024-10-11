"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Protect, useAuth, useOrganizationList, useUser } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar/Sidebar";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import styles from "./layout.module.css";

export default function CrmLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const router = useRouter();
	const { isLoaded: isLoadedAuth, has } = useAuth();
	const isChannelOwner = isLoadedAuth
		? has({ role: "org:channel_owner" })
		: false;

	const { isLoaded, setActive, userMemberships } = useOrganizationList({
		userMemberships: {
			infinite: true,
		},
	});

	const [isSelected, setIsSelected] = useState(true);
	const [intervalId, setIntervalId] = useState<any>(null);
	const [twitchToken, setTwitchToken] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const interval = setInterval(fetchUserMemberships, 10000);
		setIntervalId(interval);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		if (isSelected) {
			clearInterval(intervalId);
		}
	}, [isSelected, intervalId]);

	useEffect(() => {
		if (isChannelOwner) {
			console.log("Connectin to Twitch channel...");
			const url =
				typeof window !== "undefined" && window.location.href
					? window.location.href
					: "";
			const accessTokenRegex = /access_token=([^&]+)/;
			const accessTokenMatch = url.match(accessTokenRegex);

			if (accessTokenMatch) {
				const accessToken = accessTokenMatch[1];
				setTwitchToken(accessToken);
			} else {
				checkTwitchConnection();
			}
		}
	}, [isChannelOwner]);

	useEffect(() => {
		setUserTwitchToken(twitchToken);
	}, [twitchToken]);

	if (!isLoaded || loading) {
		return <CustomLoader />;
	}

	const checkTwitchConnection = async () => {
		setLoading(true);

		await axios
			.get("/api/user/twitchConnect")
			.then((response: any) => {
				localStorage.setItem(
					"twitchConnect",
					JSON.stringify(response.data.isConnected),
				);

				console.log(
					response.data.isConnected ? "Connection success" : "No connection",
				);
			})
			.catch((err) =>
				console.log(
					`Error with setting channel owner twitch access data: ${err}`,
				),
			)
			.finally(() => setLoading(false));
	};

	const setUserTwitchToken = async (twitchAccessToken: string) => {
		const twitchClientId = localStorage.getItem("twitchClientId") as string;

		if (!twitchAccessToken || !twitchClientId) return;

		setLoading(true);

		await axios
			.patch("/api/user/twitchConnect", {
				twitchAccessToken,
				twitchClientId,
			})
			.then(() => {
				localStorage.setItem("twitchConnect", JSON.stringify(true));
				console.log("Connection success");
				router.replace("/crm", undefined);
			})
			.catch((err) =>
				console.log(
					`Error with setting channel owner twitch access data: ${err}`,
				),
			)
			.finally(() => setLoading(false));
	};

	const handleReloadButton = () => {
		setIsSelected(false);
		fetchUserMemberships();
	};

	const fetchUserMemberships = async () => {
		console.log("fetching organizations...");
		userMemberships.fetchPage(userMemberships.page);
	};

	const handleSelectOrganization = (organization: string) => {
		setIsSelected(true);
		setActive({ organization });
	};

	return (
		<div style={{ display: "flex" }}>
			<Sidebar />
			<Protect
				condition={(has) =>
					has({ role: "org:admin" }) ||
					has({ role: "org:channel_owner" }) ||
					has({ role: "org:member" })
				}
				fallback={
					<div
						style={{
							width: "100%",
						}}
					>
						<p>You currently do not have access to the CRM tools.</p>
						<ul>
							{userMemberships.data?.map((mem) => (
								<li key={mem.id}>
									<span>{mem.organization.name}</span>
									<button
										type="button"
										onClick={() =>
											handleSelectOrganization(mem.organization.id)
										}
									>
										Select
									</button>
								</li>
							))}
						</ul>

						<button type="button" onClick={() => handleReloadButton()}>
							Reload organizations
						</button>
					</div>
				}
			>
				<main className={styles.main}>{children}</main>
			</Protect>
		</div>
	);
}
