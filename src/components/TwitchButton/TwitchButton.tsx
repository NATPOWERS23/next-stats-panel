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
					<div className="border-twitch hover:border-white border-2 flex gap-2 px-3 py-0.5 items-center justify-center rounded-2large">
						<Icon name="wrench" size={16} />
						Connect Twitch
					</div>
				</Link>
			)}
		</>
	);
}
