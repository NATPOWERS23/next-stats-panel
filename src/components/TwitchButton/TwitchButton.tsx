"use client";

import Link from "next/link";
import Icon from "../Icon/Icon";
import { usePathname } from "next/navigation";
import { useTwitch } from "@/contexts/useTwitch";

export default function TwitchButton() {
	const pathname = usePathname();
	const { twitchChannelConnected } = useTwitch();

	return (
		<>
			{!twitchChannelConnected && (
				<Link href={`${pathname}/?modal=connectTwitch&show=true`}>
					<div className="bg-twitch flex gap-2 px-2 py-1 items-center rounded">
						<Icon name="wrench" size={16} />
						Connect Twitch
					</div>
				</Link>
			)}
		</>
	);
}
