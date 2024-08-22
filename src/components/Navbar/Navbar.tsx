import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default function Navbar() {
	const { userId } = auth();

	return (
		<nav
			style={{
				display: "flex",
				justifyContent: "flex-end",
				width: "100%",
				position: "fixed",
			}}
		>
			<ul
				style={{
					display: "flex",
					padding: "10px 10px 10px 20px",
					border: "solid white 2px",
					borderBottomLeftRadius: "20px",
					borderTopLeftRadius: "20px",
					borderRightColor: "transparent",
					gap: "10px",
					alignItems: "center",
				}}
			>
				{!userId ? (
					<>
						<Link href="/sign-in">
							<li>Login</li>
						</Link>
						<Link href="/sign-up">
							<li>Sign Up</li>
						</Link>
					</>
				) : (
					<>
						<Link href="/profile">
							<li>Profile</li>
						</Link>
						<li>
							<UserButton />
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}
