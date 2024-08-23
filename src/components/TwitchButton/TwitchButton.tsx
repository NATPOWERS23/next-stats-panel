"use client";

import Link from "next/link";
import Icon from "../Icon/Icon";
import { usePathname } from "next/navigation";

export default function TwitchButton() {
	const pathname = usePathname();

	return (
		<>
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
		</>
	);
}
