import { Protect, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

import styles from "./Navbar.module.css";
import { ROLE, roleList } from "@/constants/roles";
import Icon from "../Icon/Icon";
import TwitchButton from "../TwitchButton/TwitchButton";

export default function Navbar() {
	const { userId } = auth();

	const openTwitchFormModal = () => {};

	return (
		<nav className={styles.navbar}>
			<ul className={styles.navbarList}>
				{!userId ? (
					<>
						<div className={styles.item}>
							<Link href="/sign-in">
								<li>Login</li>
							</Link>
						</div>

						<div className={styles.item}>
							<Link href="/sign-up">
								<li>Sign Up</li>
							</Link>
						</div>
					</>
				) : (
					<>
						<Protect role={roleList[ROLE.channel_owner]}>
							<div className={styles.item}>
								<TwitchButton />
							</div>
						</Protect>

						<div className={styles.item}>
							<Link href="/profile">
								<li>Profile</li>
							</Link>
						</div>

						<li>
							<UserButton />
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}
