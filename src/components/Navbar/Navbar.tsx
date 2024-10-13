import { Protect, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

import { ROLE, roleList } from "@/constants/roles";
import TwitchButton from "../TwitchButton/TwitchButton";
import styles from "./Navbar.module.css";

export default function Navbar() {
	const { userId } = auth();

	const list = (
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
						<TwitchButton />
					</Protect>

					<li>
						<UserButton />
					</li>

					<div className={styles.item}>
						<Link href="/profile">
							<li>Profile</li>
						</Link>
					</div>
				</>
			)}
			<div className={styles.item}>
				<Link href="/client">
					<li>Client</li>
				</Link>
			</div>
		</ul>
	);

	return (
		<>
			<nav className="right-0 hidden sm:flex fixed z-10">{list}</nav>
			{/* mobile navbar */}
			<nav className="sm:hidden left-0 bottom-0 w-full fixed z-10">{list}</nav>
		</>
	);
}
