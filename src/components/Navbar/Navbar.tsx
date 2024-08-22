import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

import styles from "./Navbar.module.css";

export default function Navbar() {
	const { userId } = auth();

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
