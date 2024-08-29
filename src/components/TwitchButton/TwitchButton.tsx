"use client";

import Link from "next/link";
import Icon from "../Icon/Icon";
import { usePathname } from "next/navigation";
import { Protect } from "@clerk/nextjs";

export default function TwitchButton() {
	const pathname = usePathname();
	const twitchConnect = localStorage.getItem("twitchConnect");
	const isTwitchConnected = twitchConnect && JSON.parse(twitchConnect);

	return (
		<>
			<Protect role="org:channel_owner">
				{!isTwitchConnected && (
					<Link href={`${pathname}/?modal=connectTwitch&show=true`}>
						<li
							style={{
								backgroundColor: "#a970ff",
							}}
						>
							<Icon name="wrench" size={16} />
							Connect Twitch
						</li>
					</Link>
				)}
			</Protect>
		</>
	);
}
